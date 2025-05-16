import React, { useState } from 'react';
import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  TextField,
  Box,
  Divider,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

export const MobileNavigation = () => {
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleDrawer = (state: boolean) => () => {
    setOpen(state);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  return (
    <>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={toggleDrawer(true)}
        sx={{ display: { xs: 'block', md: 'none' } }}
      >
        <MenuIcon />
      </IconButton>

      <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 250, p: 2 }}>
          <TextField
            fullWidth
            label="Поиск"
            variant="outlined"
            value={searchQuery}
            onChange={handleSearchChange}
          />

          <Divider sx={{ my: 2 }} />

          <List>
            {['Главная', 'Каталог', 'Контакты', 'О нас'].map(text => (
              <ListItemButton key={text} onClick={toggleDrawer(false)}>
                <ListItemText primary={text} />
              </ListItemButton>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};
