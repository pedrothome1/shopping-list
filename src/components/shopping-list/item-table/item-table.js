import React from 'react';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Checkbox from '@material-ui/core/Checkbox';
import Box from '@material-ui/core/Box';
import useStyles from './styles';
import MinusPlus from '../../minus-plus';

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

  function handleItemQuantityChange(item, value) {
    onItemQuantityChange(item, value);
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
        <TableCell className={classes.nameTd}>{item.name}</TableCell>
        <TableCell className={classes.quantityTd}>
          <Box className={classes.minusPlusCellContainer}>
            <MinusPlus
              value={item.quantity}
              onChange={value => handleItemQuantityChange(item, value)}
              disableLeftButton={item.quantity === 1}
            />
          </Box>
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
