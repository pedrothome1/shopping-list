import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Grid from '@material-ui/core/Grid';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';

const useStyles = makeStyles(theme => ({
  title: {
    flex: '0 0 auto',
  },
  toolbar: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
  },
  paper: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  quantityTh: {
    width: '50px',
  },
  itemInput: {
    width: '100%',
  },
  button: {
    width: '100%',
  },
}));

let nextId = 1;

export default function ShoppingList() {
  const classes = useStyles();

  const [items, setItems] = useState([]);
  const [itemName, setItemName] = useState('');
  const [selected, setSelected] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();

    const updatedItems = items.concat({
      id: nextId++,
      name: itemName,
      quantity: 0,
    });

    setItems(updatedItems);
    setItemName('');
  }

  function handleDeleteSelectedClick() {
    const selectedCopy = selected.slice();
    setSelected([]);

    setItems(items.filter(item => !selectedCopy.includes(item.id)));
  }

  function handleCheckAll(event) {
    if (event.target.checked) {
      setSelected(items.map(item => item.id));
    } else {
      setSelected([]);
    }
  }

  function handleItemCheck(item, event) {
    if (event.target.checked) {
      setSelected(selected.slice().concat(item.id));
    } else {
      setSelected(selected.filter(id => id !== item.id));
    }
  }

  function handleItemQuantityChange(item, event) {
    item.quantity = event.target.value;
    setItems(items.slice());
  }

  function handleItemNameChange(event) {
    setItemName(event.target.value);
  }

  return (
    <Container>
      <Paper className={classes.paper}>
        <Toolbar>
          <div className={classes.title}>
            <Typography variant="h6">Shopping list</Typography>
          </div>
        </Toolbar>

        <Table>
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox
                  checked={items.length > 0 && selected.length === items.length}
                  onChange={handleCheckAll}
                />
              </TableCell>
              <TableCell>Item</TableCell>
              <TableCell className={classes.quantityTh}>Quantity</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map(item => (
              <TableRow key={item.id}>
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={selected.includes(item.id)}
                    onChange={event => handleItemCheck(item, event)}
                  />
                </TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell>
                  <TextField
                    type="number"
                    value={item.quantity}
                    onChange={event => handleItemQuantityChange(item, event)}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>

      <form onSubmit={handleSubmit}>
        <Grid container alignItems="flex-end" spacing={2}>
          {selected.length > 0 ? (
            <Grid item xs={12}>
              <Button
                onClick={handleDeleteSelectedClick}
                type="button"
                className={classes.button}
                variant="contained"
                color="secondary"
              >
                Delete selected
              </Button>
            </Grid>
          ) : (
            <>
              <Grid item xs={9}>
                <TextField
                  className={classes.itemInput}
                  value={itemName}
                  onChange={handleItemNameChange}
                  placeholder="Type the item name"
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
          )}
        </Grid>
      </form>
    </Container>
  );
}
