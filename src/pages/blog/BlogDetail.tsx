import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { EmailShareButton, FacebookShareButton, LinkedinShareButton, TwitterShareButton } from 'react-share';
import { EmailIcon, FacebookIcon, LinkedinIcon, TwitterIcon } from 'react-share';

import { Box, Typography, Grid, useMediaQuery, useTheme } from '@mui/material';
import { styled } from '@mui/system';
import MiniBlogCard from '../../components/blog/MiniBlogCard';
import { fetchDoc } from '../../utils/fetchDoc';
import { DocEntry } from '../../models/Doc';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import EmbeddedAsset from '../../components/blog/EmbeddedAsset';
import { BLOCKS, MARKS, INLINES } from '@contentful/rich-text-types';
import { fetchDocs } from '../../utils/fetchDocs';

const BlogDetail: React.FC = () => {
  let { blogId } = useParams<{ blogId: string | undefined }>();
  const [blog, setBlog] = useState<DocEntry | null>(null);
  const navigate = useNavigate();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));
  const [recentBlogEntries, setRecentBlogEntries] = useState<DocEntry[]>([]);

  const InlineLink = styled('a')(({ theme }) => ({
    color: theme.palette.warning.main,
    textDecoration: 'none',
    '&:hover': {
      color: theme.palette.warning.dark,
    },
  }));


  const richTextOptions = {
    renderMark: {
      [MARKS.BOLD]: (text: React.ReactNode) => <strong>{text}</strong>,
      [MARKS.ITALIC]: (text: React.ReactNode) => <em>{text}</em>,
      [MARKS.UNDERLINE]: (text: React.ReactNode) => <u>{text}</u>,
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (_node: any, children: React.ReactNode) => (
        <p>{children}</p>
      ),
      [BLOCKS.HEADING_1]: (_node: any, children: React.ReactNode) => (
        <h1>{children}</h1>
      ),
      [BLOCKS.HEADING_2]: (_node: any, children: React.ReactNode) => (
        <h2>{children}</h2>
      ),
      [BLOCKS.HEADING_3]: (_node: any, children: React.ReactNode) => (
        <h3>{children}</h3>
      ),
      [BLOCKS.HEADING_4]: (_node: any, children: React.ReactNode) => (
        <h4>{children}</h4>
      ),
      [BLOCKS.HEADING_5]: (_node: any, children: React.ReactNode) => (
        <h5>{children}</h5>
      ),
      [BLOCKS.HEADING_6]: (_node: any, children: React.ReactNode) => (
        <h6>{children}</h6>
      ),
      [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
        const assetId = node.data.target.sys.id;
        return <EmbeddedAsset assetId={assetId} />;
      },
      [INLINES.HYPERLINK]: (node: any, children: React.ReactNode) => (
        <InlineLink href={node.data.uri}>{children}</InlineLink>
      ),
    },
  };

  useEffect(() => {
    const fetchData = async () => {
      if (blogId) {
        try {
          const doc = await fetchDoc(blogId);
          setBlog(doc);
        } catch (err) {
          console.error(err);
        }
      } else {
        console.error("blogId is undefined");
      }
    };

    fetchData();
  }, [blogId]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const entries = await fetchDocs();
        setRecentBlogEntries(entries.slice(0, 5));
        // console.log("entries ", entries);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);

  const handleReadMore = (blogId: string) => {
    navigate(`/blog/${blogId}`);
  };

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <Box sx={{ bgcolor: 'primary.main', pl: [3, 5], pr: 3, pb: 3, pt: 3 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={8}>
          <EmbeddedAsset assetId={blog.fields.featuredImage.sys.id} style={{ width: '100%', objectFit: 'cover', marginBottom: 10, borderRadius: 8 }} />
          <Typography color="white" variant="h2" gutterBottom>{blog.fields.title}</Typography>
          <Typography color="white" variant="h6">by {blog.fields.author} on {new Date(blog.fields.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</Typography>
          <Typography color="white">
            {blog.fields.blogContent && documentToReactComponents(blog.fields.blogContent, richTextOptions)}
          </Typography>

          <Box display="flex">
            <Typography color="white" marginRight="20px">
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
              {recentBlogEntries.map((blog) => (
                <MiniBlogCard
                  key={blog.sys.id}
                  assetId={blog.fields.featuredImage.sys.id}
                  category={blog.fields.category}
                  title={blog.fields.title}
                  date={blog.fields.date}
                  selectedTag={null}
                  onClick={() => handleReadMore(blog.sys.id)}
                />
              ))}
            </Box>
          </Grid>
        )}
      </Grid>
    </Box>
  );
};

export default BlogDetail;
