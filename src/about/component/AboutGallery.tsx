"use client";

import { useEffect, useRef, useState, MouseEvent } from "react";
import Image from "next/image";

const IMAGES = [
  "/about/dummy1.jpeg",
  "/about/dummy2.jpeg",
  "/about/dummy3.jpeg",
  "/about/dummy4.jpeg",
  "/about/dummy5.jpeg",
];

const LOOP_IMAGES = [...IMAGES, ...IMAGES];

const AboutGallery = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollStart, setScrollStart] = useState(0);

  // auto-scroll
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let frameId: number;
    const speed = 0.45;

    const step = () => {
      if (!isDragging) {
        el.scrollLeft += speed;

        // kalau udah sampai ujung kanan, balik ke awal
        if (el.scrollLeft >= el.scrollWidth - el.clientWidth) {
          el.scrollLeft = 0;
        }
      }
      frameId = requestAnimationFrame(step);
    };

    frameId = requestAnimationFrame(step);

    return () => cancelAnimationFrame(frameId);
  }, [isDragging]);

  const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    setIsDragging(true);
    setStartX(e.clientX);
    setScrollStart(containerRef.current.scrollLeft);
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !containerRef.current) return;
    e.preventDefault();
    const walk = e.clientX - startX;
    containerRef.current.scrollLeft = scrollStart - walk;
  };

  const stopDragging = () => {
    setIsDragging(false);
  };

  // ✏️ di sini teksnya sekarang hard-coded
  const heading = "About Us";
  const intro =
    "Tarumanagara Enterprise is a creative and technology-driven studio that collaborates with young entrepreneurs to build real, scalable business solutions.";
  const galleryAlt = "Tarumanagara Enterprise activity gallery";

  return (
    <section className="px-5 md:px-8 lg:px-10 pb-12 mt-10">
      <div className="mx-auto max-w-6xl">
        <header className="mb-4">
          <h2 className="text-[32px] md:text-[40px] font-semibold">
            {heading}
          </h2>
          <p className="mt-1 text-sm md:text-base text-neutral-700 max-w-3xl">
            {intro}
          </p>
        </header>

        <div
          ref={containerRef}
          className="relative mt-6 flex gap-5 overflow-x-auto pb-4 cursor-grab select-none"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseLeave={stopDragging}
          onMouseUp={stopDragging}
        >
          {LOOP_IMAGES.map((src, idx) => (
            <div
              key={`${src}-${idx}`}
              className="min-w-[220px] sm:min-w-[260px] md:min-w-[280px] h-[180px] sm:h-[200px] md:h-[210px] rounded-[16px] bg-neutral-200 overflow-hidden flex-shrink-0"
            >
              <div className="relative w-full h-full">
                <Image
                  src={src}
                  alt={galleryAlt}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutGallery;
