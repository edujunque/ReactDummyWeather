var React = require('react');
var {IndexLink, Link, NavLink, browserHistory, withRouter} = require('react-router-dom');

var Nav = React.createClass({
  onSearch: function(e){
    e.preventDefault();

    let location = this.refs.search.value;
    let encodedLocation = encodeURIComponent(location);

    if (location.length > 0){
      this.refs.search.value = '';
      this.props.history.push(`/?location=${encodedLocation}`);
    }
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
                <input ref="search" type="search" placeholder="Enter city name"/>
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

module.exports = withRouter(Nav);
