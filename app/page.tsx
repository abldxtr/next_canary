import Profile from "@/components/profile";
import RevalClient from "@/components/revalidate-client";
import Page from "@/components/users";
import { Suspense } from "react";

export const experimental_ppr = true;

export default async function Home() {
  return (
    <div>
      {/* <Profile /> */}
      <div>Hello world!</div>
      <RevalClient />
      <Suspense fallback={<div>loading...</div>}>
        <Page />
      </Suspense>
    </div>
  );
}
