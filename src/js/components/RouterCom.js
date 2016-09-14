import React from "react";
import { Router, IndexRoute, Route } from 'react-router';

import Menu from './Menu';
import Index from '../pages/Index';
import About from '../pages/About';
import Services from '../pages/Services';
import News from '../pages/News';
import NewsContent from '../pages/NewsContent';
import Contact from '../pages/Contact';

export default class RouterCom extends React.Component {
	render(){
		return (
            <Router>
                <Route path="/" component={Menu}>
                    <IndexRoute component={Index} />
                    <Route path="about" component={About} />
                    <Route path="services" component={Services} />
                    <Route path="news" component={News} />
                    <Route component={NewsContent}>
                        <Route path="news/:id" component={NewsContent} />
                    </Route>
                    <Route path="contact" component={Contact} />
                </Route>
            </Router>
		);
	}
}