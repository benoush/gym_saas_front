"use client";

import { useState } from "react";

import {  Button } from "@mui/material";



const BenedictePage = ({age}: {age: number}) => {
  const [count, setCompteur] = useState<number>(age);

  return (
   <div>
    <h1>My name is benedict</h1>
    <h2>Age: {count}</h2>
    <Button onClick={() => setCompteur(count + 2)}>
        Increment
    </Button>
   </div>
  );
};

export default BenedictePage;
