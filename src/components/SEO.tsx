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
  title = "Vectorium - Revolutionary Blockchain Carbon Credit Platform",
  description = "Transform your carbon footprint with Vectorium's innovative blockchain-based carbon credit platform. Leading the eco-friendly revolution in digital carbon credit trading and verification.",
  canonical = "https://vectorium.co/"
}: SEOProps) {
  // Enhanced organization schema with more detailed information
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Vectorium",
    "url": "https://vectorium.co/",
    "logo": "https://freecoins24.io/wp-content/uploads/2024/07/dtxm4BGB_400x400.jpg",
    "description": "Leading blockchain platform revolutionizing carbon credit digitalization and trading",
    "sameAs": [
      "https://projectvic04.vercel.app/"
    ],
    "foundingDate": "2024",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "Global"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "availableLanguage": ["English"]
    }
  };

  // Enhanced product schema with more specific details
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Vectorium Carbon Credit Platform",
    "provider": {
      "@type": "Organization",
      "name": "Vectorium"
    },
    "description": "Revolutionary blockchain-based platform for carbon credit trading, verification, and management",
    "category": "Blockchain Technology",
    "offers": {
      "@type": "Offer",
      "description": "Digital carbon credit trading and verification services"
    },
    "serviceType": "Carbon Credit Management",
    "areaServed": "Global",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Carbon Credit Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Carbon Credit Trading",
            "description": "Secure and transparent carbon credit trading on blockchain"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Carbon Credit Verification",
            "description": "Blockchain-based verification of carbon credits"
          }
        }
      ]
    }
  };

  return (
    <Helmet>
      {/* Enhanced Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <meta name="author" content="Vectorium" />
      <meta name="rating" content="safe for kids" />
      <meta name="revisit-after" content="7 days" />
      <meta name="theme-color" content="#00ff00" />

      {/* Enhanced Open Graph Tags */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content="https://freecoins24.io/wp-content/uploads/2024/07/dtxm4BGB_400x400.jpg" />
      <meta property="og:image:alt" content="Vectorium Logo - Leading Carbon Credit Platform" />
      <meta property="og:site_name" content="Vectorium" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="business.business" />

      {/* Enhanced Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content="https://freecoins24.io/wp-content/uploads/2024/07/dtxm4BGB_400x400.jpg" />
      <meta name="twitter:image:alt" content="Vectorium - Carbon Credit Platform" />
      <meta name="twitter:site" content="@vectorium" />

      {/* Enhanced SEO Meta Tags */}
      <meta name="keywords" content="carbon credits blockchain, eco-friendly cryptocurrency, carbon trading platform, digital carbon credits, sustainable blockchain, green technology, carbon market digitalization, carbon credit verification, environmental blockchain solutions, sustainable trading platform, carbon footprint management, blockchain carbon tracking, eco-friendly trading, green blockchain technology, carbon credit marketplace" />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="language" content="English" />
      <meta name="coverage" content="Worldwide" />
      <meta name="target" content="all" />
      <meta name="classification" content="Business" />
      <meta name="HandheldFriendly" content="True" />

      {/* Mobile App Tags */}
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black" />
      <meta name="format-detection" content="telephone=no" />

      {/* Enhanced Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(productSchema)}
      </script>

      {/* Additional Meta Tags for Better Indexing */}
      <link rel="alternate" hrefLang="en" href={canonical} />
      <meta name="geo.region" content="global" />
      <meta name="geo.position" content="global" />
      <meta name="ICBM" content="global" />
    </Helmet>
  );
}
