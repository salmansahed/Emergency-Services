import './App.css'
import EmergencyInfoCard from './components/EmergencyInfoCard'

const emergencyInfoPromise = fetch("EmergencyInfo.json").then(res => res.json());

function App() {

  return (
    <>
      <EmergencyInfoCard
        emergencyInfoPromise={emergencyInfoPromise}
      ></EmergencyInfoCard>
    </>
  );
}

export default App
