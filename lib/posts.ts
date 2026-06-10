import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "content/posts");

export interface PostFrontmatter {
  title: string;
  date: string;
  excerpt: string;
}

export interface PostSummary extends PostFrontmatter {
  slug: string;
}

export function getPostSlugs(): string[] {
  return fs
    .readdirSync(postsDirectory)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export function getAllPosts(): PostSummary[] {
  const posts = getPostSlugs().map((slug) => {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`);
    const { data } = matter(fs.readFileSync(fullPath, "utf8"));
    return { slug, ...(data as PostFrontmatter) };
  });

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string) {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);
  const { data, content } = matter(fs.readFileSync(fullPath, "utf8"));
  return { frontmatter: data as PostFrontmatter, content };
}
