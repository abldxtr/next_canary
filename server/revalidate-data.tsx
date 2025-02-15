"use server";

import { revalidateTag } from "next/cache";

export default async function RevalidateData() {
  revalidateTag("post-data");
}
