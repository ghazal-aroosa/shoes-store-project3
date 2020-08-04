import React from "react";

// Material ui/core used
import { makeStyles } from "@material-ui/core/styles";
import {Card, CardMedia} from "@material-ui/core";




const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    margin: theme.spacing(2),
    borderRadius: "8px",

    "&:hover": {
      cursor: "pointer",
    },
  },
  media: {
    height: 320,
  },



  name: {
    textAlign: "center",
  },
}));

const CategoryCard = ({ name, imageURL, onClick }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root} onClick={onClick}>
      <CardMedia className={classes.media} image={imageURL} title={name} />
    </Card>
  );
};

export default CategoryCard;