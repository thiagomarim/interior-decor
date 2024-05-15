import DesignSection from "./components/home/design";
import Header from "./components/header";
import Services from "./components/home/services";
import Hero from "./components/home/hero";
import Testimony from "./components/home/testimony";
import Brands from "./components/home/brands";
import Steps from "./components/home/steps";
import Contact from "./components/home/contact";

export default function App() {
  return (
    <div>
      <Header />
      <main className="max-w-full flex flex-col gap-32 sm:gap-40 mb-96">
        <Hero />
        <Services />
        <DesignSection />
        <Brands />
        <Steps />
        <Testimony />
        <Contact />
      </main>
    </div>
  );
}
