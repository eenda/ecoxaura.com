interface PostPage {
    params: { slug: string };
}

interface Post {
    metadata: Metadata;
    slug: string;
    content: string;
}

interface Metadata {
    title: string
    image: string
    summary: string
    publishedAt: string
}