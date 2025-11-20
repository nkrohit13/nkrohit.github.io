import { slugify } from './common-utils';

// More flexible type that works with any collection entry
type AnyCollectionEntry = {
    data: {
        publishDate: Date | string | number;
        [key: string]: any;
    };
    [key: string]: any;
};

export function sortItemsByDateDesc(itemA: AnyCollectionEntry, itemB: AnyCollectionEntry) {
    return new Date(itemB.data.publishDate).getTime() - new Date(itemA.data.publishDate).getTime();
}

export function getAllTags(posts: AnyCollectionEntry[]) {
    const tags: string[] = [];
    
    // Safely extract tags from posts
    for (const post of posts) {
        if (post.data.tags && Array.isArray(post.data.tags)) {
            for (const tag of post.data.tags) {
                if (typeof tag === 'string') {
                    tags.push(tag);
                }
            }
        }
    }
    
    // Remove duplicates and format
    const uniqueTags = [...new Set(tags)];
    return uniqueTags
        .map((tag) => ({
            name: tag,
            id: slugify(tag)
        }))
        .filter((obj, pos, arr) => 
            arr.findIndex(item => item.id === obj.id) === pos
        );
}

export function getPostsByTag(posts: AnyCollectionEntry[], tagId: string) {
    if (!posts || !Array.isArray(posts)) return [];
    
    return posts.filter((post) => {
        if (!post.data.tags || !Array.isArray(post.data.tags)) return false;
        
        return post.data.tags.some((tag: unknown) => 
            typeof tag === 'string' && slugify(tag) === tagId
        );
    });
}
