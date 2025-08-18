import { useState, useRef } from "react";
import Button from "@mui/material/Button";
import Popper from "@mui/material/Popper";
import Paper from "@mui/material/Paper";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import styles from "./SelectedMenu.module.scss";

const BurgerMenu = () => {
  const [open, setOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const anchorRef = useRef<HTMLButtonElement | null>(null);
  const submenuRef = useRef<HTMLLIElement | null>(null);
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = () => {
    if (anchorRef.current) {
      return;
    }
    setOpen(false);
    setSubmenuOpen(false);
  };

  const handleSubmenuToggle = () => {
    setSubmenuOpen((prev) => !prev);
  };

  const items = [
    "All",
    "iPhone",
    " Sansung",
    "Realme",
    "Xiaomi",
    "Oppo",
    "Vivo",
    "OnePlus",
    "Huawei",
    "Infinix",
    "Tecno",
  ];

  const items2 = [
    " Computer & Laptop",
    " Computer Accessories",
    " SmartPhone",
    "Headphone",
    "  Mobile Accessories",
    "  Gaming Console",
    " Camera & Photo",
    " TV & Homes Appliances",
    " Watchs & Accessories",
    " GPS & Navigation",
    " Warable Technology",
  ];

  return (
    <div>
      <Button ref={anchorRef} onClick={handleToggle} className={styles.button}>
        Categories
        <KeyboardArrowDownIcon sx={{ fontSize: 20, marginLeft: "5px" }} />
      </Button>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        placement="bottom-start"
        modifiers={[{ name: "offset", options: { offset: [0, 10] } }]}
      >
        <ClickAwayListener onClickAway={handleClose}>
          <Paper>
            <MenuList autoFocusItem={open}>
              {items2.map((item, index) => (
                <div key={index}>
                  <MenuItem ref={submenuRef} onClick={handleSubmenuToggle}>
                    {item}
                  </MenuItem>
                </div>
              ))}
            </MenuList>
          </Paper>
        </ClickAwayListener>
      </Popper>
      <Popper
        open={submenuOpen}
        anchorEl={submenuRef.current}
        placement="right-start"
        modifiers={[{ name: "offset", options: { offset: [0, 0] } }]}
      >
        <Paper>
          <MenuList>
            {items.map((item, index) => (
              <div key={index}>
                <MenuItem onClick={handleClose}>{item} </MenuItem>
              </div>
            ))}
          </MenuList>
        </Paper>
      </Popper>
    </div>
  );
};

export default BurgerMenu;
