import Profile from "@/components/profile";
import Page from "@/components/users";
import { Suspense } from "react";

export const experimental_ppr = true;

export default async function Home() {
  return (
    <div>
      {/* <Profile /> */}
      <div>Hello world!</div>
      <Suspense fallback={<div>loading...</div>}>
        <Page />
      </Suspense>
    </div>
  );
}
