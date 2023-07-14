import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { Avatar, CardHeader, Container, makeStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(3),
  },
}));

function VehicleCard({title, headerIcon, width, children  }) {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth={width}>
      <Card className={classes.root} variant="outlined">
        <CardContent>{children}</CardContent>
      </Card>
    </Container>
  );
}

export default VehicleCard;