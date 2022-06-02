import { Button, AppBar, Toolbar, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

export function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" color="secondary" className={classes.title}>
            Yerko F.
          </Typography>
          <Button color="secondary">Acerca de mi</Button>
          <Button color="secondary">Estudios</Button>
          <Button color="secondary">Contáctame</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
