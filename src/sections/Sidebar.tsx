import { useContext, useState } from "react";
import { DataContext } from "../lib/context";
import { HexColorPicker } from "react-colorful";
import { Button, Card, CardBody, Input } from "@chakra-ui/react";
import BackgroundPinkder from "../components/BackgroundPicker";
function SideBar() {
  const context = useContext(DataContext);
  const [bgColor, setBGColor] = useState("#ef3fa4");
  const [textColor, setTextColor] = useState("#000000");
  const handleBGChange = (e: string) => {
    context?.setData({
      ...context.data,
      background: { ...context.data.background, color: e },
    });
  };
  const handleTextChange = (e: string) => {
    context?.setData({
      ...context.data,
      texts: {
        ...context.data.texts,
        primary: { ...context.data.texts.primary, color: e },
        secondary: { ...context.data.texts.secondary, color: e },
      },
    });
  };
  return (
    <div className="flex flex-col w-1/3 bg-gray-200 p-4 gap-4 h-screen overflow-y-scroll overflow-x-hidden">
      <Card>
        <CardBody className=" ">
          <div className="flex flex-col gap-2 pb-4">
            <div className="flex flex-col gap-1 mt-4">
              <Input
                onChange={(e) => {
                  context?.setData({
                    ...context.data,
                    texts: {
                      ...context.data.texts,
                      primary: {
                        ...context.data.texts.primary,
                        text: e.target.value,
                      },
                    },
                  });
                }}
                className=" p-2 font-inter"
                defaultValue={context?.data.texts.primary?.text}
                placeholder="Primary Text"
                variant={"filled"}
              />
              <Input
                className=" p-2 "
                defaultValue={context?.data.texts.secondary?.text}
                placeholder="Secondary Text"
                onChange={(e) => {
                  context?.setData({
                    ...context.data,
                    texts: {
                      ...context.data.texts,
                      secondary: {
                        ...context.data.texts.secondary,
                        text: e.target.value,
                      },
                    },
                  });
                }}
                variant={"filled"}
              />
            </div>

            <div className="flex flex-col gap-2 justify-betweens ">
              <div className="flex flex-col justify-center items-center gap-2">
                <label htmlFor="bgColorPicker">Background Color</label>
                <HexColorPicker
                  id="bgColorPicker"
                  color={bgColor}
                  onChange={(e) => {
                    handleBGChange(e);
                    setBGColor(e);
                    console.log(context?.data);
                  }}
                  className=" resposive "
                />
              </div>
              <div className="flex flex-col justify-center items-center gap-2 ">
                <label htmlFor="textColorPicker">Text Color</label>
                <HexColorPicker
                  id="textColorPicker"
                  color={textColor}
                  onChange={(e) => {
                    handleTextChange(e);
                    setTextColor(e);
                    console.log(context?.data);
                  }}
                  className="resposive"
                />
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
      <Card>
        <CardBody className=" flex flex-col gap-4">
          <p className=" font-semibold text-center mt-4">For Debugging:</p>{" "}
          <div className="flex">
            <div
              className="flex w-full h-8 justify-center items-center"
              style={{ backgroundColor: bgColor }}
            >
              <span className=" invert">BG Color</span>
            </div>
            <div
              className="flex w-full h-8 justify-center items-center"
              style={{ backgroundColor: textColor }}
            >
              <span className=" invert">Text Color</span>
            </div>
          </div>
          <Button colorScheme="pink" onClick={() => console.log(context?.data)}>
            Log Data
          </Button>
          {JSON.stringify(context?.data, null, 2)}
          <BackgroundPinkder />
        </CardBody>
      </Card>
    </div>
  );
}

export default SideBar;
