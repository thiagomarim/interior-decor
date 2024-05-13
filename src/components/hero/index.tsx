import Button from "../button";

export default function Hero() {
  return (
    <section className="bg-hero-image bg-center bg-cover lg:bg-cover bg-no-repeat w-full h-[640px] xl:h-[840px]">
      <div className="container flex items-center justify-start h-full">
        <div className="flex flex-col gap-5 max-w-[640px]">
          <h1 className="font-title text-7xl text-[#1F1F1F]">
            Interior Design
          </h1>
          <p className="text-xl text-[#545454]">
            Step into a world where the art of Interior Design is meticulously
            crafted to bring together timeless elegance and cutting-edge modern
            Innovation, Allowing you to transform your living spaces into the
            epitome of luxury and sophistication
          </p>
          <Button className="mt-2">Start Project</Button>
        </div>
      </div>
    </section>
  );
}
