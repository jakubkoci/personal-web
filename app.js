const talks = [
  {
    name: "Decentralized Digital Identity",
    date: "2023-12-07",
    event: {
      name: "Blockchain and Cryptocurrencies course - MENDELU",
      link: "https://is.mendelu.cz/katalog/syllabus.pl?predmet=143702",
    },
  },
  {
    name: "Decentralizovaná digitální identita",
    date: "2023-11-29",
    event: {
      name: "Firemní semináře - MMF UK",
      link: "https://d3s.mff.cuni.cz/cz/teaching/nswi133/",
    },
  },
  {
    name: "Coderetreat Co-Organizer",
    date: "2023-11-04",
    event: {
      name: "Global Day of Coderetreat 2023 - Praha",
      link: "https://www.meetup.com/coderetreat-cz/events/296145877/?eventOrigin=group_events_list",
    },
  },
  {
    name: "Coderetreat Co-Organizer",
    date: "2022-11-05",
    event: {
      name: "Global Day of Coderetreat 2022 - Praha",
      link: "https://www.meetup.com/coderetreat-cz/events/288643297/?eventOrigin=group_events_list",
    },
  },
  {
    name: "Workshop: How To Build a Self-Sovereign Identity Agent With Hyperledger Aries Framework JavaScript",
    date: "2022-09-14",
    event: {
      name: "Hyperledger Global Forum",
      link: "https://hgf22.sched.com/event/15Bjb",
    },
  },
  {
    name: "pepe logic #53 | Decentralizovaná identita, hyperledger, blockchain a další",
    date: "2021-12-18",
    event: {
      name: "pepe logic",
      link: "https://www.youtube.com/c/pepelogic",
    },
    video: {
      link: "https://www.youtube.com/watch?v=LbSDjJfj_do",
      lang: "cz",
    },
  },

  {
    name: "Coderetreat Co-Organizer",
    date: "2021-11-13",
    event: {
      name: "Global Day of Coderetreat 2021 - Online",
      link: "https://www.meetup.com/coderetreat-cz/events/281417882/?eventOrigin=group_events_list",
    },
  },
  {
    name: "Coderetreat Co-Organizer",
    date: "2020-11-07",
    event: {
      name: "Global Day of Coderetreat 2020 - ČR, Online",
      link: "https://www.meetup.com/coderetreat-cz/events/273897052/?eventOrigin=group_events_list",
    },
  },
  {
    name: "Building Self-sovereign Identity in South Africa",
    date: "2020-03-03",
    event: {
      name: "Hyperledger Global Forum",
      link: "https://hgf20.sched.com/event/XodU/building-self-sovereign-identity-in-south-africa-jakub-koci-patrik-stas-absa",
    },
    video: {
      link: "https://www.youtube.com/watch?v=j18YW0N_-7w",
      lang: "en",
    },
  },
  {
    name: "Decentralizovaná digitální identita",
    date: "2019-10-13",
    event: {
      name: "jOpenSpace",
      link: "https://www.jopenspace.cz/",
    },
    video: {
      link: "https://www.youtube.com/watch?v=vpDNZvzQ8M4",
      lang: "cz",
    },
    slides: {
      link: "https://s3-eu-west-1.amazonaws.com/files.jakubkoci.com/ssi-jopenspace.pdf",
      lang: "cz",
    },
  },
  {
    name: "Blockchain in Banking: simplifying paperwork, data & security",
    date: "2019-03-20",
    event: {
      name: "Hyperledger Prague Meetup",
      link: "https://www.meetup.com/Hyperledger-Prague/events/259558781/",
    },
    slides: {
      link: "https://www.slideshare.net/jakubkoci/digital-identity-on-blockchain",
      lang: "en",
    },
  },
  {
    name: "Blockchain: Self-sovereign identity, Sovrin Trust Framework and Hyperledger Indy",
    date: "2018-11-12",
    event: {
      name: "Hyperledger Copenhagen Meetup",
      link: "https://www.meetup.com/Hyperledger-Copenhagen/events/255979103/",
    },
  },
  {
    name: "Software Quality",
    date: "2018-02-01",
    event: {
      name: "BudgetBakers (internal talk)",
    },
    slides: {
      link: "https://www.slideshare.net/jakubkoci/software-quality-166895898",
      lang: "en",
    },
  },
];

const talksSection = document.getElementById("talks-list");

talks.forEach((talk) => {
  const talkElement = document.createElement("li");

  const event = talk.event.link
    ? a(talk.event.link, talk.event.name)
    : talk.event.name;

  const date = formatDate(new Date(talk.date));

  const video = talk.video
    ? `- ${a(talk.video.link, `video (${talk.video.lang})`)}`
    : "";

  const slides = talk.slides
    ? `- ${a(talk.slides.link, `slides (${talk.slides.lang})`)}`
    : "";

  talkElement.innerHTML = `${talk.name} at ${event}, ${date} ${slides} ${video}`;
  talksSection.appendChild(talkElement);
});

function a(href, text) {
  return `<a href="${href}" target="_blank">${text}</a>`;
}

function formatDate(date) {
  var options = {
    year: "numeric",
    month: "long",
  };
  return new Intl.DateTimeFormat(navigator.language, options).format(date);
}
