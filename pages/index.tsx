import { NextPageContext } from "next";
import { getSession } from "next-auth/react";

import Navbar from "@/components/Navbar";
import useCurrentUser from "@/hooks/useCurrentUser";
import Billboard from "@/components/Billboard";

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/auth",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}

export default function Home() {
  return (
    <>
      <Navbar />
      <Billboard />
    </>
  );
}
