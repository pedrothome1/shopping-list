import React from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import useStyles from './styles';

export default function MinusPlus({ value, onChange, disableLeftButton }) {
  const classes = useStyles();

  function handleMinusClick() {
    onChange(value - 1);
  }

  function handlePlusClick() {
    onChange(value + 1);
  }

  return (
    <Box component="span" className={classes.box}>
      <Button
        onClick={handleMinusClick}
        className={classes.buttonLeft}
        disabled={disableLeftButton}
        size="small"
        variant="contained"
        color="secondary"
      >
        <RemoveIcon fontSize="small" />
      </Button>
      <Box component="span" className={classes.middle}>
        {value}
      </Box>
      <Button
        onClick={handlePlusClick}
        className={classes.buttonRight}
        size="small"
        variant="contained"
        color="primary"
      >
        <AddIcon fontSize="small" />
      </Button>
    </Box>
  );
}
