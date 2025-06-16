
import React from 'react';
import { Code, User } from 'lucide-react';

const Skills = () => {
  const cadSkills = [
    { name: "AutoCAD (2D/3D)", level: 90, description: "Skilled in detailed drafting and layout plans" },
    { name: "CATIA", level: 95, description: "Proficient in part modeling, assembly design, drafting, sheet metal, and surface modeling" },
    { name: "SolidWorks", level: 90, description: "Strong command of part and assembly design, advanced sheet metal and surfacing operations" },
    { name: "Creo", level: 85, description: "Experienced in mechanical modeling, assembly, and production-ready drafting" },
    { name: "Solid Edge", level: 80, description: "Able to model and draft mechanical components efficiently" },
    { name: "Plastic Domain", level: 60, description: "Currently undergoing training" }
  ];

  const technicalSkills = [
    "CNC Programming & Operating",
    "Machine Maintenance",
    "Troubleshooting",
    "Preventive Maintenance", 
    "Mechanical Design",
    "Product Development",
    "BOM Creation",
    "Document Change Requests (DCR)",
    "G-code Programming",
    "MS Office (MSCIT Certified)"
  ];

  const coreStrengths = [
    "Strong mechanical design and modeling ability",
    "Solid foundation in product development and CAD documentation", 
    "Hands-on maintenance knowledge with real-world troubleshooting skills",
    "Adaptive, quick learner, and always ready to take initiative",
    "Capable of working independently and collaboratively in fast-paced environments"
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50" id="skills">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Skills</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive expertise in CAD software, mechanical engineering, and manufacturing processes
          </p>
        </div>

        {/* CAD Skills */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
            <Code className="w-6 h-6 text-blue-600" />
            CAD Software Expertise
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {cadSkills.map((skill, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex justify-between items-center mb-3">
                  <h4 className="font-semibold text-gray-900">{skill.name}</h4>
                  <span className="text-blue-600 font-medium">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3 mb-3">
                  <div 
                    className="bg-gradient-to-r from-blue-600 to-purple-600 h-3 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <p className="text-gray-600 text-sm">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Technical Competencies</h3>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="grid grid-cols-1 gap-3">
                {technicalSkills.map((skill, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Core Strengths */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <User className="w-6 h-6 text-purple-600" />
              Core Strengths
            </h3>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="space-y-4">
                {coreStrengths.map((strength, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700 leading-relaxed">{strength}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
