import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import useStyles from './Layout.style';
import { ILayout } from './interface';
import DrawerList from './DrawerList';
import { Grid, Link as MUILink } from '@material-ui/core';

const ResponsiveDrawer: React.FC<ILayout> = (props) => {
  const { window } = props;
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const closeDrawer = () => {
    setMobileOpen(false)
  }

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.centerToolbarText}>
          <Grid
            container
          >
            <Grid item xs={2} >
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                className={classes.menuButton}
              >
                <MenuIcon />
              </IconButton>
            </Grid>
            <Grid item xs ={8}>
              <div className ={classes.centerToolbarText}>
            <Typography variant="h5" noWrap>
              Just for practice
          </Typography>
          </div>
          </Grid>
            <Grid item xs={2}>
            <div className ={classes.centerToolbarText}>
              <MUILink href='https://github.com/SinisaRunjic/login-register-react-typescript'rel="noopener noreferrer" target="_blank" color='textSecondary'>
              <Typography variant="h6" noWrap>
              Git repo
          </Typography>
              </MUILink>
              </div>
            </Grid>
            </Grid>
        </Toolbar>
      </AppBar>
        <nav className={classes.drawer} aria-label="mailbox folders">
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Hidden smUp implementation="css">
            <Drawer
              container={container}
              variant="temporary"
              anchor={'left'}
              open={mobileOpen}
              onClose={handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
            >
              <DrawerList closeDrawerList={closeDrawer} />
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper,
              }}
              variant="permanent"
              open
            >
              <DrawerList closeDrawerList={closeDrawer} />
            </Drawer>
          </Hidden>
        </nav>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          {props.children}
        </main>
    </div>
  );
}

export default ResponsiveDrawer