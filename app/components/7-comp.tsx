"use client"

import { useState, useEffect } from "react"

const activities = [
  {
    id: 1,
    icon: "📧",
    label: "Personalized Email",
    status: "13s",
    statusType: "time",
    desc: "Personalized Email sent to ••••• @gm…",
  },
  {
    id: 2,
    icon: "📝",
    label: "Peer Review",
    status: "FAILED",
    statusType: "error",
    desc: "Reviewed and approved 2 outputs fr…",
  },
  {
    id: 3,
    icon: "✍️",
    label: "Content Drafting",
    status: "PROCESSING",
    statusType: "processing",
    desc: "Generated draft campaign brief",
  },
  {
    id: 4,
    icon: "✓",
    label: "Admin Approval",
    status: "PROCESSING",
    statusType: "processing",
    desc: "Final approval of marketing copy bef…",
  },
  {
    id: 5,
    icon: "📊",
    label: "Weekly Campaign Report",
    status: "3m",
    statusType: "time",
    desc: "Generated campaign performance re…",
  },
]



const guardrailChecks = [
  { id: 1, label: "Brand & Style", color: "bg-blue-500" },
  { id: 2, label: "Compliance & Policy", color: "bg-green-500" },
  { id: 3, label: "Content Safety Filters", color: "bg-purple-500" },
  { id: 4, label: "Approval Triggers", color: "bg-gray-500" },
  { id: 5, label: "Output Quality Checks", color: "bg-pink-500" },
]

/* SOLO DATA NUEVA */
const agentStates = [
  { id: 1, name: "Agent Alpha", state: "Running", color: "bg-green-500" },
  { id: 2, name: "Agent Beta", state: "Idle", color: "bg-muted" },
  { id: 3, name: "Agent Gamma", state: "Processing", color: "bg-orange-500" },
  { id: 4, name: "Agent Delta", state: "Paused", color: "bg-blue-500" },
]

