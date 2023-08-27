import React,{useState} from "react";
import AdCard from "./AdCard";
import Filter from "./Filter";
function CardContainer ({adData}) {
const [selectedCategory, setSelectedCategory] = useState("All")
function handleCategoryChange(category) {
    setSelectedCategory(category)
}
    return (
        
        <div className="flex flex-wrap gap-4 mt-10">
            <Filter category={selectedCategory} onCategoryChange={handleCategoryChange}/>
            {adData.map((ad,index)=> (
                <AdCard 
                key={index}
                campaignName={ad.campaign_name || ad.campaign|| ad.utm_campaign}
                mediaBuyName={ad.media_buy_name || ad.ad_group || ad.ad_squad_name || ad.utm_medium}
                adName={ad.ad_name || ad.image_name || ad.creative_name || ad.utm_content}
                cost={ad.cost || ad.spend}
                clicks={ad.clicks || ad.post_clicks}
                />
            ))}
        </div>
    )
}

export default CardContainer