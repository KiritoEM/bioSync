import Earth from "@/components/earth/Earth";
import LandingLayout from "@/components/Layouts/LandingLayout";
import Logo from "@/components/Logo";
import MetaTitle from "@/components/meta/MetaTitle";
import LandingAbout from "@/components/sections/landing/LandingAbout";
import LandingCommunity from "@/components/sections/landing/LandingCommunity";
import LandingFeatures from "@/components/sections/landing/LandingFeatures";
import LandingHero from "@/components/sections/landing/LandingHero";
import React, { Fragment } from "react";

const landing = (): JSX.Element => {
  return (
    <Fragment>
      <MetaTitle title="Welcome to BioSync" />
      <section id="landing">
        <LandingLayout>
          <LandingHero />
          <LandingAbout />
          <LandingFeatures />
          <LandingCommunity />
          <section className="landing__earth">
            <Earth />
          </section>
          <section className="footer">
            <Logo />
          </section>
        </LandingLayout>
      </section>
    </Fragment>
  );
};

export default landing;
