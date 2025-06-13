import Typography from '@mui/material/Typography';
import Popper from '@mui/material/Popper';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import {
  usePopupState,
  bindHover,
  bindPopper,
} from 'material-ui-popup-state/hooks';
import styles from './SelectedMenu.module.scss';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const SelectedMenu = () => {
  const popupState = usePopupState({
    variant: 'popper',
    popupId: 'demoPopper',
  });

  return (
    <div className={styles.main}>
      <Button className={styles.button} {...bindHover(popupState)}>
        Categories
        <KeyboardArrowDownIcon sx={{ fontSize: 20, marginLeft: '5px' }} />
      </Button>
      <Popper
        className={styles.popper}
        {...bindPopper(popupState)}
        placement="bottom"
      >
        <Paper>
          <Typography style={{ margin: 10 }}>
            The content of the Popper.
          </Typography>
        </Paper>
      </Popper>
    </div>
  );
};

export default SelectedMenu;
