
import React from 'react';
import { Book, Calendar, User } from 'lucide-react';

const About = () => {
  const education = [
    {
      degree: "Bachelor Of Engineering in Mechanical Engineering",
      institution: "Marathawada Mitra Mandal College Of Engineering, Lohagaon, Pune",
      year: "2022",
      grade: "8.37/10 CGPA",
      university: "SPPU"
    },
    {
      degree: "Diploma In Mechanical",
      institution: "Jaihind Polytechnic, Kuran, Junner",
      year: "2018",
      grade: "65.24%",
      university: "MSBTE"
    },
    {
      degree: "Secondary School (10th)",
      institution: "Mahatma Gandhi Vidyalaya, Rajgurunagar",
      year: "2015",
      grade: "75.40%",
      university: ""
    }
  ];

  return (
    <section className="py-20 px-4 bg-white" id="about">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Me</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A dedicated Mechanical Engineer with hands-on experience in CAD design, maintenance engineering, 
            and product development across automotive and energy sectors.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <User className="w-6 h-6 text-blue-600" />
                Professional Summary
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Mechanical Engineer with expertise in CAD software including AutoCAD, CATIA, SolidWorks, and Creo. 
                Experienced in maintenance engineering at Bharat Forge and product development at Vertiv Energy. 
                Strong background in mechanical design, troubleshooting, and production-ready drafting.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-600 text-white p-6 rounded-xl text-center">
                <div className="text-3xl font-bold">1.75+</div>
                <div className="text-blue-100">Years Experience</div>
              </div>
              <div className="bg-purple-600 text-white p-6 rounded-xl text-center">
                <div className="text-3xl font-bold">5+</div>
                <div className="text-purple-100">CAD Software</div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Book className="w-6 h-6 text-blue-600" />
              Education
            </h3>
            
            {education.map((edu, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-3 rounded-lg">
                    <Calendar className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 mb-2">{edu.degree}</h4>
                    <p className="text-gray-600 mb-2">{edu.institution}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-blue-600 font-medium">{edu.grade}</span>
                      <span className="text-gray-500 text-sm">{edu.year}</span>
                    </div>
                    {edu.university && (
                      <span className="text-xs text-gray-400">({edu.university})</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
