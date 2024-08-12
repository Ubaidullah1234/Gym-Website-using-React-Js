import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';
import gym from '../../assets/Gym.jpg';
import gym_trainer from '../../assets/Gym_trainer.jpg';
import gym1 from '../../assets/gym1.jpg';

const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={gym} alt="Gym" className="gym" />
        <img src={gym_trainer} alt="Gym Trainer" className="gym-trainer" />
        <img src={gym1} alt="Gym Facility" className="gym-facility" />
      </div>
      <div className="about-right">
        <h3>ABOUT OUR GYM</h3>
        <h2>Your Path to Fitness Excellence</h2>
        <p>
          Our gym offers a unique environment where you can achieve your fitness goals with the help of our experienced trainers. We provide a wide range of equipment and classes tailored to all fitness levels.
        </p>
        <p>
          Join us and become part of a community dedicated to improving health and well-being. Our trainers are here to guide you every step of the way.
        </p>
        <Link to="/registration" className="cta-button">
          Join Us Today
        </Link>

        <div className="facilities">
          <h3>Our Facilities</h3>
          <ul>
            <li>State-of-the-art cardio and weight equipment</li>
            <li>Group fitness classes including Yoga, Pilates, and Zumba</li>
            <li>Personal training sessions tailored to your needs</li>
            <li>Fully equipped locker rooms with showers</li>
            <li>Nutrition advice and meal planning</li>
          </ul>
        </div>

        <div className="testimonials">
          <h3>What Our Members Say</h3>
          <div className="testimonial">
            <p>"Joining this gym was the best decision I ever made. The trainers are incredibly supportive!"</p>
            <p>- Sarah J.</p>
          </div>
          <div className="testimonial">
            <p>"The variety of classes offered keeps me motivated and challenged every day."</p>
            <p>- Mark T.</p>
          </div>
          <div className="testimonial">
            <p>"The facilities are top-notch, and the community is very welcoming. Highly recommend!"</p>
            <p>- Emily R.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
