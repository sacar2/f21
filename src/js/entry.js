import '../css/master.scss';
import Head     from './Head';
import Foot     from './Foot';
import Login    from './Login';
import MainApps from './MainApps';
import Nav      from './Nav';
import React    from 'react';
import ReactDOM from 'react-dom';
import Navbar   from 'react-navbar';


ReactDOM.render(<Nav />, document.getElementsByTagName('nav')[0]);
ReactDOM.render(<Login />, document.getElementsByClassName('login')[0]);
ReactDOM.render(<Head />, document.getElementsByTagName('header')[0]);
ReactDOM.render(<MainApps />, document.getElementsByClassName('main')[0]);
ReactDOM.render(<Foot />, document.getElementsByTagName('footer')[0]);
