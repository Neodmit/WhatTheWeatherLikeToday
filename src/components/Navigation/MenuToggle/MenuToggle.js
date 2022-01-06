import classes from "./MenuToggle.module.scss";
import { Drawer, IconButton, List, ListItem , ListItemIcon, ListItemText} from '@material-ui/core'
import React, {Component} from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import menuItems from '../../../resources/menu/menuItems.json'
import logo from '../pics/logo.svg'

class MenuToggle extends Component{
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        };
      }

    render(){
        return( 
            <>
                <IconButton onClick={()=>this.setState({isOpen: true})}>
                    <MenuIcon/>
                </IconButton>
            
                <Drawer
                    classes={{paper: classes["Menu-open"]}}
                    anchor={'left'}
                    open = {this.state.isOpen}
                    onClose={()=>this.setState({isOpen: false})}
    
                >
                    <List>
                        <a href="/" className={classes['Menu-header']}>
                            <img src={logo} alt="Disaster" class="header-logo-pic"/>
                            <h1  className={classes['Menu-header-text']}>Dashboard Kit</h1>
                        </a>
                        {setMenuItems()}
                    </List>
            
                </Drawer>
                
            </>
        )
    }
    
}

function setMenuItems(){
    return(
        menuItems.map((menuItems) => 
        <ListItem divider={menuItems.divider} button  className={classes["Menu-items"]}>
            <ListItemIcon >
                <a href="/#3!">
                    <ListItemText classes={{primary: classes["Menu-item-text"]}}>{menuItems.name}</ListItemText>
                </a> 
            </ListItemIcon>
        </ListItem>)
    );
}


export default MenuToggle