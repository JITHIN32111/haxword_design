'use client';

import React from 'react';
import Marquee from 'react-fast-marquee';

const RunningCards = () => {
const cards = [
  {
    name: "Darius Flynn",
    username: "Senior Product Manager",
    content: "Partnering with this dev team accelerated our product roadmap. Their frontend execution was pixel-perfect and delivered ahead of schedule.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face"
  },
  {
    name: "Felix B.",
    username: "Tech Lead @ Finlytics",
    content: "Their custom dashboard solution streamlined our data visualization. React + Tailwind mastery at its best.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face"
  },
  {
    name: "Fabrizio Fernandez",
    username: "Startup Founder",
    content: "The MVP they delivered helped us launch in 3 weeks. Clean code, great collaboration, and responsive support.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face"
  },
  {
    name: "Kai Nakamura",
    username: "CTO @ NovaTech",
    content: "Highly recommend for scalable web apps. Their backend and API integration work is solid and well-documented.",
    avatar: "https://images.unsplash.com/photo-1507101105822-7472b28e22ac?w=40&h=40&fit=crop&crop=face"
  },
  {
    name: "Olivia Blackwood",
    username: "Frontend Engineer",
    content: "Took their frontend course at the institute—top-tier content and real project exposure. Landed a job right after.",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face"
  },
  {
    name: "Esme Rothschild",
    username: "Design Systems Consultant",
    content: "The component library they built was intuitive, themeable, and performance-optimized. Ideal for design handoff.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face"
  }
];


  const secondRowCards = [
    {
      name: "Marcus Chen",
      username: "@marcusdev",
      content: "The @launchui component library is absolutely incredible. Clean, modern, and so easy to implement.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face"
    },
    {
      name: "Sarah Williams",
      username: "@sarahcodes",
      content: "Been using @launchui for my latest project and the developer experience is phenomenal.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face"
    },
    {
      name: "Alex Thompson",
      username: "@alexthompson",
      content: "Just discovered @launchui and I'm blown away by the attention to detail in every component.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face"
    },
    {
      name: "Nina Rodriguez",
      username: "@ninarodriguez",
      content: "@launchui makes building beautiful interfaces so effortless. This is the future of UI development.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face"
    },
    {
      name: "Jordan Kim",
      username: "@jordankim",
      content: "The animations in @launchui are buttery smooth. My clients are always impressed.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face"
    },
    {
      name: "Emma Davis",
      username: "@emmadavis",
      content: "Switched to @launchui last month and my development speed has doubled. Game changer!",
      avatar: "https://images.unsplash.com/photo-1507101105822-7472b28e22ac?w=40&h=40&fit=crop&crop=face"
    }
  ];

const CardComponent = ({ card, index }) => (
  <div
    key={index}
    className="flex-shrink-0 w-96 h-32 mx-3 bg-gradient-to-br from-gray-950 via-black to-red-950 backdrop-blur-sm rounded-xl p-6 border border-gray-800/50 shadow-2xl"
  >
    <div className="flex items-start space-x-3 h-full">
      <img
        src={card.avatar}
        alt={card.name}
        className="w-10 h-10 rounded-full object-cover ring-2 ring-gray-700/50"
      />
      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="flex items-center space-x-2 mb-1">
          <h3 className="text-white font-medium text-sm truncate">{card.name}</h3>
          <span className="text-gray-400 text-sm truncate">{card.username}</span>
        </div>
        <p className="text-gray-300 text-sm leading-relaxed overflow-hidden text-ellipsis line-clamp-3">
          {card.content}
        </p>
      </div>
    </div>
  </div>
);


  return (
    <div className="w-full bg-black py-4 overflow-hidden">
      {/* First Row - Left to Right */}
      <div className="relative mb-5">
        {/* Fade overlays */}
        <div className="absolute left-0 top-0 w-20 sm:w-44 h-full bg-gradient-to-r from-black via-black/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 w-20 sm:w-44 h-full bg-gradient-to-l from-black via-black/80 to-transparent z-10 pointer-events-none" />

        <Marquee speed={40} gradient={false} pauseOnHover={true}>
          {cards.map((card, index) => (
            <CardComponent key={`first-${index}`} card={card} index={index} />
          ))}
        </Marquee>
      </div>

      {/* Second Row - Right to Left */}
      <div className="relative">
        {/* Fade overlays */}
        <div className="absolute left-0 top-0 w-20 sm:w-44 h-full bg-gradient-to-r from-black via-black/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 w-20 sm:w-44 h-full bg-gradient-to-l from-black via-black/80 to-transparent z-10 pointer-events-none" />

        <Marquee speed={35} gradient={false} direction="right" pauseOnHover={true}>
          {secondRowCards.map((card, index) => (
            <CardComponent key={`second-${index}`} card={card} index={index} />
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default RunningCards;
