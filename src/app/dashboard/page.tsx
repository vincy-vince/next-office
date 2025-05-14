"use client";

import { useState } from "react";

export default function DashBoardPage() {
  const [name, setName] = useState("");
console.log("DashBorad client component");

  return (
    <div>
      <h1> DashBoard </h1>
      <input className="bg-white text-black" value={name} onChange={(e) => setName(e.target.value)} />
      <p>Hello, {name}!</p>
    </div>
  );
}
