import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";

interface SEOProps {
  pageTitle: string | { [key: string]: string };
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
  keywords = "blockchain carbon credits, carbon trading, sustainability, eco-friendly blockchain, carbon footprint",
  ogImage = "https://freecoins24.io/wp-content/uploads/2024/07/dtxm4BGB_400x400.jpg",
  ogTitle,
  ogDescription,
  canonicalUrl,
  noIndex = false
}: SEOProps) => {
  // Handle both string and object formats for pageTitle
  const titleText = typeof pageTitle === 'string' ? pageTitle : 'vectorium';
  
  const siteTitle = "Vectorium - Revolutionary Blockchain Carbon Credit Platform";
  const fullTitle = `${titleText} | ${siteTitle}`;
  const baseUrl = "https://vectorium.co";
  
  // State to store the current path
  const [currentPath, setCurrentPath] = useState("/");
  
  // Effect to update the path after component mount (client-side only)
  useEffect(() => {
    // Only run in browser environment
    if (typeof window !== 'undefined') {
      setCurrentPath(window.location.pathname);
    }
  }, []);
  
  // Create a canonical URL automatically based on the detected path
  const autoCanonicalUrl = `${baseUrl}${currentPath}`;
  
  // Use provided canonicalUrl if exists, otherwise use the auto-generated one
  const finalCanonicalUrl = canonicalUrl || autoCanonicalUrl;
  
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
      <meta property="og:url" content={finalCanonicalUrl} />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={ogTitle || fullTitle} />
      <meta name="twitter:description" content={ogDescription || description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Additional SEO tags */}
      <meta name="application-name" content="Vectorium" />
      <meta name="theme-color" content="#4CAF50" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={finalCanonicalUrl} />
    </Helmet>
  );
};

export default SEO;




