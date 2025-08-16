'use client'

import { useEffect, useState } from "react";


export default function Home() {
  const [subscribers, setSubscribers] = useState(null);

  useEffect(() => {
    fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${process.env.NEXT_PUBLIC_CHANNEL_ID}&key=${process.env.NEXT_PUBLIC_API_KEY}`)
  .then(res => res.json())
  .then(data => setSubscribers(data.items[0].statistics.subscriberCount))

  }, [subscribers])


  return (
   <>

   <h1 className="text-4xl text-center mt-12">Subscribers: {subscribers !== null ? subscribers : "Loading..."}</h1>
   </>
  );
}
