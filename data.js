// BMIC 2026 shot book content.
// Edit text here. Media goes in /media, named "<segment-id>-<shot number>.<ext>",
// e.g. media/show-open-03.mp4 or media/trophy-01.jpg. Supported: mp4, webm, mov, jpg, jpeg, png, webp, gif.
// To point a shot at a specific file instead, set its "media" field, e.g. media: "media/opener-cut.mp4".

window.SHOTBOOK = {
  title: "BMIC 2026",
  subtitle: "Shot breakdown",
  version: "Draft v2 · 27 Oct 2026",
  event: "Grand Finals · 30 Oct – 1 Nov 2026 · NSCI Dome, Mumbai",
  intro: "16 teams from India, South Korea and Japan. 18 matches, six a day. This book covers the scripted moments only; match play is cut live off the observer feed.",
  plotUrl: "https://bmic-2026-camera-plot.vercel.app/",

  // Key-visual artwork from the "For the Crown" proposal, bundled in /assets.
  kvBase: "assets/",
  kv: {
    crown: "kv-crown.jpg",
    trophy: "kv-trophy.jpg",
    facet: "crown-facet.jpg",
    stage: "stage-render.jpg", // shown in the camera layout slot until media/camera-layout.* is added
    motifs: ["motif-india.png", "motif-korea.png", "motif-japan.png"]
  },

  cameras: [
    { n: 1, name: "LOWER C", role: "Centre, floor riser", body: "HDC", lens: "24×" },
    { n: 2, name: "JIB L", role: "Right of stage, jib", body: "HDC", lens: "18×" },
    { n: 3, name: "JIB R", role: "Left of stage, jib", body: "HDC", lens: "18×" },
    { n: 4, name: "UPPER C", role: "Centre, upper tier", body: "HDC", lens: "125×" },
    { n: 5, name: "UPPER L", role: "Right, upper tier", body: "HDC", lens: "90×" },
    { n: 6, name: "UPPER R", role: "Left, upper tier", body: "HDC", lens: "90×" },
    { n: 7, name: "STEADICAM", role: "Stage floor, roaming", body: "HDC", lens: "18×" },
    { n: 8, name: "FX3 1", role: "Gimbal · tunnel and walk-ins", body: "Sony FX3", lens: "24–70" },
    { n: 9, name: "FX3 2", role: "Gimbal · player pods, emotion", body: "Sony FX3", lens: "16–35" },
    { n: 10, name: "FX3 3", role: "Gimbal · crowd and fans", body: "Sony FX3", lens: "24–70" },
    { n: 11, name: "PTZ Beauty", role: "Upstage, high, looking out", body: "PTZ", lens: "—" },
    { n: 12, name: "PTZ Beauty 2", role: "House right, high", body: "PTZ", lens: "—" },
    { n: 13, name: "PTZ Top-down", role: "Overhead, stage centre", body: "PTZ", lens: "—" }
  ],

  seating: {
    rowB: { left: ["iQOO8BIT", "Gladiators Esports", "iQOOSOUL"], leftNation: "IN",
            right: ["K9Esports", "Outrage Esports", "Blitz Epigrotive Gaming"], rightNation: "IN" },
    rowA: { left: ["DAEJEON GAME PT", "FOCUS", "Dplus Kia", "KIWOOM DRX", "Nongshim RedForce"], leftNation: "KR",
            right: ["VALOR", "Versus", "REIGNITE", "MAKING THE ROAD", "KINOTROPE gaming"], rightNation: "JP" },
    note: "Day 2 and Day 3 walk-in order is locked from the previous day's overall standings."
  },

  walkinsDay1: [
    ["Outrage Esports", "IN"], ["DAEJEON GAME PT", "KR"], ["KINOTROPE gaming", "JP"], ["Blitz Epigrotive Gaming", "IN"],
    ["Dplus Kia", "KR"], ["MAKING THE ROAD", "JP"], ["K9Esports", "IN"], ["FOCUS", "KR"],
    ["Versus", "JP"], ["iQOO8BIT", "IN"], ["KIWOOM DRX", "KR"], ["REIGNITE", "JP"],
    ["Gladiators Esports", "IN"], ["Nongshim RedForce", "KR"], ["VALOR", "JP"], ["iQOOSOUL", "IN"]
  ],

  segments: [
    {
      id: "performance", title: ["Pre-show", "performance."], days: [1, 2, 3],
      when: "",
      intro: "Alan Walker on Day 1. Dhol performance on Days 2 and 3.",
      shots: [
        { name: "Blackout to screen", camera: "4 · UPPER C", size: "Extreme wide", action: "Full stage and LED through the blackout and the artist video. Locked off; let the light and screen do the work." },
        { name: "Performer close", camera: "8 · FX3 1 / 1 · LOWER C", size: "Medium close-up", action: "Alan at the console, or the lead drummer on dhol days. Lower C holds the clean single when the gimbal moves." },
        { name: "Build-and-drop sweep", camera: "2 · JIB L / 3 · JIB R", size: "Wide, crane move", action: "One jib rises through the build, the other lands on the drop. Dancers fill the frame during the dance piece." },
        { name: "Crowd energy", camera: "10 · FX3 3 / 12 · PTZ Beauty 2", size: "Close fans, then high wide", action: "Hands up, phone lights, singing along. PTZ Beauty 2 gives the full house with the stage glowing behind." }
      ],
      cue: ""
    },
    {
      id: "trophy", title: ["The", "trophy."], gold: true, days: [1, 2, 3],
      when: "",
      intro: "Day 1: cosplayers carry the trophy in (to confirm), then the host thanks Alan Walker and throws to the opener. Day 2: trophy shots after the opener. Day 3: trophy reveal after the opener.",
      shots: [
        { name: "Trophy arrives", camera: "7 · STEADICAM", size: "Medium, leading backwards", action: "Lead the cosplayers and trophy to the mark (D1). On D2 and D3, a slow orbit of the trophy on its plinth." },
        { name: "Crane reveal", camera: "3 · JIB R", size: "Low to high crane", action: "Start low behind the trophy, rise to show it against the LED and the full arena." },
        { name: "Trophy hero", camera: "1 · LOWER C", size: "Medium close-up, slow push", action: "The trophy centre frame, gold against the stage. Slow zoom in; hold for the host's line." },
        { name: "Crown detail", camera: "8 · FX3 1 (24–70)", size: "Close detail, handheld", action: "Facets, edges and engraving at 70mm. Slow slides across the gold; three or four inserts." }
      ],
      cue: ""
    },
    {
      id: "show-open", title: ["Show", "open."], days: [1, 2, 3],
      when: "Opener",
      intro: "Two-minute opener, then the host. Days 1 and 3, the host intro follows the opener. Day 2, the host opens at 13:00 before the walk-ins and throws to the opener at 13:09.",
      shots: [
        { name: "Venue reveal", camera: "4 · UPPER C", size: "Extreme wide", action: "House lights down, opener AV on the LED. Hold the full arena, crowd and stage in one frame." },
        { name: "Crowd-to-stage sweep", camera: "2 · JIB L", size: "Wide, high sweep", action: "Sweep over the crowd and land on the stage as the BMIC logo hits the LED." },
        { name: "Overhead stage reveal", camera: "13 · PTZ Top-down", size: "Overhead wide", action: "Stage and player pods from above as the stage lights snap on. Hold through the light hit." },
        { name: "Host welcome", camera: "7 · STEADICAM → 1 · LOWER C", size: "Follow, then medium shot", action: "Steadicam walks the host to centre mark. Cut to Cam 1 as the host turns to lens and welcomes viewers." }
      ],
      cue: "If the opener plays full-screen on programme, use shots 01 to 03 coming out of it. Steadicam stands by with the host before the opener ends."
    },
    {
      id: "walk-ins", title: ["Team", "walk-ins."], days: [1, 2, 3], nations: true,
      when: "30s per team",
      intro: "16 teams, 30 seconds each, same four-shot pattern every time. Day 1 are side walk-ins from the left; Day 2 comes through the tunnel. Order and pods in the overview.",
      shots: [
        { name: "Entrance lead-out", camera: "8 · FX3 1 (gimbal)", size: "Medium, leading backwards", action: "Walk backwards ahead of the team from the side entrance (D1) or the tunnel (D2, D3), captain in front." },
        { name: "Stage entry follow", camera: "7 · STEADICAM", size: "Wide to medium, follow", action: "Pick the team up at the entry and follow them across the stage to their pod." },
        { name: "Team hero wide", camera: "3 · JIB R", size: "Wide, crane move", action: "Team crossing the stage with their nation colour and logo on the LED, crowd in the foreground." },
        { name: "Captain at pod", camera: "5 · UPPER L / 6 · UPPER R", size: "Medium close-up, one shot", action: "Captain at the pod acknowledging the crowd. Cam 6 takes left-side pods, Cam 5 right-side." }
      ],
      cue: "Days 2 and 3 order is locked from the previous night's standings. Steadicam resets to the entry while the previous team settles."
    },
    {
      id: "match-start", title: ["Match", "start."], days: [1, 2, 3],
      when: "Bridging · 1 min before each of the 6 daily matches",
      intro: "The last live-camera look at the lobby before we hand over to the observer feed for the drop.",
      shots: [
        { name: "Full lobby wide", camera: "4 · UPPER C", size: "Wide", action: "All 16 pods seated with the match number on the LED. Hold for the lower-third or map graphic." },
        { name: "Phone and player shots", camera: "8 · FX3 1 / 9 · FX3 2 / 10 · FX3 3 / 2 · JIB L / 3 · JIB R", size: "Team shots and player singles", action: "Players getting ready at their pods: on their phones, settling in, talking tactics. Random player moments from every handheld and both jibs." },
        { name: "Players lock in", camera: "5 · UPPER L / 6 · UPPER R / 9 · FX3 2", size: "Close-ups, singles", action: "Headsets on, eyes on screens. Favour the points leaders and any player on a storyline." },
        { name: "Crowd countdown", camera: "2 · JIB L", size: "Wide, crowd and stage", action: "Crowd counting down with the LED. Cut to the observer feed on \"go\"." }
      ],
      cue: "During the match, live cameras stand by for reaction cut-ins, with 5 and 6 split by stage side and ready for the final circle."
    },
    {
      id: "chicken-dinner", title: ["Winner winner", "chicken dinner."], days: [1, 2, 3],
      when: "WWCD · end of every match",
      intro: "The moment the match ends. Get to the winning and losing pods fast, then widen out for the room.",
      shots: [
        { name: "Winning & losing pod snap", camera: "5 · UPPER L / 6 · UPPER R", size: "Medium, group shot", action: "As the win registers, one Upper camera takes the winners' pod and the other takes the team that just lost the final fight. First cut out of the observer feed." },
        { name: "Emotion close", camera: "9 · FX3 2 (16–35)", size: "Wide-angle close, handheld", action: "Push into the pod for hugs, shouts and fist bumps. Stay low and close." },
        { name: "Crowd reaction", camera: "10 · FX3 3 / 3 · JIB R", size: "Close fans, then wide crowd", action: "Fans of the winning team or nation: flags, signs, jumping. Jib gives the wide crowd swell." },
        { name: "Stage wide with LED", camera: "4 · UPPER C", size: "Wide", action: "Full stage with the winner graphic on the LED. Hold here for the results table." }
      ],
      cue: "Pre-assign pods to Cam 5 or 6 from the pod map so nobody hunts. FX3 2 moves toward the likely winners during the final circle."
    },
    {
      id: "wwcd-interview", title: ["WWCD", "interview."], days: [1, 2, 3],
      when: "After every match · 2 min",
      intro: "Casters throw to the host, who talks to the WWCD team or the best performer. The same plan covers the table-toppers interview at the end of Day 1 (18:09) and Day 2 (18:00).",
      shots: [
        { name: "Establishing", camera: "1 · LOWER C", size: "Full shot, two shot", action: "Host to the centre camera addressing viewers. Player walks in or is already on the mark." },
        { name: "Medium two shot", camera: "6 · UPPER R", size: "Medium shot, two shot", action: "Host and player together. Host introduces the player and opens the interview." },
        { name: "Player single", camera: "5 · UPPER L", size: "Medium close-up, one shot", action: "Player answers with a clean eyeline to the host. Hold through the answers; translator in frame if used." },
        { name: "Host sign-off", camera: "1 · LOWER C", size: "Medium close-up, one shot", action: "Host back to lens, thanks the player and tosses to the next segment." }
      ],
      cue: "Korean and Japanese players may need a translator: frame them in the two shot and keep the player single on the player."
    },
    {
      id: "memento", title: ["Memento", "reveal."], days: [1],
      when: "",
      intro: "In place of the Match 1 WWCD interview, the host welcomes Ashish on stage. He reveals the mementoes and says a few lines, then the host throws to the break.",
      shots: [
        { name: "Guest walk-on", camera: "7 · STEADICAM / 3 · JIB R", size: "Medium follow, then wide", action: "Steadicam picks Ashish up at the entry and walks him to the host. Jib R holds the wide as they meet." },
        { name: "Host and guest", camera: "1 · LOWER C", size: "Medium two shot", action: "The master for the segment. Host introduces Ashish; come back here between his lines." },
        { name: "Guest single", camera: "5 · UPPER L / 6 · UPPER R", size: "Medium close-up, one shot", action: "Ashish as he speaks, from whichever side gives the clean eyeline to the host." },
        { name: "The reveal", camera: "8 · FX3 1 / 4 · UPPER C", size: "Close detail, then wide", action: "FX3 1 tight on the mementoes as they're uncovered. Upper C for the full stage and crowd reaction." }
      ],
      cue: "Confirm with the producer what the mementoes are, where they sit on stage and who uncovers them, so FX3 1 is in position before the walk-on."
    },
    {
      id: "breaks", title: ["Breaks &", "day close."], days: [1, 2, 3],
      when: "2:30 break after each match",
      intro: "Beauty shots in and out of breaks, crowd cutaways, and the closing look at the end of Day 1 and Day 2.",
      shots: [
        { name: "Stage beauty", camera: "11 · PTZ Beauty", size: "Wide, slow pan", action: "From upstage looking out over the pods to the crowd. Into and out of every break." },
        { name: "Arena beauty", camera: "12 · PTZ Beauty 2", size: "Wide, high angle", action: "High side angle of stage, LED and sponsor branding. Clean background for break graphics." },
        { name: "Crowd cutaways", camera: "10 · FX3 3", size: "Medium to close, handheld", action: "Fans in India, Korea and Japan colours, signs, cosplay and face paint. Build a library for breaks." },
        { name: "Day close pull-out", camera: "2 · JIB L", size: "Extreme wide, crane out", action: "After the host signs off, pull out from the stage to the full arena. Hold under the end card." }
      ],
      cue: "Preset both PTZ beauties before doors. Sponsor shots and break durations come from the rundown and client brief."
    },
    {
      id: "champions-moment", title: ["Champions", "moment."], days: [3],
      when: "D3 · after the final match",
      intro: "If the champions are decided, they go straight up to lift the trophy. Casters then tell their story and throw to the host for the ceremony. Top two qualify for PMGC 2026.",
      shots: [
        { name: "Contenders' tension", camera: "5 · UPPER L / 6 · UPPER R", size: "Close-ups, one per contender", action: "Each Upper camera locks on one title contender's pod through the final circle, ready to cut." },
        { name: "Champions confirmed", camera: "4 · UPPER C", size: "Wide", action: "Full stage as the champion graphic hits the LED and the arena erupts." },
        { name: "Inside the pod", camera: "9 · FX3 2 (16–35)", size: "Wide-angle close, handheld", action: "Into the champions' pod for the first reactions: headsets off, hugs, tears." },
        { name: "Walk to the trophy", camera: "7 · STEADICAM", size: "Medium, follow", action: "Follow the champions from their pod to the trophy for the first lift. Jib R cranes up as it goes overhead." }
      ],
      cue: "Keep FX3 1 on the runner-up pod for the second PMGC slot: they need their moment too."
    },
    {
      id: "awards", title: ["Awards", "ceremony."], days: [3],
      when: "D3",
      intro: "Six awards, each run the same way: host sets it up, invites the guest, invites the player or team, presentation.",
      schedule: [["17:59", "MVP"], ["18:16", "Best Clutch"], ["18:20", "Best IGL"], ["18:24", "3rd place"], ["18:28", "2nd place"], ["18:32", "Champions"]],
      shots: [
        { name: "Host sets up the award", camera: "1 · LOWER C", size: "Medium shot, one shot", action: "Host to lens, award graphic on the LED behind. Hold through the nominee or highlight VT intro." },
        { name: "Guest walk-on", camera: "7 · STEADICAM / 3 · JIB R", size: "Medium follow, then wide", action: "Steadicam brings the presenting guest to the award mark; Jib R wide as they arrive." },
        { name: "Winner called up", camera: "5 · UPPER L / 6 · UPPER R / 8 · FX3 1", size: "Close reaction, then follow", action: "Upper camera on the winner's reaction where they sit; FX3 1 follows them up to the mark." },
        { name: "Presentation and photo", camera: "1 · LOWER C / 4 · UPPER C", size: "Full shot, then wide", action: "Handover clean on Lower C, hold for the photo. Team awards widen to Upper C for the whole squad." }
      ],
      cue: "The champions' award is the trophy moment: Jib R cranes up on the lift and Top-down takes the confetti. Second place also qualifies for PMGC, so give them a proper hold."
    },
    {
      id: "champions-lap", title: ["For the", "crown."], gold: true, days: [3],
      when: "D3",
      intro: "After the awards: the host interviews the champions, they take a victory lap, then sign the camera. Monster play, highlights and the closing graphics follow.",
      shots: [
        { name: "Champions interview", camera: "1 · LOWER C / 5 · UPPER L", size: "Group shot, then singles", action: "Host and the full team with the trophy on Lower C. Upper L for the captain's answers." },
        { name: "Victory lap", camera: "7 · STEADICAM", size: "Medium, leading backwards", action: "Lead the team along the front of the crowd with the trophy held up. Fans reaching in frame." },
        { name: "Lap from above", camera: "2 · JIB L / 10 · FX3 3", size: "Wide sweep, crowd cutaways", action: "Jib L tracks the lap over the crowd. FX3 3 picks up fans in the champions' nation colours." },
        { name: "Signing the camera", camera: "9 · FX3 2 (16–35)", size: "Close to lens, handheld", action: "Each player signs the clear filter in front of the lens, one after another. Wide angle keeps faces in frame." }
      ],
      cue: "Fit a clear protective filter and keep a marker on FX3 2 before the ceremony. Hold 4 · UPPER C extreme wide under the closing graphics until off air."
    }
  ]
};
