(function () {
  "use strict";
  const D = window.SHOTBOOK;
  const EXTS = ["mp4", "webm", "mov", "jpg", "jpeg", "png", "webp", "gif"];
  const VIDEO = /\.(mp4|webm|mov|m4v)$/i;
  const CROWN = '<svg viewBox="0 0 64 64" aria-hidden="true"><path d="M8 46 4 15l18 16L32 8l10 23 18-16-4 31Z"/></svg>';
  const NATION = { IN: "India", KR: "South Korea", JP: "Japan" };

  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const pad = (n) => String(n).padStart(2, "0");
  const kv = (file) => D.kvBase + file;
  const $ = (sel) => document.querySelector(sel);
  const store = {
    get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch (e) { /* storage unavailable */ } }
  };

  document.documentElement.style.setProperty("--kv", `url("${kv(D.kv.crown)}")`);
  document.documentElement.style.setProperty("--kv-trophy", `url("${kv(D.kv.trophy)}")`);

  const title = (t, gold) => {
    const second = String(t[1]).replace(/\.$/, "");
    return `<span class="silver">${esc(t[0])}</span> <span class="${gold ? "goldtext" : "silver"}">${esc(second)}</span>`;
  };

  /* Media slot markup; content is resolved after render */
  const slot = (key, label) => `
    <div class="media" data-key="${esc(key)}" data-label="${esc(label)}">
      <img class="bg" src="${esc(kv(D.kv.facet))}" alt="" loading="lazy">
      <div class="placeholder">
        ${CROWN}
        <strong>Reference frame</strong>
        <span>Add <code>media/${esc(key)}.mp4</code> or <code>.jpg</code>, or drop a file here to preview</span>
      </div>
    </div>`;

  /* Hero */
  $("#hero").innerHTML = `
    <div class="wrap">
      <h1><span class="silver">Shot</span><br><span class="silver">Breakdown</span></h1>
      <div class="hero-meta caps"><span>NSCI Dome, Mumbai, India</span><span>Grand Finals · <b>30 Oct – 1 Nov</b></span></div>
      <img class="hero-kv" src="${esc(kv(D.kv.crown))}" alt="BMIC 2026 Crown key visual: For the Crown, with the gold crown rising over the crowd">
      <p class="lede">${esc(D.intro)}</p>
    </div>`;

  /* Cameras */
  $("#cameras").innerHTML = `
    <div class="wrap">
      <div class="block-head"><div><div class="caps">01 · Reference</div><h2>${title(["Camera", "setup"])}</h2></div>
      <p>Thirteen cameras, numbered as on the crew list. Left and right follow the names on the 3D camera plot.</p></div>
      <div class="table-wrap"><table>
        <thead><tr><th scope="col">#</th><th scope="col">Camera</th><th scope="col">Position / role</th><th scope="col">Body</th><th scope="col">Lens</th></tr></thead>
        <tbody>${D.cameras.map((c) => `<tr><td>${c.n}</td><td>${esc(c.name)}</td><td>${esc(c.role)}</td><td>${esc(c.body)}</td><td>${esc(c.lens)}</td></tr>`).join("")}</tbody>
      </table></div>
      <p class="table-note">FX3 roles are a suggested split; swap to suit the crew.</p>
    </div>`;

  /* Camera layout */
  $("#layout").innerHTML = `
    <div class="wrap">
      <div class="block-head"><div><div class="caps">02 · Reference</div><h2>${title(["Camera", "layout"])}</h2></div>
      <p>The live 3D plot, plus a slot for a render or screenshot of it.</p></div>
      <div class="layout-grid">
        <div><div class="plot-frame">${window.SHOTBOOK_PREVIEW
          ? `<a class="plot-link" href="${esc(D.plotUrl)}" target="_blank" rel="noopener"><img src="${esc(kv(D.kv.stage))}" alt=""><span>Open the 3D camera plot</span></a>`
          : `<iframe src="${esc(D.plotUrl)}" title="BMIC 2026 3D camera plot" loading="lazy"></iframe>`}</div>
        <p class="caption">Interactive plot: <a href="${esc(D.plotUrl)}" target="_blank" rel="noopener">${esc(D.plotUrl.replace(/^https?:\/\//, "").replace(/\/$/, ""))}</a></p></div>
        <div>${slot("camera-layout", "Camera layout")}</div>
      </div>
    </div>`;

  /* Seating */
  const pods = (names, nation) => `<div class="pods" style="grid-template-columns: repeat(${names.length}, minmax(0, 1fr))">${names.map((n) => `<div class="pod ${nation}">${esc(n)}</div>`).join("")}</div>`;
  const S = D.seating;
  $("#seating").innerHTML = `
    <div class="wrap">
      <div class="block-head"><div><div class="caps">03 · Reference</div><h2>${title(["Seating &", "walk-ins"])}</h2></div>
      <p>The Upper cameras split the stage at centre, so every pod has an owner before the first match.</p></div>
      <h3 class="subhead">Pod map</h3>
      <div class="podmap">
        <div class="rowlabel-m">Row B</div>${pods(S.rowB.left, S.rowB.leftNation)}<div class="rowlabel">Row B</div>${pods(S.rowB.right, S.rowB.rightNation)}
        <div class="rowlabel-m">Row A</div>${pods(S.rowA.left, S.rowA.leftNation)}<div class="rowlabel">Row A</div>${pods(S.rowA.right, S.rowA.rightNation)}
        <div class="side">Left · 6 · Upper R</div><div class="side centre">Centre</div><div class="side">Right · 5 · Upper L</div>
      </div>
      <div class="legend"><span class="IN"><i class="sw"></i>India</span><span class="KR"><i class="sw"></i>South Korea</span><span class="JP"><i class="sw"></i>Japan</span><span class="muted">9 · FX3 2 roams both sides</span></div>
      <h3 class="subhead">Day 1 walk-in order <small>· side walk-ins, all from the left</small></h3>
      <div class="walkins">${D.walkinsDay1.map((w, i) => `<div class="${w[1]}"><b>${pad(i + 1)}</b><i title="${NATION[w[1]]}"></i>${esc(w[0])}</div>`).join("")}</div>
      <p class="note">${esc(S.note)}</p>
    </div>`;

  /* Segments */
  const firstSeg = 4;
  $("#segments").innerHTML = D.segments.map((s, si) => `
    <section class="segment" id="${esc(s.id)}" data-days="${s.days.join(",")}">
      <div class="wrap">
        <div class="seg-meta">
          <span class="caps">${pad(firstSeg + si)}${s.when ? " · " + esc(s.when) : ""}</span>
          <span class="days">${s.days.map((d) => `<span>Day ${d}</span>`).join("")}</span>
        </div>
        <h2>${title(s.title, s.gold)}</h2>
        <p class="seg-intro">${esc(s.intro)}</p>
        ${s.schedule ? `<div class="schedule">${s.schedule.map((x) => `<span><b>${esc(x[0])}</b>${esc(x[1])}</span>`).join("")}</div>` : ""}
        ${s.nations ? `<div class="motifs" style="margin-top:24px">${D.kv.motifs.map((m) => `<img src="${esc(kv(m))}" alt="" loading="lazy">`).join("")}</div>` : ""}
        <div class="shots">
          ${s.shots.map((sh, i) => `
            <article class="shot">
              ${slot(`${s.id}-${pad(i + 1)}`, `${s.title.join(" ").replace(/\.$/, "")} · shot ${pad(i + 1)} · ${sh.name}`)}
              <div class="shot-title"><span>${pad(i + 1)}</span><h3>${esc(sh.name)}</h3></div>
              <dl>
                <dt>Camera</dt><dd class="cam">${esc(sh.camera)}</dd>
                <dt>Size</dt><dd>${esc(sh.size)}</dd>
                <dt>Action</dt><dd>${esc(sh.action)}</dd>
              </dl>
            </article>`).join("")}
        </div>
        ${s.cue ? `<div class="cue"><b>Cue</b><span>${esc(s.cue)}</span></div>` : ""}
      </div>
    </section>`).join("");

  /* Closing band */
  $("#closing").innerHTML = `
    <div class="wrap">
      <img class="closing-kv" src="${esc(kv(D.kv.trophy))}" alt="BMIC 2026 Trophy key visual: the trophy at the end of three nation-coloured lanes" loading="lazy">
      <div class="closing-row"><span class="caps">BMIC 2026 · Shot breakdown</span><p>${esc(D.version)} · Segments and times from the Day 1–3 ROS Draft</p></div>
    </div>`;

  /* Side nav */
  const navItems = [
    ["Reference", [["cameras", "01", "Camera setup"], ["layout", "02", "Camera layout"], ["seating", "03", "Seating & walk-ins"]]],
    ["Show segments", D.segments.map((s, i) => [s.id, pad(firstSeg + i), s.title.join(" ").replace(/\.$/, "")])]
  ];
  $("#sidenav").innerHTML = navItems.map(([g, items]) => `<div class="group">${esc(g)}</div>` + items.map(([id, n, t]) => `<a href="#${id}" data-target="${id}"><span>${n}</span>${esc(t)}</a>`).join("")).join("");

  /* Day filter */
  function applyDay(day) {
    document.querySelectorAll(".day-filter button").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.day === day)));
    document.querySelectorAll(".segment").forEach((sec) => {
      const show = day === "all" || sec.dataset.days.split(",").includes(day);
      sec.classList.toggle("hidden", !show);
      const link = document.querySelector(`.sidenav a[data-target="${sec.id}"]`);
      if (link) link.classList.toggle("hidden", !show);
    });
    store.set("bmic-day", day);
  }
  document.querySelectorAll(".day-filter button").forEach((b) => b.addEventListener("click", () => applyDay(b.dataset.day)));
  applyDay(store.get("bmic-day") || "all");

  /* Active section in the nav */
  if ("IntersectionObserver" in window) {
    const links = new Map([...document.querySelectorAll(".sidenav a")].map((a) => [a.dataset.target, a]));
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          links.forEach((a) => a.classList.remove("active"));
          const a = links.get(e.target.id);
          if (a) a.classList.add("active");
        }
      });
    }, { rootMargin: "-30% 0px -60% 0px" });
    document.querySelectorAll(".block, .segment").forEach((s) => io.observe(s));
  }

  /* Media: resolve each slot from the manifest, or by probing file names */
  function show(el, src, local) {
    el.querySelectorAll(".placeholder, .content, video, .open, .badge").forEach((n) => n.remove());
    const isVideo = local ? local.type.startsWith("video") : VIDEO.test(src);
    let node;
    if (isVideo) {
      node = document.createElement("video");
      Object.assign(node, { src, muted: true, loop: true, autoplay: true, playsInline: true, preload: "metadata" });
      node.setAttribute("muted", "");
      node.setAttribute("aria-label", el.dataset.label);
    } else {
      node = document.createElement("img");
      node.className = "content";
      node.src = src;
      node.alt = el.dataset.label;
      node.loading = "lazy";
    }
    el.appendChild(node);
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "open";
    btn.textContent = "View full size";
    btn.setAttribute("aria-label", `View ${el.dataset.label} full size`);
    btn.addEventListener("click", (ev) => { ev.stopPropagation(); openBox(src, isVideo, el.dataset.label); });
    el.appendChild(btn);
    if (local) {
      const badge = document.createElement("span");
      badge.className = "badge";
      badge.textContent = "Local preview · not saved";
      el.appendChild(badge);
    }
    el.classList.add("has-media");
    el.onclick = () => openBox(src, isVideo, el.dataset.label);
  }

  async function probe(key) {
    for (const ext of EXTS) {
      const url = `media/${key}.${ext}`;
      try {
        const r = await fetch(url, { method: "HEAD", cache: "no-cache" });
        if (r.ok && !(r.headers.get("content-type") || "").includes("text/html")) return url;
      } catch (e) { return null; }
    }
    return null;
  }

  const overrides = {};
  D.segments.forEach((s) => s.shots.forEach((sh, i) => { if (sh.media) overrides[`${s.id}-${pad(i + 1)}`] = sh.media; }));
  const manifest = window.MEDIA_MANIFEST || null;
  const canProbe = /^https?:$/.test(location.protocol);

  document.querySelectorAll(".media").forEach(async (el) => {
    const key = el.dataset.key;
    let src = overrides[key] || (manifest ? manifest[key] : null);
    if (!src && !manifest && canProbe) src = await probe(key);
    if (!src && key === "camera-layout" && D.kv.stage) src = kv(D.kv.stage);
    if (src) show(el, src);

    el.addEventListener("dragover", (e) => { e.preventDefault(); el.classList.add("drag"); });
    el.addEventListener("dragleave", () => el.classList.remove("drag"));
    el.addEventListener("drop", (e) => {
      e.preventDefault();
      el.classList.remove("drag");
      const f = e.dataTransfer.files && e.dataTransfer.files[0];
      if (f && /^(image|video)\//.test(f.type)) show(el, URL.createObjectURL(f), f);
    });
  });

  /* Lightbox */
  const box = $("#lightbox"), body = $("#lightbox-body");
  let lastFocus = null;
  function openBox(src, isVideo, label) {
    lastFocus = document.activeElement;
    body.innerHTML = isVideo
      ? `<video src="${esc(src)}" controls autoplay loop playsinline aria-label="${esc(label)}"></video>`
      : `<img src="${esc(src)}" alt="${esc(label)}">`;
    box.hidden = false;
    box.querySelector(".lightbox-close").focus();
  }
  function closeBox() {
    box.hidden = true;
    body.innerHTML = "";
    if (lastFocus) lastFocus.focus();
  }
  box.addEventListener("click", (e) => { if (e.target === box || e.target.classList.contains("lightbox-close")) closeBox(); });
  box.addEventListener("keydown", (e) => { if (e.key === "Escape") closeBox(); });
})();
