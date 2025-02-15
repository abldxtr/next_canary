"use client";

import RevalidateData from "@/server/revalidate-data";

export default function RevalClient() {
  const reval = async () => {
    await RevalidateData();
  };
  return <div onClick={reval}>revlaidate</div>;
}
