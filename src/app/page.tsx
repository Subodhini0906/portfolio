"use client"
import { useState, useEffect } from "react";
import Hero from "@/components/Hero";
import LoadingScreen from "@/components/LoadingScreen";
import "./globals.css";

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false); // Hide the loading screen after a specified time
    }, 3000);
  }, []);

  return (
    <>
      {loading ? (
        <LoadingScreen />
      ) : (
      <main className="w-full min-h-screen bg-black text-white">
        <Hero />
      </main>
      )}
    </>
  );
};

export default Home;
