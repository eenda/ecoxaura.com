import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { formatDate, getBlogPosts } from 'app/blog/utils';

export const metadata = {
    title: 'Blog – Ecox Aura',
};

export default function Blog() {
    let allBlogs = getBlogPosts();

    return (
        <section className='min-h-screen py-16 bg-lavender-pink'>
            <div className='mx-auto lg:px-12 xl:px-32'>
                <h2 className='text-3xl font-bold text-center'>
                    Entradas en el Blog
                </h2>
                <div className='grid grid-cols-1 gap-6 px-4 py-8 lg:px-0 md:grid-cols-2 lg:grid-cols-3 '>
                    {allBlogs
                        .sort((postA, postB) => {
                            if (
                                new Date(postA.metadata.publishedAt) >
                                new Date(postB.metadata.publishedAt)
                            ) {
                                return -1;
                            }
                            return 1;
                        })
                        .map((post) => (
                            <article
                                key={post.slug}
                                className='flex flex-col h-full overflow-hidden transition transform bg-white shadow-xl rounded-xl hover:scale-105'
                            >
                                <Link
                                    href={`/blog/${post.slug}`}
                                    className='flex flex-col flex-1 text-xl font-semibold hover:text-raspberry-pink'
                                >
                                    <div className='relative h-48 shrink-0'>
                                        <Image
                                            src={post.metadata.image}
                                            alt={post.metadata.title}
                                            fill
                                            className='object-cover'
                                        />
                                    </div>
                                    <div className='flex flex-col justify-between flex-1 p-6'>
                                        <h1 className='font-bold text-center lg:text-justify'>
                                            {post.metadata.title}
                                        </h1>
                                        <p className='mt-2 text-sm font-light text-center lg:text-justify'>
                                            {post.metadata.summary}
                                        </p>
                                        <div className='flex justify-center mt-2'>
                                            <span className='text-sm'>
                                                {formatDate(
                                                    post.metadata.publishedAt,
                                                    false
                                                )}
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            </article>
                        ))}
                </div>
            </div>
        </section>
    );
}
