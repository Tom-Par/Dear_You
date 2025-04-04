import './SelfCare.css';
import BreathingExercise from '../components/BreathingExercise';
import MoodTracker from '../components/MoodTracker';

function SelfCare() {
  return (
    <div className="self-care-wrapper">
      <h1>Self Care</h1>
      <p>
        Sometimes life gets tough. Remember, you are not alone.
        Take a moment to breathe, check in with your feelings, and explore some supportive resources below.
      </p>
      
      <section className="breathing-exercise-section">
        <h2>Breathing Exercise</h2>
        <BreathingExercise />
        <p>
          Try this simple breathing cycle:<br/> 
          inhale for 4 seconds, hold for 7, and exhale for 8. <br/>
          Repeat until you feel more at ease.
        </p>
      </section>
      
      <section className="mood-tracker-section">
        <h2>How Are You Feeling?</h2>
        {/* Our simplified MoodTracker without a second heading/card */}
        <MoodTracker />
      </section>
      
      <section className="resources">
        <h2>Helpful Resources</h2>
        <ul>
          <li>
            Mental Health Hotline: <a href="tel:1234567890">123-456-7890</a>
          </li>
          <li>
            Local Support &amp; Information: <a href="https://www.example.com" target="_blank" rel="noopener noreferrer">Click Here</a>
          </li>
          <li>
            Visit <a href="https://www.nami.org" target="_blank" rel="noopener noreferrer">NAMI</a> for more mental health resources.
          </li>
        </ul>
      </section>
    </div>
  );
}

export default SelfCare;
