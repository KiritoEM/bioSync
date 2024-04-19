import { Ititle } from "@/utils/interfaces";
import Head from "next/head";

const MetaTitle = ({ title }: Ititle): JSX.Element => {
  return (
    <Head>
      <title>{title}</title>
    </Head>
  );
};

export default MetaTitle;
