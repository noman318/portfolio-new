"use client";
import React from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
};

const SectionHeading = ({ children }: SectionHeadingProps) => {
  //   console.log("children", children);
  return (
    <h2 className="mb-8 text-3xl font-medium capitalize text-center">
      {children}
    </h2>
  );
};

export default SectionHeading;
