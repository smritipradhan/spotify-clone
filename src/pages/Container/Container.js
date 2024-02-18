import React from "react";
import SideBar from "../../components/SpotifySideBar/Sidebar/SideBar";

const Container = (props) => {
  return (
    <div className="flex h-screen">
      <SideBar />
      {props.children}
    </div>
  );
};

export default Container;
