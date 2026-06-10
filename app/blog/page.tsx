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
            className="block rounded-xl border border-zinc-200 p-6 transition-colors hover:bg-zinc-50 dark:border-zinc-800 dark:hover:bg-zinc-900"
          >
            <h3 className="text-lg font-semibold">{post.title}</h3>
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
