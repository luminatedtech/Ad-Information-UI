import React from "react";

function AdCard({campaignName,mediaBuyName,adName,cost,clicks,results,impressions}) {
 
    return (
        <div className="w-[25%] aspect-w-1 aspect-h-1 bg-gray-200 border border-gray-300">
            <h1> Campaign: {campaignName} </h1>
            <h1> Creative: {adName} </h1>
            <h2> Adset: {mediaBuyName} </h2>
            <h3> Results: {results}</h3>
            <h3> Impressions: {impressions} </h3>
            <div className="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 border-t-black border-b-black">
                <dt className="text-lg font-medium">
                    Spend
                </dt>
                <dd className="mt-1 mr-10 text-lg sm:col-span-2 text-right">
                    {cost}
                </dd>
            </div>
            <h3>Clicks: {clicks}</h3>

        </div>
    )
}

export default AdCard