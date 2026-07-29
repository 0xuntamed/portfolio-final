import Navbar from "@/components/new-nav";
import { ProjectListItem } from "@/components/project-list-item";
import { WorkItem } from "@/components/work-item";
import Blog from "@/components/blog";
import { Contact } from "@/components/contact";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen w-2xl mx-auto bg-white-500">
      <div className="flex flex-col items-center justify-center gap-2">
        <Navbar />
        <section
          id="hero"
          className="mt-20 w-full rounded-3xl border border-black/5 bg-white px-10 py-10 shadow-sm transition-shadow duration-300 hover:shadow-md"
        >
          <div className="flex flex-row items-center justify-center gap-8">
            <div className="shrink-0 perspective-[1000px]">
              <div className="overflow-hidden rounded-2xl shadow-sm transition-all duration-300 ease-out hover:shadow-md hover:transform-[rotateX(6deg)_rotateY(-8deg)_scale(1.02)]">
                <Image
                  src="/academia-bilal-ahmed-new.png"
                  alt="bilal-ahmed"
                  width={200}
                  height={240}
                  className="h-60 w-48 object-cover"
                />
              </div>
            </div>

            <div className="flex flex-col justify-center text-center">
              <h1 className="text-2xl font-semibold">Bilal Ahmed!</h1>
              <p className="font-medium">Software Engineer</p>
              <p className="font-normal">Engineer || Product || Design</p>
            </div>
          </div>

          <div className="mt-8 border-t border-black/5 pt-6">
            <p className="text-l font-normal leading-8 text-black/80">

I like building things that help engineers understand software.

Interested in systems programming, backend engineering, developer tools, and the internals behind modern software.

<br />Always learning.
Always building.
Always asking why.

            </p>
          </div>
        </section>
        
        <section id="experience" className="bg-white w-full  items-center">
          <div >
            <h1 className="font-semibold text-2xl ml-25 mr-10 mt-4 flex items-center justify-center">
              Experience
            </h1>
            <WorkItem
                                  icon="building"
                                  company="Software Consultant"
                                  role="Freelancer"
                                  period="Present"
                                  summary="I build software that solves real engineering problems. My expertise spans backend systems, modern frontend frameworks and AI integrations. From designing high-performance APIs to building developer tools and production-ready applications, I focus on writing software that's fast, reliable, and easy to evolve."

                                  logoUrl="/freelancer-icon.jpg"
            />
            <WorkItem
                                  icon="building"
                                  company="Founding Engineer"
                                  role="Stealth Mode"
                                  period="April 2023 – July 2025"
                                  summary="Designed an automated notification service for high-reliability patient reminders, utilizing telephony integration to ensure real-time delivery.Engineered an automated IVR (Interactive Voice Response) system to deliver real-time compliance reminders and implemented a pharmacy-integrated inventory management.Designed an ”order-from-content” architecture, enabling seamless transaction flow from short-form video engagement to checkout."
                                  logoUrl="/stealth.jpeg"
            />
            <WorkItem
                                  icon="building"
                                  company="Software Engineer"
                                  role="hirex"
                                  period="May 2021 – Mar 2023"
                                  summary="Developed and enhanced web application using React, JavaScript, and Tailwind focusing on responsive
design for web.
Implemented REST APIs to enable seamless communication between frontend and backend services, reduc-
ing load times and improving app performance.
Collaborated directly with clients to gather requirements and deliver tailored solutions, contributing to high
satisfaction rate."
                                  logoUrl=""
            />

            <p className="font-normal text-l ml-25 mr-10"></p>
          </div>
        </section>
        <section id="projects" className="bg-white w-full size-160   items-center">
          <h1 className="font-semibold text-2xl ml-25 mr-10 flex items-center justify-center mt-4">Projects</h1>

          <ProjectListItem
                                title="FrontEnd Design Extractor"
                                links={[
                                  {
                                    label: "live preview ↗",
                                    href: "https://fe-extractor.vercel.app/",
                                  },
                                  {
                                    label: "github ↗",
                                    href: "https://github.com/0xuntamed/fe-extractor",
                                  },
                                ]}
                                bullets={[
                                  "Built a full-stack tool that analyzes public GitHub repositories and live websites to extract colors, typography, spacing, UI libraries, and reusable component patterns.",
                                  "Implemented automatic detection of buttons, inputs, cards, Tailwind utilities, fonts, color groups, border radii, and shadows",

                                ]}
                                tags={["React", "TypeScript", "TailwindCSS"]}
          />
          <ProjectListItem
                                title="Feedback Loop"
                                links={[
                                  {
                                    label: "live preview ↗",
                                    href: "https://feedback-agent-eight.vercel.app/",
                                  },
                                  {
                                    label: "github ↗",
                                    href: "https://github.com/0xuntamed/feedback-agent",
                                  },
                                ]}
                                bullets={[
                                  "Conceptualized and built a responsive product prototype for AI-assisted post-visit follow-ups across healthcare and service businesses.",
                                  "Modeled a four-stage workflow covering contextual outreach, multilingual check-ins, feedback capture, and escalation of high-priority concerns to human teams.",
                                  "Defined safety-focused AI boundaries and human-in-the-loop handoffs to prevent automated diagnosis and route sensitive cases appropriately.",
                                ]}
                                tags={["React", "TypeScript", "TailwindCSS"]}
          />
          <ProjectListItem
                                title="Buddy"
                                links={[
                                  {
                                    label: "live preview ↗",
                                    href: "https://voice-assist-lac.vercel.app/",
                                  },
                                  {
                                    label: "github ↗",
                                    href: "https://github.com/0xuntamed/voice-assist",
                                  },
                                ]}
                                bullets={[
                                  "Built a polished, responsive landing page for an AI-powered follow-up assistant using Next.js App Router, Tailwind CSS, and shadcn-style UI components.",
                                  "Designed a warm, premium product experience for hospitals, clinics, and service businesses, focusing on trust, clarity, and non-technical user communication.",
                                  "Developed a clear product story covering the problem, workflow, value proposition, use cases, trust concerns, sample call script, and conversion-focused CTA.",
                                ]}
                                tags={["React", "TypeScript", "TailwindCSS"]}
          />
        </section>
        <section id="blogs" className="bg-white size-160 w-full items-center">
          <h1 className=" bg-redfont-semibold text-2xl ml-25 mr-10 mt-2 flex items-center justify-center">Blogs</h1>
          <Blog />
        </section>
        <section id="contact" className="w-full bg-white pb-24 pt-4">
          <h1 className="flex items-center justify-center text-2xl font-semibold">
            Contact
          </h1>
          <Contact />
        </section>
      </div>
    </div>
  );
}
