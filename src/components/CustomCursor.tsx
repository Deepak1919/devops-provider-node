import { useEffect, useRef, useState } from "react";

const INTERACTIVE_SELECTOR = [
  "a",
  "button",
  "[role='button']",
  "input[type='button']",
  "input[type='submit']",
  "label[for]",
  "select",
  "summary",
].join(", ");

const CustomCursor = () => {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const trailRef = useRef<HTMLDivElement | null>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const trailRefPosition = useRef({ x: 0, y: 0 });
  const hoveredRef = useRef(false);
  const pressedRef = useRef(false);
  const animationFrameRef = useRef<number>();

  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [pressed, setPressed] = useState(false);

  useEffect(() => {
    const pointerMedia = window.matchMedia("(pointer: fine)");
    const motionMedia = window.matchMedia("(prefers-reduced-motion: reduce)");

    const syncEnabled = () => {
      setEnabled(pointerMedia.matches && !motionMedia.matches);
    };

    syncEnabled();
    pointerMedia.addEventListener("change", syncEnabled);
    motionMedia.addEventListener("change", syncEnabled);

    return () => {
      pointerMedia.removeEventListener("change", syncEnabled);
      motionMedia.removeEventListener("change", syncEnabled);
    };
  }, []);

  useEffect(() => {
    hoveredRef.current = hovered;
  }, [hovered]);

  useEffect(() => {
    pressedRef.current = pressed;
  }, [pressed]);

  useEffect(() => {
    if (!enabled) {
      delete document.documentElement.dataset.cursor;
      return;
    }

    document.documentElement.dataset.cursor = "enhanced";

    const dot = dotRef.current;
    const trail = trailRef.current;

    const setDotTransform = (x: number, y: number) => {
      if (!dot) {
        return;
      }

      const scale = pressedRef.current ? 0.86 : hoveredRef.current ? 1.15 : 1;
      dot.style.transform = `translate3d(${x - 7}px, ${y - 7}px, 0) scale(${scale})`;
    };

    const animateTrail = () => {
      const nextX = trailRefPosition.current.x + (mouseRef.current.x - trailRefPosition.current.x) * 0.18;
      const nextY = trailRefPosition.current.y + (mouseRef.current.y - trailRefPosition.current.y) * 0.18;

      trailRefPosition.current = { x: nextX, y: nextY };

      if (trail) {
        const scale = pressedRef.current ? 0.92 : hoveredRef.current ? 1.35 : 1;
        trail.style.transform = `translate3d(${nextX - 19}px, ${nextY - 19}px, 0) scale(${scale})`;
      }

      animationFrameRef.current = window.requestAnimationFrame(animateTrail);
    };

    const updateHoverState = (target: EventTarget | null) => {
      const isInteractive = target instanceof Element && Boolean(target.closest(INTERACTIVE_SELECTOR));
      if (isInteractive !== hoveredRef.current) {
        hoveredRef.current = isInteractive;
        setHovered(isInteractive);
      }
    };

    const handleMove = (event: MouseEvent) => {
      mouseRef.current = { x: event.clientX, y: event.clientY };
      setDotTransform(event.clientX, event.clientY);
      updateHoverState(event.target);

      if (!visible) {
        setVisible(true);
        trailRefPosition.current = { x: event.clientX, y: event.clientY };
      }
    };

    const handleEnter = () => setVisible(true);
    const handleLeave = () => setVisible(false);
    const handleDown = () => setPressed(true);
    const handleUp = () => setPressed(false);

    animationFrameRef.current = window.requestAnimationFrame(animateTrail);

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseenter", handleEnter);
    window.addEventListener("mouseleave", handleLeave);
    window.addEventListener("mousedown", handleDown);
    window.addEventListener("mouseup", handleUp);

    return () => {
      delete document.documentElement.dataset.cursor;

      if (animationFrameRef.current) {
        window.cancelAnimationFrame(animationFrameRef.current);
      }

      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseenter", handleEnter);
      window.removeEventListener("mouseleave", handleLeave);
      window.removeEventListener("mousedown", handleDown);
      window.removeEventListener("mouseup", handleUp);
    };
  }, [enabled, visible]);

  if (!enabled) {
    return null;
  }

  return (
    <>
      <div
        ref={trailRef}
        aria-hidden="true"
        className={[
          "site-cursor-trail",
          visible ? "is-visible" : "",
          hovered ? "is-hovered" : "",
          pressed ? "is-pressed" : "",
        ]
          .filter(Boolean)
          .join(" ")}
      />
      <div
        ref={dotRef}
        aria-hidden="true"
        className={[
          "site-cursor-dot",
          visible ? "is-visible" : "",
          hovered ? "is-hovered" : "",
          pressed ? "is-pressed" : "",
        ]
          .filter(Boolean)
          .join(" ")}
      />
    </>
  );
};

export default CustomCursor;
