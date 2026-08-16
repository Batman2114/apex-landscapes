export default function Gallery() {
  const projects = [
    {
      title: "Tech Park Atrium",
      category: "Corporate Campus",
      image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Luxury Villa Greens",
      category: "Residential Estate",
      image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Corporate Courtyard",
      category: "Commercial Hardscaping",
      image: "https://images.unsplash.com/photo-1557429287-b2e26467fc2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Botanic Boulevard",
      category: "Urban Development",
      image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <section className="py-24 bg-gray-950 text-white px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="max-w-2xl">
            <h2 className="text-emerald-400 font-semibold tracking-wider uppercase text-sm mb-3">
              Portfolio
            </h2>
            <h3 className="text-3xl md:text-5xl font-extrabold tracking-tight">
              Featured Landscaping Projects
            </h3>
          </div>
          <p className="text-gray-400 mt-4 md:mt-0 max-w-md font-light text-sm md:text-base">
            Explore a selection of our finest commercial campus transformations and luxury landscape installations across Gujarat.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="relative h-96 rounded-2xl overflow-hidden group shadow-2xl cursor-pointer"
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                <span className="text-emerald-400 text-xs font-semibold uppercase tracking-wider">
                  {project.category}
                </span>
                <h4 className="text-xl font-bold text-white mt-1">
                  {project.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}