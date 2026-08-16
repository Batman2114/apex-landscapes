export default function Hero() {
  return (
    <div 
      className="relative min-h-screen bg-cover bg-center flex flex-col" 
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')" }}
    >
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      <nav className="relative z-10 flex justify-between items-center p-6 md:px-12 w-full">
        <div className="text-white text-2xl font-extrabold tracking-widest uppercase">
          Apex Landscapes
        </div>
        <button className="hidden md:block bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2.5 rounded-full font-medium transition-colors">
          Request a Quote
        </button>
      </nav>

      <div className="relative z-10 flex-grow flex flex-col justify-center items-center text-center px-4 w-full max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 drop-shadow-xl leading-tight">
          Elevating Ahmedabad's <br className="hidden md:block"/> Commercial Spaces.
        </h1>
        <h2 className="text-lg md:text-2xl text-gray-200 mb-10 max-w-3xl font-light">
          Premium landscape design, installation, and maintenance for corporate campuses and luxury estates.
        </h2>
        <button className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-bold shadow-2xl transition-transform hover:scale-105">
          Get Your Free Site Assessment
        </button>
      </div>
    </div>
  );
}