import React, { useState } from "react";
import { Drawer } from "@material-ui/core";
import "../../../styles/SideBar.css";
import SideBarOption from "../SideBarOption";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import CreateIcon from "@material-ui/icons/Create";
import InsertCommentIcon from "@material-ui/icons/InsertComment";
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import AppsIcon from "@material-ui/icons/Apps";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";
const Presentation = () => {
  const [open, setOpen] = useState(true);
  return (
    <Drawer anchor="left" open={open}>
      <div
        className="sidebar"
        style={{
          height: "100%",
          width: "260px",
          backgroundColor: "#3f0340",
          paddingTop: "10px",
        }}
      >
        <div className="sidebar_header">
          <div className="sidebar_info">
            <h2>user name</h2>
            <h3>
              <FiberManualRecordIcon />
              user name
            </h3>
          </div>
          <CreateIcon />
        </div>
        <SideBarOption Icon={InsertCommentIcon} title={"Thread"} />
        <SideBarOption Icon={InboxIcon} title={"Mentions & reactions"} />
        <SideBarOption Icon={DraftsIcon} title={"Saved items"} />
        <SideBarOption Icon={BookmarkBorderIcon} title={"Channel browser"} />
        <SideBarOption Icon={PeopleAltIcon} title={"People & user groups"} />
        <SideBarOption Icon={AppsIcon} title={"Apps"} />
        <SideBarOption Icon={FileCopyIcon} title={"File browser"} />
        <SideBarOption Icon={ExpandLessIcon} title={"Show less"} />
        <hr />
        <SideBarOption Icon={ExpandMoreIcon} title={"Channels"} />
        <hr />
        <SideBarOption Icon={AddIcon} title={"Add Channel"} addChannelOption />
      </div>
    </Drawer>
  );
};

export default Presentation;
