"use client";

import { BtnList } from "@/app/data";
import NavButton from "./NavButton";

const Navigation = () => {
  const incrementAngle = 360 / BtnList.length;

  return (
    <div className="w-full fixed h-screen flex items-center justify-center">
      <div className="flex items-center justify-center relative w-max animate-spin-slow hover:pause group">
        {BtnList.map((btn, index) => {
          //converting angle to radian
          const radianAngle = (index * incrementAngle * Math.PI) / 180;
          const radius = "calc(20vw - 1rem)";
          const x = `calc(${radius}*${Math.cos(radianAngle)})`;
          const y = `calc(${radius}*${Math.sin(radianAngle)})`;
          return <NavButton key={btn.label} x={x} y={y} {...btn} />;
        })}
      </div>
    </div>
  );
};

export default Navigation;
