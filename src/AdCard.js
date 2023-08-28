import React from "react";

function AdCard({campaignName,mediaBuyName,adName,cost,clicks,results,impressions}) {
 
    return (
        <div className="w-[25%] aspect-w-1 aspect-h-1 border border-gray-300 rounded-lg bg-white pt-8 pb-10 px-6 shadow-sm shadow-indigo-100 flex flex-col">
            <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">Campaign</span>
                <span className="text-sm text-gray-500">Results</span>
            </div>
            <div className="flex justify-between items-center text-xl mb-2">
                <span className="">{campaignName}</span>
                <span className="font-bold">{results}</span>
            </div>

            <div className="flex justify-between items-center border-t border-b h-10">
                <span>Creative:</span>
                <span>{adName}</span>
            </div>

            <div className="flex justify-between items-center border-b h-10">
                <span>Adset:</span>
                <span>{mediaBuyName}</span>
            </div>       
            <div className="flex justify-between items-center border-b h-10">
                <span>Impressions:</span>
                <span>{impressions}</span>
            </div>
            <div className="flex justify-between items-center border-b h-10">
                <span>Spend</span>
                <span>{cost}</span>
            </div>
            <div className="flex justify-between items-center border-b h-10">
                <span>Clicks</span>
                <span>{clicks}</span>
            </div>
        </div>
    )
}

export default AdCard