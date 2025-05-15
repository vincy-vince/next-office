import { serverSideFunction } from "@/utils/server-utils";
import { ImageSlider } from "@/components/imageSlider";
import { clientSideFunction } from "@/utils/client-utils";

export default function ServerRoutePage() {
  const result = serverSideFunction();
  const clientResult = clientSideFunction();

  return (
    <>
      <h1>
        {" "}
        Server route {result} {clientResult}{" "}
      </h1>
      <ImageSlider />;
    </>
  );
}
