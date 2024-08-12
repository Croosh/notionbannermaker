import { useRef } from "react";
import { Download } from "lucide-react";
import { Button, useToast } from "@chakra-ui/react";
import { exportAsImage } from "../lib/utils";
import Canvas from "../components/Canvas";

function Preview() {
  const toast = useToast();
  const canvasRef = useRef<HTMLCanvasElement>();
  console.log(canvasRef.current);
  return (
    <div className=" w-2/3 bg-gray-300 min-h-screen p-4 flex justify-center items-center relative flex-col gap-4">
      <Canvas ref={canvasRef} />
      <Button
        onClick={() => {
          console.log("Downloading");
          if (canvasRef.current) exportAsImage(canvasRef.current, "Banner");
          toast({
            title: "Download Started.",
            status: "success",
            duration: 5000,
            isClosable: true,
          });
        }}
        colorScheme={"green"}
        className=" absolute left-0 flex gap-2 group"
      >
        <Download width={18} className=" group-hover:animate-bounce" />
        Download
      </Button>
    </div>
  );
}

export default Preview;
