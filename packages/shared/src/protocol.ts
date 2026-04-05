import { DayGuideline, ProtocolPhase } from "./types";

const phaseForDay = (day: number): ProtocolPhase => {
  if (day <= 7) {
    return "Permission";
  }
  if (day <= 14) {
    return "Embodiment";
  }
  return "Normalization";
};

export const protocolGuidelines: DayGuideline[] = [
  {
    day: 1,
    title: "Begin Without Performing",
    phase: phaseForDay(1),
    focus: "Reduce internal alarm. Let the belief become a hypothesis instead of a demand.",
    doList: [
      "Start with the relax sequence before any meaning-making.",
      "State the belief as an experiment you are willing to observe.",
      "Notice where your body tightens when you think about change."
    ],
    avoidList: [
      "Do not force certainty.",
      "Do not search for dramatic proof on day one.",
      "Do not treat discomfort as failure."
    ],
    whyThisMatters: "The first day is about lowering rejection. When the nervous system stops bracing, the mind can test a bigger possibility without feeling fooled.",
    schedule: [
      { label: "Morning", window: "6:30-10:00", guidance: "Relax, cognitive line, first identity note." },
      { label: "Midday", window: "12:00-15:00", guidance: "Catch one old thought and replace it gently." },
      { label: "Evening", window: "19:00-21:30", guidance: "Record evidence and reflection without drama." }
    ],
    microBehavior: "Pause before opening your phone and take one slow 4-6 breath cycle.",
    dailyLine: "Today I am allowed to consider more than my fear predicts.",
    cautionLine: "Trying to feel convinced too early usually creates more inner pushback."
  },
  {
    day: 2,
    title: "Make Safety the Starting Point",
    phase: phaseForDay(2),
    focus: "Pair the belief with regulation so the mind stops reading it as danger.",
    doList: [
      "Rate calm before and after the breathing set.",
      "Use the phrase 'safe enough' instead of 'ready'.",
      "Log resistance in simple language."
    ],
    avoidList: [
      "Do not chase motivation spikes.",
      "Do not argue with every fearful thought.",
      "Do not skip the body checklist."
    ],
    whyThisMatters: "The brain learns by association. If each belief practice starts with steadiness, the belief becomes less threatening and more thinkable.",
    schedule: [
      { label: "Morning", window: "7:00-9:30", guidance: "Relax first, then write one sentence of openness." },
      { label: "During day", window: "11:00-17:00", guidance: "Replace one urgent thought with a grounded alternative." },
      { label: "Evening", window: "20:00-22:00", guidance: "Capture where calm improved action." }
    ],
    microBehavior: "Drop your shoulders each time you notice future panic.",
    dailyLine: "Calm does not guarantee the outcome, but it improves my thinking.",
    cautionLine: "If you use this practice to escape emotion, the nervous system stays unconvinced."
  },
  {
    day: 3,
    title: "Stop Debating Every Objection",
    phase: phaseForDay(3),
    focus: "Move from mental fighting into cognitive flexibility.",
    doList: [
      "Write the strongest resistance thought exactly as it appears.",
      "Answer with an alternative that is believable, not inflated.",
      "Keep the replacement sentence short."
    ],
    avoidList: [
      "Do not invent unrealistic counter-statements.",
      "Do not analyze your whole life story today.",
      "Do not mistake repetition for progress."
    ],
    whyThisMatters: "A disciplined replacement thought teaches the mind that it has more options than total rejection or total fantasy.",
    schedule: [
      { label: "Morning", window: "6:30-9:00", guidance: "Relax, then identify the main objection." },
      { label: "Afternoon", window: "13:00-16:00", guidance: "Use one replacement in real time." },
      { label: "Evening", window: "19:30-21:30", guidance: "Reflect on whether the replacement reduced strain." }
    ],
    microBehavior: "When resistance appears, say: 'That is a protective thought, not a prophecy.'",
    dailyLine: "Openness grows when I stop treating every fear as final truth.",
    cautionLine: "Over-explaining to yourself can become another form of resistance."
  },
  {
    day: 4,
    title: "Create Emotional Margin",
    phase: phaseForDay(4),
    focus: "Make inner space so the belief can exist without pressure.",
    doList: [
      "Use the relax section even if you feel fine.",
      "Write what the future version does not obsess over.",
      "Collect one sign that your capacity is already larger than old fear admits."
    ],
    avoidList: [
      "Do not monitor results all day.",
      "Do not mistake hyper-vigilance for commitment.",
      "Do not let urgency decide your tone."
    ],
    whyThisMatters: "Emotional margin gives the mind room to update. Tight control usually keeps old identity structures intact.",
    schedule: [
      { label: "Morning", window: "7:00-9:30", guidance: "Breathing, body release, identity rehearsal." },
      { label: "Late afternoon", window: "16:00-18:00", guidance: "Choose one action done without rushing." },
      { label: "Evening", window: "20:00-22:00", guidance: "Log evidence of steadier behavior." }
    ],
    microBehavior: "Take 15 seconds before replying to any message that triggers pressure.",
    dailyLine: "Space helps new patterns take hold.",
    cautionLine: "If everything feels urgent, your old pattern is probably driving."
  },
  {
    day: 5,
    title: "Let the Belief Become More Speakable",
    phase: phaseForDay(5),
    focus: "Make the belief psychologically sayable without embarrassment or inflation.",
    doList: [
      "Say the belief in a neutral tone once during identity practice.",
      "Write how the future version speaks about herself without apology.",
      "Notice which words create the most contraction."
    ],
    avoidList: [
      "Do not perform confidence.",
      "Do not use grand language that your body rejects.",
      "Do not hide from the belief entirely."
    ],
    whyThisMatters: "When a possibility can be stated plainly, it moves out of fantasy territory and closer to normal cognition.",
    schedule: [
      { label: "Morning", window: "6:30-9:30", guidance: "Relax, then speak the belief quietly." },
      { label: "During day", window: "12:00-16:00", guidance: "Replace apologetic inner language once." },
      { label: "Evening", window: "19:30-21:30", guidance: "Log one sentence that felt more natural." }
    ],
    microBehavior: "Replace 'This is ridiculous' with 'This is unfamiliar.'",
    dailyLine: "I can speak about change in a calm, ordinary voice.",
    cautionLine: "The goal is not to sound impressive. The goal is to sound internally credible."
  },
  {
    day: 6,
    title: "Find the First Real Proof of Shift",
    phase: phaseForDay(6),
    focus: "Train attention toward real micro-evidence instead of emotional extremes.",
    doList: [
      "Look for evidence of capacity, follow-through, or steadiness.",
      "Tag evidence clearly so you can compare later.",
      "Use short factual language."
    ],
    avoidList: [
      "Do not count imagined outcomes as evidence.",
      "Do not dismiss small progress because it is not dramatic.",
      "Do not turn the evidence section into wishful thinking."
    ],
    whyThisMatters: "The brain changes faster when it sees concrete signs that a new pattern is already being rehearsed in behavior.",
    schedule: [
      { label: "Morning", window: "7:00-9:00", guidance: "Regulate, then decide what evidence would matter today." },
      { label: "Daytime", window: "11:00-18:00", guidance: "Capture proof as it happens." },
      { label: "Evening", window: "20:00-21:30", guidance: "Review what was actually real." }
    ],
    microBehavior: "Record one grounded win before bed, even if it feels small.",
    dailyLine: "Small true evidence is more useful than large imaginary proof.",
    cautionLine: "If you exaggerate evidence, your trust in the process weakens."
  },
  {
    day: 7,
    title: "Complete the Permission Phase",
    phase: phaseForDay(7),
    focus: "Consolidate reduced rejection and a more regulated relationship to the belief.",
    doList: [
      "Review the week for repeated resistance themes.",
      "Notice where calm changed your choices.",
      "Write one sentence about what is easier than day one."
    ],
    avoidList: [
      "Do not demand visible life transformation yet.",
      "Do not compare your pace to an imaginary standard.",
      "Do not skip reflection because the week felt subtle."
    ],
    whyThisMatters: "The first phase matters because it lowers inner opposition. Without that, embodiment turns into role-play instead of genuine conditioning.",
    schedule: [
      { label: "Morning", window: "7:00-9:30", guidance: "Relax, cognitive review, identity rehearsal." },
      { label: "Afternoon", window: "13:00-16:00", guidance: "Take one quiet but aligned action." },
      { label: "Evening", window: "19:30-22:00", guidance: "Review the first 7 days and ask what softened." }
    ],
    microBehavior: "Read one past entry and highlight a real sign of increased openness.",
    dailyLine: "Permission is progress when the old pattern used to reject everything.",
    cautionLine: "Subtle improvement still counts. The nervous system often shifts quietly first."
  },
  {
    day: 8,
    title: "Act From the More Stable Version",
    phase: phaseForDay(8),
    focus: "Transition from permission into embodiment through small, repeatable action.",
    doList: [
      "Define a non-negotiable action that reflects the new identity.",
      "Write what the steadier version does first instead of later.",
      "Keep the action modest but real."
    ],
    avoidList: [
      "Do not choose an action for performance value.",
      "Do not overpromise to feel productive.",
      "Do not wait for mood alignment."
    ],
    whyThisMatters: "Embodiment begins when behavior starts to carry the belief, even before the belief feels fully natural.",
    schedule: [
      { label: "Morning", window: "6:30-9:00", guidance: "Relax, identity prompts, commit today's action." },
      { label: "Midday", window: "12:00-17:00", guidance: "Complete the action before overthinking." },
      { label: "Evening", window: "20:00-21:30", guidance: "Reflect on what action taught you." }
    ],
    microBehavior: "Do one thing earlier than your old pattern would.",
    dailyLine: "Embodiment starts with behavior, not performance.",
    cautionLine: "If your action is too big, it will train inconsistency rather than identity."
  },
  {
    day: 9,
    title: "Notice the New Default Tone",
    phase: phaseForDay(9),
    focus: "Shape the internal tone of the new identity: measured, clear, not begging.",
    doList: [
      "Write how this version speaks about work, money, or self-respect.",
      "Observe whether your language is calmer today.",
      "Use evidence to support a more stable inner tone."
    ],
    avoidList: [
      "Do not use superiority as confidence.",
      "Do not use self-criticism as discipline.",
      "Do not confuse intensity with seriousness."
    ],
    whyThisMatters: "Identity is partly linguistic. The tone you use with yourself either stabilizes or sabotages the version you are building.",
    schedule: [
      { label: "Morning", window: "7:00-9:30", guidance: "Regulate and write three identity tone lines." },
      { label: "During day", window: "11:00-17:00", guidance: "Catch one old self-diminishing phrase." },
      { label: "Evening", window: "19:30-21:30", guidance: "Record where your tone felt steadier." }
    ],
    microBehavior: "Replace one apologetic phrase with a direct statement.",
    dailyLine: "My inner tone can be composed without being cold.",
    cautionLine: "Harshness is often the old identity wearing a mask of discipline."
  },
  {
    day: 10,
    title: "Make the New Pattern More Normal in Motion",
    phase: phaseForDay(10),
    focus: "Reduce the gap between reflection and lived behavior.",
    doList: [
      "Link the day’s action to a real context: message, task, boundary, or routine.",
      "Track how the body responds before and after acting.",
      "Log one sign of traction, not just effort."
    ],
    avoidList: [
      "Do not keep the whole protocol private in your head.",
      "Do not mistake planning for practice.",
      "Do not use reflection to delay action."
    ],
    whyThisMatters: "Patterns become believable when they show up in motion. Real-world context teaches the brain faster than isolated journaling alone.",
    schedule: [
      { label: "Morning", window: "6:30-9:00", guidance: "Relax, cognitive line, define today's context-based action." },
      { label: "Midday", window: "12:00-16:00", guidance: "Complete the action and record the response." },
      { label: "Evening", window: "19:30-21:30", guidance: "Review traction and resistance." }
    ],
    microBehavior: "Take the aligned step before polishing it endlessly.",
    dailyLine: "The new pattern learns through use.",
    cautionLine: "A beautiful inner script means little if behavior never touches real life."
  },
  {
    day: 11,
    title: "Strengthen Identity Through Repetition",
    phase: phaseForDay(11),
    focus: "Let repetition become stabilizing rather than boring.",
    doList: [
      "Reuse identity lines that already feel strong.",
      "Surface past favorite statements and say them again.",
      "Track whether the language lands faster today."
    ],
    avoidList: [
      "Do not chase novelty for stimulation.",
      "Do not discard what works because it feels simple.",
      "Do not keep rewriting from scratch every day."
    ],
    whyThisMatters: "The mind trusts what it sees repeatedly under grounded conditions. Repetition is how identity shifts from theory into familiarity.",
    schedule: [
      { label: "Morning", window: "7:00-9:30", guidance: "Relax, then rehearse six identity lines." },
      { label: "Afternoon", window: "13:00-16:00", guidance: "Notice which line changes your posture or choices." },
      { label: "Evening", window: "20:00-21:30", guidance: "Save the lines that held up under pressure." }
    ],
    microBehavior: "Use the same strong line twice in one day instead of inventing a new one.",
    dailyLine: "Repetition can be stabilizing when it is honest.",
    cautionLine: "If you keep changing the message, your nervous system cannot learn it well."
  },
  {
    day: 12,
    title: "Respect the Place Where Resistance Still Lives",
    phase: phaseForDay(12),
    focus: "See recurring resistance with accuracy rather than shame.",
    doList: [
      "Name the repeated fear theme clearly.",
      "Ask whether it is about safety, worth, timing, or control.",
      "Write a replacement that reduces panic without erasing reality."
    ],
    avoidList: [
      "Do not punish yourself for recurring resistance.",
      "Do not call it sabotage when it may be protection.",
      "Do not romanticize struggle."
    ],
    whyThisMatters: "What is seen clearly can be worked with. Resistance often softens when it is met with precision instead of self-attack.",
    schedule: [
      { label: "Morning", window: "6:30-9:00", guidance: "Regulate and identify the repeated fear." },
      { label: "During day", window: "11:00-17:00", guidance: "Use the replacement where the old pattern usually spikes." },
      { label: "Evening", window: "19:30-21:30", guidance: "Review whether naming the pattern reduced its power." }
    ],
    microBehavior: "When resistance hits, label the category before reacting.",
    dailyLine: "Precision is kinder and more effective than self-judgment.",
    cautionLine: "If you collapse into shame, you lose the information the pattern was revealing."
  },
  {
    day: 13,
    title: "Build Trust Through Completion",
    phase: phaseForDay(13),
    focus: "Use follow-through as evidence that the new identity is gaining weight.",
    doList: [
      "Choose one action that can definitely be completed today.",
      "Mark the completion time when it is done.",
      "Notice the emotional effect of finishing."
    ],
    avoidList: [
      "Do not make the task symbolic but impossible.",
      "Do not leave completion vague.",
      "Do not discount completed action because it looked small."
    ],
    whyThisMatters: "Trust is built through kept promises. Completion teaches the brain that this identity can carry action, not just intention.",
    schedule: [
      { label: "Morning", window: "7:00-9:00", guidance: "Relax, then decide the action with a clear endpoint." },
      { label: "Daytime", window: "10:00-18:00", guidance: "Complete it and log proof immediately." },
      { label: "Evening", window: "20:00-21:30", guidance: "Reflect on how completion changed possibility." }
    ],
    microBehavior: "Close one loop you usually postpone.",
    dailyLine: "Completion teaches my system that change is not just talk.",
    cautionLine: "An unfinished ambitious plan is often less helpful than a completed modest action."
  },
  {
    day: 14,
    title: "Complete the Embodiment Phase",
    phase: phaseForDay(14),
    focus: "Review which behaviors now feel less foreign and more available.",
    doList: [
      "Compare your current identity language to week one.",
      "List three behavioral shifts, even if subtle.",
      "Notice whether the belief now feels easier to act from."
    ],
    avoidList: [
      "Do not only measure external outcomes.",
      "Do not ignore regulation gains.",
      "Do not assume subtle embodiment is weak embodiment."
    ],
    whyThisMatters: "The second phase turns possibility into lived rehearsal. Reviewing it helps the mind recognize that a pattern has actually been forming.",
    schedule: [
      { label: "Morning", window: "6:30-9:30", guidance: "Relax and review favorite identity lines." },
      { label: "Afternoon", window: "13:00-16:00", guidance: "Take one action from the steadier version." },
      { label: "Evening", window: "19:30-22:00", guidance: "Compare the last 7 days and note behavioral shifts." }
    ],
    microBehavior: "Read one early resistance log and notice what is now less convincing.",
    dailyLine: "What once felt performative can start to feel normal through repetition.",
    cautionLine: "If you only honor big wins, you will miss the quiet normalization already underway."
  },
  {
    day: 15,
    title: "Treat Progress as Something That Could Continue",
    phase: phaseForDay(15),
    focus: "Begin normalization by asking what naturally follows if this is becoming true.",
    doList: [
      "Use the reflection prompt about the next step seriously.",
      "Choose a next action that assumes continuation, not certainty.",
      "Write in a tone of grounded expectancy."
    ],
    avoidList: [
      "Do not act as if everything is already complete.",
      "Do not return to helpless observation mode.",
      "Do not look for guarantees before moving."
    ],
    whyThisMatters: "Normalization is not pretending the outcome is here. It is behaving as though growth is plausible enough to organize around.",
    schedule: [
      { label: "Morning", window: "7:00-9:30", guidance: "Relax, identity, then choose the next natural step." },
      { label: "During day", window: "11:00-17:00", guidance: "Take the step with ordinary seriousness." },
      { label: "Evening", window: "20:00-21:30", guidance: "Reflect on how continuation feels." }
    ],
    microBehavior: "Ask once: 'If this keeps moving, what do I prepare for now?'",
    dailyLine: "I can move as though progress may continue, without pretending it is guaranteed.",
    cautionLine: "Normalization becomes delusion only when it stops being anchored to real behavior and evidence."
  },
  {
    day: 16,
    title: "Reduce the Need to Be Impressed",
    phase: phaseForDay(16),
    focus: "Let calm consistency matter more than emotional intensity.",
    doList: [
      "Notice what feels ordinary in a good way.",
      "Log evidence of steadiness, not just breakthroughs.",
      "Use simple language in reflection."
    ],
    avoidList: [
      "Do not seek a dramatic sign to validate the protocol.",
      "Do not manufacture excitement.",
      "Do not abandon the process because today feels quiet."
    ],
    whyThisMatters: "Many lasting shifts feel less cinematic than expected. Normalization requires comfort with steady, underwhelming progress that keeps building.",
    schedule: [
      { label: "Morning", window: "6:30-9:00", guidance: "Relax and note one pattern that already feels less charged." },
      { label: "Afternoon", window: "12:00-17:00", guidance: "Take one ordinary action from the new identity." },
      { label: "Evening", window: "19:30-21:30", guidance: "Record what was quietly solid today." }
    ],
    microBehavior: "Give yourself credit for steadiness without needing a rush.",
    dailyLine: "Quiet consistency can be a stronger signal than intensity.",
    cautionLine: "If you only trust dramatic emotion, you may miss genuine normalization."
  },
  {
    day: 17,
    title: "Protect the New Pattern From Old Narrative Gravity",
    phase: phaseForDay(17),
    focus: "Catch the stories that try to pull you back into inevitability and helplessness.",
    doList: [
      "Identify the old narrative that feels most persuasive.",
      "Replace it with a statement that honors current evidence.",
      "Take one action that contradicts the old inevitability."
    ],
    avoidList: [
      "Do not rehearse your limitation story for emotional familiarity.",
      "Do not treat a hard moment as total regression.",
      "Do not confuse old narrative fluency with truth."
    ],
    whyThisMatters: "Old narratives often regain power through familiarity, not accuracy. Interrupting them protects the pattern you have been building.",
    schedule: [
      { label: "Morning", window: "7:00-9:30", guidance: "Regulate and name the old narrative clearly." },
      { label: "During day", window: "11:00-16:00", guidance: "Use the replacement when the story reappears." },
      { label: "Evening", window: "20:00-21:30", guidance: "Document the contradiction you created through action." }
    ],
    microBehavior: "When the old story appears, ask: 'What evidence from this week complicates that?'",
    dailyLine: "Familiar is not the same as final.",
    cautionLine: "Regression thinking often appears right before a pattern becomes more solid."
  },
  {
    day: 18,
    title: "Practice Ordinary Self-Respect",
    phase: phaseForDay(18),
    focus: "Normalize the belief by behaving with higher self-respect in practical ways.",
    doList: [
      "Choose one boundary, standard, or decision that reflects self-respect.",
      "Write what the new identity no longer begs life for.",
      "Track how dignity changes your behavior."
    ],
    avoidList: [
      "Do not confuse self-respect with rigidity.",
      "Do not demand perfection from yourself.",
      "Do not make your worth depend on today’s mood."
    ],
    whyThisMatters: "Self-respect stabilizes identity. It turns the protocol from wishful self-talk into a lived standard.",
    schedule: [
      { label: "Morning", window: "6:30-9:00", guidance: "Relax, rehearse identity, decide today's standard." },
      { label: "Afternoon", window: "12:00-17:00", guidance: "Enact the boundary or standard once." },
      { label: "Evening", window: "19:30-21:30", guidance: "Reflect on how dignity shifted your day." }
    ],
    microBehavior: "Say no to one draining impulse or distraction.",
    dailyLine: "Self-respect makes possibility easier to inhabit.",
    cautionLine: "If your new identity still has to plead for legitimacy, it is not being embodied yet."
  },
  {
    day: 19,
    title: "Make the Future Less Abstract",
    phase: phaseForDay(19),
    focus: "Translate possibility into practical next moves, systems, and preparation.",
    doList: [
      "Ask what preparation becomes sensible if the shift continues.",
      "Notice what feels like responsible readiness rather than fantasy.",
      "Use the evidence section to anchor next steps."
    ],
    avoidList: [
      "Do not make major commitments from emotional high.",
      "Do not keep the future purely symbolic.",
      "Do not use planning to avoid today’s action."
    ],
    whyThisMatters: "A future becomes more believable when it starts to shape practical planning. That is different from pretending it has already arrived.",
    schedule: [
      { label: "Morning", window: "7:00-9:30", guidance: "Relax and identify one preparation move." },
      { label: "Daytime", window: "11:00-17:00", guidance: "Take the preparation step in real life." },
      { label: "Evening", window: "20:00-21:30", guidance: "Reflect on whether preparedness reduced impossible-feeling." }
    ],
    microBehavior: "Organize one practical detail your future self would not keep vague.",
    dailyLine: "Preparation is one way possibility becomes more normal.",
    cautionLine: "Preparation should be grounded in reality, not used as theater."
  },
  {
    day: 20,
    title: "Stabilize the New Baseline",
    phase: phaseForDay(20),
    focus: "Notice what now feels more normal, less charged, and easier to carry.",
    doList: [
      "List three things that feel less impossible than day one.",
      "Review calm, resistance, and action trends together.",
      "Write from the version for whom this trajectory is sustainable."
    ],
    avoidList: [
      "Do not dismiss normalization because it feels ordinary.",
      "Do not reintroduce chaos to feel momentum.",
      "Do not focus only on what is unfinished."
    ],
    whyThisMatters: "A baseline shift often reveals itself through reduced emotional charge, steadier behavior, and a more natural internal stance.",
    schedule: [
      { label: "Morning", window: "6:30-9:00", guidance: "Relax and rehearse the sustainable version of you." },
      { label: "Afternoon", window: "12:00-16:00", guidance: "Take one action that supports the new baseline." },
      { label: "Evening", window: "19:30-21:30", guidance: "Review what feels more normal now." }
    ],
    microBehavior: "Notice one thing you no longer need to argue yourself into.",
    dailyLine: "A quieter baseline can still be a major shift.",
    cautionLine: "If you keep chasing intensity, you can destabilize the very baseline you built."
  },
  {
    day: 21,
    title: "Close With Continuity",
    phase: phaseForDay(21),
    focus: "Complete the protocol by turning it into an ongoing standard rather than a finished performance.",
    doList: [
      "Review your strongest entries and recurring improvements.",
      "Write what you will continue weekly after day 21.",
      "Let the final reflection focus on continuity, not climax."
    ],
    avoidList: [
      "Do not expect the process to end in magical certainty.",
      "Do not abandon what worked because the 21 days are complete.",
      "Do not use the finish line as pressure."
    ],
    whyThisMatters: "The real value of the protocol is a more regulated, evidence-based relationship to possibility. Day 21 matters because it turns an experiment into a durable practice.",
    schedule: [
      { label: "Morning", window: "7:00-9:30", guidance: "Relax, then review the identity you strengthened." },
      { label: "Afternoon", window: "12:00-16:00", guidance: "Take one action that represents continuity." },
      { label: "Evening", window: "19:30-22:00", guidance: "Complete your final reflection and weekly summary." }
    ],
    microBehavior: "Choose one weekly ritual that will keep this pattern alive.",
    dailyLine: "I leave this protocol with more grounded possibility and better self-trust.",
    cautionLine: "The goal was never fantasy. It was to build a steadier, more capable relationship to what may be possible."
  }
];

export const evidenceQuickChips = [
  "I stayed calmer than usual",
  "I followed through",
  "I asked more directly",
  "I recovered faster",
  "I noticed less rejection",
  "I prepared instead of panicked",
  "I tolerated uncertainty better"
];

export const identityPrompts = [
  "What does she notice?",
  "What does she ignore?",
  "What does she do first?",
  "How does she speak about work, money, and herself?",
  "What does she no longer beg life for?",
  "What feels normal for her now?"
];
