import weatherImg from "../images/Category/weather.png";
import flightImg from "../images/Category/plan.png";
import eventImg from "../images/Category/event.png";
import customizationImg from "../images/Category/customization.png";
import cebuImg from "../images/Destinations/cebu.png";
import manilaImg from "../images/Destinations/manila.png";
import davaoImg from "../images/Destinations/davao.png";
import palawanImg from "../images/hero/palawan.png";
import baguioImg from "../images/hero/baguio.png";
import boracayImg from "../images/hero/boracay.png";
import { FaAnchor, FaRegCompass, FaRegHeart } from "react-icons/fa";
import { FiZap } from "react-icons/fi";
import { IoShieldOutline } from "react-icons/io5";
import { GoStarFill } from "react-icons/go";
import { BiCreditCardAlt, BiSupport } from "react-icons/bi";
import { GrLounge } from "react-icons/gr";
import philippineLogo from "../images/TrustedCo/philippine-airlines.png";
import cebuLogo from "../images/TrustedCo/cebu-pacific.png";
import airLogo from "../images/TrustedCo/air-asia.png";

import { IoHomeOutline } from "react-icons/io5";
import { LuCalendarDays } from "react-icons/lu";
import { FiUsers } from "react-icons/fi";

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
  subtitle: "TOP SELLING",
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
  data: [
    {
      icon: palawanImg,
      people: 31,
      title: "Palawan",
    },
    {
      icon: baguioImg,
      people: 27,
      title: "Baguio",
    },
    {
      icon: boracayImg,
      people: 20,
      title: "Boracay",
    },
  ],
};

export const searchBarData = [
  {
    icon: <IoHomeOutline />,
    title: "Accommodation",
    subtitle: "Aklan,Boracay",
    rightBorder: <div className="border h-8 border-slate-400 ml-6"></div>,
  },
  {
    icon: <LuCalendarDays />,
    title: "Check-in",
    subtitle: "04.03.2022",
    rightBorder: <div className="border h-8 border-slate-400 ml-6"></div>,
  },
  {
    icon: <LuCalendarDays />,
    title: "Check-Out",
    subtitle: "04.13.2022",
    rightBorder: <div className="border h-8 border-slate-400 ml-6"></div>,
  },
  {
    icon: <FiUsers />,
    title: "Guests",
    subtitle: "2Adults",
  },
];

export const testimonialsData = [
  {
    quote:
      "WindTravels planned our dream honeymoon to Palawan. Every detail, from the private island transfer to the secluded resorts, was flawless. Truly world-class service!",
    name: "Lei Britz",
    title: "Laguna, Philippines",
    avatar: "https://i.pravatar.cc/150?img=31",
  },
  {
    quote:
      "The Premium package was worth every penny. Our dedicated travel assistant saved us hours of planning and gave us local insights we could never have found ourselves. Five stars!",
    name: "Sarah Chen",
    title: "New York, USA",
    avatar: "https://i.pravatar.cc/150?img=32",
  },
  {
    quote:
      "I used WindTravels for a business trip to Tokyo. Fast, efficient, and they handled all my complex itinerary changes without a hitch. Highly recommend to any executive.",
    name: "Javier Lopez",
    title: "Madrid, Spain",
    avatar: "https://i.pravatar.cc/150?img=33",
  },
  {
    quote:
      "As a frequent traveler, I appreciate the attention to detail that WindTravels provides. They truly understand the needs of their clients. Exceptional service every time.",
    name: "Michael Smith",
    title: "Sydney, Australia",
    avatar: "https://i.pravatar.cc/150?img=37",
  },
  {
    quote:
      "WindTravels made our family vacation to Europe stress-free and enjoyable. Their kid-friendly recommendations were spot on! Awesome experience.",
    name: "Anita Kapoor",
    title: "Mumbai, India",
    avatar: "https://i.pravatar.cc/150?img=38",
  },
];

export const faqData = [
  {
    q: "What is the cancellation policy for bookings?",
    a: "Our standard policy allows free cancellation up to 48 hours after booking, provided the travel date is at least 30 days away. Cancellations closer to the departure date may incur fees based on hotel and airline policies. Please refer to your specific itinerary for detailed terms.",
  },
  {
    q: "How can I contact customer support during my trip?",
    a: "We offer 24/7 support for travelers. You can reach your dedicated WindTravels assistant via the mobile app, or call our global support line provided in your confirmation email. For urgent matters, the phone line is the fastest method.",
  },
  {
    q: "Can I customize a travel package?",
    a: "Absolutely! While we offer pre-designed packages, our Premium service specializes in crafting bespoke itineraries tailored to your specific interests, budget, and desired pace. Contact our planning experts to begin designing your custom trip.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept all major credit cards (Visa, Mastercard, Amex), PayPal, and bank transfers. All transactions are secured with industry-leading encryption to ensure your data is safe.",
  },
];

