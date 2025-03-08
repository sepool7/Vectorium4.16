import { Helmet } from "react-helmet-async";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const SEO = ({ pageTitle }:any) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{pageTitle} - ICO & Crypto Landing Page React Next js Template</title>
        <meta name="robots" content="noindex, follow" />
        <meta name="description" content="Zibber - Consulting React Template" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      </Helmet>
    </>
  );
};

export default SEO;


// import { Helmet } from "react-helmet-async";

// const SEO = ({ pageTitle }: { pageTitle: string }) => {
//   return (
//     <Helmet>
//       <meta charSet="utf-8" />
//       <title>{pageTitle} - ICO & Crypto Landing Page</title>
//       <meta name="robots" content="index, follow" />
//       <meta name="description" content="Vectorium is a leading ICO & crypto platform offering seamless token transactions and blockchain solutions." />
//       <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      
//       {/* Open Graph for social media */}
//       <meta property="og:title" content={pageTitle} />
//       <meta property="og:description" content="Join the future of cryptocurrency with Vectorium. Invest in our ICO and experience next-gen blockchain technology." />
//       <meta property="og:image" content="/preview-image.jpg" />
//       <meta property="og:url" content="https://yourwebsite.com" />
//       <meta property="og:type" content="website" />

//       {/* Twitter Card */}
//       <meta name="twitter:card" content="summary_large_image" />
//       <meta name="twitter:title" content={pageTitle} />
      
//       <meta name="twitter:description" content="Join the future of cryptocurrency with Vectorium." />
//       <meta name="twitter:image" content="/preview-image.jpg" />
//     </Helmet>
//   );
// };

// export default SEO;

