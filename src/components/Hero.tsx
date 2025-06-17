
import React from 'react';
import { Mail, Phone, User } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-1000"></div>
      </div>
      
      <div className="container mx-auto text-center relative z-10">
        <div className="animate-fade-in">
          <div className="w-32 h-32 mx-auto mb-8 rounded-full overflow-hidden shadow-2xl border-4 border-white">
  <img
    src="/harsha.jpg"
    alt="Aditya Magadum"
    className="w-full h-full object-cover"
  />
</div>

          
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4 tracking-tight">
            Harshal <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Arude</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Mechanical Engineer & CAD Specialist
          </p>
          
          <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto">
            Experienced in AutoCAD, CATIA, SolidWorks, and Creo with expertise in mechanical design, 
            maintenance engineering, and product development
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-gray-600">
            <div className="flex items-center gap-2 hover:text-blue-600 transition-colors">
              <Phone className="w-5 h-5" />
              <span>+91 9359231995</span>
            </div>
            <div className="flex items-center gap-2 hover:text-blue-600 transition-colors">
              <Mail className="w-5 h-5" />
              <span>harshalarude0799@gmail.com</span>
            </div>
          </div>
          
          <div className="mt-8 text-sm text-gray-500">
            Post Gulani, Tal-Khed, Dist-Pune 410505
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-300 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
