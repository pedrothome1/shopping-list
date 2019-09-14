import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(() => ({
  itemInput: {
    width: '100%',
  },
  button: {
    width: '100%',
  },
}));

export default function ItemForm({ showDeleteButton, onAdd, onDelete }) {
  const classes = useStyles();

  const [itemName, setItemName] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    onAdd(itemName);
    setItemName('');
  }

  function handleItemNameChange(event) {
    setItemName(event.target.value);
  }

  function renderDeleteButton() {
    return (
      <Grid item xs={12}>
        <Button
          onClick={onDelete}
          className={classes.button}
          type="button"
          variant="contained"
          color="secondary"
        >
          Delete selected
        </Button>
      </Grid>
    );
  }

  function renderItemNameForm() {
    return (
      <>
        <Grid item xs={9}>
          <TextField
            onChange={handleItemNameChange}
            value={itemName}
            className={classes.itemInput}
            label="Type the item name"
          />
        </Grid>
        <Grid item xs={3}>
          <Button
            className={classes.button}
            type="submit"
            variant="contained"
            color="primary"
          >
            Add
          </Button>
        </Grid>
      </>
    );
  }

  const content = showDeleteButton
    ? renderDeleteButton()
    : renderItemNameForm();

  return (
    <form onSubmit={handleSubmit}>
      <Grid container alignItems="flex-end" spacing={2}>
        {content}
      </Grid>
    </form>
  );
}
