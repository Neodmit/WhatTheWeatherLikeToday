import classes from "./MenuToggle.module.scss";
import { Drawer, IconButton, List, ListItem , ListItemIcon, ListItemText} from '@material-ui/core'
import React, {useState} from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import menuItems from '../../../resources/menu/menuItems.json'
import logo from '../pics/logo.svg'


const MenuToggle = () =>{

    const [isOpen, setOpen] = useState(false);
    return( 
        <>
            <IconButton onClick={()=>setOpen(true)}>
                <MenuIcon/>
            </IconButton>
           
            <Drawer
                 classes={{paper: classes["Menu-open"]}}
                anchor={'left'}
                open = {isOpen}
                onClose={()=>setOpen(false)}
  
            >
                <List>
                    <div className={classes['Menu-header']}>
                        <img src={logo} alt="Disaster" class="header-logo-pic"/>
                        <h1  className={classes['Menu-header-text']}>Dashboard Kit</h1>
                    </div>
                    {setMenuItems()}
                </List>
        
            </Drawer>
            
        </>
    )
    
}

function setMenuItems(){
    return(
        menuItems.map((menuItems) => 
        <ListItem divider={menuItems.divider} button  className={classes["Menu-items"]}>
            <ListItemIcon > 
                 <ListItemText classes={{primary: classes["Menu-item-text"]}}>{menuItems.name}</ListItemText>
            </ListItemIcon>
        </ListItem>)
    );
}


export default MenuToggle