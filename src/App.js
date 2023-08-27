import React, {useEffect, useState} from 'react';
import CardContainer from './CardContainer';
import './App.css';

function App() {
  useEffect(()=> {
    fetch("http://localhost:3000/fakeDataSet")
    .then((r)=>r.json())
    .then((data)=>  {
    const combinedArray = [
      ...data.facebook_ads,
      ...data.twitter_ads,
      ...data.snapchat_ads,
    ];
    setAdvertisementData(combinedArray)})
  },[])
  const [advertisementData, setAdvertisementData] = useState([])
  console.log(advertisementData)
  return (
    <div className="bg-primary w-full h-full">
        <CardContainer adData={advertisementData}/>
    </div>
  );
} 

export default App;
