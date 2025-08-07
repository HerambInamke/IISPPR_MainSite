import { useState, useEffect, useRef } from "react";
import TestimonialCard from "./TestimonialCard";

const testimonials = [
  {
    color: "#1E293B",
    name: "Christopher K.",

    testimonialdata:
      "The program has provided me with hands-on training in data analytics and its applications in public policy.",
    imageSrc: "/home/t8.webp",
  },
  {
    color: "#1E293B",
    name: "Latifa M.",

    testimonialdata:
      "I learned how to use tools like R, Power BI, and SPSS to analyze data and make better decisions in public policy.",
    imageSrc: "/home/t2.webp",
  },
  {
    color: "#1E293B",
    name: "Samson A.",

    testimonialdata:
      "The knowledge is unprecedented! The recordings of the lessons continue to be valuable resources for my learning.",
    imageSrc: "/home/t3.webp",
  },
  {
    color: "#0F172A",
    name: "Derrick B.",
    testimonialdata:
      "The facilitators created a collaborative learning environment that fostered innovation and critical thinking.",
    imageSrc: "/home/t4.webp",
  },
  {
    color: "#0F172A",
    name: "Utsab B.",
    testimonialdata:
      "I look forward to staying connected with the organization and contributing to its initiatives in the future.",
    imageSrc: "/home/t5.webp",
  },
  {
    color: "#0F172A",
    name: "Mohamed A.",
    testimonialdata:
      "The sessions were practical and engaging, helping me see how data can improve public service delivery.",
    imageSrc: "/home/t6.webp",
  },
];

const SeeMoreData = [
  {
    name: "A. Mark Kamara Jr.",
    testimonialData:
      "Wonderful experience with the fellowship! I gained valuable insights into R and SPSS, and appreciated the focus on time management. The structure of the sessions helped reinforce learning effectively and efficiently.",
    imageSrc: "/home/t1.webp",
  },
  {
    name: "L. Mustafa",
    testimonialData:
      "The fellowship provided practical training in R, SPSS, Stata, and Power BI. It helped me understand how to apply data analysis in real-world policy problems. It was engaging, insightful, and well-organized.",
    imageSrc: "/home/t2.webp",
  },
  {
    name: "A. S. Akinade",
    testimonialData:
      "Incredible experience! I learned advanced techniques in R, STATA, and SPSS. Access to recorded sessions allowed me to continue learning. The mentorship was excellent and the support team was top-notch.",
    imageSrc: "/home/t3.webp",
  },
  {
    name: "D. Byamungu",
    testimonialData:
      "This fellowship gave me hands-on skills in R Programming, Stata, and Power BI. The collaborative sessions were filled with useful insights that enhanced my understanding of evidence-based policy making.",
    imageSrc: "/home/t4.webp",
  },
  {
    name: "U. Bhattarai",
    testimonialData:
      "I greatly improved my data visualization skills with tools like Stata, Power BI, and R. The sessions were interactive and helped me build confidence while learning through practical examples.",
    imageSrc: "/home/t5.webp",
  },
  {
    name: "S. M. Abdi",
    testimonialData:
      "The training made a big difference in my understanding of data analytics in humanitarian contexts. Learning Stata, Power BI, and R helped me analyze and visualize data for real-world impact.",
    imageSrc: "/home/t6.webp",
  },
  {
    name: "U. J. Kamara",
    testimonialData:
      "Thanks to this fellowship, I now understand how to use SPSS, R, and Power BI. I’m motivated to apply what I’ve learned to uplift my community and support better decision-making.",
    imageSrc: "/home/t7.webp",
  },
  {
    name: "A. C. Kehinde",
    testimonialData:
      "The fellowship sharpened my skills in data interpretation and analysis using SPSS, R, and Power BI. The structure was excellent and I highly recommend it for future professionals in this field.",
    imageSrc: "/home/t8.webp",
  },
  {
    name: "M. O. Qasim",
    testimonialData:
      "An insightful journey into data-driven policy. With tools like R, SPSS, and Power BI, I gained technical expertise and learned how to turn complex datasets into actionable decisions for policy.",
    imageSrc: "/home/t9.webp",
  },
  {
    name: "Z. M. Abdul",
    testimonialData:
      "The teaching methods blended theory and practice seamlessly. I learned to perform meaningful data analysis and gained statistical insights under expert mentors who made learning truly enjoyable.",
    imageSrc: "/home/t10.webp",
  },
  {
    name: "G. K. Too",
    testimonialData:
      "A brilliant experience! The online sessions were engaging and informative. I connected with professionals worldwide and learned to use data for societal development and informed policy making.",
    imageSrc: "/home/t11.webp",
  },
  {
    name: "H. Sekpe",
    testimonialData:
      "This fellowship was a turning point in my career. The practical data sessions, real-life case studies, and in-depth guidance allowed me to see data as a vital policy tool.",
    imageSrc: "/home/t12.webp",
  },
  {
    name: "D. Bigaba",
    testimonialData:
      "Collaborative and practical training enhanced my knowledge in SPSS, R, and Power BI. I now feel empowered to advocate for data-driven decisions in my community and professional space.",
    imageSrc: "/home/t13.webp",
  },
  {
    name: "M. Apollo",
    testimonialData:
      "I explored data coding, statistical analysis, and tests using tools like R and SPSS. Despite technical challenges, access to recorded content ensured I never missed key learning moments.",
    imageSrc: "/home/t14.webp",
  },
  {
    name: "A. Kibet",
    testimonialData:
      "The fellowship expanded my knowledge of healthcare analytics. I now use R, SPSS, and Power BI to make informed decisions in public health research and clinical data interpretation.",
    imageSrc: "/home/t15.webp",
  },
  {
    name: "E. E. Edebor",
    testimonialData:
      "This program equipped me with robust skills in R, STATA, and Power BI. I now apply these to conduct research supporting trade and development under the AfCFTA framework.",
    imageSrc: "/home/t16.webp",
  },
  {
    name: "M. Khare",
    testimonialData:
      "Thanks to this training, I now understand how data drives policy. The case studies and mentorship helped me build a solid foundation in R, SPSS, and Power BI tools.",
    imageSrc: "/home/t17.webp",
  },
];

