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
        <>
            <div className="h-[4rem] flex justify-end align-center border-t border-b border-lightgray mt-1">
                <Filter category={selectedCategory} onCategoryChange={handleCategoryChange}/>
            </div>
            <div className="flex flex-wrap gap-4 bg-white justify-center pt-10">
                {sortedData.map((ad,index)=> (
                    <AdCard 
                    key={index}
                    impressions={ad.impressions}
                    campaignName={ad.campaign}
                    mediaBuyName={ad.ad_group}
                    adName={ad.creative_name}
                    cost={ad.cost}
                    clicks={ad.clicks}
                    results={ad.results}
                    />
                ))}
            </div>
        </>
        
    )
}


export default CardContainer