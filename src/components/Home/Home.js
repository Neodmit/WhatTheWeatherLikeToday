import classes from "./Home.module.scss";
import { Drawer, IconButton, List, ListItem , ListItemIcon, ListItemText} from '@material-ui/core'
import React, {Component} from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import menuItems from '../../resources/menu/menuItems.json'
import logo from './pics/logo.svg'



class Home extends Component{
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        };

        (window.innerWidth < 479) ? this.variant="" : this.varinat = "permanent"
    }

    render(){
        return( 
            <>
                <IconButton onClick={()=>this.setState({isOpen: true})}> {/*onClick={()=>this.setState({isOpen: true})} */}
                    <MenuIcon/>
                </IconButton>
            
                <Drawer
                    classes={{paper: classes["Menu-open"]}}
                    variant = {this.varinat}
                    anchor={'left'}
                    open = {this.state.isOpen}
                    onClose={()=>this.setState({isOpen: false})}
                >
                    <List>
                        <a href="/" className={classes['Menu-header']}>
                            <img src={logo} alt="Disaster" className="header-logo-pic"/>
                            <span  className={classes['Menu-header-text']}>Dashboard Kit</span>
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
        menuItems.map((menuItems, index) => 
        <ListItem key={index} divider={menuItems.divider} button  className={classes["Menu-items"]}>
            <ListItemIcon>
                <a href={menuItems.link}>
                    <ListItemText classes={{primary: classes["Menu-item-text"]}}>{menuItems.name}</ListItemText>
                </a> 
            </ListItemIcon>
        </ListItem>)
    );
}


export default Home