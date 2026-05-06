const weeklyUpdates = {
  textiles: {
    label: "Textiles",
    title: "Textiles: wearable design in progress",
    summary:
      "Students are moving from concept boards into practical construction, testing materials and refining finishing techniques.",
    highlights: [
      "Year 9: draft and pin final garment seams before machine stitching.",
      "Year 10: complete upcycled tote project with added detail panel.",
      "Senior classes: record evidence of design changes in process journals."
    ],
    focus: "Pattern accuracy and confidence on industrial sewing machines.",
    assessment: "Design portfolio checkpoint on Thursday.",
    event: "Textiles mini showcase in the studio at Friday lunchtime."
  },
  "food-hospitality": {
    label: "Food and Hospitality",
    title: "Food and Hospitality: service week",
    summary:
      "Learners are planning and producing menu items with a focus on timing, teamwork, and safe kitchen workflow.",
    highlights: [
      "Year 9: knife skills and mise en place routines for soup and bread lab.",
      "Year 10: small group cafe simulation with front-of-house roles.",
      "Senior classes: adapt recipes to meet dietary requirements."
    ],
    focus: "Food safety logging and communication during practical sessions.",
    assessment: "Practical observation and reflection log due Friday.",
    event: "Pop-up tasting table for staff at interval on Thursday."
  },
  "woodwork-furniture": {
    label: "Woodwork and Furniture",
    title: "Woodwork and Furniture: precision build cycle",
    summary:
      "Workshop groups are developing prototype components and moving into final assembly with careful measurement checks.",
    highlights: [
      "Year 9: hand tool accuracy drills and timber marking conventions.",
      "Year 10: stool frame construction using joint strength tests.",
      "Senior classes: prototype review for personal furniture outcomes."
    ],
    focus: "Safe machine setup and repeatable measuring techniques.",
    assessment: "Construction milestone photos uploaded by Wednesday.",
    event: "After-school workshop session for project catch-up on Tuesday."
  },
  "digital-technologies": {
    label: "Digital Technologies",
    title: "Digital Technologies: build, test, iterate",
    summary:
      "Classes are coding practical solutions, checking usability, and documenting improvements through rapid feedback cycles.",
    highlights: [
      "Year 9: website layout challenge using semantic HTML and CSS.",
      "Year 10: intro JavaScript interactions and debugging routines.",
      "Senior classes: sprint planning for app and media outcomes."
    ],
    focus: "Version control habits and meaningful in-code documentation.",
    assessment: "Sprint review presentation on Friday period 4.",
    event: "Digital demo wall open for whanau viewing next week."
  }
};

const tabList = document.querySelector(".tablist");
const titleEl = document.querySelector("#weekly-title");
const summaryEl = document.querySelector("#weekly-summary");
const listEl = document.querySelector("#weekly-list");
const focusEl = document.querySelector("#weekly-focus");
const assessmentEl = document.querySelector("#weekly-assessment");
const eventEl = document.querySelector("#weekly-event");

function renderWeekly(disciplineKey) {
  const selected = weeklyUpdates[disciplineKey];
  if (!selected) return;

  titleEl.textContent = selected.title;
  summaryEl.textContent = selected.summary;

  listEl.innerHTML = "";
  selected.highlights.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    listEl.appendChild(li);
  });

  focusEl.textContent = selected.focus;
  assessmentEl.textContent = selected.assessment;
  eventEl.textContent = selected.event;

  document.querySelectorAll(".tab-btn").forEach((btn) => {
    const isActive = btn.dataset.key === disciplineKey;
    btn.setAttribute("aria-selected", String(isActive));
    btn.setAttribute("tabindex", isActive ? "0" : "-1");
  });
}

function buildTabs() {
  Object.keys(weeklyUpdates).forEach((key, index) => {
    const tab = document.createElement("button");
    tab.type = "button";
    tab.role = "tab";
    tab.className = "tab-btn";
    tab.dataset.key = key;
    tab.textContent = weeklyUpdates[key].label;
    tab.setAttribute("aria-selected", index === 0 ? "true" : "false");
    tab.setAttribute("tabindex", index === 0 ? "0" : "-1");

    tab.addEventListener("click", () => renderWeekly(key));
    tabList.appendChild(tab);
  });

  renderWeekly(Object.keys(weeklyUpdates)[0]);
}

function wireCardButtons() {
  document.querySelectorAll("[data-focus]").forEach((button) => {
    button.addEventListener("click", () => {
      const discipline = button.getAttribute("data-focus");
      const weeklySection = document.querySelector("#weekly");
      if (!discipline || !weeklySection) return;

      weeklySection.scrollIntoView({ behavior: "smooth", block: "start" });
      renderWeekly(discipline);
    });
  });
}

buildTabs();
wireCardButtons();
