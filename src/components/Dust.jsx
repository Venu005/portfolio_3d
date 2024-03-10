"use client";

import { useEffect, useState } from "react";

const createDust = () => ({
  id: Math.random(),
  top: `${Math.random() * 100}%`,
  left: `${Math.random() * 100}%`,
  duration: `${Math.random() * 5 + 5}s`,
});

const Dust = () => {
  const [dust, setDust] = useState([]);
  useEffect(() => {
    const addDust = () => {
      const newDust = createDust();
      setDust((currentDust) => [...currentDust.slice(-14), newDust]);
    };
    const interval = setInterval(addDust, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-50 overflow-hidden">
      {dust.map((d) => {
        return (
          <div
            key={d.id}
            className="absolute w-[5px] h-[10px] bg-stone-600 opacity-20"
            style={{
              top: d.top,
              left: d.left,
              animation: `move ${d.duration} linear infinite`,
            }}
          >
            {" "}
          </div>
        );
      })}
    </div>
  );
};

export default Dust;
