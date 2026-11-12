"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Laptop,
  Server,
  Zap,
  Database,
  CreditCard,
  MapPin,
  Cpu,
  ShieldCheck,
  Layers
} from "lucide-react";

interface ArchNode {
  id: string;
  name: string;
  tier: "CLIENT" | "GATEWAY" | "CACHE_ENGINE" | "DATABASE" | "INTEGRATION";
  role: string;
  tech: string;
  protocol: string;
  description: string;
  connections: string[];
}

interface DataFlowStep {
  step: string;
  title: string;
  sender: string;
  receiver: string;
  protocol: string;
  description: string;
}

interface ProjectArchitecture {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  overview: string;
  security: {
    auth: string;
    integrity: string;
    protocols: string;
  };
  nodes: ArchNode[];
  flows: {
    title: string;
    description: string;
    steps: DataFlowStep[];
  }[];
}

const architectures: ProjectArchitecture[] = [
  {
    id: "track-my-bus",
    badge: "WORK / 001",
    title: "Track My Bus Architecture",
    subtitle: "Real-Time Transit Telemetry, In-Memory Caching & Atomic Booking",
    overview:
      "A distributed public transit system engineered to process sub-second GPS coordinate streams from transit vehicles while executing atomic seat reservations and payment settlements.",
    security: {
      auth: "Role-Based Access Control (RBAC) separating Commuters, Fleet Operators, and Ticket Inspectors via secure HTTP-only JWTs.",
      integrity: "Redis mutex locks prevent simultaneous double-booking of identical seats during high-concurrency checkout windows.",
      protocols: "TLS/HTTPS for API endpoints, Redis in-memory pub/sub for location broadcasting, and cryptographic HMAC Stripe webhook signatures."
    },
    nodes: [
      {
        id: "client-web",
        name: "Next.js 15 Web Client",
        tier: "CLIENT",
        role: "Commuter & Admin Interface",
        tech: "Next.js 15 · TypeScript · Tailwind CSS",
        protocol: "HTTPS / REST",
        description:
          "Renders responsive schedule tables, real-time bus location maps, and interactive seat selector canvases with client-side state interpolation.",
        connections: ["api-gateway", "google-maps"]
      },
      {
        id: "api-gateway",
        name: "Application API Gateway",
        tier: "GATEWAY",
        role: "Request Dispatch & Auth",
        tech: "Laravel (PHP) / Node.js Engine",
        protocol: "RESTful JSON / Token Auth",
        description:
          "Enforces request validation, rate limiting, and RBAC authentication while orchestrating route search and checkout sessions.",
        connections: ["redis-cache", "mysql-db", "stripe-api"]
      },
      {
        id: "redis-cache",
        name: "Redis Pub/Sub & Lock Engine",
        tier: "CACHE_ENGINE",
        role: "In-Memory Telemetry & Mutex",
        tech: "Redis 7.0 (In-Memory Datastore)",
        protocol: "TCP / In-Memory Pub/Sub",
        description:
          "Caches live vehicle GPS coordinates for instantaneous client polling and provides atomic 10-minute mutex locks on selected seats.",
        connections: ["api-gateway"]
      },
      {
        id: "mysql-db",
        name: "MySQL Relational Database",
        tier: "DATABASE",
        role: "ACID Transactional Ledger",
        tech: "MySQL 8.0 (InnoDB)",
        protocol: "TCP / Connection Pool",
        description:
          "Maintains relational records for routes, fleet schedules, fare structures, verified ticket serials, and historical financial logs.",
        connections: ["api-gateway"]
      },
      {
        id: "google-maps",
        name: "Google Maps JavaScript API",
        tier: "INTEGRATION",
        role: "Geospatial Canvas & Polylines",
        tech: "Google Maps SDK",
        protocol: "Client HTTPS SDK",
        description:
          "Displays interactive vector maps with animated bus location markers, route polyline overlays, and geofenced transit stop pins.",
        connections: ["client-web"]
      },
      {
        id: "stripe-api",
        name: "Stripe Payment Gateway",
        tier: "INTEGRATION",
        role: "Payment Checkout & Webhooks",
        tech: "Stripe API & Webhook Signatures",
        protocol: "HTTPS REST + Signed Webhooks",
        description:
          "Processes secure commuter card transactions, dispatching signed webhook events back to the API gateway upon payment capture.",
        connections: ["api-gateway"]
      }
    ],
    flows: [
      {
        title: "Flow 1: Real-Time Fleet GPS Location Streaming",
        description: "How active buses broadcast their live coordinates to passenger map interfaces with sub-second latency.",
        steps: [
          {
            step: "01",
            title: "GPS Coordinate Broadcast",
            sender: "Transit Vehicle Device",
            receiver: "Application API Gateway",
            protocol: "HTTPS POST",
            description: "Vehicle hardware periodically transmits latitude, longitude, speed, and heading telemetry."
          },
          {
            step: "02",
            title: "In-Memory Channel Ingestion",
            sender: "API Gateway",
            receiver: "Redis Telemetry Engine",
            protocol: "Redis PUBLISH",
            description: "Updates the in-memory route cache and broadcasts coordinates on vehicle-specific channels."
          },
          {
            step: "03",
            title: "Client State Fetch",
            sender: "Next.js Web Client",
            receiver: "API Gateway",
            protocol: "REST HTTPS",
            description: "Active commuter map instances query debounced telemetry updates for their active route."
          },
          {
            step: "04",
            title: "Geospatial Canvas Interpolation",
            sender: "Next.js Web Client",
            receiver: "Google Maps SDK",
            protocol: "Client DOM Canvas",
            description: "Smoothly animates bus marker transitions along route polyline vectors without frame stutter."
          }
        ]
      },
      {
        title: "Flow 2: Atomic Seat Reservation & Verified Payment",
        description: "How concurrent commuters select seats, acquire locks, and receive verified QR tickets without race conditions.",
        steps: [
          {
            step: "01",
            title: "Seat Selection & Mutex Lock",
            sender: "Next.js Web Client",
            receiver: "Redis Engine via API",
            protocol: "Redis SETNX Lock",
            description: "Acquires an atomic 10-minute lock on the chosen seat ID, instantly marking it reserved to prevent collisions."
          },
          {
            step: "02",
            title: "Stripe Checkout Session",
            sender: "API Gateway",
            receiver: "Stripe Payment Gateway",
            protocol: "HTTPS REST",
            description: "Generates a cryptographically signed checkout session tied to the reservation token."
          },
          {
            step: "03",
            title: "Signed Webhook Verification",
            sender: "Stripe Payment Gateway",
            receiver: "API Gateway",
            protocol: "Signed Webhook (HMAC)",
            description: "Verifies the webhook signature (`stripe-signature`) to confirm payment completion."
          },
          {
            step: "04",
            title: "ACID Commit & QR Ticket Issuance",
            sender: "API Gateway",
            receiver: "MySQL Database",
            protocol: "SQL Transaction",
            description: "Commits booking record, releases temporary Redis lock, and issues a cryptographically hashed boarding QR ticket."
          }
        ]
      }
    ]
  },
  {
    id: "ai-study-assistant",
    badge: "WORK / 003",
    title: "AI Study Assistant Architecture",
    subtitle: "Document Ingestion, Semantic Chunking & Schema-Validated RAG",
    overview:
      "A document intelligence platform engineered to parse dense academic lecture notes into structured text chunks and orchestrate zero-hallucination Q&A and quizzes using Amazon Bedrock.",
    security: {
      auth: "JWT-based session authentication with strict tenant isolation preventing unauthorized access across user document workspaces.",
      integrity: "Strict Zod schema interceptors validate AI inference outputs before rendering, discarding invalid or unformatted response objects.",
      protocols: "Context-bounded system prompts enforcing document citations; all AI communication is encrypted in transit over TLS."
    },
    nodes: [
      {
        id: "client-workspace",
        name: "Next.js Split-Pane Workspace",
        tier: "CLIENT",
        role: "Dual-Pane Document & Quiz UI",
        tech: "Next.js 15 · React 19 · TypeScript",
        protocol: "HTTPS / REST",
        description:
          "Provides synchronized document reading, inline highlight actions, interactive flashcard carousel, and real-time quiz assessment scoring.",
        connections: ["api-service"]
      },
      {
        id: "api-service",
        name: "Express.js Application Service",
        tier: "GATEWAY",
        role: "API Gateway & Pipeline Orchestrator",
        tech: "Node.js · Express (`api-v2`)",
        protocol: "RESTful JSON / Multipart",
        description:
          "Handles multipart file ingestion, coordinates document chunking pipelines, and formats grounded query prompts for inference.",
        connections: ["doc-parser", "postgres-db", "bedrock-ai"]
      },
      {
        id: "doc-parser",
        name: "PDF Parsing & Chunking Engine",
        tier: "CACHE_ENGINE",
        role: "Semantic Text Extraction",
        tech: "Node.js Stream Tokenizer",
        protocol: "In-Memory Stream Parsing",
        description:
          "Extracts text layers from uploaded PDF documents and executes sliding-window semantic chunking with metadata offsets.",
        connections: ["postgres-db"]
      },
      {
        id: "postgres-db",
        name: "PostgreSQL Document Datastore",
        tier: "DATABASE",
        role: "Relational Storage & Chunk Indexing",
        tech: "PostgreSQL (Relational + Indexed Text)",
        protocol: "TCP Connection Pool",
        description:
          "Persists user profiles, document catalog metadata, indexed textual chunks, flashcard decks, and quiz assessment attempt history.",
        connections: ["api-service"]
      },
      {
        id: "bedrock-ai",
        name: "Amazon Bedrock LLM Inference",
        tier: "INTEGRATION",
        role: "Context-Grounded Generation",
        tech: "Amazon Bedrock (Nova / Claude)",
        protocol: "AWS Bedrock SDK / REST",
        description:
          "Executes generative Q&A and multiple-choice question formulation grounded strictly in retrieved academic chunk citations.",
        connections: ["zod-validator"]
      },
      {
        id: "zod-validator",
        name: "Zod Schema Interceptor",
        tier: "CACHE_ENGINE",
        role: "Output Type Safety & Anti-Hallucination",
        tech: "TypeScript · Zod Schema Engine",
        protocol: "In-Memory Runtime Validation",
        description:
          "Intercepts raw LLM JSON outputs, strictly validating schema structures (questions, options, correctIndex, explanation) before client response.",
        connections: ["client-workspace"]
      }
    ],
    flows: [
      {
        title: "Flow 1: Document Upload & Semantic Chunking Pipeline",
        description: "How unstructured PDF documents are converted into clean, queryable knowledge chunks in PostgreSQL.",
        steps: [
          {
            step: "01",
            title: "Multipart PDF Upload",
            sender: "Next.js Workspace",
            receiver: "Express.js API Service",
            protocol: "Multipart Form-Data",
            description: "Transmits document binary with authenticated session token."
          },
          {
            step: "02",
            title: "Text Extraction & Sanitization",
            sender: "Express.js API Service",
            receiver: "PDF Parsing Engine",
            protocol: "In-Memory Stream",
            description: "Strips binary wrappers, extracts raw textual streams, and normalizes unicode characters."
          },
          {
            step: "03",
            title: "Sliding-Window Semantic Chunking",
            sender: "Parsing Engine",
            receiver: "Chunking Tokenizer",
            protocol: "In-Memory Algorithm",
            description: "Splits continuous text into overlapping semantic blocks with section and page number metadata."
          },
          {
            step: "04",
            title: "Indexed Relational Storage",
            sender: "Chunking Tokenizer",
            receiver: "PostgreSQL Database",
            protocol: "SQL Batch INSERT",
            description: "Persists document metadata and indexed text chunks ready for contextual search retrieval."
          }
        ]
      },
      {
        title: "Flow 2: Grounded Q&A & Schema-Validated Quiz Generation",
        description: "How user study queries retrieve document context and pass through Zod schema validation.",
        steps: [
          {
            step: "01",
            title: "Study Query / Quiz Request",
            sender: "Next.js Workspace",
            receiver: "Express.js API Service",
            protocol: "HTTPS JSON POST",
            description: "User submits query: 'Generate a 5-question test covering Chapter 3 algorithms'."
          },
          {
            step: "02",
            title: "Contextual Chunk Retrieval",
            sender: "Express.js API Service",
            receiver: "PostgreSQL Database",
            protocol: "SQL Indexed Retrieval",
            description: "Pulls relevant document chunks based on topic filtering and document ID boundaries."
          },
          {
            step: "03",
            title: "Grounded Bedrock Inference",
            sender: "API Service",
            receiver: "Amazon Bedrock LLM",
            protocol: "AWS Bedrock SDK",
            description: "Assembles prompt strictly restricting answers to retrieved context chunks, requesting JSON response."
          },
          {
            step: "04",
            title: "Zod Schema Validation & Rendering",
            sender: "Amazon Bedrock LLM",
            receiver: "Zod Interceptor → Client",
            protocol: "TypeScript Schema Parse",
            description: "Validates JSON against strict `QuizSchema`. Discards unparsable responses, streaming 100% valid quiz cards to the UI."
          }
        ]
      }
    ]
  }
];