export default function ComponenteRectangulo() {
  const [activeUser, setActiveUser] = useState(0)
  const [flowProgress, setFlowProgress] = useState(0)
  const [visibleActivities, setVisibleActivities] = useState<number[]>([])
  const [guardrailProgress, setGuardrailProgress] = useState(0)

  /* SOLO ESTADO NUEVO */
  const [activeAgent, setActiveAgent] = useState(0)

  useEffect(() => {
    activities.forEach((activity, index) => {
      setTimeout(() => {
        setVisibleActivities((prev) => [...prev, activity.id])
      }, index * 150)
    })
  }, [])





  /* SOLO useEffect NUEVO */
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveAgent((prev) => (prev + 1) % agentStates.length)
    }, 2200)
    return () => clearInterval(interval)
  }, [])



  return (
    <section className="w-full py-5">
      <div className="relative max-w-6xl mx-auto">
        {/* Líneas estructurales */}
        
        <div className="absolute top-0 left-0 right-0 h-px bg-border/90" />

      <div className="absolute top-1/2 left-0 right-0 h-px bg-border/90" />



        <div className="grid grid-cols-2 grid-rows-2 min-h-[800px]">
          {/* ───────────────────────────── */}
          {/* Upper Left – Audit Trail */}
          {/* ───────────────────────────── */}
          <div className="p-15 space-y-10 overflow-hidden">
            <div>
              <h3 className="text-primary-general text-xl font-semibold mb-2 text-foreground">
                Audit Trail
              </h3>
              <p className="text-sm max-w-md text-primary-color-text">
                Tracks every agent action with full input-output visibility and timestamps.
              </p>
            </div>

            <div className="space-y-2">
              {activities.map((activity) => (
                <div
                  key={activity.id}
                  className={`flex items-center gap-3.5 p-3 rounded-lg border border-border/40 bg-card/30 transition-all duration-500 ease-out ${
                    visibleActivities.includes(activity.id)
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-2"
                  }`}
                >
                  <div className="w-8 h-8 rounded-md bg-muted/20 flex items-center justify-center text-sm shrink-0">
                    {activity.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-0.4">
                      
                      <span className="text-primary-general text-xs font-medium text-foreground truncate">
                        {activity.label}
                      </span>

                      <span
                        className={`text-[10px] px-2 py-0.5 rounded-full shrink-0 ${
                          activity.statusType === "error"
                            ? "bg-red-500/20 text-red-400"
                            : activity.statusType === "processing"
                            ? "bg-green-500/20 text-green-400"
                            : "bg-muted text-muted-foreground"
                        }`}
                      >
                        {activity.status}
                      </span>
                    </div>
                    <p className="text-[11px] text-muted-foreground truncate">
                      {activity.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>



          {/* ───────────────────────────── */}
          {/* Upper Right – Live Agent States */}
          {/* ───────────────────────────── */}
          <div className="p-15 space-y-20 overflow-hidden">
            <div>
              <h3 className="text-primary-general text-xl font-semibold mb-2 text-foreground">
                Live Agent States
              </h3>
              <p className="text-sm max-w-md text-primary-color-text">
                Real-time execution status of autonomous agents.
              </p>
            </div>


            <div className="space-y-4">
              {agentStates.map((agent, index) => (
                <div
                  key={agent.id}
                  className={`flex items-center justify-between p-5 rounded-lg border transition-all duration-500 ${
                    activeAgent === index
                      ? "border-primary/50 bg-card/30"
                      : "border-border/30 bg-card/30 opacity-60"
                  }`}
                >
                  <span className="text-sm text-primary-color-text">
                    {agent.name}
                  </span>
                  <div className="flex items-center gap-3">
                    <span className="text-xs ">
                      {agent.state}
                    </span>
                    <span
                      className={`w-2.5 h-2.5 rounded-full ${agent.color} ${
                        activeAgent === index ? "animate-pulse" : ""
                      }`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>


          {/* ───────────────────────────── */}
          {/* Bottom Left – Approval Queue */}
          {/* ───────────────────────────── */}
          {/* <div className="p-15 space-y-30 overflow-hidden">
            <div>
              <h3 className="text-primary-general text-xl font-semibold mb-2 text-foreground">
                Approval Queue
              </h3>
              <p className="text-sm max-w-md text-primary-color-text">
                Sends agent-generated content to human reviewers before publishing.
              </p>
            </div>

            <div className="flex items-center justify-center gap-7">
              <div
                className={`flex-7 p-7 rounded-lg border transition-all duration-500 ease-out ${
                  flowProgress === 0
                    ? "border-orange-500/50 bg-orange-500/10 scale-100"
                    : "border-border/30 bg-card/20 scale-95 opacity-60"
                }`}
              >
                <div className="w-15 h-11 rounded-lg bg-orange-500/20 flex items-center justify-center mb-3 mx-auto">
                  <span className="text-lg">📝</span>
                </div>
                <span className="text-xs font-medium text-foreground text-center block">
                  Draft
                </span>
              </div>

              <svg
                className={`w-5 h-5 shrink-0 transition-all duration-500 ${
                  flowProgress >= 1
                    ? "text-primary opacity-100"
                    : "text-border/30 opacity-40"
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" />
              </svg>

              <div
                className={`flex-7 p-7 rounded-lg border transition-all duration-500 ease-out ${
                  flowProgress === 1
                    ? "border-blue-500/50 bg-blue-500/10 scale-100"
                    : "border-border/30 bg-card/20 scale-95 opacity-60"
                }`}
              >
                <div className="w-15 h-11 rounded-lg bg-blue-500/20 flex items-center justify-center mb-3 mx-auto">
                  <span className="text-lg">👤</span>
                </div>
                <span className="text-xs font-medium text-foreground text-center block">
                  Review
                </span>
              </div>

              <svg
                className={`w-5 h-5 shrink-0 transition-all duration-500 ${
                  flowProgress >= 2
                    ? "text-primary opacity-100"
                    : "text-border/30 opacity-40"
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" />
              </svg>

              <div
                className={`flex-7 p-7 rounded-lg border transition-all duration-500 ease-out ${
                  flowProgress === 2
                    ? "border-green-500/50 bg-green-500/10 scale-100"
                    : "border-border/30 bg-card/20 scale-95 opacity-60"
                }`}
              >
                <div className="w-15 h-11 rounded-lg bg-green-500/20 flex items-center justify-center mb-3 mx-auto">
                  <span className="text-lg">✓</span>
                </div>
                <span className="text-xs font-medium text-foreground text-center block">
                  Live
                </span>
              </div>
            </div>
          </div> */}

          {/* ───────────────────────────── */}
          {/* Bottom Right – Guardrail Engine */}
          {/* ───────────────────────────── */}
          {/* <div className="p-15 space-y-15 overflow-hidden">
            <div>
              <h3 className="text-primary-general text-xl font-semibold mb-2 text-foreground">
                Guardrail Engine
              </h3>
              <p className="text-sm max-w-md text-primary-color-text">
                Applies brand, tone, and policy checks before output goes live.
              </p>
            </div>


            <div className="space-y-3">
              {guardrailChecks.map((check, index) => (
                <div
                  key={check.id}
                  className={`flex items-center gap-3 p-3 rounded-md transition-all duration-600 ease-out ${
                    guardrailProgress > index
                      ? "opacity-100 translate-x-0 bg-card/20"
                      : "opacity-40 translate-x-1"
                  }`}
                >
                  <div
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 transition-all duration-500 ${
                      guardrailProgress > index
                        ? `${check.color} border-transparent`
                        : "border-border/50 bg-transparent"
                    }`}
                  >
                    {guardrailProgress > index && (
                      <svg
                        className="w-3 h-3 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    )}
                  </div>
                  <span className="text-primary-general text-xs font-medium text-foreground">
                    {check.label}
                  </span>
                </div>
              ))}

              <div
                className={`mt-4 p-4 rounded-lg border transition-all duration-500 ${
                  guardrailProgress === guardrailChecks.length
                    ? "border-green-500/40 bg-green-500/10 opacity-100"
                    : "border-border/30 bg-card/20 opacity-50"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center shrink-0">
                    <svg
                      className="w-5 h-5 text-green-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="text-primary-general text-xs font-medium text-foreground">
                      All Checks Passed
                    </div>
                    <div className="text-[11px] text-muted-foreground">
                      Ready for publication
                    </div>
                  </div> */}
                {/* </div> */}
              {/* </div> */}
            {/* </div> */}
          </div>
        </div>
      {/* </div> */}
    // </section>
  )
}
