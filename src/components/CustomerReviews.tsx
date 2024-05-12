import reviews from "@/lib/reviews.json";
import FiveStarRating from "./FiveStarRating";
import { Check } from "lucide-react";

export default function CustomerReviews() {
  return (
    <>
      {reviews.map((review) => (
        <div
          key={review.id}
          className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20"
        >
          <div className="flex gap-0.5 mb-2">
            <FiveStarRating className="size-5 text-green-600 fill-green-600" />
          </div>
          <div className="text-lg leading-8">
            <q>
              {review.descrition[0]}
              <span className="p-1 bg-slate-800 text-white rounded">
                {review.highlighted}
              </span>
              {review.descrition[1]}
            </q>
          </div>
          <div>
            <img
              src={`/users/user-${review.id}.png`}
              alt="user avatar"
              className="rounded-full size-12 object-cover"
            />
            <div className="flex flex-col">
              <p className="font-semibold">Jonathan</p>
              <div className="flex gap-1.5 items-center text-zinc-600">
                <Check className="size-4 stroke-[3px] text-green-600" />
                <p className="text-sm">Verified Purchase</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
