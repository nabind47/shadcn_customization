import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="w-full py-12 md:py-24">
      <div className="container grid md:grid-cols-2 md:gap-12 lg:gap-24 items-center px-4 md:px-6">
        <div className="flex flex-col space-y-4 text-center md:order-2 md:text-left lg:space-y-3 xl:space-y-4">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Empowering Minds.
              <br className="sm:hidden" />
              <span className="text-gray-500">Enriching Lives.</span>
            </h1>
            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Providing quality education with a focus on individual growth and
              success. Our experienced tutors and personalized approach ensure
              every student reaches their full potential.
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Link
              className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
              href="#"
            >
              Enroll Now
            </Link>
            <Link
              className="inline-flex h-10 items-center justify-center rounded-md border  border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800  dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
              href="#"
            >
              Tour the Center
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <Image
            alt="Hero"
            className="aspect-[4/3] overflow-hidden rounded-xl object-cover object-center"
            src="/placeholder.svg"
            height={300}
            width={550}
          />
        </div>
      </div>
    </section>
  );
}
