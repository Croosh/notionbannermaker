import { Card, CardBody } from "@chakra-ui/react";
import TextInput from "../components/TextInput";
import { Divider } from "@chakra-ui/react";
import Debugger from "../components/Debugger";
import BackgroundPicker from "../components/BackgroundPicker";
function SideBar() {
  return (
    <div className="flex flex-col w-1/3 bg-gray-200 p-4 gap-4 h-screen overflow-y-scroll overflow-x-hidden">
      <Card>
        <CardBody className=" ">
          <div className="flex flex-col gap-2 pb-4">
            <div className="flex flex-col gap-2">
              <h2 className=" font-inter font-bold text-2xl ">Text</h2>
              <div className="flex flex-col gap-4">
                <TextInput type="primary" />
                <Divider />
                <TextInput type="secondary" />
              </div>
            </div>
            <div className="flex flex-col gap-2 justify-betweens ">
              <div className="flex flex-col justify-center items-center gap-2 "></div>
            </div>
          </div>
          <BackgroundPicker />
        </CardBody>
      </Card>
      <Debugger />
    </div>
  );
}

export default SideBar;
