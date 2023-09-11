import React, { useEffect } from "react";
import Image from "next/image";

import "../styles/card.css";

const Card = ({
  name,
  img,
  spec,
  batch,
}: {
  name: string;
  img: string;
  spec: string;
  batch: string;
}) => {
  return (
    <>
      <div className="card relative" >
        <div className="cardbg absolute w-full h-full">
          <Image alt="" src={img} fill className=""></Image>
        </div>
        <div className="border">
          <h2>{spec}</h2>
          <h4>{batch}</h4>
          <div className="icons">
            {name
              .split(" ")[0]
              .split("")
              .map((item, ind) => {
                return (
                  <i className="font-FiraCode font-medium text-lg" key={ind}>
                    {item}
                  </i>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
