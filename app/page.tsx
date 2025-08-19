'use client'

import { useEffect, useState } from "react";

// import { LineChart, Line, CartesianGrid, XAxis, YAxis, Legend } from 'recharts';

export default function Home() {
  const [subscribers, setSubscribers] = useState(null);

  useEffect(() => {
    fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${process.env.NEXT_PUBLIC_CHANNEL_ID}&key=${process.env.NEXT_PUBLIC_API_KEY}`)
  .then(res => res.json())
  .then(data => setSubscribers(data.items[0].statistics.subscriberCount))

  }, [subscribers])

const d = [{name: 'Page A', uv: 0, pv: 2400, amt: 2400}, {name: 'Page B', uv: subscribers, pv: 2400, amt: 2400}];

  return (
   <>

   <h1 className="text-4xl text-center mt-12">Subscribers: {subscribers !== null ? subscribers : "Loading..."}</h1>

    <div className="">
         {/* <LineChart width={600} height={300} data={d}>
    <CartesianGrid />
    <Line dataKey="uv" />
    <XAxis dataKey="name" />
    <YAxis />
    <Legend />
  </LineChart> */}
    </div>



   </>
  );
}
