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
 const keyMapping = {
  "campaign_name" : "campaign",
  "utm_campaign" : "campaign"
,  "media_buy_name" : "ad_group",
  "ad_squad_name" : "ad_group",
  "utm_medium" : "ad_group"

 }
 const modifiedData = advertisementData.map((ad)=> {
  const modifiedAd = {}
  for (const key in ad) {
    if (keyMapping[key]){
      modifiedAd[keyMapping[key]] = ad[key]
    }
    else {
      modifiedAd[key] = ad[key]
    }
  }
  return modifiedAd
 })
 console.log(advertisementData, "adData")
 console.log(modifiedData, "modifiedData")
  return (
    <div className="bg-primary w-full h-full">
        <CardContainer adData={advertisementData}/>
    </div>
  );
} 

export default App;
