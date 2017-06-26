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

var Nav = React.createClass({
  onSearch: function(e){
    e.preventDefault();
    alert('Não ta pronto ainda');
  },
  render: function(){
    return(
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">React Weather App</li>
            <li>
              <NavLink activeClassName="active" activeStyle={{fontWeight: 'bold'}} exact to="/">Get Weather</NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" activeStyle={{fontWeight: 'bold'}} to="/about">About</NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" activeStyle={{fontWeight: 'bold'}} to="/examples">Examples</NavLink>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <form onSubmit={this.onSearch}>
            <ul className="menu">
              <li>
                <input type="search" placeholder="Enter city name"/>
              </li>
              <li>
                <input type="submit" className="button" value="Get weather"/>
              </li>
            </ul>
          </form>
        </div>
      </div>
    );
  }
});

module.exports = Nav;
