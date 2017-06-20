var React = require('react');

var WeatherForm = React.createClass({
  onFormSubmit: function(e){
    //Previne que a tela dê um reload na hora que acontecer o submit do form
    e.preventDefault();

    var location = this.refs.location.value;

    if(location.length > 0){
      this.refs.location.value = '';
      this.props.onSearch(location);
    }
  },
  render: function(){
    return(
      <form onSubmit={this.onFormSubmit}>
        <div>
          <input type="text" ref="location" placeholder="Enter city name"/>
        </div>
        <div>
          <button>Get Weather</button>
        </div>
      </form>
    );
  }
})

module.exports = WeatherForm;
