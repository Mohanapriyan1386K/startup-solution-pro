import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustedBy from "@/components/TrustedBy";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import WhyChooseUs from "@/components/WhyChooseUs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const siteUrl = "https://maventechnology.in";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Helmet>
      <title>Maven Technology | Modern Websites for Growing Businesses</title>
      <meta
        name="description"
        content="Maven Technology builds modern websites for growing businesses with a bold black, white, and green brand experience. Get high-converting designs and professional development."
      />
      <meta
        name="keywords"
        content="Maven Technology, web design, website development, modern websites, business websites, landing page design"
      />
      <meta name="robots" content="index,follow" />
      <meta property="og:title" content="Maven Technology | Modern Websites for Growing Businesses" />
      <meta
        property="og:description"
        content="Modern business websites with a strong Maven Technology brand identity and high-converting design."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteUrl} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Maven Technology | Modern Websites for Growing Businesses" />
      <meta
        name="twitter:description"
        content="Modern business websites with a strong Maven Technology brand identity and high-converting design."
      />
      <link rel="canonical" href={siteUrl} />
    </Helmet>
    <Navbar />
    <Hero />
    <TrustedBy />
    <Stats />
    <About />
    <Services />
    <Pricing />
    <Portfolio />
    <Testimonials />
    <WhyChooseUs />
    <Contact />
    <Footer />
  </div>
);

export default Index;
