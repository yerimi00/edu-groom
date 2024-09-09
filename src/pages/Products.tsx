import { Container, Grid, Paper } from "@mui/material";
import { makeStyles, createStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles((theme: any) =>
  createStyles({
    root: {
      padding: theme.spacing(2),
    },
    paper: {
      height: "10vh",
      padding: theme.spacing(2),
    },
    paddingTop: {
      paddingTop: theme.spacing(7),
    },
  })
);

export default function Products() {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <Grid container justifyContent="center" spacing={2}>
        {[0, 1, 2].map((value) => (
          <Grid key={value} item xs={6} md={4}>
            <Paper className={classes.paper}>{value}</Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
