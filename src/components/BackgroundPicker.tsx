import { useContext } from "react";
import { HexColorPicker } from "react-colorful";
import { DataContext } from "../lib/context";
import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@chakra-ui/react";

function BackgroundPicker() {
  const handleBGChange = (e: string) => {
    context?.setData({
      ...context.data,
      background: { ...context.data.background, color: e },
    });
  };
  const context = useContext(DataContext);
  return (
    <div className=" my-3">
      <h2 className=" font-inter font-bold text-2xl mb-2">Background</h2>
      <Tabs isFitted variant={"enclosed-colored"}>
        <TabList>
          <Tab>Color</Tab>
          <Tab>Image</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <div className=" flex w-full justify-center items-center min-h-48">
              <HexColorPicker
                color={context?.data.background.color}
                id="bgColorPicker"
                onChange={(e) => {
                  handleBGChange(e);
                  console.log(context?.data);
                }}
              />
            </div>
          </TabPanel>
          <TabPanel>
            <div className=" flex w-full justify-center items-center min-h-48">
              <p>Coming Soon!</p>
            </div>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
}

export default BackgroundPicker;
