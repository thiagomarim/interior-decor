import Header from "./components/header";
import Hero from "./components/hero";

export default function App() {
  return (
    <div>
      <Header />
      <main className="max-w-full flex flex-col gap-16">
        <Hero />
      </main>
    </div>
  );
}
