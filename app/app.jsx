var React = require('react');
var ReactDOM = require('react-dom');
import { BrowserRouter, Route, Switch } from 'react-router-dom';

var Main = require('Main');
var Weather = require('Weather');
var About = require('About');
var Examples = require('Examples');

//load foundation
require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();

ReactDOM.render(
  <BrowserRouter>
    <Main>
      <Switch>
        <Route exact path="/" component={Weather}/>
        <Route path="/about" component={About}/>
        <Route path="/examples" component={Examples}/>
      </Switch>
    </Main>
  </BrowserRouter>,
  document.getElementById('app')
);
