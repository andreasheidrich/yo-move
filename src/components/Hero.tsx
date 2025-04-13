
import React from 'react';
import { Link } from 'react-router-dom';

interface HeroProps {
  title: string;
  subtitle: string;
  imageUrl: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  isEnglish?: boolean;
}

const Hero = ({
  title,
  subtitle,
  imageUrl,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
  isEnglish = false
}: HeroProps) => {
  return (
    <section className="relative bg-gradient-to-b from-yoga-secondary to-white">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-yoga-dark leading-tight">
              {title}
            </h1>
            <p className="text-lg text-gray-600">
              {subtitle}
            </p>
            <div className="flex flex-wrap gap-4">
              {primaryButtonText && primaryButtonLink && (
                <Link to={primaryButtonLink} className="btn-primary">
                  {primaryButtonText}
                </Link>
              )}
              {secondaryButtonText && secondaryButtonLink && (
                <Link to={secondaryButtonLink} className="btn-outline">
                  {secondaryButtonText}
                </Link>
              )}
            </div>
            <div className="pt-4">
              {isEnglish ? (
                <Link to="/" className="text-yoga-primary hover:underline">← Zurück zur deutschen Version</Link>
              ) : (
                <Link to="/english" className="text-yoga-primary hover:underline">English version available →</Link>
              )}
            </div>
          </div>
          
          <div className="relative animate-float">
            <img
              src={imageUrl}
              alt="Yoga Pose"
              className="rounded-lg shadow-xl w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-yoga-primary opacity-10 rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
