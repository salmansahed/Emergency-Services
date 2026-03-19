import './App.css'
import EmergencyInfoCard from './components/EmergencyInfoCard'
import HeroBanner from './components/HeroBanner';
import Navbar from './components/Navbar';

const emergencyInfoPromise = fetch("EmergencyInfo.json").then(res => res.json());

function App() {

  return (
    <>
      <Navbar></Navbar>
      <HeroBanner></HeroBanner>
      <EmergencyInfoCard
        emergencyInfoPromise={emergencyInfoPromise}
      ></EmergencyInfoCard>
    </>
  );
}

export default App
