import React, { useState, useEffect } from "react";
import { Box, Grid, Typography, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { fetchDocs } from "../../utils/fetchDocs";
import { DocEntry } from "../../models/Doc";
import BlogCard from "../../components/blog/BlogCard";
import TagFilter from "../../components/blog/TagFilter";



const Blog: React.FC = () => {
  const [blogEntries, setBlogEntries] = useState<DocEntry[]>([]);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [searchText, setSearchText] = useState<string>("");

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const docs = await fetchDocs();
      setBlogEntries(docs);
    };
    fetchData();
  }, []);

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

  const filteredBlogs = blogEntries.filter((blog) => {
    const hasMatchingTag = selectedTag ? blog.fields.category === selectedTag : true;
    const hasMatchingSearch =
      searchText === "" ||
      blog.fields.title.toLowerCase().includes(searchText.toLowerCase()) ||
      blog.fields.summary.toLowerCase().includes(searchText.toLowerCase());
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
              assetId={blog.fields.featuredImage.sys.id}
              category={blog.fields.category}
              title={blog.fields.title}
              summary={blog.fields.summary}
              date={blog.fields.date}
              onClick={() => handleReadMore(blog.sys.id)}
              selectedTag={selectedTag}
            />
          </Grid>
        ))}

      </Grid>
    </Box>
  );
};

export default Blog;
