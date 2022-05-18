import {
  makeStyles,
} from "@material-ui/core";
import Routes from "./routes/Routes";
import useAuth from "./hooks/useAuth";
import {Header} from "./layout/header";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  rightToolbar: {
    flexGrow: 1,
  },
  title: {
    marginRight: theme.spacing(2),
  },
}));

function App() {
  const classes = useStyles();
  const auth = useAuth();

  return (
    <div className={classes.root}>
      <Header classes={classes} auth={auth}/>
      <Routes />
    </div>
  );
}

export default App;
