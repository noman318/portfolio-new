"use client";
import Image from "next/image";
import React from "react";

const Intro = () => {
  return (
    <section>
      <div className="flex items-center justify-center">
        <div>
          <Image
            src={
              "https://www.pngarts.com/files/5/Cartoon-Avatar-Transparent-Image.png"
            }
            alt="avatar_logo"
            width={"192"}
            height={"192"}
            quality={"95"}
            priority={true}
            className="h-24 w-24 rounded-full border-white border-[0.35rem] object-cover shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Intro;
