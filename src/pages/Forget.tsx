import Wrapper from '../layout/Wrapper';
import SEO from '../components/SEO';
import RecetPasswordMain from '../components/reset-password';

const RecetPassword = () => {
   return (
      <Wrapper>
         <SEO pageTitle={'Reset PassWord vectorium'} />
         <RecetPasswordMain />
      </Wrapper>
   );
};

export default RecetPassword;