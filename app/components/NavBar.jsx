var React = require('react');
var {IndexLink, Link, NavLink} = require('react-router-dom');

// var Nav = React.createClass({
//   render: function (){
//     return(
//       <div>
//         <h2>NavBar Component</h2>
//         <NavLink activeClassName="active" activeStyle={{fontWeight: 'bold'}} exact to="/">Get Weather</NavLink>
//         <NavLink activeClassName="active" activeStyle={{fontWeight: 'bold'}} to="/about">About</NavLink>
//         <NavLink activeClassName="active" activeStyle={{fontWeight: 'bold'}} to="/examples">Examples</NavLink>
//       </div>
//     );
//   }
// });

var Nav = (props) => {
  return(
    <div>
      <h2>NavBar Component</h2>
      <NavLink activeClassName="active" activeStyle={{fontWeight: 'bold'}} exact to="/">Get Weather</NavLink>
      <NavLink activeClassName="active" activeStyle={{fontWeight: 'bold'}} to="/about">About</NavLink>
      <NavLink activeClassName="active" activeStyle={{fontWeight: 'bold'}} to="/examples">Examples</NavLink>
    </div>
  );
};

module.exports = Nav;
