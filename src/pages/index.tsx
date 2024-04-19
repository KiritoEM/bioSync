import LandingLayout from "@/components/Layouts/LandingLayout";
import MetaTitle from "@/components/meta/MetaTitle";
import React, { Fragment } from "react";

const landing = (): JSX.Element => {
  return (
    <Fragment>
      <MetaTitle title="Bienvenue sur BioSync" />
      <section id="landing">
        <LandingLayout>
          <h1></h1>
        </LandingLayout>
      </section>
    </Fragment>
  );
};

export default landing;
