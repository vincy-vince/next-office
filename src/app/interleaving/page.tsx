import { ClientComponentOne } from "@/components/client-component-one";
import { ServerComponentOne } from "@/components/server-component-one";
export default function InterLeavingPage() {
  return (
    <>
      <h1>InterLeaving Page</h1>
      <ClientComponentOne>
        <ServerComponentOne />  
      </ClientComponentOne>
    </>
  );
}

// client component inside a client component WORKS!
