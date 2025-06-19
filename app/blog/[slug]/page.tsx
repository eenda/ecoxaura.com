import React from 'react';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { formatDate, getBlogPosts } from 'app/blog/utils';
import { CustomMDX } from 'components/CustomMDX';

export async function generateStaticParams() {
    let posts = getBlogPosts();

    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export function generateMetadata({ params }) {
    let post = getBlogPosts().find((post) => post.slug === params.slug);
    if (!post) {
        return;
    }

    let {
        title,
        publishedAt: publishedTime,
        summary: description,
        image,
    } = post.metadata;

    let ogImage = image ? image : `/og?title=${encodeURIComponent(title)}`;

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            type: 'article',
            publishedTime,
            url: `/blog/${post.slug}`,
            images: [
                {
                    url: ogImage,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: [ogImage],
        },
    };
}

export default function PostPage({ params }: PostPage) {
    let post = getBlogPosts().find((post) => post.slug === params.slug);

    if (!post) {
        notFound();
    }

    return (
        <section className='container min-h-screen px-6 py-16 mx-auto'>
            <div className='flex justify-center'>
                <Image
                    src={post.metadata.image}
                    alt={post.metadata.title}
                    width={1200}
                    height={1000}
                    className='rounded-xl'
                />
            </div>
            <article className='mt-8'>
                <CustomMDX source={post.content} />
            </article>
            <p className='mt-8 text-sm text-gray-500'>
                {formatDate(post.metadata.publishedAt)}
            </p>
        </section>
    );
}
