import { Card, CardBody, Button } from "@chakra-ui/react";
import { DataContext } from "../lib/context";
import { useContext } from "react";

function Debugger() {
  const context = useContext(DataContext);
  return (
    <Card>
      <CardBody className=" flex flex-col gap-4">
        <p className=" font-semibold text-center mt-4">For Debugging:</p>{" "}
        <div className="flex">
          <div
            className="flex w-full h-8 justify-center items-center"
            style={{ backgroundColor: context?.data.background.color }}
          >
            <span className=" invert">BG Color</span>
          </div>
          <div
            className="flex w-full h-8 justify-center items-center"
            style={{ backgroundColor: context?.data.texts.primary?.color }}
          >
            <span className=" invert">Text Color</span>
          </div>
        </div>
        <Button colorScheme="pink" onClick={() => console.log(context?.data)}>
          Log Data
        </Button>
        {JSON.stringify(context?.data, null, 2)}
      </CardBody>
    </Card>
  );
}

export default Debugger;
