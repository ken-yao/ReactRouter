import React from 'react';
import ReactDOM from 'react-dom';

import RouterCom from './components/RouterCom';
import Menu from './components/Menu';
import Index from './pages/Index';
import About from './pages/About';
import Services from './pages/Services';
import News from './pages/News';
import NewsContent from './pages/NewsContent';
import Contact from './pages/Contact';

const app = document.getElementById('app');

ReactDOM.render(<RouterCom />, app);