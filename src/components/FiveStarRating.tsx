import { Icons } from "@/components/Icons";
import { Star } from "lucide-react";

export default function FiveStarRating({ className }: { className: string }) {
  return (
    <>
      {[...Array(5)].map((_, i) => (
        <Star key={"star-" + i} className={className} />
      ))}
    </>
  );
}
