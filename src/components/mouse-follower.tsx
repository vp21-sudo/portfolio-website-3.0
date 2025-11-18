import { useEffect, useRef, useState } from "react";

export default function MouseFollower() {
  const [mouseLocation, setMouseLocation] = useState({ x: 0, y: 0 });
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = followerRef.current;
    if (!el) return;

    const updateMouseLoc = (e: MouseEvent) => {
      setMouseLocation({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateMouseLoc);

    el.animate(
      [{ left: `${mouseLocation.x}px`, top: `${mouseLocation.y}px` }],
      { duration: 3000, fill: "forwards", easing: "ease-out" },
    );

    return () => window.removeEventListener("mousemove", updateMouseLoc);
  }, [mouseLocation]);

  return (
    <>
      <div
        id="follower"
        ref={followerRef}
        className="fixed left-0 top-0 pointer-events-none"
      />
      <div id="blur" className="fixed inset-0 pointer-events-none" />
    </>
  );
}
