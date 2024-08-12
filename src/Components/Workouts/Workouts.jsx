import React from 'react';
import './Workouts.css';
import Deadlift from '../../assets/Deadlift.png';
import dumbell from '../../assets/dumbell.jpg';
import cardio from '../../assets/Cardio_workout.jpg';
import pullups from '../../assets/pullups.jpg';
import squat from '../../assets/squat.jpg';

const Workouts = () => {
  return (
    <div className="workouts-container">
      <h1>GYM EXERCISE</h1>

      <div className="exercise-container">
        <img src={Deadlift} alt="Deadlift" className="exercise-image" />
        <div className="exercise-description">
          <h2>Deadlift</h2>
          <p>
            The deadlift is a compound movement that targets the posterior chain, 
            including the lower back, glutes, and hamstrings. It's an essential exercise 
            for building overall strength and muscle mass.
          </p>
        </div>
      </div>

      <div className="exercise-container">
        <img src={dumbell} alt="Dumbbell Workout" className="exercise-image" />
        <div className="exercise-description">
          <h2>Dumbbell Workout</h2>
          <p>
            Dumbbell exercises are versatile and can target various muscle groups. 
            Incorporating dumbbells into your workout routine can help improve strength, 
            balance, and muscle tone.
          </p>
        </div>
      </div>

      <div className="exercise-container">
        <img src={cardio} alt="Cardio Workout" className="exercise-image" />
        <div className="exercise-description">
          <h2>Cardio Workout</h2>
          <p>
            Cardio workouts are essential for improving cardiovascular health, burning calories, 
            and increasing stamina. They can include exercises like running, cycling, and HIIT.
          </p>
        </div>
      </div>

      <div className="exercise-container">
        <img src={pullups} alt="Pull-ups" className="exercise-image" />
        <div className="exercise-description">
          <h2>Pull-ups</h2>
          <p>
            Pull-ups are a great exercise for building upper body strength, particularly in 
            the back, shoulders, and arms. They can be performed with different grips to target 
            various muscle groups.
          </p>
        </div>
      </div>

      <div className="exercise-container">
        <img src={squat} alt="Squats" className="exercise-image" />
        <div className="exercise-description">
          <h2>Squats</h2>
          <p>
            Squats are a fundamental exercise for developing leg strength, particularly in the 
            quads, hamstrings, and glutes. They also engage the core and improve overall stability.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Workouts;
