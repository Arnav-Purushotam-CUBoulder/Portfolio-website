// @ts-nocheck
import { AnimatePresence, motion } from "framer-motion";
import TimelineItem from "./TimeLine";

export default function Milestones({hoveredMilestoneLogo, milestoneRef, milestoneLogoY, setHoveredMilestoneLogo, isDarkMode}) {
    return (
      <section id="projects" ref={milestoneRef} className="py-2 sm:py-8 relative overflow-hidden px-2 sm:px-6 min-h-[700px] md:min-h-[1100px] transition-all duration-700 w-full mb-12">
        <AnimatePresence>
          {hoveredMilestoneLogo && (
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 0.8, scale: 1 }}
              exit={{ opacity: 0, scale: 1.2 }}
              style={{ y: milestoneLogoY }}
              className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none"
            >
              <img 
                src={hoveredMilestoneLogo} 
                alt="Symbol" 
                className="w-[50vw] h-auto object-contain filter invert opacity-40 blur-[2px]" 
              />
            </motion.div>
          )}
        </AnimatePresence>

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center mb-8 sm:mb-20">
            <h2 className="text-xl sm:text-3xl md:text-7xl font-black italic uppercase tracking-tighter mb-4">Milestones</h2>
            <div className="w-12 sm:w-24 h-1 bg-yellow-400 mx-auto opacity-50" />
          </div>
          <div className="relative">
            {/* Show vertical line only on screens >=700px */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-[2px] bg-yellow-400/20" />
            <div className="space-y-24 sm:space-y-48 min-h-[400px] md:min-h-[600px]">
              <TimelineItem 
                side="left"
                company="CU BIOFRONTIERS"
                logoSrc= {isDarkMode ? "/symbols/biofrontiers_logo.png": "/symbols/biofrontiers_logo.png"}
                role="Software Engineer (Part-time)"
                date="Oct 2024 – Present | Boulder, USA"
                onHover={setHoveredMilestoneLogo}
                points={[
                  "Built an LLM AI agent with RAG + LangChain that enabled natural-language querying across lab data sources and saved researchers about 30 minutes per complex request.",
                  "Automated scheduling for 200 CU Stores employees on AWS using an Airflow pipeline (EC2/Flask trigger, Lambda, RDS, SQS, DynamoDB, SES) and reduced turnaround to about 5 minutes per run.",
                  "Worked on the BioBit internal platform with Java Spring Boot, REST APIs, PostgreSQL, and Docker for 10+ labs and 100+ researchers.",
                  "Implemented OAuth2 authentication and Keycloak-based RBAC/multi-tenancy to improve usability, security, and data privacy."
                ]}
              />
              <TimelineItem 
                side="right"
                company="CURL / LIBCURL"
                logoSrc={isDarkMode ? "/symbols/curl-logo.svg" : "/symbols/curl-logo.svg"}
                role="Open Source Contributor"
                date="Nov 2025 – Present | Open Source"
                onHover={setHoveredMilestoneLogo}
                points={[
                  "Contributed upstream fixes in curl.h to harden ANY/ALL bitmask macros against LP64 type-width pitfalls and keep behavior consistent across 32/64-bit platforms (PR #20416).",
                  "Eliminated GCC 15.2 -Woverflow/-Wconversion failures caused by unintended high-bit propagation from mask patterns, improving portability and CI stability.",
                  "Proposed and validated a cross-compiler logging strategy so CURL_DISABLE_VERBOSE_STRINGS can compile out trace strings on MSVC/Windows; collaborated with maintainers and was credited in the final upstream solution (PR #20387).",
                  "Focused on production-grade C portability, compiler compatibility, and warning-free builds across toolchains."
                ]}
              />
              <TimelineItem 
                side="left"
                company="SELECTED PROJECTS"
                logoSrc={isDarkMode ? "/symbols/ecommerce_arch.png" : "/symbols/ecommerce_arch.png"}
                role="Distributed Systems & Developer Tools"
                date="2024 – 2026 | GitHub"
                onHover={setHoveredMilestoneLogo}
                points={[
                  "Modular C++ Database Engine: built pluggable memory/disk backends with secondary indexes, CMake + Catch2 automation, and cross-platform validation.",
                  "Distributed Student E-Commerce Platform: built microservices with Spring Cloud Gateway, Kafka, Keycloak SSO, observability stack, and Kubernetes migration.",
                  "BioF Research OS: built a FastAPI + Next.js research assistant with hybrid retrieval (PostgreSQL/pgvector + Qdrant + Neo4j), SSE chat streaming, and benchmark APIs.",
                  "Resume Automator: built an Electron + React + Express desktop app with Git-backed versioning, resilient LaTeX compile failover, and iCloud-ready PDF sync."
                ]}
              />
            </div>
          </div>
        </div>
      </section>
    );
}
