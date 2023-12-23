import React from "react";
import PPID1 from "../assets/PPID_1.jpg";
import PPID2 from "../assets/PPID_2.jpeg";
import PPID3 from "../assets/PPID_3.jpg";
import PPID4 from "../assets/PPID_4.jpeg";
import ASEAN1 from "../assets/ASEAN_1.jpg";
import ASEAN2 from "../assets/ASEAN_2.jpg";
import ASEAN3 from "../assets/ASEAN_3.jpg";
import ASEAN4 from "../assets/ASEAN_4.jpg";
import Lab1 from "../assets/Lab_1.jpg";
import Lab2 from "../assets/Lab_2.jpg";
import Lab3 from "../assets/Lab_3.jpg";
import Lab4 from "../assets/Lab_4.jpg";
import Speak1 from "../assets/Speak_1.JPG";
import Speak2 from "../assets/Speak_2.jpg";
import Speak3 from "../assets/Speak_3.jpg";
import Speak4 from "../assets/Speak_4.PNG"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';

const Activity = () => {
  const activities = {
    PPID: [
      {
        image: PPID1,
        title: "Secretary-General of OISAA",
        description: "Led the organization to new heights from 2022 to 2023.",
        link: "https://ppi.id/staff-khusus-2022-2023/",
      },
      {
        image: PPID2,
        title: "Secretary-General of OISAA",
        description: "Led the organization to new heights from 2022 to 2023.",
        link: "https://ppi.id/staff-khusus-2022-2023/",
      },
      {
        image: PPID3,
        title: "Secretary-General of OISAA",
        description: "Led the organization to new heights from 2022 to 2023.",
        link: "https://ppi.id/staff-khusus-2022-2023/",
      },
      {
        image: PPID4,
        title: "Secretary-General of OISAA",
        description: "Led the organization to new heights from 2022 to 2023.",
        link: "https://ppi.id/staff-khusus-2022-2023/",
      },
    ],
    ASEAN: [
      {
        image: ASEAN1,
        title: "The 42nd ASEAN Summit",
        description:
          "Selected by the Indonesian Ministry of Foreign Affairs to attend the summit and discuss the policy recommendation that we formulated. Discussed the future of ASEAN with the President of Indonesia and 10 other ASEAN Head of States.",
        link: "https://asean2023.id/en/news/asean-youth-forum-asean-leaders-interface-with-representatives-of-asean-youth#:~:text=The%20ASEAN%20Leaders%27%20Interface%20with,representatives%20from%20ASEAN%20member%20countries.",
      },
      {
        image: ASEAN2,
        title: "The 42nd ASEAN Summit",
        description:
          "Selected by the Indonesian Ministry of Foreign Affairs to attend the summit and discuss the policy recommendation that we formulated. Discussed the future of ASEAN with the President of Indonesia and 10 other ASEAN Head of States.",
        link: "https://asean2023.id/en/news/asean-youth-forum-asean-leaders-interface-with-representatives-of-asean-youth#:~:text=The%20ASEAN%20Leaders%27%20Interface%20with,representatives%20from%20ASEAN%20member%20countries.",
      },
      {
        image: ASEAN3,
        title: "The 42nd ASEAN Summit",
        description:
          "Selected by the Indonesian Ministry of Foreign Affairs to attend the summit and discuss the policy recommendation that we formulated. Discussed the future of ASEAN with the President of Indonesia and 10 other ASEAN Head of States.",
        link: "https://asean2023.id/en/news/asean-youth-forum-asean-leaders-interface-with-representatives-of-asean-youth#:~:text=The%20ASEAN%20Leaders%27%20Interface%20with,representatives%20from%20ASEAN%20member%20countries.",
      },
      {
        image: ASEAN4,
        title: "The 42nd ASEAN Summit",
        description:
          "Selected by the Indonesian Ministry of Foreign Affairs to attend the summit and discuss the policy recommendation that we formulated. Discussed the future of ASEAN with the President of Indonesia and 10 other ASEAN Head of States.",
        link: "https://asean2023.id/en/news/asean-youth-forum-asean-leaders-interface-with-representatives-of-asean-youth#:~:text=The%20ASEAN%20Leaders%27%20Interface%20with,representatives%20from%20ASEAN%20member%20countries.",
      },
    ],
    Lab: [
      {
        image: Lab1,
        title: "Dairy Microbiology Laboratory - School of Food Science WSU",
        description:
          "Conduct experiments and help the graduate students of Food Science in WSU in their research.ndation that we formulated. Discussed the future of ASEAN with the President of Indonesia and 10 other ASEAN Head of States.",
        link: "",
      },
      {
        image: Lab2,
        title: "Dairy Microbiology Laboratory - School of Food Science WSU",
        description:
          "Conduct experiments and help the graduate students of Food Science in WSU in their research.ndation that we formulated. Discussed the future of ASEAN with the President of Indonesia and 10 other ASEAN Head of States.",
        link: "",
      },
      {
        image: Lab3,
        title: "Dairy Microbiology Laboratory - School of Food Science WSU",
        description:
          "Conduct experiments and help the graduate students of Food Science in WSU in their research.ndation that we formulated. Discussed the future of ASEAN with the President of Indonesia and 10 other ASEAN Head of States.",
        link: "",
      },
      {
        image: Lab4,
        title: "Dairy Microbiology Laboratory - School of Food Science WSU",
        description:
          "Conduct experiments and help the graduate students of Food Science in WSU in their research.ndation that we formulated. Discussed the future of ASEAN with the President of Indonesia and 10 other ASEAN Head of States.",
        link: "",
      },
    ],
    Speak: [
      {
        image: Speak1,
        title: "Invited as a speaker in various seminars/conferences",
        description:
          "Mostly talked about education and digital literacy to the public audience.",
        link: "",
      },
      {
        image: Speak2,
        title: "Invited as a speaker in various seminars/conferences",
        description:
          "Mostly talked about education and digital literacy to the public audience.",
        link: "",
      },
      {
        image: Speak3,
        title: "Invited as a speaker in various seminars/conferences",
        description:
          "Mostly talked about education and digital literacy to the public audience.",
        link: "",
      },
      {
        image: Speak4,
        title: "Invited as a speaker in various seminars/conferences",
        description:
          "Mostly talked about education and digital literacy to the public audience.",
        link: "",
      },
    ],
  };

  const renderActivityGroup = (group) => (
    <ul className="slides-container">
      {group.map((activity, index) => (
        <li className="slide" key={index}>
          <div className="activities__wrapper">
            <img
              src={activity.image}
              alt={activity.title}
              className="activities__image"
            />
            <div className="activities__wrapper--background"></div>
            <div className="activities__description">
              <h3 className="activities__description--title">
                {activity.title}
              </h3>
              <p className="activities__description--para">
                {activity.description}
              </p>
              <div className="activities__description--links">
                <a
                  href={activity.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faLink} className="activities__description--link" />
                </a>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
  return (
    <>
      <section id="activities">
        <div className="container">
          <div className="row">
            <h1 className="activities__title">MY ACTIVITIES</h1>
          </div>
          <div className="slider-wrapper">
            {renderActivityGroup(activities.PPID)}
            {renderActivityGroup(activities.ASEAN)}
            {renderActivityGroup(activities.Lab)}
            {renderActivityGroup(activities.Speak)}
          </div>
        </div>
      </section>
    </>
  );
};

export default Activity;
