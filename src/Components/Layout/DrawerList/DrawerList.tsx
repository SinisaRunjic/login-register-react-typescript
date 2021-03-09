import React from 'react';

import {
  Divider,
  Icon,
  List as MUIList, 
  ListItem,
  ListItemIcon,
   ListItemText
} from '@material-ui/core';
import {NavLink} from 'react-router-dom';
import useStyles from './DrawerList.style'
import { IDrawerList } from './interface';
import listItems from './ListItems';
import { useTranslation } from 'react-i18next';
import SwitchLanguage from 'components/SwitchLanguage';


const DrawerList:React.FC<IDrawerList> = ({closeDrawerList}) => {
  const classes = useStyles();
  const { t } = useTranslation('translation');

  const LISTITEMS = listItems(t);


  return (
    <div>
      <div className={classes.toolbar}>
        <SwitchLanguage/>
      </div>
      <Divider />
      <MUIList>
        {LISTITEMS.map((listItem) => (
          <ListItem
            button
            component={NavLink}
            to={listItem.linkTo}
            activeClassName="Mui-selected"
            key={listItem.text}
            onClick={closeDrawerList}
          >
            <ListItemIcon>
              <Icon>{listItem.icon}</Icon>
            </ListItemIcon>
            <ListItemText primary={listItem.text} />
          </ListItem>
        ))}
      </MUIList>
    </div>
  )
}

export default DrawerList
