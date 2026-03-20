import { useState } from 'react';
import './App.css'
import EmergencyInfoCard from './components/EmergencyInfoCard'
import HeroBanner from './components/HeroBanner';
import Navbar from './components/Navbar';

const emergencyInfoPromise = fetch("EmergencyInfo.json").then(res => res.json());

function App() {
    const [copyCount, setCopyCount] = useState(0);
    const [favourite, setFavourite] = useState(0);

  return (
    <>
      <Navbar copyCount={copyCount} favourite={favourite}></Navbar>
      <HeroBanner></HeroBanner>
      <EmergencyInfoCard
        emergencyInfoPromise={emergencyInfoPromise}
        copyCount={copyCount}
        setCopyCount={setCopyCount}
        favourite={favourite}
        setFavourite={setFavourite}
      ></EmergencyInfoCard>
    </>
  );
}

export default App
