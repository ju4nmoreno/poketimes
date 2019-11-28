import React from 'react';
import NavBar from './components/Navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Post from './components/Post';

function App() {
  return (
    <BrowserRouter>
      <div>
        <span className="center">the end of the f***ing world</span>
        <NavBar className="center" />
        <Switch className="center">
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/Contact' component={Contact} />
          <Route path='/:post_id' component={Post} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
