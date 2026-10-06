const releases = [

  {
    title: "Curwick Village Reservoir Finally Comes Online",
    description: "The Curwick Village Reservoir has officially come online following years of planning and construction.",
    portfolio: "Energy",
    type: "Statement",
    date: "2026-09-22",
    displayDate: "6 Oct 2026",
    image: "images/reservoir.png",
    imageAlt: "Curwick Village Reservoir",
    link: "releases/energy/curwick-reservoir-comes-online.html",
    badge: "Energy"
  },
  
    {
    title: "Referendums Bill passes third reading",
    description: "The Referendums Bill has passed its third and final reading.",
    portfolio: "Justice",
    type: "Statement",
    date: "2026-08-26",
    displayDate: "26 Aug 2026",
    image: "images/iran.jpg",
    imageAlt: "House of Representatives in session",
    link: "releases/justice/referendums-bill-passed.html",
    badge: "Electoral"
  },

  {
    title: "Prime Minister provides an official statement on US-Iran conflict",
    description: "An official statement from the Prime Minister on developments in the ongoing international situation.",
    portfolio: "Prime Minister",
    type: "Statement",
    date: "2026-09-24",
    displayDate: "24 Sep 2026",
    image: "images/iran.jpg",
    imageAlt: "Prime Minister delivering an official statement",
    link: "iran-statement.html",
    badge: "Prime Minister"
  },

  {
    title: "White House announces major infrastructure investment",
    description: "Details of a major programme of investment in national infrastructure and public assets.",
    portfolio: "Infrastructure",
    type: "Release",
    date: "2026-09-22",
    displayDate: "22 Sep 2026",
    image: "images/infrastructure.jpg",
    imageAlt: "Major infrastructure investment project",
    link: "news-infrastucture-investment.html",
    badge: "Infrastructure"
  },

  {
    title: "International leaders welcomed to Square Country",
    description: "International leaders have been welcomed to Square Country for official meetings and discussions with the Government.",
    portfolio: "Foreign Affairs",
    type: "Diplomacy",
    date: "2026-09-17",
    displayDate: "17 Sep 2026",
    image: "images/international-leaders.jpg",
    imageAlt: "International leaders welcomed to Square Country",
    link: "news-internationalleaders.html",
    badge: "Foreign Affairs"
  },

  {
    title: "Weekly press briefing highlights government initiatives",
    description: "A summary of major Government initiatives and announcements discussed during the weekly press briefing.",
    portfolio: "Government",
    type: "Briefing",
    date: "2026-09-10",
    displayDate: "10 Sep 2026",
    image: "images/initiatives.jpg",
    imageAlt: "Weekly Government press briefing",
    link: "news-initiatives.html",
    badge: "Government"
  }
];

const newsGrid = document.getElementById("newsGrid");

releases.forEach(release => {
  const link = document.createElement("a");

  link.href = release.link;
  link.className = "news-link";

  link.dataset.title = release.title;
  link.dataset.description = release.description;
  link.dataset.portfolio = release.portfolio;
  link.dataset.type = release.type;
  link.dataset.date = release.date;

  link.innerHTML = `
    <article class="news-card">

      <div class="news-image-wrap">

        <img
          src="${release.image}"
          alt="${release.imageAlt}"
          class="news-image"
        />

        <span class="portfolio-badge">
          ${release.badge}
        </span>

      </div>

      <div class="news-content">

        <div class="news-meta">
          <span>${release.displayDate}</span>
          <span class="meta-dot">•</span>
          <span>${release.type}</span>
        </div>

        <h3>
          ${release.title}
        </h3>

        <p>
          ${release.description}
        </p>

      </div>

    </article>
  `;

  newsGrid.appendChild(link);
});
