"use client";

import { useState } from "react";
import { isImageReady, property } from "@/config/property";
import { Lightbox } from "@/components/Lightbox";
import { Photo } from "@/components/Photo";
import { SectionTrack } from "@/components/SectionTrack";

export function FloorPlans() {
  const [index, setIndex] = useState<number | null>(null);

  return (
    <SectionTrack event="view_floorplans">
      <section className="section plans" id="plans">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Планировки</p>
            <h2>Четыре этажа — много пространства для жизни</h2>
            <p className="section-lead">
              Цокольный, первый, второй и верхний этажи. Планы открываются
              крупнее.
            </p>
          </div>
          <div className="plans-grid">
            {property.floorPlans.map((plan, planIndex) => (
              <button
                key={plan.id}
                type="button"
                className="plan-card"
                onClick={() => setIndex(planIndex)}
                aria-label={`Открыть планировку: ${plan.title}`}
              >
                <Photo
                  src={plan.src}
                  alt={plan.alt}
                  width={plan.width}
                  height={plan.height}
                  available={isImageReady(plan)}
                  label={plan.title}
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
                <span className="plan-title">{plan.title}</span>
              </button>
            ))}
          </div>
        </div>
        <Lightbox
          items={property.floorPlans.map((plan) => ({
            src: plan.src,
            alt: plan.alt,
            width: plan.width,
            height: plan.height,
            available: isImageReady(plan),
            label: plan.title,
            objectFit: "contain" as const,
          }))}
          index={index}
          onClose={() => setIndex(null)}
          onIndexChange={setIndex}
        />
      </section>
    </SectionTrack>
  );
}
