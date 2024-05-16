import sophie from "../../../assets/testamonials/sophie.png";

const DATA_TESTIMONY = [
  {
    img: sophie,
    name: "Sophie Carter",
    from: "New York, USA",
    test: " Working with your design team was an absolute pleasure. The attention to detail and creativity exceeded my expectations. Thankyou for making my home beautiful ",
  },
  {
    img: sophie,
    name: "Sophie Carter",
    from: "New York, USA",
    test: " Working with your design team was an absolute pleasure. The attention to detail and creativity exceeded my expectations. Thankyou for making my home beautiful ",
  },
  {
    img: sophie,
    name: "Sophie Carter",
    from: "New York, USA",
    test: " Working with your design team was an absolute pleasure. The attention to detail and creativity exceeded my expectations. Thankyou for making my home beautiful ",
  },
];

export default function Testimony() {
  return (
    <section className="container" id="about">
      <h1 className="text-4xl sm:text-5xl font-title text-center">
        What Our Customers Say About Us
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center xl:grid-cols-3 gap-8 xl:gap-16 mt-8 sm:mt-16">
        {DATA_TESTIMONY.map((testimony, i) => (
          <div
            key={i}
            className="bg-primary max-w-[420px] h-[320px] rounded-lg"
          >
            <div className="flex flex-col justify-center items-center w-full h-full p-8 gap-8">
              <div className="flex items-center justify-center gap-4">
                <img
                  src={testimony.img}
                  alt={`Foto da ${testimony.name}`}
                  width={64}
                  height={64}
                />
                <div className="flex flex-col">
                  <span className="text-white font-semibold">
                    {testimony.name}
                  </span>
                  <span className="text-zinc-400">{testimony.from}</span>
                </div>
              </div>
              <blockquote className="text-white text-center">
                "{testimony.test}"
              </blockquote>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
