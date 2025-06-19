import { MDXRemote } from 'next-mdx-remote/rsc';
import React from 'react';

function slugify(str) {
    return str
        .toString()
        .toLowerCase()
        .trim() // Remove whitespace from both ends of a string
        .replace(/\s+/g, '-') // Replace spaces with -
        .replace(/&/g, '-and-') // Replace & with 'and'
        .replace(/[^\w\-]+/g, '') // Remove all non-word characters except for -
        .replace(/\-\-+/g, '-'); // Replace multiple - with single -
}

function createHeading(level) {
    const Heading = ({ children }) => {
        let slug = slugify(children);
        return React.createElement(
            `h${level}`,
            {
                id: slug,
                className: `text-${level}xl text-justify font-bold text-raspberry-pink`,
            },
            children
        );
    };

    Heading.displayName = `Heading${level}`;

    return Heading;
}

function createPContent() {
    const content = ({ children }) => {
        return React.createElement(
            `p`,
            { className: `text-lg mb-4 text-justify` },
            children
        );
    };

    content.displayName = `Content`;

    return content;
}

function createUlContent() {
    const content = ({ children }) => {
        return React.createElement(
            `ul`,
            {
                className: `text-lg my-4 ml-8 list-disc list-inside text-justify`,
            },
            children
        );
    };

    content.displayName = `Content`;

    return content;
}

let components = {
    h1: createHeading(1),
    h2: createHeading(2),
    h3: createHeading(3),
    h4: createHeading(4),
    h5: createHeading(5),
    h6: createHeading(6),
    p: createPContent(),
    ul: createUlContent()
};

export function CustomMDX(props) {
    return (
        <MDXRemote
            {...props}
            components={{ ...components, ...(props.components || {}) }}
        />
    );
}
