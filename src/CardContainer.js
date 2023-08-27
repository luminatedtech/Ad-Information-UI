import React,{useState} from "react";
import AdCard from "./AdCard";
import Filter from "./Filter";
function CardContainer ({adData}) {
const [selectedCategory, setSelectedCategory] = useState("All")
function handleCategoryChange(category) {
    setSelectedCategory(category)
}

const sortedData = [...adData].sort((a,b)=> 
    selectedCategory === "Ascending" ? a.cost - b.cost : b.cost - a.cost
    )
console.log(selectedCategory)
console.log(sortedData)

    return (
        
        <div className="flex flex-wrap gap-4 mt-10">
            <Filter category={selectedCategory} onCategoryChange={handleCategoryChange}/>
            {sortedData.map((ad,index)=> (
                <AdCard 
                key={index}
                campaignName={ad.campaign}
                mediaBuyName={ad.ad_group}
                adName={ad.creative_name}
                cost={ad.cost}
                clicks={ad.clicks}
                results={ad.results}
                />
            ))}
        </div>
    )
}

export default CardContainer