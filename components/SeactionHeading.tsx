"use client";
import React from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
};

const SeactionHeading = ({ children }: SectionHeadingProps) => {
  //   console.log("children", children);
  return <h2 className="mb-8 text-3xl font-medium capitalize">{children}</h2>;
};

export default SeactionHeading;
