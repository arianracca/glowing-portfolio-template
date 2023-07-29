import React from 'react';

type WelcomeSectionProps = {
};

const WelcomeSection: React.FC<WelcomeSectionProps> = () => {
  return (
    <section id="welcome-section" className="welcome-section">
      <h1>Hello, my name is Arian</h1>
      <h2 className="subtitle">This is my Profile</h2>
    </section>
  );
};

export default WelcomeSection;
