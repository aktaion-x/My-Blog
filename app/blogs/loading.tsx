import { Suspense } from "react";
import { BlogSkeleton } from "../ui/skeletons";

export default function Loading() {
  return (
    <Suspense fallback={<BlogSkeleton />}></Suspense>

  );
}
