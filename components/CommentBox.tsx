'use client';

import { useEffect, useRef } from 'react';
import Script from 'next/script';

interface CommentBoxProps {
  projectId?: string;
  className?: string;
  boxId?: string;
}

export default function CommentBox({
  projectId = '5747584295501824-proj',
  className = '',
  boxId = 'commentbox',
}: CommentBoxProps) {
  const isInitializedRef = useRef(false);
  const cleanupRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    let isMounted = true;

    // Custom postMessage listener to guarantee iframe height adjusts for modals
    const handleMessage = (event: MessageEvent) => {
      if (
        typeof event.data === 'string' &&
        (event.origin.includes('commentbox.io') || event.origin.includes('localhost'))
      ) {
        try {
          const data = JSON.parse(event.data);
          if (data.event === 'resize' && typeof data.payload === 'number') {
            const iframe = document.querySelector(
              `#${boxId} iframe, .commentbox iframe`
            ) as HTMLIFrameElement;
            if (iframe) {
              // Add a small 24px safety buffer for shadows and bottom margins
              const targetHeight = Math.max(data.payload + 24, 180);
              iframe.style.setProperty('height', `${targetHeight}px`, 'important');
            }
          }
        } catch {
          // ignore non-json messages
        }
      }
    };

    window.addEventListener('message', handleMessage);

    const init = () => {
      if (!isMounted || isInitializedRef.current) return;
      if (typeof window !== 'undefined' && typeof (window as any).commentBox === 'function') {
        const targetEl = document.getElementById(boxId) || document.querySelector('.commentbox');
        if (targetEl && targetEl.getAttribute('data-loaded')) {
          return;
        }
        try {
          isInitializedRef.current = true;
          const cleanup = (window as any).commentBox(projectId, {
            className: 'commentbox',
            defaultBoxId: boxId,
          });
          if (typeof cleanup === 'function') {
            cleanupRef.current = cleanup;
          }
        } catch (err) {
          console.error('CommentBox init error:', err);
        }
      }
    };

    if (typeof window !== 'undefined' && typeof (window as any).commentBox === 'function') {
      init();
    } else if (typeof document !== 'undefined') {
      const existingScript = document.querySelector('script[src*="commentBox.min.js"]');
      if (existingScript) {
        existingScript.addEventListener('load', init);
      }
    }

    return () => {
      isMounted = false;
      window.removeEventListener('message', handleMessage);
      if (cleanupRef.current) {
        cleanupRef.current();
        cleanupRef.current = null;
      }
    };
  }, [projectId, boxId]);

  return (
    <div className={`w-full overflow-visible ${className}`}>
      <Script
        src="https://unpkg.com/commentbox.io/dist/commentBox.min.js"
        strategy="afterInteractive"
        onLoad={() => {
          if (!isInitializedRef.current && typeof window !== 'undefined' && typeof (window as any).commentBox === 'function') {
            const targetEl = document.getElementById(boxId) || document.querySelector('.commentbox');
            if (targetEl && !targetEl.getAttribute('data-loaded')) {
              try {
                isInitializedRef.current = true;
                const cleanup = (window as any).commentBox(projectId, {
                  className: 'commentbox',
                  defaultBoxId: boxId,
                });
                if (typeof cleanup === 'function') {
                  cleanupRef.current = cleanup;
                }
              } catch (err) {
                console.error('CommentBox onLoad init error:', err);
              }
            }
          }
        }}
      />
      <style>{`
        .commentbox {
          width: 100% !important;
          overflow: visible !important;
        }
        .commentbox iframe {
          width: 100% !important;
          min-width: 100% !important;
          border: 0 !important;
          display: block !important;
          transition: height 0.25s ease-out;
        }
      `}</style>
      <div className="commentbox" id={boxId} />
    </div>
  );
}
