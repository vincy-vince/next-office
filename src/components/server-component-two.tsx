import fs from "fs";

export const ServerComponentTwo = () => {
  fs.readFileSync("src/components/server-component-two.tsx", "utf-8");
  return <h1>Server Component Two</h1>;
};

// server component inside another server component WORKS!
