import React from "react";
//Material ui/core used
import { makeStyles } from "@material-ui/core/styles";
import { Container, Typography } from "@material-ui/core";

//Other Component Added
import CategoryCard from "../components/Home/CategoryCard";
// react router v6
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 10,
    backgroundImage: 'url("bg.jpg")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    // alignItems: "center",

    [theme.breakpoints.down("sm")]: {
      backgroundImage: 'url("bg_portrait.jpg")',
    },
  },

  heading: {
    fontWeight: "bold",
    marginTop: theme.spacing(5),

    [theme.breakpoints.down("sm")]: {
      fontSize: "3rem",
    },
  },

  cardContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
}));

const HomePage = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <div className={classes.root}>
      <Container>
        <Typography
          variant="h3"
          color="primary"
          align="center"
          className={classes.heading}
        >
          FASHION FOR EVERY YOU
        </Typography>

        <Typography variant="body1" color="primary" align="center">
          <span
            style={{
              color: "rgb(8, 75, 128)",
              fontSize: "22px",
              background: "white",
              padding: "5px",
              borderRadius: "6px 1px",
              
            }}
          >
            Shoes <span style={{ color: "#f4920f" }}>'R Us</span>
          </span>{" "}
          has been your companion in happiness, both big and small, for over 50
          years. Our roots are firmly grounded in Pakistan and with its people.
        </Typography>

        <div className={classes.cardContainer}>
          <CategoryCard
            name="Men"
            imageURL="https://static-01.daraz.pk/p/e02c79678fe916642ddf7790960f93d2.jpg"
            onClick={() => navigate("/men")}
          />
          <CategoryCard
            name="Woman"
            imageURL="https://static-01.daraz.pk/p/b4f349ebde6b06e4c9fd3ae73f6caa31.jpg"
            onClick={() => navigate("/women")}
          />
          <CategoryCard
            name="Kids"
            imageURL="https://cf.shopee.com.my/file/668abae14fbbab7a6ef371a1f5d63714"
            onClick={() => navigate("/kids")}
          />
        </div>
      </Container>
    </div>
  );
};

export default HomePage;