export const missionVisionData = [
  {
    title: "Our Mission",
    icon: <FaAnchor className="w-10 h-10 text-yellow-500 mb-4" />,
    description:
      "To connect people with the world's most incredible destinations through seamless booking, expert guidance, and personalized itineraries.",
  },
  {
    title: "Our Vision",
    icon: <FiZap className="w-10 h-10 text-yellow-500 mb-4" />,
    description:
      "To be the most trusted and innovative travel platform, inspiring a billion journeys and promoting sustainable, responsible tourism worldwide.",
  },
];

export const keyDifferencesData = [
  {
    title: "Expert Local Guides",
    icon: <FaRegCompass className="w-8 h-8 text-yellow-500 mb-3" />,
    description:
      "We partner only with verified local experts who offer authentic, immersive experiences.",
  },
  {
    title: "Price Match Guarantee",
    icon: <IoShieldOutline className="w-8 h-8 text-yellow-500 mb-3" />,
    description:
      "Find a lower price? We'll match it and give you an extra discount on your next trip.",
  },
  {
    title: "Customer-First Philosophy",
    icon: <FaRegHeart className="w-8 h-8 text-yellow-500 mb-3" />,
    description:
      "Our dedicated support team works 24/7 to ensure your trip is perfect from start to finish.",
  },
];

export const premiumFeaturesData = [
  {
    title: "Priority Booking & Deals",
    description:
      "Get early access to flash sales and exclusive routes not available to standard users.",
    Icon: <GoStarFill className="w-8 h-8 text-yellow-500 mr-2" />,
  },
  {
    title: "24/7 Dedicated Support",
    description:
      "Direct access to a senior travel advisor via chat or phone, day or night.",
    Icon: <BiSupport className="w-8 h-8 text-yellow-500 mr-2" />,
  },
  {
    title: "Flexible Cancellation",
    description:
      "Waived or reduced fees for changes and cancellations on most bookings.",
    Icon: <BiCreditCardAlt className="w-8 h-8 text-yellow-500 mr-2" />,
  },
  {
    title: "Upgraded Airport Lounge Access",
    description:
      "Complimentary access to select premium airport lounges globally.",
    Icon: <GrLounge className="w-8 h-8 text-yellow-500 mr-2" />,
  },
];

export const pricingPlansData = [
  {
    name: "Pro Traveler",
    price: 9.99,
    interval: "per month",
    description:
      "Perfect for frequent flyers and digital nomads who need maximum flexibility.",
    features: [
      "All core WindTravels features",
      "Priority booking alerts (24 hours early)",
      "Standard dedicated support (business hours)",
      "1x complimentary lounge pass per year",
      "Discounted service fees",
    ],
    isMostPopular: false,
  },
  {
    name: "Elite Nomad",
    price: 99.99,
    interval: "per year (Save 17%)",
    description:
      "The ultimate package for true globetrotters seeking the best value and privileges.",
    features: [
      "Everything in Pro Traveler, plus:",
      "Exclusive partner discounts (15% off hotels)",
      "24/7 dedicated support line (instant response)",
      "4x complimentary lounge passes per year",
      "Waived service fees for changes",
    ],
    isMostPopular: true,
  },
];

export const blogPosts = [
  {
    id: 1,
    title: "The Ultimate Guide to Solo Travel in Southeast Asia",
    excerpt:
      "Discover hidden gems, stay safe, and budget effectively while exploring the wonders of Thailand, Vietnam, and Cambodia.",
    image: "https://placehold.co/600x400/4F46E5/ffffff?text=Asia+Adventure",
    date: "October 1, 2025",
    author: "Jane Doe",
    category: "Adventure",
    to: "/blog/solo-travel-asia",
  },
  {
    id: 2,
    title: "Luxurious Winter Escapes: Chalets and Ski Resorts",
    excerpt:
      "From the Swiss Alps to Whistler Blackcomb, find the most breathtaking destinations for your next premium winter vacation.",
    image: "https://placehold.co/600x400/06B6D4/ffffff?text=Winter+Chalet",
    date: "September 25, 2025",
    author: "Alex Smith",
    category: "Luxury",
    to: "/blog/winter-escapes",
  },
  {
    id: 3,
    title: "Packing Like a Pro: The Minimalist Traveller's Checklist",
    excerpt:
      "Learn the secrets to packing light, avoiding baggage fees, and having everything you need for a two-week journey.",
    image: "https://placehold.co/600x400/EC4899/ffffff?text=Travel+Essentials",
    date: "September 18, 2025",
    author: "Chris Lee",
    category: "Tips & Guides",
    to: "/blog/packing-checklist",
  },
  {
    id: 4,
    title: "The Most Underrated European Cities for Foodies",
    excerpt:
      "Move beyond Paris and Rome! Explore the culinary delights of Porto, Lyon, and Bologna for an authentic taste of Europe.",
    image: "https://placehold.co/600x400/F59E0B/ffffff?text=European+Cuisine",
    date: "September 10, 2025",
    author: "Maria Garcia",
    category: "Food",
    to: "/blog/underrated-food-cities",
  },
];

export const trustedCos = [
  { name: "philippine airlines", logo: philippineLogo },
  { name: "cebu pacific", logo: cebuLogo },
  { name: "air asia", logo: airLogo },
];
