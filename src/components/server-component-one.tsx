import fs from "fs";
import { ClientComponentOne } from "./client-component-one";
export const ServerComponentOne = () => {
  fs.readFileSync("src/components/server-component-one.tsx", "utf-8");
  return (
    <>
      <h1>Server Component One</h1>
      <ClientComponentOne children={undefined} />
    </>
  );
};

// client component inside a server component WORKS!
