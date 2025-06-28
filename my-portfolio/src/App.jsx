import { useState } from 'react';

export default function App() {
  const [activeTab, setActiveTab] = useState('about');

  // Personal Information
  const name = "Muhammad Umer";
  const title = "Senior SQA Engineer | Ensuring High-Quality Software, One Test at a Time";
  const email = "umerk257@gmail.com";
  const linkedin = "https://www.linkedin.com/in/muhammad-umer-b19542171/ ";
  const github = "https://github.com/umer-sqa-code/course-automation.git ";
  const phone = "+923146202284";

  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur-md z-50 shadow-lg">
        <nav className="container mx-auto px-4 md:px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <img
              src="https://media.licdn.com/dms/image/v2/D4D03AQG73tJvX1YUjg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1705391632214?e=2147483647&v=beta&t=IsNKLHPAF30ISQM6tevFXVv8IobSAa4uYaPRTk-nKIc "
              alt="Profile Picture"
              className="w-10 h-10 rounded-full hover:scale-110 transition-transform duration-300 cursor-pointer"
            />
            <h1 className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Muhammad Umer
            </h1>
          </div>
          <ul className="hidden sm:flex space-x-4 md:space-x-6">
            {['about', 'skills', 'projects', 'tutorials', 'contact'].map((tab) => (
              <li key={tab}>
                <button
                  onClick={() => setActiveTab(tab)}
                  className={`hover:text-purple-400 transition ${activeTab === tab ? 'text-purple-400' : ''}`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button className="sm:hidden text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </nav>
      </header>

      {/* Hero Section with 3D Cube Animation */}
      <section className="pt-32 pb-20 relative overflow-hidden bg-hero-animation">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="container mx-auto px-4 md:px-6 flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-10 lg:mb-0 transform hover:scale-105 transition-transform duration-300">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-4">
              {name}, {title}
            </h2>
            <p className="text-lg text-gray-300 mb-6">
              Passionate about testing web and mobile applications, especially e-commerce platforms.
            </p>
            <div className="flex flex-wrap gap-3">
              <a 
                href={linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                LinkedIn
              </a>
              <a 
                href={github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub
              </a>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            {/* 3D Rotating Cube */}
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 perspective-1000">
              <div className="cube w-full h-full rotate-cube">
                <div className="cube-face cube-face-front bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-2xl">
                  <span className="text-3xl sm:text-4xl">🧪</span>
                </div>
                <div className="cube-face cube-face-back bg-gradient-to-br from-green-500 to-teal-600 rounded-xl flex items-center justify-center shadow-2xl">
                  <span className="text-3xl sm:text-4xl">🛠️</span>
                </div>
                <div className="cube-face cube-face-right bg-gradient-to-br from-red-500 to-orange-600 rounded-xl flex items-center justify-center shadow-2xl">
                  <span className="text-3xl sm:text-4xl">🔍</span>
                </div>
                <div className="cube-face cube-face-left bg-gradient-to-br from-yellow-500 to-amber-600 rounded-xl flex items-center justify-center shadow-2xl">
                  <span className="text-3xl sm:text-4xl">💻</span>
                </div>
                <div className="cube-face cube-face-top bg-gradient-to-br from-purple-600 to-violet-700 rounded-xl flex items-center justify-center shadow-2xl">
                  <span className="text-3xl sm:text-4xl">📊</span>
                </div>
                <div className="cube-face cube-face-bottom bg-gradient-to-br from-pink-500 to-rose-600 rounded-xl flex items-center justify-center shadow-2xl">
                  <span className="text-3xl sm:text-4xl">🚀</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 md:px-6 py-10 md:py-20">
        {activeTab === 'about' && (
          <section id="about" className="fade-in">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 border-b border-gray-700 pb-2 inline-block">About Me</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
              <div>
                <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                  I'm a passionate Software Engineer specializing in testing web and mobile applications,
                  particularly e-commerce platforms. With hands-on expertise in tools like Selenium, Postman, JMeter, and Appium,
                  I deliver defect-free software through rigorous functional, non-functional, and regression testing.
                </p>
                <p className="text-base md:text-lg text-gray-300 mt-4 leading-relaxed">
                  Leveraging Agile methodologies, I ensure smooth API validation and efficient development workflows,
                  always striving for continuous improvement and quality assurance excellence.
                </p>
              </div>
              <div className="bg-gray-800 p-4 md:p-6 rounded-xl shadow-xl hover:shadow-2xl transition-shadow">
                <h4 className="text-xl md:text-2xl font-semibold mb-4">Professional Expertise</h4>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="mr-2 text-purple-400">•</span> Defect-free software delivery
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-purple-400">•</span> Functional & non-functional testing
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-purple-400">•</span> E-commerce platform specialization
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-purple-400">•</span> Agile methodology implementation
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-purple-400">•</span> API validation & test automation
                  </li>
                </ul>
              </div>
            </div>
          </section>
        )}

        {activeTab === 'skills' && (
          <section id="skills" className="fade-in">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 border-b border-gray-700 pb-2 inline-block">Skills</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {[
                { name: 'Manual Testing', level: 90 },
                { name: 'Test Automation', level: 85 },
                { name: 'API Testing', level: 80 },
                { name: 'Performance Testing', level: 75 },
                { name: 'CI/CD Integration', level: 80 },
                { name: 'Bug Tracking Tools', level: 90 },
              ].map((skill, index) => (
                <div key={index} className="bg-gray-800 p-4 md:p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all">
                  <h4 className="text-xl font-semibold mb-2">{skill.name}</h4>
                  <div className="w-full bg-gray-700 rounded-full h-3 mb-2">
                    <div
                      className="bg-gradient-to-r from-purple-500 to-pink-500 h-3 rounded-full"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-400">{skill.level}% Proficiency</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {activeTab === 'projects' && (
          <section id="projects" className="fade-in">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 border-b border-gray-700 pb-2 inline-block">Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "E-commerce Platform",
                  description: "Built comprehensive test suite covering checkout flow, payment gateways, and inventory management.",
                  tech: "Selenium | Postman | Jira"
                },
                {
                  title: "Mobile Banking App",
                  description: "Led QA efforts for iOS and Android apps, including biometric authentication and transaction testing.",
                  tech: "Appium | Firebase Test Lab | Charles Proxy"
                },
                {
                  title: "Healthcare Dashboard",
                  description: "Validated HIPAA compliance and conducted performance testing under heavy load conditions.",
                  tech: "JMeter | Grafana | Locust"
                }
              ].map((project, idx) => (
                <div key={idx} className="bg-gray-800 p-4 md:p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all group">
                  <h4 className="text-xl font-bold mb-2 group-hover:text-purple-400 transition">{project.title}</h4>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="text-xs text-purple-300 font-mono">{project.tech}</div>
                </div>
              ))}
            </div>
          </section>
        )}

        {activeTab === 'tutorials' && (
          <section id="tutorials" className="fade-in">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 border-b border-gray-700 pb-2 inline-block">Tutorials</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-800 p-4 rounded-xl shadow-lg">
                <h4 className="text-xl font-bold mb-2">Course Automation</h4>
                <div className="aspect-video bg-black rounded-lg overflow-hidden">
                  <iframe
                    src="https://streamable.com/e/x5o96r "
                    allowFullScreen
                    title="Course Automation"
                    className="w-full h-full"
                  ></iframe>
                </div>
              </div>
              <div className="bg-gray-800 p-4 rounded-xl shadow-lg">
                <h4 className="text-xl font-bold mb-2">Order Automation</h4>
                <div className="aspect-video bg-black rounded-lg overflow-hidden">
                  <iframe
                    src="https://streamable.com/e/msjpvm "
                    allowFullScreen
                    title="Order Automation"
                    className="w-full h-full"
                  ></iframe>
                </div>
              </div>
            </div>
          </section>
        )}

        {activeTab === 'contact' && (
          <section id="contact" className="fade-in">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 border-b border-gray-700 pb-2 inline-block">Contact</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <svg className="w-6 h-6 text-purple-400 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div>
                  <h5 className="font-semibold">Email</h5>
                  <p className="text-gray-300">{email}</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <svg className="w-6 h-6 text-purple-400 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>
                  <h5 className="font-semibold">Phone</h5>
                  <p className="text-gray-300">{phone}</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <svg className="w-6 h-6 text-purple-400 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <h5 className="font-semibold">Location</h5>
                  <p className="text-gray-300">Pakistan</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <svg className="w-6 h-6 text-purple-400 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
                <div>
                  <h5 className="font-semibold">Connect</h5>
                  <div className="flex flex-wrap gap-2 mt-1">
                    <a href={linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">
                      LinkedIn
                    </a>
                    <a href={github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-300 transition-colors">
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-black/80 backdrop-blur-md py-6 md:py-8 border-t border-gray-800">
        <div className="container mx-auto px-4 md:px-6 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} {name}. All rights reserved.</p>
        </div>
      </footer>

      {/* CSS Animations */}
      <style jsx>{`
        .fade-in {
          animation: fadeIn 0.6s ease-out forwards;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .bg-grid-pattern {
          background-image: linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px);
          background-size: 20px 20px;
        }

        /* Background Animation */
        .bg-hero-animation {
          background: linear-gradient(
            45deg,
            #1e293b,
            #2f3e50,
            #1e293b
          );
          background-size: 400% 400%;
          animation: gradientAnimation 15s ease infinite;
        }

        @keyframes gradientAnimation {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        /* 3D Cube Animation */
        .perspective-1000 {
          perspective: 1000px;
        }

        .rotate-cube {
          position: relative;
          width: 100%;
          height: 100%;
          transform-style: preserve-3d;
          animation: spin 10s infinite linear;
          transition: transform 1s ease-out;
        }

        .rotate-cube:hover {
          animation-play-state: paused;
        }

        @keyframes spin {
          from { transform: rotateX(0deg) rotateY(0deg); }
          to { transform: rotateX(360deg) rotateY(360deg); }
        }

        .cube-face {
          position: absolute;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
          color: white;
          backface-visibility: hidden;
          border-radius: 1rem;
        }

        .cube-face-front  { transform: translateZ(100px); }
        .cube-face-back   { transform: rotateY(180deg) translateZ(100px); }
        .cube-face-right  { transform: rotateY(90deg) translateZ(100px); }
        .cube-face-left   { transform: rotateY(-90deg) translateZ(100px); }
        .cube-face-top    { transform: rotateX(90deg) translateZ(100px); }
        .cube-face-bottom { transform: rotateX(-90deg) translateZ(100px); }
      `}</style>
    </div>
  );
}

