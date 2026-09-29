import { useEffect } from "react";

// Animate opacity only on section roots: transforms here would interfere with
// sticky positioning and soften the screenshots inside the existing carousel.
export default function SectionAnimations() {
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const animations = new Map();
    const revealed = new WeakSet();
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(({ target, isIntersecting }) => {
        if (!isIntersecting || revealed.has(target)) return;
        revealed.add(target);
        observer.unobserve(target);
        if (preference.matches) return;
        animations.get(target)?.cancel();
        animations.set(target, target.animate(
          [{ opacity: 0.25 }, { opacity: 1 }],
          { duration: 550, easing: "ease-out" },
        ));
      });
    }, { threshold: 0, rootMargin: "-60px 0px -30px 0px" });
    document.querySelectorAll(".bizone-landing section, .bizone-landing [data-section-enter]")
      .forEach((element) => observer.observe(element));

    // Reveal individual text blocks and cards as they enter the viewport.
    // `translate` is separate from Framer Motion's transform, so existing
    // hover effects and the hero text loop keep their own animation values.
    const delays = new Map();
    const contentObserver = new IntersectionObserver((entries) => {
      entries.forEach(({ target, isIntersecting }) => {
        if (!isIntersecting || revealed.has(target)) return;
        revealed.add(target);
        contentObserver.unobserve(target);
        if (preference.matches) return;
        animations.get(target)?.cancel();
        const animation = target.animate(
          [{ opacity: 0, translate: "0 22px" }, { opacity: 1, translate: "0 0" }],
          { duration: 600, delay: delays.get(target) || 0, easing: "cubic-bezier(0.22, 1, 0.36, 1)", fill: "backwards" },
        );
        animations.set(target, animation);
        animation.onfinish = () => {
          animation.cancel();
          if (animations.get(target) === animation) animations.delete(target);
        };
      });
    }, { threshold: 0, rootMargin: "-60px 0px -30px 0px" });
    document.querySelectorAll(".bizone-landing section, .bizone-landing [data-section-enter]")
      .forEach((section) => {
        let index = 0;
        section.querySelectorAll("h1, h2, h3, p, [data-entry]").forEach((element) => {
          // Role cards and carousel slides already have entry/movement effects.
          // Card text comes in with its card instead of animating twice.
          if (element.closest(".role-card-zoom, .dashboard-carousel") ||
              element.parentElement.closest("[data-entry]")) return;
          delays.set(element, (index++ % 4) * 60);
          contentObserver.observe(element);
        });
      });
    const cancel = () => { if (preference.matches) animations.forEach(animation => animation.cancel()); };
    preference.addEventListener("change", cancel);
    return () => {
      observer.disconnect();
      contentObserver.disconnect();
      animations.forEach(animation => animation.cancel());
      preference.removeEventListener("change", cancel);
    };
  }, []);
  return null;
}
