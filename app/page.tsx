import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import MobileBar from '@/components/MobileBar';

import { DiscoverySection, AddressesSection, FaqSection , StorySection, TourSection, MethodSection, DropsSection , LabelSection , InstagramSection, CommunitySection, NewsletterSection } from '@/components/sections';

export default function Page() {
  return (
    <>
     <Header />
<main id="contenu">
  <Hero />
  <DiscoverySection />
  <AddressesSection />
  <StorySection />
  <TourSection />
  <DropsSection />
  <MethodSection />
  <LabelSection />
  <InstagramSection />
  <CommunitySection />
  <FaqSection />
  <NewsletterSection />
</main>
<Footer />
<MobileBar />
    </>
  );
}