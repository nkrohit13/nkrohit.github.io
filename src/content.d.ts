// This file is used to provide TypeScript type definitions for your collections.
// See https://docs.astro.build/en/guides/content-collections/#type-definitions

import { z } from 'astro:content';
import { type SchemaContext } from 'astro:content';

export type CollectionEntry<C extends keyof typeof entryMap> =
  (typeof entryMap)[C] extends () => Promise<infer T> ? T : never;

declare module 'astro:content' {
  export { z } from 'astro:content/zod';
  
  type Flatten<T> = T extends { [K: string]: any } ? { [K in keyof T]: T[K] } : never;
  
  export type Schema = Flatten<{
    'blog': {
      "title": string;
      "excerpt"?: string;
      "publishDate": string | Date;
      "updatedDate"?: string | Date;
      "isFeatured"?: boolean;
      "tags"?: string[];
      "seo"?: {
        "title"?: string;
        "description"?: string;
        "image"?: {
          "src": string;
          "alt"?: string;
        };
        "pageType"?: "website" | "article";
      };
    };
    'challenges': {
      "title": string;
      "description": string;
      "publishDate": string | Date;
      "updatedDate"?: string | Date;
      "isFeatured"?: boolean;
      "isDraft"?: boolean;
      "tags"?: string[];
      "seo"?: {
        "title"?: string;
        "description"?: string;
        "image"?: {
          "src": string;
          "alt"?: string;
        };
        "pageType"?: "website" | "article";
      };
    };
    'pages': {
      "title": string;
      "seo"?: {
        "title"?: string;
        "description"?: string;
        "image"?: {
          "src": string;
          "alt"?: string;
        };
        "pageType"?: "website" | "article";
      };
    };
  }>;

  type BaseSchema = {
    schema?: Record<string, any>;
    slug?: (entry: { id: string; collection: string; body: string; data: any }) => string | Promise<string>;
  };

  export function defineCollection<T extends BaseSchema>(input: T): T;

  const entryMap: {
    'blog': () => Promise<CollectionEntry<'blog'>[]>;
    'challenges': () => Promise<CollectionEntry<'challenges'>[]>;
    'pages': () => Promise<CollectionEntry<'pages'>[]>;
  };

  export const collections: typeof entryMap;
}
