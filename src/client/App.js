import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader';

// components
import Content from './components/Content';
import Navigation from './components/Navigation';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

// scenes
import Home from './scenes/Home';
import About from './scenes/About';

import './styles.scss';

class App extends React.Component {
    render() {
        return (
            <div>
                <Navigation/>
                <Content>
                    <Switch>
                        <Route exact path="/" render={props => <Home {...props} />}/>
                        <Route path="/about" render={props => <About {...props} /> }/>
                    </Switch>
                </Content>
                <Sidebar/>
                <Footer/>
            </div>
        );
    }
}

export default hot(module)(App);