import React from 'react';

import {
  Divider,
  List, 
  ListItem,
  ListItemIcon,
   ListItemText
} from '@material-ui/core';

import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import useStyles from './DrawerList.style'
import { IDrawerList } from './interface';


const DrawerList:React.FC<IDrawerList> = ({closeDrawerList}) => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        {['Dashboard', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text} onClick={closeDrawerList}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  )
}

export default DrawerList
