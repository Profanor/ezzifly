import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full h-[600px] relative flex flex-col items-center pt-8 md:pt-12">
      {/* background image */}
      <Image
        src="/assets/bg.jpg"
        alt="Hero Background"
        fill
        className="object-cover"
        priority
      />

      {/* overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* headline */}
      <div className="relative z-10 w-full max-w-6xl text-center md:text-left px-6 mt-10">
        <h1 className="text-white text-3xl md:text-5xl font-bold leading-snug">
          Travel Safe with Us and Enjoy Seamless
          <br className="md:hidden" />
          <span className="block">Movement</span>
        </h1>
      </div>

      {/* buttons, cards, search button container */}
      <div className="relative z-10 flex flex-col gap-6 w-full max-w-6xl mt-14 text-center md:text-left md:mr-10">
        {/* Toggle buttons */}
        <div className="flex gap-3 justify-center md:justify-start">
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-white text-white text-sm font-medium bg-transparent hover:bg-white/10 transition">
            Round Trip
            <Image
              src="/assets/chevron-down_white.svg"
              alt="Chevron Down"
              width={12}
              height={12}
            />
          </button>
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-white text-white text-sm font-medium bg-transparent hover:bg-white/10 transition">
            Economy
            <Image
              src="/assets/chevron-down_white.svg"
              alt="Chevron Down"
              width={12}
              height={12}
            />
          </button>
        </div>

        {/* input cards */}
        <div className="flex flex-col md:flex-row gap-3 justify-center md:justify-start">
          {[
            { label: "From", type: "text", placeholder: "City or Airport" },
            { label: "To", type: "text", placeholder: "City or Airport" },
            { label: "Depart", type: "date" },
            { label: "Return", type: "date" },
            { label: "Travellers", type: "number", placeholder: "1", min: 1 },
          ].map((item) => (
            <div
              key={item.label}
              className="bg-white px-4 py-3 rounded-lg shadow-md flex flex-col w-full md:w-60 hover:shadow-lg transition"
            >
              <label className="text-xs text-gray-500">{item.label}</label>
              <input
                type={item.type}
                placeholder={item.placeholder}
                min={item.min}
                className="outline-none text-sm mt-1"
              />
            </div>
          ))}
        </div>

        {/* Search button centered */}
        <div className="flex justify-center mt-4 md:justify-center">
          <button className="px-6 py-3 bg-[#295B86] text-white rounded-lg font-medium w-full md:w-40 hover:bg-[#1f4a6b] transition">
            Search
          </button>
        </div>
      </div>
    </section>
  );
}
