"use client";
import Image from "next/image";
import StarRating from "./star-rating";

export default function Testimonials({testimonials}: {testimonials: any[]}) {
  return (
    <section className="bg-gray-50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <span className="inline-block rounded-full bg-amber-100 px-4 py-1.5 text-sm font-medium text-amber-700">
            &#128172; Testimonials
          </span>
          <h2 className="mt-4 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            What Developers Say
          </h2>
          <p className="mt-3 text-lg text-gray-500">
            Don&rsquo;t just take our word for it &mdash; hear from our
            community
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="flex flex-col rounded-2xl bg-white p-6 shadow-sm"
            >
              <StarRating />
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-gray-600">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="mt-6 flex items-center gap-3">
                <Image
                  src={`https://ui-avatars.com/api/?name=${t.name.replace(/ /g, "+")}&background=${t.bg.replace("bg-", "").replace("-500", "").replace("-600", "")}&color=fff&size=48`}
                  alt={t.name}
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <div>
                  <p className="font-medium text-gray-900">{t.name}</p>
                  <p className="text-xs text-gray-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
