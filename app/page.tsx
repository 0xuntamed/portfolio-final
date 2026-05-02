import Navbar from "@/components/new-nav";
import { ProjectListItem } from "@/components/project-list-item";
import { WorkItem } from "@/components/work-item";
import Blog from "@/components/blog";
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
            <div className="flex-shrink-0 [perspective:1000px]">
              <div className="overflow-hidden rounded-2xl shadow-sm transition-all duration-300 ease-out hover:shadow-md hover:[transform:rotateX(6deg)_rotateY(-8deg)_scale(1.02)]">
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
            First Principle Thinking Engineer Software Engineer with 4+ years of
            experience specializing in high-concurrency real-time systems and
            low-level internals. Expert in building scalable infrastructure
            using Go, Node.js, and Redis, with a deep focus on first-principles
            engineering from NAND gates to Kubernetes orchestration. Proven
            track record in designing complex architectures for live-streaming
            and autonomous DevOps agentic workflows
            </p>
          </div>
        </section>
        
        <section id="experience" className="bg-white w-full  items-center">
          <div >
            <h1 className="font-semibold text-2xl ml-25 mr-10 mt-4 flex items-center justify-center">
              Experience
            </h1>
            <WorkItem
                                  icon="shield"
                                  company="Software Consultant"
                                  role="Freelancer"
                                  period="Present"
                                  summary="Built the backend from scratch and architected a scalable, production ready platform, 
                                  implementing robust development workflows and optimized system architecture.
                                  Built the backend from scratch and architected a scalable, production ready platform, implementing robust 
                                  development.
                                  <br>Built the backend from scratch and architected a scalable, production ready platform, implementing robust development"
                                  logoUrl="/stealth.jpeg"
            />
            <WorkItem
                                  icon="shield"
                                  company="Founding Engineer"
                                  role="Stealth Mode"
                                  period="August 2023 – Oct 2025"
                                  summary="Built the backend from scratch and architected a scalable, production ready platform, implementing robust development workflows and optimized system architecture."
                                  logoUrl="/stealth.jpeg"
            />
            <WorkItem
                                  icon="shield"
                                  company="Software Engineer"
                                  role="hirex"
                                  period="May 2021 – Mar 2023"
                                  summary="Built the backend from scratch and architected a scalable, production ready platform,
                                  Built the backend from scratch and architected a scalable, production ready platform, 
                                  implementing robust development workflows and optimized system architecture.
                                  Built the backend from scratch and architected a scalable, production ready platform, implementing robust 
                                  development implementing robust development workflows and optimized system architecture."
                                  logoUrl="/stealth.jpeg"
            />

            <p className="font-normal text-l ml-25 mr-10"></p>
          </div>
        </section>
        <section id="projects" className="bg-white w-full size-185 items-center">
          <h1 className="font-semibold text-2xl ml-25 mr-10 flex items-center justify-center mt-4">Projects</h1>
          <ProjectListItem
                                title="Market Pulse"
                                links={[
                                  {
                                    label: "live preview ↗",
                                    
                                    href: "https://call2-codecore4.vercel.app/",
                                  },
                                  {
                                    label: "github ↗",
                                    href: "https://github.com/Bhanudahiyaa/Call2Code",
                                  },
                                ]}
                                bullets={[
                                  "Built in 24 hours at Call2Code Hackathon (MUJ) and selected as a finalist among 100+ teams.",
                                  "Developed 12+ features: real-time charts, multilingual support (English, Hindi, Spanish),voice navigation using Web Speech API.",
                                  "Integrated APIs for real-time financial analytics and sentiment analysis across 50+ tickers.",
                                ]}
                                tags={["React", "TypeScript", "TailwindCSS", "Supabase"]}
          />
          <ProjectListItem
                                title="Market Pulse"
                                links={[
                                  {
                                    label: "live preview ↗",
                                    href: "https://call2-codecore4.vercel.app/",
                                  },
                                  {
                                    label: "github ↗",
                                    href: "https://github.com/Bhanudahiyaa/Call2Code",
                                  },
                                ]}
                                bullets={[
                                  "Built in 24 hours at Call2Code Hackathon (MUJ) and selected as a finalist among 100+ teams.",
                                  "Developed 12+ features: real-time charts, multilingual support (English, Hindi, Spanish),voice navigation using Web Speech API.",
                                  "Integrated APIs for real-time financial analytics and sentiment analysis across 50+ tickers.",
                                ]}
                                tags={["React", "TypeScript", "TailwindCSS", "Supabase"]}
          />
          <ProjectListItem
                                title="Market Pulse"
                                links={[
                                  {
                                    label: "live preview ↗",
                                    href: "https://call2-codecore4.vercel.app/",
                                  },
                                  {
                                    label: "github ↗",
                                    href: "https://github.com/Bhanudahiyaa/Call2Code",
                                  },
                                ]}
                                bullets={[
                                  "Built in 24 hours at Call2Code Hackathon (MUJ) and selected as a finalist among 100+ teams.",
                                  "Developed 12+ features: real-time charts, multilingual support (English, Hindi, Spanish),voice navigation using Web Speech API.",
                                  "Integrated APIs for real-time financial analytics and sentiment analysis across 50+ tickers.",
                                ]}
                                tags={["React", "TypeScript", "TailwindCSS", "Supabase"]}
          />
          <ProjectListItem
                                title="Market Pulse"
                                links={[
                                  {
                                    label: "live preview ↗",
                                    href: "https://call2-codecore4.vercel.app/",
                                  },
                                  {
                                    label: "github ↗",
                                    href: "https://github.com/Bhanudahiyaa/Call2Code",
                                  },
                                ]}
                                bullets={[
                                  "Built in 24 hours at Call2Code Hackathon (MUJ) and selected as a finalist among 100+ teams.",
                                  "Developed 12+ features: real-time charts, multilingual support (English, Hindi, Spanish),voice navigation using Web Speech API.",
                                  "Integrated APIs for real-time financial analytics and sentiment analysis across 50+ tickers.",
                                ]}
                                tags={["React", "TypeScript", "TailwindCSS", "Supabase"]}
          />
        </section>
        <section id="blogs" className="bg-white size-400 w-full items-center">
          <h1 className="font-semibold text-2xl ml-25 mr-10 mt-2 flex items-center justify-center">Blogs</h1>
          <Blog />
        </section>
        <div className="bg-orange-500 w-full size-50 items-center">
          Contact me
        </div>
      </div>
    </div>
  );
}
