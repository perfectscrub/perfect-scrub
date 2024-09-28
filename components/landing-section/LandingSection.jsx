import React from 'react'
import MonogramOverlay from "../monogram-overlay/MonogramOverlay"

const LandingSection = ({bgImg, title, type}) => {
  return (
    <section className={`${bgImg} flex`}>
          <div className="z-20 self-center md:self-start md:pl-16 px-2">
            <h2 className="text-xs lg:text-base uppercase font-bold mb-2 lg:mb-4 text-gray-100">
              {type}
            </h2>
            <h1 className="font-semibold text-4xl lg:text-[56px] text-gray-50 mb-8">
              {title}
            </h1>
          </div>
          {/* Monogram Overlay */}
          <MonogramOverlay />
        </section>
  )
}

export default LandingSection;