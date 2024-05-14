import DesignSection from "./components/home/design";
import Header from "./components/header";
import Services from "./components/home/services";
import Hero from "./components/home/hero";

export default function App() {
  return (
    <div>
      <Header />
      <main className="max-w-full flex flex-col gap-32 sm:gap-40 mb-96">
        <Hero />
        <Services />
        <DesignSection />
      </main>
    </div>
  );
}
