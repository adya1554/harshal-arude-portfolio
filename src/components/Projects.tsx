
import React from 'react';
import { Code, Calendar } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Design & Fabrication of Hill Assessment System using Ratchet and Pawl Mechanism",
      period: "BE 8th Sem (2022)",
      description: "Developed a mechanical system that assists vehicles on inclines, preventing rollback on hill roads. Utilized ratchet and pawl mechanism to lock the motion of the axle, improving safety and control in real-time condition.",
      technologies: ["Mechanical Design", "Ratchet & Pawl Mechanism", "Vehicle Safety Systems", "CAD Modeling"],
      highlights: [
        "Improved vehicle safety on inclined roads",
        "Real-time axle locking mechanism", 
        "Practical application for automotive industry",
        "Mechanical engineering principles implementation"
      ],
      color: "from-blue-600 to-blue-700"
    },
    {
      title: "Hydraulic Ram Pump",
      period: "Diploma 6th Sem (2018)", 
      description: "Designed a self-powered water pump system that utilizes the kinetic energy of flowing water to lift a portion of it to a higher elevation without electricity or fuel. Demonstrated potential use in rural and agricultural irrigation systems.",
      technologies: ["Hydraulic Systems", "Energy Conservation", "Water Management", "Sustainable Design"],
      highlights: [
        "Zero electricity/fuel requirement",
        "Utilizes kinetic energy of flowing water",
        "Suitable for rural irrigation systems",
        "Sustainable water lifting solution"
      ],
      color: "from-purple-600 to-purple-700"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50" id="projects">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Innovative mechanical engineering solutions demonstrating practical problem-solving skills
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow p-8 border border-gray-100">
              <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-br ${project.color}`}>
                      <Code className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{project.title}</h3>
                      <div className="flex items-center gap-2 text-gray-600 mt-1">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">{project.period}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 leading-relaxed mb-6">{project.description}</p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Technologies & Concepts</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className={`px-3 py-1 bg-gradient-to-r ${project.color} text-white text-sm rounded-full`}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Project Highlights</h4>
                  <div className="space-y-3">
                    {project.highlights.map((highlight, highlightIndex) => (
                      <div key={highlightIndex} className="flex items-start gap-3">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${project.color} mt-2 flex-shrink-0`}></div>
                        <span className="text-gray-600 text-sm leading-relaxed">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Project Info */}
        <div className="mt-12 bg-white p-8 rounded-2xl shadow-lg text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Project Philosophy</h3>
          <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed">
            My projects reflect a commitment to practical engineering solutions that address real-world challenges. 
            From sustainable water management to automotive safety improvements, each project demonstrates the 
            application of mechanical engineering principles to create meaningful impact in society.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
