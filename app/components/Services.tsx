export default function Services() {
  const servicesList = [
    {
      title: "Corporate Campus Design",
      description: "Custom landscape architecture tailored for corporate headquarters, tech parks, and business centers in Ahmedabad.",
      image: "https://images.unsplash.com/photo-1558904541-efa8c4a45e4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Automated Irrigation Systems",
      description: "Smart, water-efficient drip and sprinkler installations engineered to optimize water usage across sprawling estates.",
      image: "https://images.unsplash.com/photo-1584467735811-9942f882f042?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Contract Maintenance",
      description: "Comprehensive upkeep including turf management, seasonal planting, pruning, and fertilization for luxury properties.",
      image: "https://images.unsplash.com/photo-1592417817098-8f3d6eb26474?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <section className="py-24 bg-gray-50 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-emerald-600 font-semibold tracking-wider uppercase text-sm mb-3">
            Our Expertise
          </h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            Commercial Landscaping Solutions
          </h3>
          <p className="text-gray-600 mt-4 text-lg font-light">
            We transform corporate environments into breathtaking, sustainable outdoor spaces that leave a lasting impression.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicesList.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col group border border-gray-100"
            >
              <div className="h-56 overflow-hidden relative">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">
                  {service.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow font-light">
                  {service.description}
                </p>
                <button className="text-emerald-600 font-semibold text-sm inline-flex items-center hover:text-emerald-700 transition-colors">
                  Learn More &rarr;
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}