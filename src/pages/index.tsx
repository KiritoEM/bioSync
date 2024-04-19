import MetaTitle from "@/components/meta/MetaTitle";
import React, { Fragment } from "react";

const landing = (): JSX.Element => {
  return (
    <Fragment>
      <MetaTitle title="Bienvenue sur BioSync" />
      <section id="landing"></section>
    </Fragment>
  );
};

export default landing;
