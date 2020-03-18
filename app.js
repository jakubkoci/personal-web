const talks = [
  {
    name: "Building Self-sovereign Identity in South Africa",
    date: "2020-03-03",
    event: {
      name: "Hyperledger Global Forum",
      link: "https://hgf20.sched.com/event/XodU/building-self-sovereign-identity-in-south-africa-jakub-koci-patrik-stas-absa"
    },
    video: {
      link: "https://www.youtube.com/watch?v=j18YW0N_-7w",
      lang: "en"
    }
  },
  {
    name: "Decentralizovaná digitální identita",
    date: "2019-10-13",
    event: {
      name: "jOpenSpace",
      link: "https://www.jopenspace.cz/"
    }
  },
  {
    name: "Blockchain in Banking: simplifying paperwork, data & security",
    date: "2019-03-20",
    event: {
      name: "Hyperledger Prague Meetup",
      link: "https://www.meetup.com/Hyperledger-Prague/events/259558781/"
    },
    slides: {
      link:
        "https://www.slideshare.net/jakubkoci/digital-identity-on-blockchain",
      lang: "en"
    }
  },
  {
    name:
      "Blockchain: Self-sovereign identity, Sovrin Trust Framework and Hyperledger Indy",
    date: "2018-11-12",
    event: {
      name: "Hyperledger Copenhagen Meetup",
      link: "https://www.meetup.com/Hyperledger-Copenhagen/events/255979103/"
    }
  },
  {
    name: "Software Quality",
    date: "2018-02-01",
    event: {
      name: "BudgetBakers (internal talk)"
    },
    slides: {
      link: "https://www.slideshare.net/jakubkoci/software-quality-166895898",
      lang: "en"
    }
  }
];

const talksSection = document.getElementById("talks-list");

talks.forEach(talk => {
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
    month: "long"
  };
  return new Intl.DateTimeFormat(navigator.language, options).format(date);
}
