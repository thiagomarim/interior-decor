import Header from "./components/header";
import Hero from "./components/hero";

export default function App() {
  return (
    <div>
      <Header />
      <main className="max-w-full bg-white">
        <Hero />
      </main>
    </div>
  );
}
