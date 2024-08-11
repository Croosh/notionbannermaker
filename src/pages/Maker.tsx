import Preview from "../sections/Preview";
import SideBar from "../sections/Sidebar";
import { DataContext } from "../lib/context";
import { useState } from "react";
import { defaultAppData } from "../lib/utils";

function Maker() {
  const [data, setData] = useState(defaultAppData);
  return (
    <DataContext.Provider value={{ data, setData }}>
      <div className=" flex overflow-hidden">
        <SideBar />
        <Preview />
      </div>
    </DataContext.Provider>
  );
}

export default Maker;
