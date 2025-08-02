'use client';

import React from 'react';
import Marquee from 'react-fast-marquee';

const RunningCards = () => {
   const cards = [
    {
      name: "Darius Flynn",
      username: "Senior Product Manager",
      content: "Their team helped us launch a complex web app in record time. Clean code, strong documentation, and constant communication made it smooth.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face&auto=format"
    },
    {
      name: "Felix B.",
      username: "Tech Lead, Finlytics", 
      content: "The dashboard and reporting features they built for us are flawless. Their React and Node.js expertise is top-notch.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face&auto=format"
    },
    {
      name: "Fabrizio Fernandez",
      username: "Startup Founder",
      content: "From wireframes to deployment, the team handled everything efficiently. Truly a full-stack partner we can rely on.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face&auto=format"
    },
    {
      name: "Kai Nakamura",
      username: "CTO, NovaTech",
      content: "Their backend integration with our existing APIs was seamless. Our new features rolled out with zero regressions.",
      avatar: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=150&h=150&fit=crop&crop=face&auto=format"
    },
    {
      name: "Olivia Blackwood",
      username: "Frontend Engineer",
      content: "Pixel-perfect UI, responsive layouts, and smooth animations. They truly understand modern web design and accessibility.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face&auto=format"
    },
    {
      name: "Esme Rothschild",
      username: "Design Consultant",
      content: "They translated our Figma designs into high-performance components. The design handoff was effortless.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face&auto=format"
    }
  ];

  const secondRowCards = [
    {
      name: "Marcus Chen",
      username: "DevOps Architect",
      content: "Our CI/CD pipeline was fully automated and optimized thanks to their engineering support. Saved us hours every week.",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face&auto=format"
    },
    {
      name: "Sarah Williams",
      username: "Engineering Manager",
      content: "They refactored legacy codebases and improved app performance by 40%. Incredible attention to detail.",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face&auto=format"
    },
    {
      name: "Alex Thompson",
      username: "Full Stack Developer",
      content: "Their component libraries are reusable, scalable, and easy to maintain. Great coding practices throughout.",
      avatar: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=150&h=150&fit=crop&crop=face&auto=format"
    },
    {
      name: "Nina Rodriguez",
      username: "Project Manager",
      content: "Every sprint was delivered on time with consistent quality. Their communication and clarity stood out.",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face&auto=format"
    },
    {
      name: "Jordan Kim", 
      username: "Product Designer",
      content: "The development matched our design system precisely. Responsive across devices and fast loading too.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face&auto=format"
    },
    {
      name: "Emma Davis",
      username: "QA Analyst", 
      content: "Their thorough testing and clean architecture made our release cycle stress-free. Impressive QA pipeline.",
      avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face&auto=format"
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
