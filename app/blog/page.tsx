import Link from "next/link";
import type { Metadata } from "next";
import { Section } from "@/components/section";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog — Osaka Khamphavong",
  description: "Notes on projects, tools, and what I'm learning.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <Section id="blog" title="Blog">
      <div className="space-y-6">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group block rounded-2xl border border-zinc-200 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10 dark:border-zinc-800"
          >
            <h3 className="font-display text-lg font-semibold transition-colors group-hover:text-accent">
              {post.title}
            </h3>
            <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
            <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">
              {post.excerpt}
            </p>
          </Link>
        ))}
      </div>
    </Section>
  );
}
