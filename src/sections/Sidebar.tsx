import { useContext, useState } from "react";
import { DataContext } from "../lib/context";
import { HexColorPicker } from "react-colorful";
import { Button, Input } from "@chakra-ui/react";
import BackgroundPinkder from "../components/BackgroundPicker";
function SideBar() {
  const context = useContext(DataContext);
  const [color, setColor] = useState("#ef3fa4");
  const handleBGChange = (e: string) => {
    context?.setData({
      ...context.data,
      background: { ...context.data.background, color: e },
    });
  };
  return (
    <div className="flex flex-col w-1/3 bg-gray-200 p-4 gap-2">
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-1">
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
            className=" p-2"
            defaultValue={context?.data.texts.primary?.text}
            placeholder="Text"
            variant={"filled"}
          />
          <Input
            className=" p-2"
            defaultValue={context?.data.texts.secondary?.text}
            placeholder="Text"
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
        <HexColorPicker
          color={color}
          onChange={(e) => {
            handleBGChange(e);
            setColor(e);
            console.log(context?.data);
          }}
          className=" resposive "
        />
      </div>
      <div className="flex w-full h-8" style={{ backgroundColor: color }}></div>
      <Button colorScheme="pink" onClick={() => console.log(context?.data)}>
        Log
      </Button>
      {JSON.stringify(context?.data, null, 2)}

      <BackgroundPinkder />
    </div>
  );
}

export default SideBar;
