import Header from "@/components/header";
import Hero from "@/components/hero";
import WhyChooseUs from "@/components/why-choose-us";
import Services from "@/components/services";
import Team from "@/components/team";
import Testimonials from "@/components/testimonials";
import About from "@/components/about";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <WhyChooseUs />
      <Services />
      <Team />
      <Testimonials />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
