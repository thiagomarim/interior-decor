import { HiArrowNarrowRight } from "react-icons/hi";
import Button from "../../button";

export default function Contact() {
  return (
    <section className="container flex flex-col items-center gap-4">
      <h1 className="text-5xl font-title">Do you want to join us</h1>
      <p className="text-secondary text-xl text-center max-w-[770px]">
        Be the first to discover trends, inspirations, and special offers as we
        bring the world of design.
      </p>
      <Button>
        Connect with us <HiArrowNarrowRight />
      </Button>
    </section>
  );
}