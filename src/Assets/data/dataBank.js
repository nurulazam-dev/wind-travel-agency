import weatherImg from "../src/Assets/Category/weather.png";
import flightImg from "../src/Assets/Category/plan.png";
import eventImg from "../src/Assets/Category/event.png";
import customizationImg from "../src/Assets/Category/customization.png";
import cebuImg from "../src/Assets/Destinations/cebu.png";
import manilaImg from "../src/Assets/Destinations/manila.png";
import davaoImg from "../src/Assets/Destinations/davao.png";
import userImg from "../src/Assets/hero/userIcon.png";
import calenderImg from "../src/Assets/hero/calanderIcon.png";
import HomeImg from "../src/Assets/hero/homeIcon.png";
import errowImg from "../src/Assets/hero/errowDown.png";
import leftErrowIcon from "../src/Assets/hero/errowLeft.png";
import usersIcon from "../src/Assets/hero/usersIcon.png";
import palawanImg from "../src/Assets/hero/palawan.png";
import baguioImg from "../src/Assets/hero/baguio.png";
import boracayImg from "../src/Assets/hero/boracay.png";

export const service = {
  title: "We Offer Best Services",
  subtitle: "CATEGORY",
  cards: [
    {
      icon: weatherImg,
      title: "Calculated Weather",
      subtitle: "Built Wicket longer admire do barton vanity itself do in it.",
    },
    {
      icon: flightImg,
      title: "Best Flights",
      subtitle: "Engrossed listening. Park gate sell they west hard for the.",
    },
    {
      icon: eventImg,
      title: "Local Events",
      subtitle:
        "Barton vanity itself do in it. Preferd to men it engrossed listening.",
    },
    {
      icon: customizationImg,
      title: "Customization",
      subtitle:
        "We deliver outsourced aviation services for military customers",
    },
  ],
};

export const footerInfo = [
  {
    title: "Company",
    links: [
      { name: "About", to: "/about" },
      { name: "Careers", to: "/careers" },
      { name: "Mobile", to: "/mobile" },
    ],
  },
  {
    title: "Contact",
    links: [
      { name: "Help/FAQ", to: "/help" },
      { name: "Press", to: "/press" },
      { name: "Affiliates", to: "/affiliates" },
    ],
  },
  {
    title: "More",
    links: [
      { name: "Airline Fees", to: "/fees" },
      { name: "Airline Partners", to: "/airlines" },
      { name: "Low Fare Tips", to: "/tips" },
    ],
  },
];

export const sell = {
  title: "Top Destinations",
  subtitle: "Top Selling",
  cards: [
    {
      icon: cebuImg,
      price: 1.2,
      title: "Cebu,Philippines",
      subtitle: "10 Days Trip",
    },
    {
      icon: manilaImg,
      price: 2.2,
      title: "Manila,Philippines",
      subtitle: "12 Days Trip",
    },
    {
      icon: davaoImg,
      price: 3.6,
      title: "Davao,Philippines",
      subtitle: "28 Days Trip",
    },
  ],
};

export const mostPopularData = {
  title: "Most Popular",
  leftErrowIcon: leftErrowIcon,
  datas: [
    {
      icon: palawanImg,
      people: 31,
      title: "Palawan",
      usersIcon: usersIcon,
    },
    {
      icon: baguioImg,
      people: 27,
      title: "Baguio",
      usersIcon: usersIcon,
    },
    {
      icon: boracayImg,
      people: 20,
      title: "Boracay",
      usersIcon: usersIcon,
    },
  ],
};

export const summaryData = {
  datas: [
    {
      icon: HomeImg,
      errowIcon: errowImg,
      title: "Accommodation",
      subtitle: "Aklan,Boracay",
    },
    {
      icon: calenderImg,
      title: "Check-in",
      subtitle: "04.03.2022",
    },
    {
      icon: calenderImg,
      title: "Check-Out",
      subtitle: "04.13.2022",
    },
    {
      icon: userImg,
      errowIcon: errowImg,
      title: "Guests",
      subtitle: "2Adults",
    },
  ],
};
