import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles(() => ({
  quantityTh: {
    width: '50px',
  },
}));

export default function ItemTable({
  items,
  selected,
  onItemQuantityChange,
  onItemsSelection,
}) {
  const classes = useStyles();

  function handleHeadCheckboxChange(event) {
    if (event.target.checked) {
      onItemsSelection(items.map(item => item.id));
    } else {
      onItemsSelection([]);
    }
  }

  function handleItemCheckboxChange(item, event) {
    if (event.target.checked) {
      onItemsSelection(selected.concat(item.id));
    } else {
      onItemsSelection(selected.filter(id => id !== item.id));
    }
  }

  function handleItemQuantityChange(item, event) {
    onItemQuantityChange(item, event.target.value);
  }

  function renderRows() {
    if (items.length === 0) {
      return (
        <TableRow>
          <TableCell colSpan={3}>There are no items yet.</TableCell>
        </TableRow>
      );
    }

    return items.map(item => (
      <TableRow key={item.id}>
        <TableCell padding="checkbox">
          <Checkbox
            checked={selected.includes(item.id)}
            onChange={event => handleItemCheckboxChange(item, event)}
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
    ));
  }

  const headCheckbox = {
    disabled: items.length < 2,
    checked: items.length > 1 && selected.length === items.length,
  };

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell padding="checkbox">
            <Checkbox
              disabled={headCheckbox.disabled}
              checked={headCheckbox.checked}
              onChange={handleHeadCheckboxChange}
            />
          </TableCell>
          <TableCell>Item</TableCell>
          <TableCell className={classes.quantityTh}>Quantity</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>{renderRows()}</TableBody>
    </Table>
  );
}
