"use client";


import { Categories } from '@/app/components/categories';
import { LatestPosts } from '@/app/components/latest-posts';
import { getCategories, getAllPosts } from '@/app/lib/queries';
import Link from 'next/link';

export default async function Home() {
  const categories = await getCategories();
  const { posts } = await getAllPosts();

  return (
    <section>
 
      <Categories categories={categories} />
      <LatestPosts posts={posts} />
      <div className='text-center'>
        <Link href={`/blog`} className='hover:underline text-gray-900 py-5 block rounded-md'>
          View More Posts
        </Link>
      </div>
    </section>
  );
}

