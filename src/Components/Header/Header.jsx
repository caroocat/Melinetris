import React from "react";
import { AppBar, Toolbar, Typography, InputBase } from "@material-ui/core";
import { fade, makeStyles } from "@material-ui/core/styles";
import { getContent } from "../../store/actions/Content";
import { useDispatch, useSelector } from "react-redux";
import SearchIcon from "@material-ui/icons/Search";
import logoNubimetrics from "../../assets/img/nubimetrics.jpg";
import { LOGO_IMAGE } from "./styles";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.black, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.15),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "16vw",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));
export default function SearchAppBar() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [input, setInput] = React.useState("");
  const url = useSelector((state) => state.Content.CurrentUrl);
  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar style={{ backgroundColor: "#131B28", height: "8vh" }}>
          <LOGO_IMAGE
            onClick={() => {
              dispatch({ type: "GET_CONTENT", payload: "" });
            }}
            src={logoNubimetrics}
          />
          <Typography className={classes.title} variant="h5" noWrap>
            nubimetrics
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Buscar"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
              onChange={({ target }) => {
                setInput(target.value);
              }}
              onKeyPress={({ key }) => {
                key === "Enter" && dispatch(getContent(input, 0));
              }}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
