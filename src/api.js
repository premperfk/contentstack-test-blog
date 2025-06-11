import Stack from './contentstackConfig';

export const fetchBlogPosts = async () => {
  const Query = Stack.ContentType('blog_post').Query();

  try {
    const result = await Query.toJSON().find();
    return result[0]; // Array of entries
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
};