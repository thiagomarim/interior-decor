import lighting from "../../../assets/services/lighting-icon.png";
import interior from "../../../assets/services/interior-icon.png";
import outdoor from "../../../assets/services/outdoor-icon.png";

const servicesItems = [
  {
    icon: lighting,
    name: "Lighting Design",
    desc: "Achieve the perfect balance of ambient, task, and accent lighting for a functional atmosphere",
  },
  {
    icon: interior,
    name: "Interior Design",
    desc: "From concept to completion, we oversee every detail to bring your vision to life efficiently",
  },
  {
    icon: outdoor,
    name: "Outdoor Design",
    desc: "Celebrate the changing seasons with our seasonal outdoor decor services",
  },
];

export default function Services() {
  return (
    <section className="container" id="services">
      <h1 className="text-4xl sm:text-5xl font-title text-center sm:text-start">
        Our Services
      </h1>
      <div className="grid grid-cols-1 justify-items-center sm:justify-items-start sm:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-12">
        {servicesItems.map((item, i) => (
          <div
            key={i}
            className="flex flex-wrap sm:flex-nowrap justify-center sm:justify-start text-center sm:text-start gap-4 sm:gap-8 mt-12"
          >
            <img
              src={item.icon}
              alt="Lighting Icon"
              className="w-[72px] h-[70px]"
            />
            <div className="flex flex-col gap-8">
              <h3 className="text-3xl font-semibold">{item.name}</h3>
              <p className="text-secondary text-xl">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
