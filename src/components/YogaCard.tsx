
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface YogaCardProps {
  title: string;
  description: string;
  link: string;
  icon?: React.ReactNode;
  className?: string;
}

const YogaCard = ({ title, description, link, icon, className }: YogaCardProps) => {
  return (
    <div className={cn(
      "bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300",
      className
    )}>
      {icon && <div className="text-yoga-primary mb-4">{icon}</div>}
      <h3 className="text-xl font-medium mb-3">{title}</h3>
      <p className="text-gray-600 mb-5">{description}</p>
      <Link 
        to={link} 
        className="text-yoga-primary font-medium hover:underline inline-flex items-center"
      >
        Mehr erfahren
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-5 w-5 ml-1" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M13 7l5 5m0 0l-5 5m5-5H6" 
          />
        </svg>
      </Link>
    </div>
  );
};

export default YogaCard;
