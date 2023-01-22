import React, { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

interface Dog {
  message: string | null;
}

function Dogs() {
  const fetchDog = async () => {
    const dogData = await fetch("https://dog.ceo/api/breeds/image/random").then(
      (res) => res.json()
    );
    return dogData;
  };

  console.log(fetchDog());

  const { data, isSuccess, isLoading, status } = useQuery({
    queryKey: ["dog"],
    queryFn: () => {
      const data = fetchDog();
      return data;
    },
  });

  if (status === "loading") {
    console.log("Loading...");
  }

  console.log(data);

  const handleRandomDog = () => {
    fetchDog();
  };

  return (
    <div>
      <img src={data?.message} alt="" />
      <button onClick={handleRandomDog}>Random Dog</button>
    </div>
  );
}

export default Dogs;
