import Image from "next/image";

import { stats, featuredPosts, recentPosts, testimonials } from "@/data/posts";
import StarRating from "@/components/star-rating";
import HeroSection from "@/components/hero-section";
import StatisticsSection from "@/components/statistics";
import Featured from "@/components/feature";
import RecentPost from "@/components/recent-post";
import Newsletter from "@/components/newsletter-section";
import Testimonials from "@/components/Testimonials";
export default function Home() {
  return (
    <>
      {/* ── Hero ── */}
      <HeroSection />

      {/* ── Statistics ── */}
      <StatisticsSection />

      {/* ── Featured Posts ── */}
      <Featured featuredPosts={featuredPosts} />

      {/* ── Recent Posts ── */}
      <RecentPost recentPosts={recentPosts} />

      {/* ── Newsletter ── */}
      <Newsletter />

      {/* ── Testimonials ── */}
      <Testimonials testimonials={testimonials} />  
    </>
  );
}
