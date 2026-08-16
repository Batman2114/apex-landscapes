"use client";

export default function Contact() {
  return (
    <section className="py-24 bg-white px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-emerald-600 font-semibold tracking-wider uppercase text-sm mb-3">
            Get In Touch
          </h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-6">
            Ready to Transform Your Commercial Space?
          </h3>
          <p className="text-gray-600 text-lg font-light mb-8 leading-relaxed">
            Contact our landscape architecture team in Ahmedabad today to schedule your free site assessment and consultation.
          </p>
          
          <div className="space-y-4 text-gray-700">
            <p className="flex items-center gap-3">
              <span className="font-semibold text-gray-900">Location:</span> S.G. Highway, Ahmedabad, Gujarat
            </p>
            <p className="flex items-center gap-3">
              <span className="font-semibold text-gray-900">Email:</span> contact@apexlandscapes.com
            </p>
            <p className="flex items-center gap-3">
              <span className="font-semibold text-gray-900">Phone:</span> +91 (079) XXXX-XXXX
            </p>
          </div>
        </div>

        <div className="bg-gray-50 p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100">
          <h4 className="text-2xl font-bold text-gray-900 mb-6">Request a Free Consultation</h4>
          
          <form onSubmit={(e) => { e.preventDefault(); alert("Thank you! Your quote request has been received."); }} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input 
                type="text" 
                required 
                placeholder="Enter your name" 
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:outline-none bg-white text-gray-900"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <input 
                type="email" 
                required 
                placeholder="name@company.com" 
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:outline-none bg-white text-gray-900"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Project Details / Scope</label>
              <textarea 
                rows={4} 
                required 
                placeholder="Tell us about your property and landscaping needs..." 
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:outline-none bg-white text-gray-900"
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 rounded-xl transition-colors shadow-lg"
            >
              Submit Request
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}