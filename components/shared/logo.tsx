"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";

const Logo = () => {
  const aRef = useRef(null);
  const bRef = useRef(null);
  const dRef = useRef(null);
  const uRef = useRef(null);
  const mRef = useRef(null);
  const oRef = useRef(null);
  const aaRef = useRef(null);
  const rRef = useRef(null);
  const xRef = useRef(null);
  const nRef = useRef(null);
  const boxRef = useRef(null);

  useEffect(() => {
    const a = aRef.current;
    const b = bRef.current;
    const d = dRef.current;
    const r = rRef.current;
    const u = uRef.current;
    const aa = aaRef.current;
    const x = xRef.current;
    const m = mRef.current;
    const o = oRef.current;
    const n = nRef.current;
    const box = boxRef.current;

    gsap.set([a, b, d, u, r, x, aa, m, o, n], { opacity: 0.2 });

    const timeline = gsap.timeline();

    timeline
      .to(a, { opacity: 1, rotationX: "-360", duration: 0.5 })
      .to(b, { opacity: 1, rotationX: -360, duration: 0.5 })
      .to(d, { opacity: 1, rotationX: -360, duration: 0.5 })
      .to(u, { opacity: 1, rotationX: -360, duration: 0.5 })
      .to(r, { opacity: 1, rotationX: -360, duration: 0.5 })
      .to(aa, { opacity: 1, rotationX: -360, duration: 0.5 })
      .to(x, { opacity: 1, rotationX: -360, duration: 0.5 })
      .to(m, { opacity: 1, rotationX: -360, duration: 0.5 })
      .to(o, { opacity: 1, rotationX: -360, duration: 0.5 })
      .to(n, { opacity: 1, rotationX: -360, duration: 0.5 });

    // Hover animatsiyasi
    //@ts-ignore
    box.addEventListener("mouseenter", () => {
      timeline.play(); // animatsiyani boshlash
    });
    //@ts-ignore
    box.addEventListener("mouseleave", () => {
      timeline.reverse(); // animatsiyani orqaga qaytarish
    });
    //@ts-ignore
    a.addEventListener("mouseleave", () => {
      timeline.reverse(); // animatsiyani orqaga qaytarish
    });
  }, []);

  return (
    <div className="flex font-bold text-inherit" ref={boxRef}>
      <div ref={aRef}>A</div>
      <div ref={bRef}>B</div>
      <div ref={dRef}>D</div>
      <div ref={uRef}>U</div>
      <div ref={rRef}>R</div>
      <div ref={aaRef}>A</div>
      <div ref={xRef}>X</div>
      <div ref={mRef}>M</div>
      <div ref={oRef}>O</div>
      <div ref={nRef}>N</div>
    </div>
  );
};

export default Logo;
