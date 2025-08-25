'use client'

import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";

export default function Home() {
  const [subscribers, setSubscribers] = useState<number | null>(null);
  const [data, setData] = useState<number[]>([]);
  const [labels, setLabels] = useState<string[]>([]);

  useEffect(() => {
    const fetchSubscribers = async () => {
      const res = await fetch(
        `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${process.env.NEXT_PUBLIC_CHANNEL_ID}&key=${process.env.NEXT_PUBLIC_API_KEY}`
      );
      const result = await res.json();
      const count = Number(result.items[0].statistics.subscriberCount);

      setSubscribers(count);

      const today = new Date();
      const dayName = today.toLocaleDateString("en-US", { weekday: "long" }); 

      setLabels((prev) => {
      
        if (prev.includes(dayName)) return prev;

   
        if (today.getDay() === 1) {
          return [dayName];
        }

       
        if (prev.length >= 7) {
          return [...prev.slice(1), dayName];
        }

        return [...prev, dayName];
      });

      setData((prev) => {
        if (labels.includes(dayName)) return prev;

        if (today.getDay() === 1) {
          return [count];
        }

        if (prev.length >= 7) {
          return [...prev.slice(1), count];
        }

        return [...prev, count];
      });
    };

    fetchSubscribers(); 
  }, [labels]); 

  const chartData = {
    labels,
    datasets: [
      {
        label: "Subscribers (7-day)",
        data,
        borderColor: "rgba(75,192,192,1)",
        backgroundColor: "rgba(75,192,192,0.2)",
        tension: 0.3,
        fill: true,
      },
    ],
  };

  return (
    <>
      <h1 className="text-4xl text-center mt-12">
        Subscribers: {subscribers !== null ? subscribers : "Loading..."}
      </h1>

      <div className="flex justify-center mt-8 w-[700px] mx-auto bg-white">
        <Line data={chartData} />
      </div>
    </>
  );
}

// 📌 Footer’daki Copyright Nedir, Neden Kullanılır