/**
 * Marshall Jung - Public GitHub Repositories & Engineering Systems
 * Source: https://github.com/MarshallJung
 */

export const repositoriesData = {
  profileUrl: 'https://github.com/MarshallJung',
  title: 'Open-Source Systems & Applied AI Labs',
  subtitle: 'Computational Architecture · Computer Vision · Deterministic Kinematics',
  summary:
    'Hands-on engineering architectures moving foundational research and deterministic physics into production applications. Spanning Apple Silicon video super-resolution, cross-platform suspension kinematics, foundation time-series transformers, multimodal vehicle diagnostics, and schema-driven safety extraction.',
  
  repositories: [
    {
      id: 'super-resolution',
      name: 'Super-Resolution (Apple Silicon MPS Video Pipeline)',
      repoName: 'MarshallJung/super-resolution',
      githubUrl: 'https://github.com/MarshallJung/super-resolution',
      category: 'Computer Vision & Apple Silicon (MPS)',
      badge: '5-Stage Video Pipeline',
      language: 'Python / PyTorch',
      techStack: ['PyTorch (MPS)', 'SwinIR / HAT / Real-ESRGAN', 'RAFT-Large Optical Flow', '2D Wavelets (db2)', 'Spandrel', 'PyAV'],
      shortSummary:
        'A pure-PyTorch, five-stage video super-resolution and temporal restoration pipeline engineered for Apple Silicon (MPS) with zero CUDA or C++ extension dependencies.',
      detailedAnalysis:
        'Standard 4× video upscalers fail on stretched vertical action-camera exports (such as 9:16 motorsport crops stretched to 1080×1920) because multi-pixel blur and H.264 macroblocks are mistaken for intentional soft shading, causing 8K OOM crashes and severe frame-to-frame shimmer. This five-stage pure-PyTorch pipeline solves this natively on Apple Metal (MPS): it measures the 2D radially averaged Fourier power spectrum (r95 cutoff) to collapse multi-pixel artifacts via Lanczos-4 downscaling before running blind 4× Vision Transformer super-resolution (BSRGAN-SwinIR-M, Real_HAT_GAN, Real-ESRGAN) with 2D Hann feathered tiling, RAFT-Large optical-flow temporal stabilization, and db2 wavelet low-frequency color locking—achieving a 7.1× ROI sharpness gain and ~20% flicker reduction under a 2.3 GB unified memory footprint.',
      architectureHighlights: [
        '2D FFT Frequency Calibration & Scale-Matched Downsampling: Quantifies true optical resolution (r95 cutoff) vs. H.264 quantization noise to collapse 2–4 px stretched macroblocks back to single-pixel scale prior to 4× blind transformer restoration.',
        'Seam-Free 2D Hann Tiling & RAFT-Large Temporal Stabilization: Processes 256×256 reflective-padded tiles (< 2.3 GB peak MPS memory) and backward-warps adjacent frames with exponential photometric occlusion gating to reduce warping flicker (E_warp) by ~20%.',
        'Wavelet Color Lock & Lossless PyAV Remuxing: Swaps the 3-level 2D db2 coarsest approximation band (cA3) from the reference frame to eliminate exposure drift, outputting CRF 15 H.264 video with original AAC audio and a 2.5× PiP sliding-wipe telemetry showcase.'
      ],
      enterpriseUses: [
        'Motorsport & Action-Cam Telemetry Restoration: Recovering crisp chassis attitude, tire sidewall deflection, and track surface detail from heavily compressed or cropped onboard and trackside action-camera footage.',
        'Edge & Local Apple Silicon Media Production: Running studio-grade Vision Transformer video restoration locally on MacBook Pro M-series unified memory without expensive cloud GPU clusters or brittle CUDA/mmcv dependencies.',
        'Industrial Inspection & Remote Sensor Enhancement: Enhancing low-bitrate, bandwidth-constrained drone, borescope, or remote facility video feeds while suppressing temporal shimmer and preserving radiometric color fidelity.'
      ]
    },
    {
      id: 'suspension-kinematics',
      name: 'Suspension_Kinematics (Paddock Kinematics)',
      repoName: 'MarshallJung/suspension_kinematics',
      githubUrl: 'https://github.com/MarshallJung/suspension_kinematics',
      category: 'Motorsport Physics & Cross-Platform Mobile',
      badge: 'Mobile & Web App',
      language: 'TypeScript / React Native',
      techStack: ['React Native', 'Expo SDK 57', 'TypeScript', 'Zustand', '2D SVG Telemetry', 'Vitest'],
      vectorLabel: 'Key Commercial / Mobile Vector:',
      applicationsTitle: 'Potential Commercial & Consumer Mobile Applications',
      shortSummary:
        'An offline-first, deterministic track suspension and handling visualizer for iOS, Android, and Web that bridges driver seat-of-the-pants feedback with closed-form vehicle dynamics.',
      detailedAnalysis:
        'Paddock Kinematics translates multi-variable suspension geometry, transient damping, and non-linear tire load sensitivity into a real-time 60 fps 2D chassis telemetry canvas. Running 100% deterministically on-device in strict SI units (converting at the UI layer to paddock units: lbs, mph, lbs/in, PSI), its four-pillar physics pipeline couples a 3D Weierstrass half-angle arc-sphere spatial linkage solver, 4-way low/high-speed transient damper modeling, 4-corner load transfer (FRSR, TLLTD, and dynamic roll moment arm h_roll), and non-linear tire friction ellipses. Synchronized dual modes let drivers and instructors either step through a Symptom Diagnostic Wizard—complete with live ghost-ring overlays and geometry-trap warnings (such as MacPherson strut over-lowering roll-center migration)—or dial in setup changes and closed-form inverse ride-frequency spring calculations in a What-If Tuning Sandbox.',
      architectureHighlights: [
        '4-Pillar Deterministic Physics Engine: Closed-form Weierstrass arc-sphere camber recovery, inverse natural ride frequency (Hz to lbs/in) spring solver, and non-linear tire load sensitivity scaling across 5 drivetrain archetypes (RR, MR, FR, FF, AWD) and 3 linkage geometries (Strut, Double Wishbone, Multi-Link).',
        'Dual Synchronized Paddock Workflows: Symptom-to-adjustment diagnostic solver ranking trackside quick tweaks (ARB blades, 4-way damper clicks, hot pressures, trail-brake overlap) alongside shop alignment changes, paired with a 60 fps interactive 2D top-down 4-corner friction circle HUD.',
        'Offline-First Cross-Platform Architecture: Universal React Native + Expo SDK 57 + Zustand state engine with pinned baseline delta snapshots, one-tap Paddock Daylight high-contrast theme for sunlit pit lanes, and 9 Vitest deterministic physics verification suites.'
      ],
      enterpriseUses: [
        'Consumer Track-Day & Club Racing Companion App: Freemium or subscription mobile app giving grassroots HPDE drivers, autocrossers, and club racers an offline digital race engineer in the paddock to diagnose understeer/oversteer and log trackside setup sheets.',
        'HPDE Instructor & Driver-Coaching Tablet Suite: Interactive visual teaching aid for motorsport organizations (PCA, BMW CCA, NASA, SCCA) allowing instructors to demonstrate how trail-braking overlap, smoothness, and alignment presets shift 4-corner tire saturation without touching a wrench.',
        'Aftermarket Suspension & Alignment Shop Portal: White-label mobile configurator for coilover manufacturers, alignment shops, and track prep garages to validate spring rates, target ride frequencies (1.5–2.7 Hz), and roll-center correction kits against customer vehicle specs.'
      ]
    },
    {
      id: 'vehicle-diagnostic',
      name: 'Vehicle_Diagnostic (CarTrouble)',
      repoName: 'MarshallJung/Vehicle_Diagnostic',
      githubUrl: 'https://github.com/MarshallJung/Vehicle_Diagnostic',
      demoUrl: 'https://www.youtube.com/watch?v=87kpA0sAJLI',
      category: 'Automotive AI & Edge Diagnostics',
      badge: 'Interactive Demo',
      language: 'Python',
      techStack: ['Python', 'Google Gemini API', 'Pydantic', 'FastAPI', 'HTML5/Tailwind'],
      shortSummary:
        'A multimodal LLM diagnostic system for mechanical vehicle failures. Blends unstructured acoustic and symptom inputs with automotive domain ontologies to isolate component degradation.',
      detailedAnalysis:
        'CarTrouble bridges physical automotive mechanics with conversational reasoning models. By ingesting driver symptom descriptions (auditory rattles, thermal shifts, vibration frequencies, and DTC fault codes), the application executes schema-validated prompt chains against the Gemini API to systematically eliminate unlikely subsystems and isolate the mechanical root cause.',
      architectureHighlights: [
        'Structured Pydantic validation schemas to force deterministic diagnostic trees from probabilistic LLM outputs.',
        'Symptom elicitation logic that queries the technician or driver for missing physical observations before concluding.',
        'Component isolation matrix matching diagnostic trouble codes (DTCs) against mechanical physical symptoms.'
      ],
      enterpriseUses: [
        'Automated Service Bay Triage: Pre-screening customer repair orders before dispatching master mechanics, cutting diagnostic bay time by 30–40%.',
        'Fleet Telematics & Remote Support: Real-time driver assistant interpreting check-engine lights and sensor thresholds during transport runs.',
        'Automotive Insurance & Warranty Auditing: Cross-referencing claimed repairs against symptom descriptions to identify anomalous billing.'
      ]
    },
    {
      id: 'time-series-llm',
      name: 'Time_Series_LLM',
      repoName: 'MarshallJung/Time_Series_LLM',
      githubUrl: 'https://github.com/MarshallJung/Time_Series_LLM',
      category: 'Industrial IoT & Foundation Transformers',
      badge: 'Foundation Model',
      language: 'Jupyter Notebook',
      techStack: ['Salesforce Moirai', 'uni2ts', 'GluonTS', 'PyTorch Lightning', 'Pandas'],
      shortSummary:
        'End-to-end fine-tuning of the Moirai Time-Series Foundation Transformer on multivariate telemetry from industrial oil service pumps to predict catastrophic machinery failure.',
      detailedAnalysis:
        'Applies Salesforce\'s Moirai masked autoencoder foundation architecture (uni2ts) to industrial pump failure prediction. Rather than training brittle, narrow LSTM or XGBoost models from scratch, this project demonstrates transfer learning: adapting pre-trained universal time-series representations to complex, non-stationary multivariate physical telemetry (pressures, vibrations, fluid temperatures).',
      architectureHighlights: [
        'Multi-variate normalization and patching pipeline translating raw CSV sensor streams into gluonts-compatible format.',
        'PyTorch Lightning fine-tuning harness with custom learning rate schedules and gradient clipping for stable training.',
        'Zero-shot vs. fine-tuned performance evaluation establishing ROC-AUC and lead-time before pump cavitation or bearing seizure.'
      ],
      enterpriseUses: [
        'Oilfield & Heavy Industry Predictive Maintenance: Catching valve, seal, and impeller breakdown hours before catastrophic failure, avoiding multimillion-dollar NPT (non-productive time).',
        'Turbine & Compressor Monitoring: Continuous degradation tracking across non-stationary industrial rotating machinery.',
        'Zero-Shot Anomaly Detection: Immediate deployment on newly commissioned telemetry channels without requiring historical failure history.'
      ]
    },
    {
      id: 'langextract',
      name: 'LangExtract (OSHA Incident Analysis)',
      repoName: 'MarshallJung/LangExtract',
      githubUrl: 'https://github.com/MarshallJung/LangExtract',
      category: 'EHS & Safety Intelligence',
      badge: 'Schema-Driven Extraction',
      language: 'Jupyter Notebook',
      techStack: ['Google LangExtract', 'Python 3.10+', 'Few-Shot Learning', 'Pandas', 'Pydantic'],
      shortSummary:
        'Transforms messy unstructured narrative incident reports from OSHA safety filings into a structured, queryable analytical dataset using Google LangExtract.',
      detailedAnalysis:
        'Moves beyond naive regex and keyword search by utilizing Google\'s langextract library with few-shot demonstration exemplars. The system ingests raw narrative incident reports and extracts deeply structured SafetyFinding entities, blending deterministic business rules (e.g., deterministic fatality mapping) with contextual LLM inference for root-cause classification.',
      architectureHighlights: [
        'Few-shot demonstration prompt engineering to anchor hallucination-free extraction against predefined safety taxonomy.',
        'Hybrid deterministic/probabilistic processing: rule-based critical severity assignment fused with semantic cause clustering.',
        'Pandas/Parquet analytical export ready for SQL querying, trend modeling, and executive hazard dashboards.'
      ],
      enterpriseUses: [
        'Industrial EHS Compliance: Automated parsing of global plant safety filings to identify recurrent ergonomics, chemical, or electrical hazards.',
        'Commercial Insurance Underwriting: Mining historical workplace accident narratives to price risk policies and forecast loss ratios.',
        'Root Cause Discovery: Clustering near-miss reports across thousands of job sites to identify flawed standard operating procedures.'
      ]
    }
  ]
};
