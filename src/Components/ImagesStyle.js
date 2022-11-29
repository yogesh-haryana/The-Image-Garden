import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles({
  imgHolder: {
    height: "165px",
    width: "220px",
    backgroundSize: "cover",
    overflow: "hidden",
  },
  picture: {
    height: "165px",
    width: "220px",
    transition: ".7s",
    "&:hover": {
      transform: "scale(1.2)",
    },
  },
});

export default useStyle;
