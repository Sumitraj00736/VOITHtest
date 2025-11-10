import { MapPin, Tag, Globe } from "lucide-react";
import whychooseus from "../../assets/whychooseus.png";

export default function WhyChooseUs() {
  const features = [
    {
      id: 1,
      icon: <MapPin className="w-5 h-5 text-white" />,
      title: "Customer Support",
      description:
        "Aliquam erat volutpat. Integer malesuada turpis id fringilla suscipit. Maecenas ultrices.",
    },
    {
      id: 2,
      icon: <Tag className="w-5 h-5 text-white" />,
      title: "Best Price Guaranteed",
      description:
        "Aliquam erat volutpat. Integer malesuada turpis id fringilla suscipit. Maecenas ultrices.",
    },
    {
      id: 3,
      icon: <MapPin className="w-5 h-5 text-white" />,
      title: "Many Location",
      description:
        "Aliquam erat volutpat. Integer malesuada turpis id fringilla suscipit. Maecenas ultrices.",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 text-center md:text-left">

      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#737373] mb-3 text-center">
          Why choose us
        </h2>
        <p className="text-[#737373] text-center max-w-2xl mx-auto">
          Aliquam erat ajofia volutpat. Integer malesuada turpis id fringilla <br />
          suscipit. Maecenas ultrices.
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
        <div className="w-full md:w-1/2 order-last md:order-first">
          <img
            src={whychooseus}
            alt="Road and phone"
            className="rounded-xl shadow-lg w-full object-cover"
          />
        </div>

        {/* Right Features */}
        <div className="w-full md:w-1/2 space-y-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="flex flex-col md:flex-row items-center md:items-start gap-4"
            >
              <div className="flex-shrink-0 bg-[#EA3C3C] w-10 h-10 rounded-lg flex items-center justify-center mx-auto md:mx-0">
                {feature.icon}
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-lg font-semibold text-[#737373]">
                  {feature.title}
                </h3>
                <p className="text-[#737373] text-sm mt-1">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
