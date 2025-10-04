import weatherImg from "../images/Category/weather.png";
import flightImg from "../images/Category/plan.png";
import eventImg from "../images/Category/event.png";
import customizationImg from "../images/Category/customization.png";
import cebuImg from "../images/Destinations/cebu.png";
import manilaImg from "../images/Destinations/manila.png";
import davaoImg from "../images/Destinations/davao.png";
import userImg from "../images/hero/userIcon.png";
import calenderImg from "../images/hero/calanderIcon.png";
import HomeImg from "../images/hero/homeIcon.png";
import errImg from "../images/hero/errowDown.png";
import leftErrIcon from "../images/hero/errowLeft.png";
import usersIcon from "../images/hero/usersIcon.png";
import palawanImg from "../images/hero/palawan.png";
import baguioImg from "../images/hero/baguio.png";
import boracayImg from "../images/hero/boracay.png";

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
  leftErrIcon: leftErrIcon,
  data: [
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
  data: [
    {
      icon: HomeImg,
      errIcon: errImg,
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
      errIcon: errImg,
      title: "Guests",
      subtitle: "2Adults",
    },
  ],
};

export const testimonialsData = [
  {
    quote:
      "WindTravels planned our dream honeymoon to Palawan. Every detail, from the private island transfer to the secluded resorts, was flawless. Truly world-class service!",
    name: "Lei Britz",
    title: "Laguna, Philippines",
    avatar: "https://placehold.co/100x100/A3E635/1F2937?text=LB", // Placeholder for Lei Britz
  },
  {
    quote:
      "The Premium package was worth every penny. Our dedicated travel assistant saved us hours of planning and gave us local insights we could never have found ourselves. Five stars!",
    name: "Sarah Chen",
    title: "New York, USA",
    avatar: "https://placehold.co/100x100/FACC15/1F2937?text=SC", // Placeholder for Sarah Chen
  },
  {
    quote:
      "I used WindTravels for a business trip to Tokyo. Fast, efficient, and they handled all my complex itinerary changes without a hitch. Highly recommend to any executive.",
    name: "Javier Lopez",
    title: "Madrid, Spain",
    avatar: "https://placehold.co/100x100/3B82F6/1F2937?text=JL", // Placeholder for Javier Lopez
  },
];
