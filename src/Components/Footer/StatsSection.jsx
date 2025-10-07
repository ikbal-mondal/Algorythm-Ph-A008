import React from "react";

const StatsSection = () => {
  const stats = [
    {
      title: "Total Downloads",
      value: "29.6M",
      note: "21% More Than Last Month",
    },
    {
      title: "Total Reviews",
      value: "906K",
      note: "46% More Than Last Month",
    },
    {
      title: "Active Apps",
      value: "132+",
      note: "31 More Will Launch",
    },
  ];

  return (
    <section className="w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-purple-500 text-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-12">
          Trusted By Millions, Built For You
        </h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
          {stats.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <h3 className="text-sm text-purple-100 mb-2">{item.title}</h3>
              <p className="text-4xl sm:text-5xl font-extrabold mb-1">
                {item.value}
              </p>
              <p className="text-sm text-purple-200">{item.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
