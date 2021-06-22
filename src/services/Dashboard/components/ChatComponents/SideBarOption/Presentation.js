import React from "react";
import "../../../styles/SideBarOption.css";
function Presentation(props) {
  const { Icon, title } = props;
  return (
    <div
      className="sidebarOption"
      //   onClick={addChannelOption ? addChannel : selectChannel}
    >
      {Icon && <Icon className="sidebarOption_icon" />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <h3 className="sidebarOption_channel">
          <span className="sidebarOption_hash">#title</span>
        </h3>
      )}
    </div>
  );
}

export default Presentation;
