import Wrapper from '../layout/Wrapper';
import SEO from '../components/SEO';
import RegisterMain from '../components/register';

const Login = () => {
   return (
      <Wrapper>
         <SEO pageTitle={'Register vectorium'} />
         <RegisterMain />
      </Wrapper>
   );
};

export default Login;