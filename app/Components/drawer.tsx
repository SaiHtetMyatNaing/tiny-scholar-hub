"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import {  DrawRounded } from "@mui/icons-material";
import { useRouter } from "next/navigation";
import { useSideBarStore } from "../store/useSideBarStore";
import MainIcon from "@/public/icons/Logo";

export default function LeftDrawer() {
  const [open, setOpen] = React.useState(false);
  const toggleWhiteBoard = useSideBarStore((state) => state.toggleWhiteBoard);
  const router = useRouter();
  const items = [
    {
      id: 1,
      title: "Whiteboard",
      handleClick: toggleWhiteBoard,
      icon: <DrawRounded />,
    },
  ];

  const pages = [
    { id: 1, title: "Home", path: "/", icon: <DrawRounded />  },
    { id: 2, title: "Workbook", path: "/workbook", icon: <DrawRounded /> },
    { id: 3, title: "Flashcards", path: "/flashcards", icon: <DrawRounded /> },
    {
      id: 3,
      title: "Lesson Plan",
      path: "/lesson-plan",
      icon: <DrawRounded />,
    },
    {
      id: 4,
      title: "Admin Dashboard",
      path: "/admin-dashboard",
      icon: <DrawRounded />,
    },
    {
      id: 5,
      title: "Story Quest",
      path: "/stories",
      icon: <DrawRounded />,
    },
  ];

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <Box>
        {" "}
        <List>
          {pages.map((page, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton
                onClick={() => {
                  router.push(page.path);
                }}
              >
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={page.title} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {items.map((item) => (
            <ListItem
              key={item.id}
              className="flex items-center"
              disablePadding
            >
              <ListItemButton onClick={item.handleClick}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.title} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );

  return (
    <div className="flex cursor-pointer">

      <Box className='mb-3 w-6 h-6 overflow-hidden' onClick={toggleDrawer(true)}>
          <MainIcon fill="black"/>
      </Box>  
      <Drawer className="mt-10" open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
