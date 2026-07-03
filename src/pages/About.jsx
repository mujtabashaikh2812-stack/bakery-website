import React from 'react';
import { FaUsers, FaAward, FaSeedling, FaHeart } from 'react-icons/fa';
import './About.css';

const teamMembers = [
  {
    name: 'Jane Doe',
    role: 'Founder & Head Baker',
    image: '👩‍🍳',
    bio: 'Jane founded A B Bakery with a passion for baking and a dream of sharing her family recipes. Her expertise is the heart of our bakery.'
  },
  {
    name: 'John Smith',
    role: 'Pastry Chef',
    image: '👨‍🍳',
    bio: 'John is a master of delicate pastries and croissants. His creations are a blend of classic techniques and modern flavors.'
  },
  {
    name: 'Emily White',
    role: 'Cake Decorator',
    image: '🎨',
    bio: 'Emily turns our cakes into works of art. Her creative designs make every celebration special and memorable.'
  }
];

const timelineEvents = [
  { year: '1995', title: 'The Dream Begins', description: 'Jane starts baking from her home kitchen, sharing her creations with friends and family.' },
  { year: '2001', title: 'First Bakery Opens', description: 'A B Bakery opens its first store, quickly becoming a local favorite.' },
  { year: '2010', title: 'Award for Excellence', description: 'Awarded "Best Bakery in Town" for our commitment to quality and taste.' },
  { year: '2023', title: 'Expanding Our Reach', description: 'We launched our new website to bring our delicious treats to more people than ever.' }
];

const About = () => {
  return (
    <div className="about-page">
      <div className="about-header">
        <div className="container">
          <h1>Our Story</h1>
          <p>From a small kitchen to the heart of the town, our journey is baked with love.</p>
        </div>
      </div>

      <div className="container">
        {/* Our Story Section */}
        <section className="story-section section">
          <div className="story-content">
            <div className="story-text">
              <h2>Baked with Passion, Served with Love</h2>
              <p>
                Founded in 1995, A B Bakery started as a simple dream in Jane Doe's kitchen. 
                Armed with her grandmother's cherished recipes and an unwavering passion for baking, 
                Jane set out to create treats that didn't just taste good but also brought people together.
              </p>
              <p>
                Today, we continue to honor that legacy. Every cake, pastry, and cookie is crafted with the 
                finest locally-sourced ingredients, a sprinkle of creativity, and a whole lot of love.
              </p>
            </div>
            <div className="story-image">
              <span role="img" aria-label="bakery" className="bakery-emoji">🏠</span>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="timeline-section section">
          <h2 className="section-title">Our Journey</h2>
          <div className="timeline">
            {timelineEvents.map((event, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-year">{event.year}</div>
                <div className="timeline-content">
                  <h3>{event.title}</h3>
                  <p>{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Our Values Section */}
        <section className="values-section section">
          <h2 className="section-title">Our Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <FaHeart className="value-icon" />
              <h3>Passion</h3>
              <p>Baking is our art, and love is our most important ingredient.</p>
            </div>
            <div className="value-card">
              <FaSeedling className="value-icon" />
              <h3>Quality</h3>
              <p>We use only the finest, freshest, and locally-sourced ingredients.</p>
            </div>
            <div className="value-card">
              <FaUsers className="value-icon" />
              <h3>Community</h3>
              <p>We are proud to be a gathering place for our local community.</p>
            </div>
            <div className="value-card">
              <FaAward className="value-icon" />
              <h3>Excellence</h3>
              <p>We are committed to delivering an exceptional experience every time.</p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="team-section section">
          <h2 className="section-title">Meet Our Team</h2>
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-card">
                <div className="team-image">{member.image}</div>
                <h3 className="team-name">{member.name}</h3>
                <p className="team-role">{member.role}</p>
                <p className="team-bio">{member.bio}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About; 