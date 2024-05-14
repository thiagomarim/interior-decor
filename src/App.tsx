import DesignSection from "./components/design";
import Header from "./components/header";
import Hero from "./components/hero";
import Services from "./components/services";

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
