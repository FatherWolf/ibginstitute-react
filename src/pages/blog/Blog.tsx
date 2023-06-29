import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import BlogCard from "../../components/blog/BlogCard";
import { blogPreviews } from "../../constants/blogPreviews";

const Blog: React.FC = () => {
  const handleReadMore = () => {
    // Logic for redirecting to full blog
  };

  return (
    <Box p={{ xs: 2, md: 7, lg: 10 }}>
      <Typography variant="h2" align="center">
        Blog Page will go here
      </Typography>
      <Grid container spacing={4} justifyContent="flex-start">
        {blogPreviews.map((blog, index) => (
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
}

export default Blog;
