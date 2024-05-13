import Header from "./components/header";
import Hero from "./components/hero";
import Services from "./components/services";

export default function App() {
  return (
    <div>
      <Header />
      <main className="max-w-full flex flex-col gap-32">
        <Hero />
        <Services />
      </main>
    </div>
  );
}
