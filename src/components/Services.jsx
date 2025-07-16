import React, { useEffect, useRef } from "react";

const services = [
  {
    title: "Web Development",
    desc: "Building responsive, performant websites with modern tech.",
    side: "left",
  },
  {
    title: "UI / UX Design",
    desc: "Crafting intuitive interfaces and delightful user experiences.",
    side: "right",
  },
  {
    title: "Backend & APIs",
    desc: "Designing scalable servers, databases, and RESTful services.",
    side: "left",
  },
  {
    title: "SEO Optimization",
    desc: "Improving site visibility and search rankings with best practices.",
    side: "right",
  },
  {
    title: "Security & DDoS Protection",
    desc: "Hardening sites and shielding from attacks to keep you online.",
    side: "left",
  },
  {
    title: "Admin Panel Development",
    desc: "Building custom back‑office dashboards for your e‑commerce needs.",
    side: "right",
  },
  {
    title: "Cheap & Fast Delivery",
    desc: "From concept to launch in record time—without breaking the bank.",
    side: "left",
  },
  {
    title: "Hosting & Deployment",
    desc: "End‑to‑end setup: servers, domains, SSL, and continuous delivery.",
    side: "right",
  },
];

function Services() {
  const lineRef = useRef(null);
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    // Animate the vertical line when section comes into view
    const line = lineRef.current;
    const section = sectionRef.current;

    const lineObserver = new window.IntersectionObserver(
      (entries, obs) => {
        if (entries[0].isIntersecting) {
          line.style.transform = "scaleY(1)";
          obs.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (section) lineObserver.observe(section);

    // Animate cards in/out on scroll
    const cardObserver = new window.IntersectionObserver(
      (entries) => {
        entries.forEach(({ target, isIntersecting }) => {
          if (isIntersecting) {
            target.classList.add("visible");
          } else {
            target.classList.remove("visible");
          }
        });
      },
      { threshold: 0.3 }
    );

    cardRefs.current.forEach((card) => {
      if (card) cardObserver.observe(card);
    });

    // Cleanup
    return () => {
      lineObserver.disconnect();
      cardObserver.disconnect();
    };
  }, []);

  return (
    <section id="services" className="services" ref={sectionRef}>
      <div className="services-line" ref={lineRef}></div>
      {services.map((service, i) => (
        <div
          className="service-card"
          data-side={service.side}
          key={service.title}
          ref={el => (cardRefs.current[i] = el)}
        >
          <h3>{service.title}</h3>
          <p>{service.desc}</p>
        </div>
      ))}
    </section>
  );
}

export default Services;