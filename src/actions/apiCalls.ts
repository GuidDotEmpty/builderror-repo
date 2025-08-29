import { BlogPost } from '@/types/BlogPost';

export async function getPosts(): Promise<BlogPost[]> {
  const url = 'localhost:1/api/notworkingurl'; //Example of an unavailable url in build
  const data = await fetch(url);
  return await data.json();
}
