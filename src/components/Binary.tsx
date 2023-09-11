import React, { useEffect, useRef, useState } from "react";

const Binary = () => {
  const [show, setShow] = useState(true);
  const [cube, setCube] = useState(0);
  const binref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setCube(
      Math.floor(
        (binref.current!.clientHeight * binref.current!.clientWidth) / 400
      )
    );
  }, [binref]);

  return show ? (
    <div
      ref={binref}
      className="w-full h-full absolute overflow-hidden flex flex-wrap items-center justify-center"
    >
      {Array(cube)
        .fill("")
        .map((e, ind) => {
          return <Digit key={ind} />;
        })}
    </div>
  ) : (
    <></>
  );
};

export default Binary;

const Digit = () => {
  const [render, setRender] = useState(false);
  const random = (): number => {
    return Math.random() < 0.5 ? 0 : 1;
  };

  useEffect(() => {
    setInterval(() => {
      setRender(!render);
    }, 2000);
  });

  return (
    <span
      className={`w-[20px] h-[20px] flex items-center justify-center aspect-square rounded-sm text-white text-opacity-10 ${
        random() ? "text-opacity-30" : ""
      } hover:text-opacity-95 duration-[2s] m-[2px] select-none hover:duration-0`}
    >
      <p className="pointer-events-none">{random()}</p>
    </span>
  );
};
