/**
 * Marshall Jung — Professional Profile & Resume Data
 * Source: Official Resume / Executive Manifesto
 */

export const profileData = {
  name: "Marshall Jung",
  title: "Senior Executive: AI Strategy | Global Operations | Enterprise Transformation",
  location: "Littleton, CO",
  contact: {
    phone: "(720) 315-6713",
    email: "jung.marshall@gmail.com",
    linkedin: "https://linkedin.com/in/marshall-jung-43760258",
    medium: "https://medium.com/@jung.marshall",
    resumePdf: "/resume.pdf",
  },
  manifesto: {
    title: "Executive Manifesto: Code and Steel",
    lead: "Combining the precision of hard engineering with the foresight of modern AI strategy.",
    text: `I bridge the gap between Silicon Valley innovation and the realities of a Fortune 1000 P&L. As a former Google ML Strategic Advisor and current Head of AI for a major industrial brand, I specialize in moving artificial intelligence from "demo cool" to "enterprise critical." My leadership philosophy is built on "Code & Steel"—combining the precision of hard engineering with the foresight of modern AI strategy. I don't just hire engineers; I hire "rocket navigators" who can steer complex organizations through technological disruption.`,
  },
  dualSplit: {
    code: {
      tag: "CODE",
      title: "Computational AI Architecture",
      subtitle: "Moving AI from Demo Cool to Enterprise Critical",
      description: "Architecting zero-trust on-premise LLMs, foundation model economics, agentic orchestration (DSPy, MCP), and high-throughput GPU infrastructure for enterprise operations.",
      anchors: [
        { label: "Enterprise Transformation", desc: "Sandbox to Assembly Line roadmap at Valvoline Global Operations" },
        { label: "Frontier Infrastructure", desc: "Immersion-cooled GPU clusters partnered with NVIDIA" },
        { label: "Public Sector Scale", desc: "Project Maven computer vision foundation at Google Cloud" },
        { label: "Strategic Foresight", desc: "Marshall's Monday Morning ML weekly intelligence briefing" },
      ],
      linkText: "Read AI Strategy & Essays",
      href: "/blog/",
    },
    steel: {
      tag: "STEEL",
      title: "Physical Engineering & Dynamics",
      subtitle: "The Precision of Hard Engineering & Motorsport",
      description: "Hands-on vehicle dynamics, custom roll cage fabrication, pushrod suspension kinematics, aerodynamic balance, and a decade of petrophysical engineering in heavy industry.",
      anchors: [
        { label: "Bespoke Race Car Build", desc: "Porsche 944 body mated to Corvette rolling chassis & 350ci SBC" },
        { label: "Suspension Kinematics", desc: "Zero-droop pushrod Koni dampers with 2:1 rocker geometry" },
        { label: "Aerodynamic Floor", desc: "Marine plywood flat floor, sealed side skirts & rear diffuser" },
        { label: "Hard Engineering Roots", desc: "11 years at Whiting & Halliburton saving $1.5M/well" },
      ],
      linkText: "Explore Race Car Build Journal",
      href: "/racecar/",
    },
  },
  publications: {
    title: "Marshall's Monday Morning ML",
    period: "2023 – Present",
    url: "https://medium.com/@jung.marshall",
    summary: "A widely-read weekly intelligence briefing analyzing the intersection of AI, macroeconomics, and enterprise strategy.",
    featured: [
      {
        id: "the-3-layer-pyramid",
        title: "The 3-Layer Pyramid: A Blueprint for Enterprise Survival",
        date: "Dec 22, 2025",
        summary: "Prioritizes data hygiene and SaaS optimization before deploying agentic layers, arguing against the premature adoption of 'magic' AI solutions without foundational structure.",
        slug: "2025-12-22-the-3-layer-pyramid-a-blueprint-for-enterprise-survival",
      },
      {
        id: "the-human-firmware-update",
        title: "The 'Human Firmware' Update",
        date: "Dec 15, 2025",
        summary: "Pioneered a change-management methodology focused on upskilling workforces to overcome the 'carbon bottleneck' in AI adoption, identifying that enterprise constraints are human, not silicon.",
        slug: "2025-12-15-the-human-firmware-update",
      },
      {
        id: "from-the-sandbox-to-the-assembly-line",
        title: "From the Sandbox to the Assembly Line",
        date: "Dec 08, 2025",
        summary: "Developing the operational roadmap to transition from theoretical AI experimentation to tangible P&L impact across supply chain, CPG manufacturing, and chemical formulation.",
        slug: "2025-12-08-from-the-sandbox-to-the-assembly-line",
      },
      {
        id: "its-upside-down",
        title: "Operationalizing Uncertainty (It's Upside Down)",
        date: "Jan 16, 2026",
        summary: "Established frameworks for managing the non-deterministic nature of LLMs in compliance-heavy industries, treating AI as a 'probabilistic oracle' rather than a deterministic calculator.",
        slug: "2026-01-16-its-upside-down",
      },
    ],
  },
  experience: [
    {
      role: "Senior Director - Global Head of Artificial Intelligence",
      company: "Valvoline Global Operations",
      period: "Nov 2025 – Present",
      lead: "Recruited to lead the AI transformation for a global CPG/automotive leader, moving the organization from sporadic experimentation to operationalized intelligence.",
      bullets: [
        {
          label: "Strategy",
          text: "Developing the 'Sandbox to Assembly Line' roadmap, shifting focus from theoretical AI capabilities to tangible operational ROI in supply chain and manufacturing.",
        },
        {
          label: "Execution",
          text: "Overseeing the deployment of 'Moonshot' fine-tuned expert models (e.g., Synthetic Chemist) to accelerate R&D cycles and improve product formulation efficiency.",
        },
        {
          label: "Infrastructure",
          text: "Partnering with NVIDIA to pilot cutting-edge dielectric fluid immersion cooling for on-premise GPU clusters, driving sustainability and compute efficiency.",
        },
      ],
    },
    {
      role: "Founder & Principal AI Advisor",
      company: "Shrike Ventures",
      period: "Jan 2022 – Present",
      lead: "Fractional CTO Advisor for Venture Capital and DeepTech startups.",
      bullets: [
        {
          label: "Due Diligence",
          text: "Advisor to Denver Ventures and other funds, providing technical due diligence on AI/ML investment targets.",
        },
        {
          label: "Strategic Architecture",
          text: "Served as Lead AI Architect for Istari Digital, designing a universal API layer to integrate competing digital engineering tools (AutoCAD, Ansys), breaking vendor lock-in.",
        },
      ],
      publications: [
        {
          title: "Why DevOps Is Backward and How We Can Solve It",
          outlet: "The New Stack",
          url: "https://thenewstack.io/why-devops-is-backward-and-how-we-can-solve-it/",
        },
      ],
    },
    {
      role: "Lead Solutions Architect & Customer Success (Enterprise)",
      company: "Tabnine",
      period: "Mar 2022 – May 2023",
      lead: "Architected enterprise AI code assistance solutions for global enterprises.",
      bullets: [
        {
          label: "Enterprise Deployment",
          text: "Architected secure, on-premise LLM solutions for Fortune 100 clients, enabling AI code generation while meeting strict zero-trust security mandates.",
        },
        {
          label: "Adoption at Scale",
          text: "Deployed fine-tuned models for a 3,000-developer organization, resulting in a measurable 12% increase in coding efficiency.",
        },
      ],
    },
    {
      role: "Strategic Cloud Advisor & ML Specialist",
      company: "Google",
      period: "2017 – 2021",
      lead: "Specialized in cloud architecture, machine learning, and federal high-assurance programs.",
      bullets: [
        {
          label: "Public Sector Innovation",
          text: "Led the technical development for Project Maven (USAF), engineering UAV/satellite image segmentation algorithms that became the foundation for Google's commercial Vision AI.",
        },
        {
          label: "Cloud Strategy",
          text: "Architected a zero-trust evaluation methodology for the DOJ, helping secure FedRAMP High attestation for Google Cloud Platform.",
        },
      ],
    },
    {
      role: "Senior Data Scientist & Petrophysicist",
      company: "Whiting Petroleum & Halliburton",
      period: "2006 – 2017",
      lead: "Over a decade of foundational 'hard engineering' in subsurface dynamics, statistical physics, and large-scale operational analytics.",
      bullets: [
        {
          label: "The 'Steel' Foundation",
          text: "Spent over a decade in hard engineering roles, managing multi-national teams and developing proprietary analytics tools that saved $1.5M per well by optimizing completion cycles.",
        },
      ],
      publications: [
        {
          title: "Mineralogy Derived Brittleness from the Qemscan: Niobrara Case Study",
          outlet: "Society of Petroleum Engineers · SPE-180251-MS (2016)",
          url: "https://onepetro.org/SPERMPTC/proceedings-abstract/16RMRM/16RMRM/SPE-180251-MS/188133",
        },
        {
          title: "Improving the Process of Understanding Multiprobe Production Logging Tools From the Field to Final Answer",
          outlet: "Society of Petroleum Engineers · SPE-125028-MS (2009)",
          url: "https://onepetro.org/SPEATCE/proceedings-abstract/09ATCE/09ATCE/SPE-125028-MS/147360",
        },
      ],
    },
  ],
  patents: [
    {
      title: "Generative Artificial Intelligence (AI) for Digital Workflows",
      number: "US-20260010351-A1",
      publication: "United States Patent Application Publication",
      filingDate: "Published Jan 8, 2026",
      url: "https://patents.google.com/patent/US20260010351A1/en",
      summary: "Systems, methods, and computer-readable media for generative artificial intelligence (AI) digital workflows, integrating multi-vendor digital engineering ecosystems and orchestrating complex engineering operations across heterogeneous computing environments.",
      inventors: "William Roper, Jr., Christopher Lee Benson, Sriram Krishnan, Baha aldeen E. A. Abunojaim, Peter Galvin, Joshua Adam Marks, Marshall Adam Jung",
      assignee: "Istari Digital Inc",
    },
  ],
  education: [
    {
      degree: "Bachelor of Science, Engineering (Economics Specialty)",
      institution: "Colorado School of Mines",
      details: "Rigorous quantitative engineering and resource economics curriculum.",
    },
    {
      degree: "Bachelor of Science, Mathematics & Computer Science",
      institution: "Colorado School of Mines",
      details: "Double degree in pure/applied mathematics, numerical algorithms, and computer systems.",
    },
  ],
  certifications: [
    {
      name: "Google Cloud Professional Data Engineer",
      issuer: "Google Cloud",
    },
  ],
  skills: [
    {
      category: "Strategic AI Architecture",
      items: [
        "LLM Orchestration",
        "RAG Architecture",
        "Agentic Workflows (DSPy)",
        "Model Context Protocols (MCP)",
        "Prompt & Reasoning Evaluation",
        "Fine-Tuned Expert Models",
      ],
    },
    {
      category: "Enterprise Leadership",
      items: [
        "Zero-Trust Security",
        "Change Management ('Human Firmware')",
        "Technical Hiring ('The Rocket Navigator')",
        "Fortune 1000 P&L Strategy",
        "Venture Capital Due Diligence",
        "FedRAMP High Compliance",
      ],
    },
    {
      category: "Technical Roots",
      items: [
        "Python",
        "TensorFlow / PyTorch",
        "OpenFoam (CFD)",
        "Statistical Modeling",
        "Distributed Cloud Systems",
        "Time-Series & Sensor Telemetry",
      ],
    },
    {
      category: "Physical & Mechanical Engineering",
      items: [
        "Vehicle Dynamics & Kinematics",
        "Chassis & Roll Cage Fabrication",
        "Pushrod Dampers (2:1 Rocker)",
        "Zero-Droop Suspension Geometry",
        "Underfloor Aerodynamics (Splitter/Diffuser)",
        "CAN-Bus Telemetry & Data Logging",
      ],
    },
  ],
};
