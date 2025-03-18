import { Helmet } from "react-helmet-async";

interface SEOProps {
  pageTitle: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogTitle?: string;
  ogDescription?: string;
  canonicalUrl?: string;
  noIndex?: boolean;
}

const SEO = ({
  pageTitle,
  description = "Transform your carbon footprint with Vectorium's innovative blockchain-based carbon credit platform. Leading the eco-friendly revolution in digital carbon credit trading and verification.",
  keywords = "blockchain carbon credits, carbon trading, sustainability, vectorium holding, Vectorium, VECT,  eco-friendly blockchain, carbon footprint", 
  ogImage = "https://freecoins24.io/wp-content/uploads/2024/07/dtxm4BGB_400x400.jpg",
  ogTitle,
  ogDescription,
  canonicalUrl,
  noIndex = false
}: SEOProps) => {
  const siteTitle = "Vectorium - Revolutionary Blockchain Carbon Credit Platform";
  const fullTitle = `${pageTitle} | ${siteTitle}`;
  
  return (
    <Helmet>
      <html lang="en" />
      <meta charSet="utf-8" />
      <title>{fullTitle}</title>
      
      {/* Basic SEO */}
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <meta name="robots" content={noIndex ? "noindex, nofollow" : "index, follow"} />
      
      {/* Open Graph / Social Media */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={ogTitle || fullTitle} />
      <meta property="og:description" content={ogDescription || description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:alt" content="Vectorium blockchain carbon credit platform" />
      <meta property="og:site_name" content={siteTitle} />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={ogTitle || fullTitle} />
      <meta name="twitter:description" content={ogDescription || description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
    </Helmet>
  );
};

export default SEO;




