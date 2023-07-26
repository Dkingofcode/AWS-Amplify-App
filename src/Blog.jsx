import React from 'react';
import { useQuery, gql } from '@apollo/client';

// GraphQL query to fetch blog posts
const GET_BLOG_POSTS = gql`
  query GetBlogPosts {
    listBlogPosts {
      items {
        id
        title
        content
        createdAt
      }
    }
  }
`;

const Blog = () => {
  // Use the useQuery hook to fetch data
  const { loading, error, data } = useQuery(GET_BLOG_POSTS);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>BLog page</h1>
      {data.listBlogPosts.items.map(post => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          <p>Posted on: {new Date(post.createdAt).toLocaleString()}</p>
        </div>
      ))}
    </div>
  );
};

export default Blog;
