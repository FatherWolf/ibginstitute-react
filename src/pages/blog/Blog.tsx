import React, { useState } from "react";
import { Box, Grid, Typography, TextField } from "@mui/material";
import BlogCard from "../../components/blog/BlogCard";
import { blogPreviews } from "../../constants/blogPreviews";
import TagFilter from "../../components/blog/TagFilter";
import { useNavigate } from "react-router-dom";

const Blog: React.FC = () => {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [searchText, setSearchText] = useState<string>("");

  const navigate = useNavigate();

  const handleTagSelect = (tag: string) => {
    if (selectedTag === tag) {
      setSelectedTag(null);
    } else {
      setSelectedTag(tag);
    }
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  const filteredBlogs = blogPreviews.filter((blog) => {
    const hasMatchingTag = selectedTag ? blog.category === selectedTag : true;
    const hasMatchingSearch =
      searchText === "" ||
      blog.title.toLowerCase().includes(searchText.toLowerCase()) ||
      blog.summary.toLowerCase().includes(searchText.toLowerCase());
    return hasMatchingTag && hasMatchingSearch;
  });


  const handleReadMore = (blogId: string) => {
    navigate(`/blog/${blogId}`);
  };

  return (
    <Box p={{ xs: 2, md: 7, lg: 10 }}>
      <Typography variant="h2" align="center">
        IBG Institute Tech Blog
      </Typography>
      <Box display="flex" justifyContent="center" my={2}>
        <TagFilter selectedTag={selectedTag} onTagSelect={handleTagSelect} />
      </Box>
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} sm={8} md={6} lg={4}>
          <Box mb={2}>
            <TextField
              label="Search"
              variant="outlined"
              fullWidth
              value={searchText}
              onChange={handleSearch}
            />
          </Box>
        </Grid>
      </Grid>
      <Grid container spacing={4} justifyContent="flex-start">
        {filteredBlogs.map((blog, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <BlogCard
              image={blog.image}
              category={blog.category}
              title={blog.title}
              summary={blog.summary}
              date={blog.date}
              onClick={() => handleReadMore(blog.id)}
              selectedTag={selectedTag}
            />

          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Blog;
