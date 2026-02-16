import { BLOG_POSTS } from "./constants";

export interface TOCItem {
  id: string;
  content: string;
  level: number;
}

export interface ContentBlock {
  type: "heading" | "text" | "code";
  content: string;
  language?: string;
}

/**
 * Calculate estimated reading time based on content
 * Average reading speed: 200 words per minute
 */
export function calculateReadingTime(content: ContentBlock[]): string {
  const wordsPerMinute = 200;
  
  const totalWords = content.reduce((count, block) => {
    if (block.type === "text" || block.type === "heading") {
      return count + block.content.split(/\s+/).length;
    }
    // Code blocks are read slower, count as 50% more time
    if (block.type === "code") {
      return count + Math.floor(block.content.split(/\s+/).length * 1.5);
    }
    return count;
  }, 0);

  const minutes = Math.ceil(totalWords / wordsPerMinute);
  return `${minutes} min read`;
}

/**
 * Generate table of contents from content blocks
 */
export function generateTableOfContents(content: ContentBlock[]): TOCItem[] {
  return content
    .filter((block) => block.type === "heading")
    .map((block, index) => ({
      id: `heading-${index}`,
      content: block.content,
      level: 2, // All headings are h2 in our current structure
    }));
}

/**
 * Get related posts based on shared tags
 */
export function getRelatedPosts(
  currentSlug: string,
  maxResults: number = 3
): typeof BLOG_POSTS {
  const currentPost = BLOG_POSTS.find((post) => post.slug === currentSlug);
  
  if (!currentPost) return [];

  // Calculate similarity score based on shared tags
  const postsWithScores = BLOG_POSTS
    .filter((post) => post.slug !== currentSlug)
    .map((post) => {
      const sharedTags = post.tags.filter((tag) =>
        currentPost.tags.includes(tag)
      );
      const sameType = post.type === currentPost.type ? 1 : 0;
      const score = sharedTags.length * 2 + sameType;
      
      return { post, score };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, maxResults)
    .map((item) => item.post);

  return postsWithScores;
}

/**
 * Format view count with K/M suffixes
 */
export function formatViewCount(count: number): string {
  if (count >= 1000000) {
    return `${(count / 1000000).toFixed(1)}M`;
  }
  if (count >= 1000) {
    return `${(count / 1000).toFixed(1)}K`;
  }
  return count.toString();
}

/**
 * Format date to readable string
 */
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const diffTime = Math.abs(now.getTime() - date.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays === 0) return "Today";
  if (diffDays === 1) return "Yesterday";
  if (diffDays < 7) return `${diffDays} days ago`;
  if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
  if (diffDays < 365) return `${Math.floor(diffDays / 30)} months ago`;
  
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

/**
 * Create a slug from text
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
}

/**
 * Truncate text to specified length
 */
export function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + "...";
}
