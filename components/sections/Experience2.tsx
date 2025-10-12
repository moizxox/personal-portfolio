"use client";
import { useState } from "react";
import Link from "next/link";

export default function Experience2() {
  const experiences = [
    {
      id: "devnosol",
      company: "Devno Sol",
      logo: "assets/imgs/exp/devno-logo.jpeg",
      duration: "Jun 2024 - Present",
      role: "Full Stack Web Developer",
      description: [
        "Leading WordPress plugin & theme development with headless architecture.",
        "Building React.js & Next.js apps with API integrations and GSAP animations.",
        "Delivering pixel-perfect UI from Figma and optimizing performance.",
      ],
      tech: ["WordPress", "React.js", "Next.js", "Tailwind", "GSAP"],
    },
    {
      id: "codelet",
      company: "Codelet Digital",
      logo: "assets/imgs/exp/codelet-logo.jpeg",
      duration: "Jun 2022 - Present",
      role: "Founder & Full Stack Developer",
      description: [
        "Founded and manage a digital development agency.",
        "Deliver end-to-end WordPress and MERN solutions with SEO strategy.",
        "Led multiple client projects from custom plugins to dashboards.",
      ],
      tech: ["WordPress", "Node.js", "React.js", "Next.js", "MongoDB"],
    },
    {
      id: "gohigh",
      company: "Go High Web",
      logo: "assets/imgs/exp/ghw-logo.png",
      duration: "Feb 2024 - Jun 2024",
      role: "WordPress Web Developer",
      description: [
        "Built and optimized custom WordPress websites.",
        "Enhanced plugin customization and theme development.",
        "Improved site speed and SEO performance.",
      ],
      tech: ["WordPress", "PHP", "JavaScript", "Elementor", "SEO"],
    },
    {
      id: "webvisions",
      company: "The Web Visions",
      logo: "assets/imgs/exp/wv-logo.jpeg",
      duration: "Jan 2023 - Jan 2024",
      role: "WordPress Developer & SEO Expert",
      description: [
        "Developed WordPress sites from scratch and customized plugins.",
        "Delivered SEO campaigns to boost organic visibility.",
        "Implemented on-page and off-page strategies.",
      ],
      tech: ["WordPress", "PHP", "SEO", "JavaScript", "MySQL"],
    },
  ];

  const [activeExp, setActiveExp] = useState(experiences[0]);

  return (
    <section id="portfolio" className="section-experience pt-5">
      <div className="container">
        <div className="rounded-3 border border-1 position-relative overflow-hidden">
          <div className="box-linear-animation position-relative z-1">
            <div className="p-lg-8 p-md-6 p-3 position-relative z-1">
              <div className="d-flex align-items-center">
                <svg className="text-primary-2 me-2" xmlns="http://www.w3.org/2000/svg" width={5} height={6} viewBox="0 0 5 6" fill="none">
                  <circle cx="2.5" cy={3} r="2.5" fill="#A8FF53" />
                </svg>
                <span className="text-linear-4 d-flex align-items-center">Experience</span>
              </div>
              <h3>
                +4
                <span className="text-300"> years of </span>
                passion
                <span className="text-300">
                  for <br />
                  programming techniques
                </span>
              </h3>
              <div className="row mt-5">
                <div className="col-lg-4">
                  <div className="d-flex flex-column gap-2">
                    {experiences.map((exp) => (
                      <button
                        key={exp.id}
                        onClick={() => setActiveExp(exp)}
                        className={`technology border border-1 rounded-3 p-3 text-start w-100 ${
                          activeExp.id === exp.id ? "active border-primary" : ""
                        }`}
                      >
                        <div className="d-flex align-items-center gap-2">
                          <img
                            src={exp.logo}
                            alt={exp.company}
                            className="img-fluid"
                            style={{ width: "40px", height: "40px", objectFit: "contain" }}
                          />
                          <div className="d-flex flex-column ms-2">
                            <h5 className="mb-1">{exp.company}</h5>
                            <span className="text-300">{exp.duration}</span>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="col-lg-8 ps-lg-5 mt-5 mt-lg-0">
                  <h6 className="text-linear-4">{activeExp.role}</h6>
                  <ul className="mt-4">
                    {activeExp.description.map((item, index) => (
                      <li key={index} className="text-dark mb-3">
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="d-flex flex-wrap align-items-center gap-3 mt-7">
                    {activeExp.tech.map((tech, index) => (
                      <Link key={index} href="#" className="text-300 border border-1 px-3 py-1">
                        {tech}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <img className="position-absolute top-0 start-0 z-0" src="assets/imgs/home-page-2/services/bg.png" alt="background" />
          </div>
        </div>
      </div>
    </section>
  );
}
