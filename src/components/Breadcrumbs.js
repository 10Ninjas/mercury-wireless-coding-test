import React from 'react';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  breadcrumbs: {
    fontSize: '1em',
    marginBottom: '16px',
  }
});

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function Breadcrumb() {
  const classes = useStyles();
  return (
    <Breadcrumbs aria-label="breadcrumb" className={classes.breadcrumbs}>
      <Link color="inherit" href="/" onClick={handleClick}>
        Mercury Wireless
      </Link>
      <Link color="inherit" href="/getting-started/installation/" onClick={handleClick}>
        Customer Support
      </Link>
      <Link color="inherit" href="/getting-started/installation/" onClick={handleClick}>
        Tickets
      </Link>
      <Link
        color="textPrimary"
        href="/components/breadcrumbs/"
        onClick={handleClick}
        aria-current="page"
      >
        Ticket #118657
      </Link>
    </Breadcrumbs>
  );
}