export function ArchitectureLab() {
  const [selectedProjectId, setSelectedProjectId] = useState<string>("track-my-bus");
  const [activeNodeId, setActiveNodeId] = useState<string | null>(null);
  const [activeFlowIndex, setActiveFlowIndex] = useState<number>(0);

  const currentProject = architectures.find((a) => a.id === selectedProjectId)!;
  const activeNode = currentProject.nodes.find((n) => n.id === activeNodeId) || currentProject.nodes[0];
  const currentFlow = currentProject.flows[activeFlowIndex];

  return (
    <section id="lab" className="section bg-[--bg] border-t border-[--border]" aria-label="System Architecture Lab">
      <div className="container-xl">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="label-lime">BEYOND THE INTERFACE</span>
              <span className="font-mono text-xs text-[--muted]">/</span>
              <span className="font-mono text-xs text-[--muted]">AUTHENTIC SYSTEM BLUEPRINTS</span>
            </div>
            <h2 className="display-lg text-[--text]">
              PRODUCTION<br />
              <span className="text-[--muted] italic font-thin">&amp; SYSTEM</span><br />
              ARCHITECTURE.
            </h2>
          </div>
          <p className="max-w-md text-sm text-[--muted] leading-relaxed">
            Concrete architectural topologies from verified implementations. Inspect multi-tier component topologies, real-time pub/sub synchronization, and data flow pipelines.
          </p>
        </div>

        {/* Project Selector Tabs */}
        <div className="flex flex-wrap gap-3 mb-10 pb-4 border-b border-[--border]">
          {architectures.map((proj) => {
            const isSelected = selectedProjectId === proj.id;
            return (
              <button
                key={proj.id}
                onClick={() => {
                  setSelectedProjectId(proj.id);
                  setActiveNodeId(null);
                  setActiveFlowIndex(0);
                }}
                className={`group px-4 sm:px-5 py-3 text-left border transition-all w-full sm:w-auto min-h-[44px] ${
                  isSelected
                    ? "border-[--lime] bg-[--lime]/10 text-[--text]"
                    : "border-[--border] text-[--muted] hover:border-[--border]/80 hover:text-[--text]"
                }`}
              >
                <div className="flex items-center gap-2.5 sm:gap-3">
                  <span className={`font-mono text-[10px] font-bold ${isSelected ? "text-[--lime]" : "text-[--muted]"}`}>
                    {proj.badge}
                  </span>
                  <span className="font-bold text-xs sm:text-sm tracking-tight">{proj.title}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Project Architecture Overview Banner */}
        <div className="p-5 sm:p-8 border border-[--border] bg-[--surface]/40 mb-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
            <div>
              <span className="label-lime block mb-1">SYSTEM TOPOLOGY</span>
              <h3 className="text-xl md:text-2xl font-bold text-[--text]">{currentProject.title}</h3>
              <p className="font-mono text-xs text-[--lime] mt-1">{currentProject.subtitle}</p>
            </div>
            <span className="font-mono text-[10px] text-[--muted] px-3 py-1 border border-[--border] self-start md:self-center">
              {currentProject.nodes.length} ARCHITECTURAL NODES
            </span>
          </div>
          <p className="text-sm text-[--muted] leading-relaxed max-w-3xl">
            {currentProject.overview}
          </p>
        </div>

        {/* Interactive Multi-Tier Architecture Diagram */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-4">
            <span className="font-mono text-xs text-[--muted] uppercase tracking-wider flex items-center gap-2">
              <Layers size={14} className="text-[--lime]" />
              INTERACTIVE COMPONENT TOPOLOGY (TAP OR HOVER TO INSPECT)
            </span>
            <span className="font-mono text-[10px] text-[--lime]">CLICK NODE FOR FULL SPECIFICATION</span>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {currentProject.nodes.map((node) => {
              const isSelected = activeNode.id === node.id;
              return (
                <motion.div
                  key={node.id}
                  onClick={() => setActiveNodeId(node.id)}
                  onMouseEnter={() => setActiveNodeId(node.id)}
                  className={`p-5 border cursor-pointer transition-all ${
                    isSelected
                      ? "border-[--lime] bg-[--lime]/10"
                      : "border-[--border] bg-[--surface]/30 hover:border-[--lime]/40 hover:bg-[--surface]/50"
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-[10px] text-[--lime] px-2 py-0.5 border border-[--lime]/30 bg-[--lime]/5">
                      {node.tier}
                    </span>
                    <span className="font-mono text-[10px] text-[--muted]">{node.protocol}</span>
                  </div>

                  <h4 className="font-bold text-sm text-[--text] mb-1 flex items-center gap-2">
                    {node.tier === "CLIENT" && <Laptop size={15} className="text-[--lime]" />}
                    {node.tier === "GATEWAY" && <Server size={15} className="text-[--lime]" />}
                    {node.tier === "CACHE_ENGINE" && <Zap size={15} className="text-[--lime]" />}
                    {node.tier === "DATABASE" && <Database size={15} className="text-[--lime]" />}
                    {node.tier === "INTEGRATION" && (
                      node.name.includes("Stripe") ? <CreditCard size={15} className="text-[--lime]" /> :
                      node.name.includes("Maps") ? <MapPin size={15} className="text-[--lime]" /> :
                      <Cpu size={15} className="text-[--lime]" />
                    )}
                    {node.name}
                  </h4>

                  <p className="font-mono text-[11px] text-[--muted] mb-3">{node.role}</p>

                  <div className="border-t border-[--border]/60 pt-2 flex items-center justify-between font-mono text-[10px] text-[--muted]">
                    <span>{node.tech.split("·")[0]}</span>
                    <span className="text-[--lime]">{isSelected ? "SELECTED ●" : "INSPECT →"}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Selected Node Detailed Inspector */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeNode.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="p-6 md:p-8 border border-[--lime]/40 bg-[--lime]/5 mb-14"
          >
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2 font-mono text-xs text-[--lime]">
                  <span>NODE SPECIFICATION</span>
                  <span>/</span>
                  <span>{activeNode.tier}</span>
                </div>
                <h3 className="text-xl font-bold text-[--text] mb-2">{activeNode.name}</h3>
                <p className="text-sm text-[--muted] leading-relaxed mb-4">{activeNode.description}</p>
                <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
                  <span className="text-[--muted]">CONNECTED TARGETS:</span>
                  {activeNode.connections.map((c) => (
                    <span key={c} className="px-2 py-0.5 border border-[--border] bg-[--surface] text-[--text]">
                      {c}
                    </span>
                  ))}
                </div>
              </div>

              <div className="md:w-80 border-t md:border-t-0 md:border-l border-[--border] pt-4 md:pt-0 md:pl-6 font-mono text-xs space-y-3">
                <div>
                  <span className="text-[--muted] text-[10px] block">TECHNOLOGY RUNTIME</span>
                  <p className="font-semibold text-[--lime]">{activeNode.tech}</p>
                </div>
                <div>
                  <span className="text-[--muted] text-[10px] block">INTERFACE PROTOCOL</span>
                  <p className="text-[--text]">{activeNode.protocol}</p>
                </div>
                <div>
                  <span className="text-[--muted] text-[10px] block">SYSTEM ROLE</span>
                  <p className="text-[--text]">{activeNode.role}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Concrete Data Flows Walkthrough */}
        <div className="mb-14">
          <div className="flex items-center gap-2 mb-4">
            <span className="label-lime">EXECUTION PIPELINE</span>
            <span className="font-mono text-xs text-[--muted]">/</span>
            <span className="font-mono text-xs text-[--muted]">STEP-BY-STEP DATA FLOWS</span>
          </div>
          <h3 className="text-2xl font-bold text-[--text] mb-6">Audited System Data Sequences</h3>

          {/* Flow Switcher */}
          <div className="flex flex-wrap gap-2 mb-6">
            {currentProject.flows.map((flow, idx) => (
              <button
                key={flow.title}
                onClick={() => setActiveFlowIndex(idx)}
                className={`px-4 py-2 font-mono text-xs font-semibold border transition-all ${
                  activeFlowIndex === idx
                    ? "border-[--lime] bg-[--lime]/10 text-[--lime]"
                    : "border-[--border] text-[--muted] hover:text-[--text]"
                }`}
              >
                {flow.title}
              </button>
            ))}
          </div>

          <div className="p-6 border border-[--border] bg-[--surface]/20">
            <p className="text-sm text-[--muted] mb-8 font-mono leading-relaxed">
              {currentFlow.description}
            </p>

            {/* Sequence Steps */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {currentFlow.steps.map((step) => (
                <div
                  key={step.step}
                  className="relative p-5 border border-[--border] bg-[--surface]/40 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3 font-mono text-xs">
                      <span className="text-[--lime] font-bold">STEP {step.step}</span>
                      <span className="text-[10px] text-[--muted] px-1.5 py-0.5 border border-[--border]">
                        {step.protocol}
                      </span>
                    </div>

                    <h4 className="font-bold text-sm text-[--text] mb-3">{step.title}</h4>

                    <div className="font-mono text-[10px] text-[--muted] space-y-1 mb-3 pb-3 border-b border-[--border]/60">
                      <p className="flex items-center gap-1.5">
                        <span className="text-[--lime]">From:</span> {step.sender}
                      </p>
                      <p className="flex items-center gap-1.5">
                        <span className="text-[--lime]">To:</span> {step.receiver}
                      </p>
                    </div>

                    <p className="text-xs text-[--muted] leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-2 flex items-center justify-end font-mono text-[10px] text-[--lime]">
                    <span>PROCEED →</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Security, Auth & Concurrency Callout */}
        <div className="p-6 md:p-8 border border-[--border] bg-[--surface]/30">
          <div className="flex items-center gap-2 mb-4 font-mono text-xs text-[--lime]">
            <ShieldCheck size={18} />
            <span className="font-bold">AUTHENTICATION, INTEGRITY &amp; PROTOCOL SECURITY</span>
          </div>

          <div className="grid gap-6 md:grid-cols-3 font-mono text-xs">
            <div className="p-4 border border-[--border] bg-[--surface]/40">
              <span className="text-[--muted] text-[10px] block mb-1">AUTHENTICATION &amp; ACCESS</span>
              <p className="text-[--text] leading-relaxed">{currentProject.security.auth}</p>
            </div>
            <div className="p-4 border border-[--border] bg-[--surface]/40">
              <span className="text-[--muted] text-[10px] block mb-1">DATA INTEGRITY &amp; CONCURRENCY</span>
              <p className="text-[--text] leading-relaxed">{currentProject.security.integrity}</p>
            </div>
            <div className="p-4 border border-[--border] bg-[--surface]/40">
              <span className="text-[--muted] text-[10px] block mb-1">NETWORK PROTOCOLS &amp; ENCRYPTION</span>
              <p className="text-[--text] leading-relaxed">{currentProject.security.protocols}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
