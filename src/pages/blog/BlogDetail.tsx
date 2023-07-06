import React from 'react';
import { useParams } from 'react-router-dom';
import { EmailShareButton, FacebookShareButton, LinkedinShareButton, TwitterShareButton } from 'react-share';
import { EmailIcon, FacebookIcon, LinkedinIcon, TwitterIcon } from 'react-share';
import { blogPreviews } from '../../constants';
import { Box, Typography, Grid, useMediaQuery, useTheme } from '@mui/material';
import MiniBlogCard from '../../components/blog/MiniBlogCard';
import { useNavigate } from "react-router-dom";

const BlogDetail: React.FC = () => {
  let { blogId } = useParams<{ blogId: string }>();
  const blog = blogPreviews.find((blog) => blog.id === blogId);
  const navigate = useNavigate();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  if (!blog) {
    return <div>Blog not found</div>;
  }

  const paragraphs = blog.content ? blog.content.split('\n\n') : [];

  const recentBlogs = blogPreviews.filter((item) => item.id !== blog.id).slice(0, 5);

  const handleReadMore = (blogId: string) => {
    navigate(`/blog/${blogId}`);
  };

  return (
    <Box sx={{ pl: [3, 5], pr: 3, pb: 3, pt: 3 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={8}>
          <img src={blog.image} alt={blog.title} style={{ width: '100%', objectFit: 'cover' }} />
          <Typography variant="h2" gutterBottom>{blog.title}</Typography>
          <Typography variant="h6">by {blog.author} on {new Date(blog.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</Typography>
          <br />
          {paragraphs.map((paragraph: string, index: number) => (
            <Typography variant="body1" paragraph key={index}>
              {paragraph}
            </Typography>
          ))}
          {blog.videoEditor && (
            <Typography variant="body2" align="right">
              Video editing by {blog.videoEditor}
            </Typography>
          )}
          {blog.imageCredit && (
            <Typography variant="body2" align="right">
              Featured image by {blog.imageCredit}
            </Typography>
          )}
          <Box display="flex">
            <Typography marginRight="20px">
              Share:
            </Typography>
            <Box style={{ display: "flex" }}>
              <EmailShareButton url={window.location.href}>
                <EmailIcon style={{ marginRight: "20px" }} size={32} round={true} />
              </EmailShareButton>
              <TwitterShareButton url={window.location.href}>
                <TwitterIcon style={{ marginRight: "20px" }} size={32} round={true} />
              </TwitterShareButton>
              <FacebookShareButton url={window.location.href}>
                <FacebookIcon style={{ marginRight: "20px" }} size={32} round={true} />
              </FacebookShareButton>
              <LinkedinShareButton url={window.location.href}>
                <LinkedinIcon style={{ marginRight: "20px" }} size={32} round={true} />
              </LinkedinShareButton>
            </Box>
          </Box>


        </Grid>
        {!matches && (
          <Grid item xs={12} md={4}>
            <Typography variant="h4" align="center" gutterBottom>Recent Blogs</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              {recentBlogs.map((miniBlog) => (
                <MiniBlogCard
                  key={miniBlog.id}
                  image={miniBlog.image}
                  category={miniBlog.category}
                  title={miniBlog.title}
                  date={miniBlog.date}
                  selectedTag={null}
                  onClick={() => handleReadMore(miniBlog.id)}
                />
              ))}
            </Box>
          </Grid>
        )}
      </Grid>
    </Box>
  )
};

export default BlogDetail;
