import FiveStarRating from "@/components/FiveStarRating";
import { Icons } from "@/components/Icons";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Phone from "@/components/Phone";
import { ArrowRight, Check } from "lucide-react";
import CustomerReviews from "@/components/CustomerReviews";
import Reviews from "@/components/Reviews";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="bg-slate-50">
      <LandingSection />
      <HeroSection />
    </div>
  );
}

function LandingSection() {
  const features = [
    "High-quality durable material",
    "Print guarantee",
    "Modern iPhone models supported",
  ];
  return (
    <section>
      <MaxWidthWrapper className="pb-24 pt-10 lg:grid lg:grid-cols-3 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-32 lg:pb-52">
        <div className="col-span-2 px-6 lg:px-0 lg:pt-4">
          <div className="relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start">
            <div className="absolute w-28 left-0 -top-20 hidden lg:block">
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t via-slate-50/50 from-slate-50 h-28" />
              <img src="/snake-1.png" alt="logo snake" className="w-full" />
            </div>
            <h1 className="capitalize relative w-fit tracking-tight text-balance mt-16 font-bold !leading-tight text-gray-900 text-5xl md:text-6xl lg:text-7xl">
              your image on a{" "}
              <span className="bg-green-600 px-2 text-white">custom</span> phone
              case
            </h1>
            <p className="mt-8 text-lg lg:pr-10 max-w-prose text-center lg:text-left text-balance md:text-wrap">
              Capture your favorite memories with your own,{" "}
              <span className="font-semibold">one-of-one</span> phone case.
              CaseCobra allows you to protect your memories, not just your phone
              case
            </p>
            <ul className="mt-8 space-y-2 text-left font-medium flex flex-col items-center sm:items-start">
              {features.map((feature, i) => (
                <div className="space-y-2" key={"feature-" + i}>
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="h-5 w-5 shrink-0 text-green-600" />
                    {feature}
                  </li>
                </div>
              ))}
            </ul>

            <div className="mt-12 flex flex-col sm:flex-row items-center sm:items-start gap-5">
              <div className="flex -space-x-2">
                {[...Array(5)].map((_, i) => (
                  <img
                    src={`/users/user-${i + 1}.png`}
                    alt="user image"
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                    key={"user-" + i}
                  />
                ))}
              </div>
              <div className="flex flex-col justify-between items-center sm:items-start">
                <div className="flex gap-0.5">
                  <FiveStarRating className="size-4 text-green-600 fill-green-600" />
                </div>
                <p>
                  <span className="font-semibold">1,250</span> happy customers.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-full lg:col-span-1 w-full h-max flex justify-center px-8 sm:px-16 md:px-0 mt-32 lg:mx-0 lg:mt-20">
          <div className="relative md:max-w-xl">
            <img
              src="/your-image.png"
              alt=""
              className="absolute w-40 lg:w-52 left-56 -top-20 select-none hidden sm:block lg:hidden xl:block"
            />
            <img
              src="/line.png"
              className="absolute w-20 -left-6 -bottom-6 select-none"
            />
            <Phone className="w-64" imgSrc="/testimonials/1.jpg" />
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}

function HeroSection() {
  const reasonsToBuy = [
    "High-quality durable material",
    "Scratch and fingerprint resistant coating",
    "Wireless charging compatible",
    "5 year print warrenty",
  ];

  return (
    <>
      <section className="bg-slate-100 py-24">
        <MaxWidthWrapper className="flex flex-col items-center gap-16 sm:gap-32">
          <div className="flex flex-col lg:flex-row items-center gap-4">
            <h2 className="order-1 mt-2 tracking-tight text-center text-balance !leading-tight font-bold text-5xl md:text-6xl text-gray-900">
              What our{" "}
              <span className="relative px-2">
                customers{" "}
                <Icons.underline className="hidden sm:block pointer-events-none absolute inset-x-0 -bottom-6 text-green-500" />
              </span>
              say
            </h2>
            <img
              src="/snake-2.png"
              alt="cartoon snake illustration"
              className="w-24 order-0 lg:order-2"
            />
          </div>
          <div className="mx-auto grid max-w-2xl grid-cols-1 px-4 lg:mx-0 lg:max-w-none lg:grid-cols-2 gap-y-16">
            <CustomerReviews />
          </div>
        </MaxWidthWrapper>

        <div className="pt-16">
          <Reviews />
        </div>
      </section>
      <section>
        <MaxWidthWrapper className="py-24">
          <div className="mb-12 px-6 lg:px-8">
            <div className="mx-auto max-w-2xl sm:text-center">
              <h2 className="order-1 mt-2 tracking-tight text-center text-balance !leading-tight font-bold text-5xl md:text-6xl text-gray-900">
                Upload your photo and get{" "}
                <span className="relative px-2 bg-green-600 text-white">
                  your own case{" "}
                </span>
                now
              </h2>
            </div>
          </div>

          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="relative flex flex-col items-center md:grid grid-cols-2 gap-40">
              <img
                src="/arrow.png"
                alt="arrow image"
                className="absolute top-[25rem] md:top-1/2 -translate-y-1/2 z-10 left-1/2 -translate-x-1/2 rotate-90 md:rotate-0"
              />
              <div className="relateive h-80 md:h-full w-full md:justify-self-end max-w-sm rounded-xl bg-gray-900/5 ring-inset ring-gray-900/10 lg:rounded-2xl">
                <img
                  src="/horse.jpg"
                  alt="image of a horse"
                  className="rounded-md object-cover bg-white shadow-2xl ring-1 ring-gray-900/10 h-full w-full"
                />
              </div>
              <Phone className="w-60" imgSrc="/horse_phone.jpg" />
            </div>
          </div>
          <ul className="mx-auto mt-12 max-w-prose sm:text-lg space-y-2 w-fit">
            {reasonsToBuy.map((reason, index) => (
              <li key={reason.split(" ")[0] + index} className="w-fit">
                <Check className="size-5  text-green-600 inline mr-1.5" />
                {reason}
              </li>
            ))}
            <div className="flex justify-center">
              <Link
                className={buttonVariants({
                  size: "lg",
                  className: "mx-auto mt-8",
                })}
                href="/configure/upload"
              >
                Create your case now <ArrowRight className="size-4 ml-1.5" />
              </Link>
            </div>
          </ul>
        </MaxWidthWrapper>
      </section>
    </>
  );
}
