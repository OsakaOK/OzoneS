import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Section } from "@/components/section";
import { getPostBySlug, getPostSlugs } from "@/lib/posts";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  try {
    const { frontmatter } = getPostBySlug(slug);
    return {
      title: `${frontmatter.title} — Osaka Khamphavong`,
      description: frontmatter.excerpt,
    };
  } catch {
    return {};
  }
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;

  if (!getPostSlugs().includes(slug)) {
    notFound();
  }

  const { frontmatter, content } = getPostBySlug(slug);

  return (
    <Section id="post" title={frontmatter.title}>
      <p className="text-sm text-zinc-500 dark:text-zinc-400">
        {new Date(frontmatter.date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>
      <div className="blog-content mt-6 max-w-2xl">
        <MDXRemote source={content} />
      </div>
    </Section>
  );
}
