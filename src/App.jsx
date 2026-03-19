import './App.css'
import EmergencyInfoCard from './components/EmergencyInfoCard'
import HeroBanner from './components/HeroBanner';

const emergencyInfoPromise = fetch("EmergencyInfo.json").then(res => res.json());

function App() {

  return (
    <>
      <HeroBanner></HeroBanner>
      <EmergencyInfoCard
        emergencyInfoPromise={emergencyInfoPromise}
      ></EmergencyInfoCard>
    </>
  );
}

export default App
