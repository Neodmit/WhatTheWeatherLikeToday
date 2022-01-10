import React, {Component} from 'react';
import {Route, Routes} from 'react-router-dom'
import Layout from "./hoc/Layout.js"
import Home from "./components/Home/Home.js";
import Settings from "./components/Settings/Settings.js"

class App extends Component {
  render() {
      return (
        <Layout>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/settings" element={<Settings/>}/>
            <Route path="/editing" />
          </Routes>
        </Layout>
    );
  }
}

export default App;
