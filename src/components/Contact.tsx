
import React from 'react';
import { Mail, Phone, User } from 'lucide-react';

const Contact = () => {
  return (
    <section className="py-20 px-4 bg-white" id="contact">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to discuss opportunities in mechanical engineering, CAD design, or project collaboration
          </p>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Let's Connect</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                I'm always interested in discussing new opportunities, challenging projects, 
                or collaborating on innovative mechanical engineering solutions. Whether you're 
                looking for CAD expertise, maintenance engineering experience, or product 
                development skills, I'd love to hear from you.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-blue-600 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Phone</p>
                    <p className="text-gray-600">+91 9359231995</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-purple-600 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <p className="text-gray-600">harshalarude0799@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-green-600 p-3 rounded-lg">
                    <User className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Location</p>
                    <p className="text-gray-600">Post Gulani, Tal-Khed<br />Dist-Pune 410505, Maharashtra</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h4 className="text-xl font-bold text-gray-900 mb-6">Areas of Expertise</h4>
              <div className="space-y-4">
                {[
                  "CAD Design & Modeling",
                  "Mechanical Engineering",
                  "Product Development", 
                  "Maintenance Engineering",
                  "Industrial Automation",
                  "Sheet Metal Design"
                ].map((area, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700">{area}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-white text-center">
                <p className="font-medium">Available for</p>
                <p className="text-sm text-blue-100">Full-time positions & freelance projects</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-gray-200">
          <p className="text-gray-600">
            © 2024 Harshal Arude. Built with passion for mechanical engineering excellence.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
