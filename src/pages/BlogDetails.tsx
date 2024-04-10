import Wrapper from '../layout/Wrapper';
import SEO from '../components/SEO';
import BlogDeatilsMain from '../components/blogs/blog-details';

const BlogDeatils = () => {
  return (
    <Wrapper>
      <SEO pageTitle={'Blog Deatils vectorium'} />
      <BlogDeatilsMain/>
    </Wrapper>
  );
};

export default BlogDeatils;