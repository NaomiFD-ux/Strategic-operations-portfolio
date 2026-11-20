
import React from 'react';

interface CareerProps {
  id: string;
}

const Career: React.FC<CareerProps> = ({ id }) => {
  const journey = [
{
    "role": "Project Manager (Contract)",
    "company": "EPEC Solutions Inc.",
    "period": "March 2026 – Present",
    "description": "Managing 20+ concurrent engineered electrical equipment projects from proposal and purchase order through factory inspections, testing, site delivery, setup, and closeout. Leading customer kickoffs, coordinating engineering and manufacturing, managing Procore submittals and approvals, and tracking billing milestones and payments."
},
    {
      role: "Proposal Manager | Automations Specialist (Contract)",
      company: "FlexGen",
      period: "February 2025 – May 2026",
      description: "Led EMS and Full-Product proposals from bid/no-bid through best and final offer. Built automation that cut turnaround time by more than 90% across both workflows and a Copilot assistant for customer RFIs and technical questionnaires."
    },
    {
      role: "Client Service Coordinator (Contract)",
      company: "Spectraforce",
      period: "July 2024 – February 2025",
      description: "Managed contractor agreements and onboarding for enterprise accounts, including Charles Schwab, Cigna, and Cencora. Oversaw screening and compliance documentation and standardized tracking and reporting."
    },
    {
      role: "Sales & Proposal Coordinator (Contract)",
      company: "Viventium",
      period: "August 2023 – February 2024",
      description: "Led client onboarding from contract signature through payroll implementation handoff. Managed contracts and proposals in Salesforce and Asana and validated payroll data for migration."
    }
  ];

  return (
    <section id={id} className="relative py-32 px-8 sm:px-12 lg:px-24">
      <div className="max-w-[1000px] mx-auto">
        <div className="text-center mb-24 space-y-4">
          <span className="text-primary font-bold text-xs uppercase tracking-widest">Professional Evolution</span>
          <h2 className="text-white text-4xl font-extralight tracking-tight">Career Journey</h2>
        </div>

        <div className="relative border-l border-white/5 pl-8 space-y-24">
          {journey.map((item, i) => (
            <div key={i} className="relative group">
              <div className="absolute -left-[41px] top-1 size-5 rounded-full bg-background-dark border-2 border-primary group-hover:scale-125 transition-transform"></div>
              <div className="flex flex-col md:flex-row md:justify-between md:items-baseline gap-4 mb-4">
                <h3 className="text-white text-2xl font-light tracking-tight group-hover:text-primary transition-colors">{item.role}</h3>
                <span className="text-primary text-xs font-bold uppercase tracking-widest">{item.period}</span>
              </div>
              <p className="text-neutral-text/60 text-sm font-bold uppercase tracking-[0.15em] mb-4">{item.company}</p>
              <p className="text-neutral-text font-light leading-relaxed max-w-2xl">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Career;
