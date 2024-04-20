import LandingLayout from "@/components/Layouts/LandingLayout";
import MetaTitle from "@/components/meta/MetaTitle";
import LandingAbout from "@/components/sections/landing/LandingAbout";
import LandingCommunity from "@/components/sections/landing/LandingCommunity";
import LandingFeatures from "@/components/sections/landing/LandingFeatures";
import LandingHero from "@/components/sections/landing/LandingHero";
import React, { Fragment } from "react";

const landing = (): JSX.Element => {
  return (
    <Fragment>
      <MetaTitle title="Bienvenue sur BioSync" />
      <section id="landing">
        <LandingLayout>
          <LandingHero />
          <LandingAbout />
          <LandingFeatures />
          <LandingCommunity />
        </LandingLayout>
      </section>
    </Fragment>
  );
};

export default landing;