const TestimonialGrid = () => {
  const scrollContainerRef = useRef(null);
  // State to track if user is hovering over the container
  const [isHovering, setIsHovering] = useState(false);

  // Auto-scrolling effect
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    let animationFrameId;
    let lastTimestamp;
    const scrollSpeed = 0.2; // pixels per millisecond

    const scroll = (timestamp) => {
      if (!lastTimestamp) lastTimestamp = timestamp;

      // Don't scroll if user is hovering
      if (!isHovering) {
        const elapsed = timestamp - lastTimestamp;
        scrollContainer.scrollLeft += scrollSpeed * elapsed;

        // Reset to beginning when reaching the end
        if (
          scrollContainer.scrollLeft >=
          scrollContainer.scrollWidth - scrollContainer.clientWidth - 10
        ) {
          scrollContainer.scrollLeft = 0;
        }
      }

      lastTimestamp = timestamp;
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isHovering]);

  const scrollbarHideStyles = `
        .scrollbar-hide {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;  /* Chrome, Safari and Opera */
        }
      `;

  const hoverCard = `
         .testimonial-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease;
        }

        .testimonial-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        }

    `;

  return (
    <>
      <style jsx global>
        {hoverCard}
      </style>
      <div className="relative bg-secondary-light w-full min-h-screen">
        <div className="flex flex-col items-center justify-center w-full h-full">
          {/* =========================
                    Main Testimonial Section
                ========================= */}
          <div className="relative mb-20 md:mb-32 flex testimonial-card shadow-xl flex-col top-12 md:top-[100px] bg-gradient-to-br from-primary-dark via-secondary-dark to-secondary-light border border-secondary-dark rounded-2xl items-center w-full max-w-xs sm:max-w-md md:max-w-2xl justify-center h-auto min-h-[340px] md:min-h-[260px] transition-all duration-300 p-4">
            <div className="flex flex-col items-center justify-center w-full pt-4 md:pt-8">
              <img
                className="bg-white w-20 h-20 md:w-28 md:h-28 rounded-full shadow-lg border-4 border-primary object-cover"
                src="/home/t1.webp"
                alt="Anthony M."
              />
              <span className="font-bold text-lg md:text-xl text-primary p-2 text-center mt-4">
                Anthony M.
              </span>
            </div>
            <div className="w-full px-4 md:px-8 py-4 md:py-6 rounded-xl text-center flex items-center justify-center bg-secondary-light mt-4 shadow-inner">
              <span className="font-medium text-primary text-base md:text-lg">
                My experience during the program was wonderful. I have no
                regrets about the knowledge I gained.
              </span>
            </div>
          </div>


          {/* testimonialCards grid */}
<div className="w-full max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
  {testimonials.map((t, index) => (
    <TestimonialCard
      key={index}
      color={t.color}
      name={t.name}
      imageSrc={t.imageSrc}
      testimonialdata={t.testimonialdata}
    />
  ))}
</div>

        </div>

        {/* SEE MORE SECTION */}
        <section className="py-16 bg-secondary-light relative overflow-hidden">
          <style jsx>{scrollbarHideStyles}</style>
          <div className="px-4 relative z-10">
            <div className="flex items-center justify-center w-full gap-1 mb-10">
              <div className="bg-primary w-[40px] h-[2px]"></div>
              <h2 className="text-4xl font-serif text-primary font-medium text-center">
                See More
              </h2>
              <div className="bg-primary w-[40px] h-[2px]"></div>
            </div>
            <div className="relative w-full">
              <div
                className="flex overflow-x-auto scrollbar-hide -mx-4 px-4 space-x-6"
                ref={scrollContainerRef}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                style={{ scrollBehavior: "smooth" }}
              >
                {SeeMoreData.map((t, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 flex flex-col items-center justify-between text-primary w-80 bg-white pt-8 p-6 rounded-xl shadow-lg border border-secondary-dark hover:bg-secondary transition-all duration-300"
                  >
                    <div className="flex flex-col items-center justify-center mb-4">
                      <div className="w-[80px] h-[80px] bg-secondary-light rounded-full overflow-hidden border-2 border-primary mb-2">
                        <img
                          src={t.imageSrc}
                          alt={t.name}
                          className="rounded-full w-full h-full object-cover"
                        />
                      </div>
                      <h4 className="text-center font-bold text-lg">
                        {t.name}
                      </h4>
                    </div>
                    <p className="text-sm flex-1 text-primary text-center">
                      {t.testimonialData}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default TestimonialGrid;
