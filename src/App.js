import React, {Component} from 'react';
import MenuToggle from "./components/Navigation/MenuToggle/MenuToggle";

class App extends Component {

  state = {
    menu: false
  }
  
  toggleMenuHandler = () =>{
    this.setState({
      menu: !this.state.menu
    })
  }
  
  render() {
      return (
      <div className="App">
        <MenuToggle 
          onToggle = {this.toggleMenuHandler}
          isOpen = {this.state.menu}
        />
        
      </div>
    );
  }
}

export default App;
