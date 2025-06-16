
import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "CAD Engineer",
      company: "Vertiv Energy Private Limited",
      duration: "2023 - 2024",
      period: "9 months",
      responsibilities: [
        "Created detailed 2D and 3D models with a strong focus on sheet metal design and mechanical product development",
        "Collaborated with design teams to create customized parts like pipe lifting mechanisms, cable protection guards, panels, and doors",
        "Proficiently handled DCR (Document Change Requests) and made necessary design modifications as per internal guidelines",
        "Successfully contributed to BOM creation and updates aligned with Vertiv's engineering change process"
      ],
      color: "from-blue-600 to-blue-700"
    },
    {
      title: "Maintenance Employee",
      company: "Bharat Forge Private Limited",
      duration: "2019 - 2020", 
      period: "1 year",
      responsibilities: [
        "Worked in machine maintenance, focusing on solving critical breakdowns and performing preventive maintenance",
        "Troubleshooter and repaired various mechanical assemblies like oil leakages, headstock/tailstock assembly, gearboxes, pumps, and belt systems",
        "Contributed to plant uptime by quickly diagnosing mechanical issues and ensuring efficient, timely repairs"
      ],
      color: "from-purple-600 to-purple-700"
    }
  ];

  return (
    <section className="py-20 px-4 bg-white" id="experience">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Experience</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hands-on experience in mechanical engineering, CAD design, and industrial maintenance
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600 hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full border-4 border-white shadow-lg hidden md:block"></div>
                
                <div className="md:ml-16">
                  <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow p-8 border border-gray-100">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{exp.title}</h3>
                        <div className="flex items-center gap-2 text-lg font-semibold text-gray-700 mb-2">
                          <Briefcase className="w-5 h-5" />
                          {exp.company}
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Calendar className="w-5 h-5" />
                        <div className="text-right">
                          <div className="font-medium">{exp.duration}</div>
                          <div className="text-sm text-gray-500">({exp.period})</div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      {exp.responsibilities.map((responsibility, respIndex) => (
                        <div key={respIndex} className="flex items-start gap-3">
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${exp.color} mt-2 flex-shrink-0`}></div>
                          <p className="text-gray-600 leading-relaxed">{responsibility}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Certifications */}
        <div className="mt-16 bg-gradient-to-br from-gray-50 to-blue-50 p-8 rounded-2xl">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Additional Qualifications</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h4 className="font-semibold text-gray-900 mb-3">CNC Programming & Operating</h4>
              <p className="text-gray-600 text-sm">Basic to intermediate level knowledge of CNC machine operation and manual G-code programming. Familiar with setting tools, understanding offsets, and interpreting CNC drawing documentation.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h4 className="font-semibold text-gray-900 mb-3">MSCIT & NCC</h4>
              <p className="text-gray-600 text-sm">Basic computer literacy, MS Office, and internet operations. National Cadet Corps training demonstrating leadership and discipline.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
