import { useState, useRef, useCallback } from "react";
import Button from "@mui/material/Button";
import Popper from "@mui/material/Popper";
import Paper from "@mui/material/Paper";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import styles from "./SelectedMenu.module.scss";

const BurgerMenu = () => {
  const [open, setOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const anchorRef = useRef<HTMLButtonElement | null>(null);
  const submenuRef = useRef<HTMLLIElement | null>(null);
  const closeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const submenuCloseTimeout = useRef<ReturnType<typeof setTimeout> | null>(
    null,
  );

  const clearCloseTimeout = useCallback(() => {
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current);
      closeTimeout.current = null;
    }
  }, []);

  const clearSubmenuCloseTimeout = useCallback(() => {
    if (submenuCloseTimeout.current) {
      clearTimeout(submenuCloseTimeout.current);
      submenuCloseTimeout.current = null;
    }
  }, []);

  const handleOpen = () => {
    clearCloseTimeout();
    setOpen(true);
  };

  const handleClose = () => {
    closeTimeout.current = setTimeout(() => {
      setOpen(false);
      setActiveCategory(null);
    }, 150);
  };

  const handleSubmenuOpen = (category: string) => {
    clearSubmenuCloseTimeout();
    setActiveCategory(category);
  };

  const handleSubmenuClose = () => {
    submenuCloseTimeout.current = setTimeout(() => {
      setActiveCategory(null);
    }, 200);
  };

  const handleSubmenuPaperEnter = () => {
    clearCloseTimeout();
    clearSubmenuCloseTimeout();
  };

  const categories: Record<string, string[]> = {
    "Computer & Laptop": [
      "All Laptops",
      "Gaming Laptops",
      "Business Laptops",
      "MacBooks",
      "Chromebooks",
      "Desktop PCs",
      "All-in-One PCs",
    ],
    "Computer Accessories": [
      "Keyboards",
      "Mice",
      "Monitors",
      "Webcams",
      "USB Hubs",
      "Laptop Bags",
      "Cooling Pads",
    ],
    SmartPhone: [
      "iPhone",
      "Samsung",
      "Xiaomi",
      "Realme",
      "Oppo",
      "Vivo",
      "OnePlus",
      "Huawei",
      "Infinix",
      "Tecno",
    ],
    Headphone: [
      "Wireless Headphones",
      "Wired Headphones",
      "Earbuds",
      "Gaming Headsets",
      "Noise Cancelling",
      "Sports Earphones",
    ],
    "Mobile Accessories": [
      "Phone Cases",
      "Screen Protectors",
      "Chargers",
      "Power Banks",
      "Phone Holders",
      "Cables",
    ],
    "Gaming Console": [
      "PlayStation 5",
      "Xbox Series X",
      "Nintendo Switch",
      "Gaming Controllers",
      "VR Headsets",
      "Gaming Accessories",
    ],
    "Camera & Photo": [
      "DSLR Cameras",
      "Mirrorless Cameras",
      "Action Cameras",
      "Camera Lenses",
      "Tripods",
      "Camera Bags",
    ],
    "TV & Home Appliances": [
      "Smart TVs",
      "OLED TVs",
      "Soundbars",
      "Projectors",
      "Streaming Devices",
      "TV Mounts",
    ],
    "Watches & Accessories": [
      "Smart Watches",
      "Apple Watch",
      "Samsung Watch",
      "Watch Bands",
      "Watch Chargers",
      "Fitness Trackers",
    ],
    "GPS & Navigation": [
      "Car GPS",
      "Handheld GPS",
      "GPS Trackers",
      "Dash Cams",
      "GPS Accessories",
    ],
    "Wearable Technology": [
      "Fitness Bands",
      "Smart Glasses",
      "Smart Rings",
      "Health Monitors",
      "Wearable Cameras",
    ],
  };

  return (
    <div
      onMouseLeave={handleClose}
      style={{ position: "relative", zIndex: 1300 }}
    >
      <Button
        ref={anchorRef}
        onMouseEnter={handleOpen}
        className={styles.button}
      >
        Categories
        <KeyboardArrowDownIcon sx={{ fontSize: 20, marginLeft: "5px" }} />
      </Button>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        placement="bottom-start"
        disablePortal
        modifiers={[{ name: "offset", options: { offset: [0, 4] } }]}
      >
        <Paper onMouseEnter={clearCloseTimeout} onMouseLeave={handleClose}>
          <MenuList>
            {Object.keys(categories).map((category, index) => (
              <div key={index}>
                <MenuItem
                  ref={activeCategory === category ? submenuRef : undefined}
                  onMouseEnter={() => handleSubmenuOpen(category)}
                  onMouseLeave={handleSubmenuClose}
                >
                  {category}
                </MenuItem>
              </div>
            ))}
          </MenuList>
        </Paper>
      </Popper>
      <Popper
        open={activeCategory !== null}
        anchorEl={submenuRef.current}
        placement="right-start"
        disablePortal
        modifiers={[{ name: "offset", options: { offset: [0, 0] } }]}
      >
        <Paper
          onMouseEnter={handleSubmenuPaperEnter}
          onMouseLeave={handleSubmenuClose}
        >
          <MenuList>
            {activeCategory &&
              categories[activeCategory].map((item, index) => (
                <div key={index}>
                  <MenuItem
                    onClick={() => {
                      setOpen(false);
                      setActiveCategory(null);
                    }}
                  >
                    {item}
                  </MenuItem>
                </div>
              ))}
          </MenuList>
        </Paper>
      </Popper>
    </div>
  );
};

export default BurgerMenu;
