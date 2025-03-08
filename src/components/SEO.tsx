// import { Helmet } from "react-helmet-async";

// // eslint-disable-next-line @typescript-eslint/no-explicit-any
// const SEO = ({ pageTitle }:any) => {
//   return (
//     <>
//       <Helmet>
//         <meta charSet="utf-8" />
//         <title>{pageTitle} - ICO & Crypto Landing Page React Next js Template</title>
//         <meta name="robots" content="noindex, follow" />
//         <meta name="description" content="Zibber - Consulting React Template" />
//         <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
//       </Helmet>
//     </>
//   );
// };

// export default SEO;

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

import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
}

export function SEO({ 
  title = "Vectorium - Eco-Friendly Blockchain Carbon Credits",
  description = "Vectorium is pioneering the digitalization of Carbon Credits through eco-friendly blockchain technology. Join us in revolutionizing the carbon credit market with sustainable solutions.",
  canonical = "https://vectorium.co/"
}: SEOProps) {
  // Base structured data for the organization
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Vectorium",
    "url": "https://vectorium.co/",
    "logo": "https://freecoins24.io/wp-content/uploads/2024/07/dtxm4BGB_400x400.jpg",
    "description": "Eco-friendly blockchain platform for carbon credit digitalization",
    "sameAs": [
      "https://projectvic04.vercel.app/"
    ]
  };

  // Product/Service structured data
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Carbon Credit Digitalization",
    "provider": {
      "@type": "Organization",
      "name": "Vectorium"
    },
    "description": "Blockchain-based carbon credit trading and digitalization platform",
    "category": "Blockchain Technology"
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph Tags */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content="https://freecoins24.io/wp-content/uploads/2024/07/dtxm4BGB_400x400.jpg" />
      <meta property="og:site_name" content="Vectorium" />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content="https://freecoins24.io/wp-content/uploads/2024/07/dtxm4BGB_400x400.jpg" />

      {/* Additional SEO Meta Tags */}
      <meta name="keywords" content="carbon credits, blockchain, eco-friendly cryptocurrency, carbon trading, sustainability, green technology, carbon market, digital carbon credits" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(productSchema)}
      </script>
    </Helmet>
  );
}



