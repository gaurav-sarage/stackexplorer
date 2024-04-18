import React from "react";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import Categories from "./categories";
import Hero from "./hero";

export default function HomePage() {
  return (
    <>
      <div className="flex-1 pb-24">
        <MaxWidthWrapper>
          <Hero />
          <Categories />
        </MaxWidthWrapper>
      </div>
    </>
  );
};