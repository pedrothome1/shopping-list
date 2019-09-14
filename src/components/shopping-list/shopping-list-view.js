import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ItemTable from './item-table';
import ItemForm from './item-form';

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  paper: {
    marginBottom: theme.spacing(2),
  },
}));

export default function ShoppingListView({
  items,
  selected,
  showDeleteButton,
  onItemQuantityChange,
  onItemsSelection,
  onAdd,
  onDelete,
}) {
  const classes = useStyles();

  useEffect(() => window.scrollTo(0, document.body.scrollHeight));

  return (
    <Container className={classes.container}>
      <Paper className={classes.paper}>
        <Toolbar>
          <Typography variant="h6">Shopping list</Typography>
        </Toolbar>

        <ItemTable
          items={items}
          selected={selected}
          onItemQuantityChange={onItemQuantityChange}
          onItemsSelection={onItemsSelection}
        />
      </Paper>

      <ItemForm
        showDeleteButton={showDeleteButton}
        onAdd={onAdd}
        onDelete={onDelete}
      />
    </Container>
  );
}
