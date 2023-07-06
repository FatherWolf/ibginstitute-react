import React from 'react';
import { useParams } from 'react-router-dom';

const BlogDetail: React.FC = () => {
  let { blogId } = useParams();

  return (
    <div>
      <h1>Blog ID: {blogId}</h1>
    </div>
  )
};

export default BlogDetail;
