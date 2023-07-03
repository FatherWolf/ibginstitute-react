import React, { useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import BlogCard from "../../components/blog/BlogCard";
import { blogPreviews } from "../../constants/blogPreviews";
import TagFilter from "../../components/blog/TagFilter";

const Blog: React.FC = () => {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const handleTagSelect = (tag: string) => {
    setSelectedTag(tag);
  };

  const filteredBlogs = selectedTag
    ? blogPreviews.filter((blog) => blog.category === selectedTag)
    : blogPreviews;

  const handleReadMore = () => {
    // Logic for redirecting to full blog
  };

  return (
    <Box p={{ xs: 2, md: 7, lg: 10 }}>
      <Typography variant="h2" align="center">
        Blog Page will go here
      </Typography>
      <TagFilter onTagSelect={handleTagSelect} />
      <Grid container spacing={4} justifyContent="flex-start">
        {filteredBlogs.map((blog, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <BlogCard
              image={blog.image}
              category={blog.category}
              title={blog.title}
              summary={blog.summary}
              date={blog.date}
              onClick={handleReadMore}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Blog;
