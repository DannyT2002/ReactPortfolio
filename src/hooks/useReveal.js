import { useEffect, useRef } from 'react';

/**
 * Adds the `is-visible` class to an element the first time it scrolls
 * into view, driving the CSS scroll-reveal animation. Optionally staggers
 * direct children by `stagger` ms for a cascading effect.
 */
export default function useReveal({ stagger = 0, threshold = 0.15 } = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const targets = stagger
      ? Array.from(node.children)
      : [node];

    targets.forEach((el) => el.classList.add('reveal'));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          if (stagger) {
            const i = targets.indexOf(el);
            el.style.transitionDelay = `${i * stagger}ms`;
          }
          el.classList.add('is-visible');
          observer.unobserve(el);
        });
      },
      { threshold }
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [stagger, threshold]);

  return ref;
}
