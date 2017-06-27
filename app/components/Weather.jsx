var React = require('react');
var queryString = require('query-string');
import {browserHistory} from 'react-router-dom';
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var OpenWeatherMap = require('OpenWeatherMap');
var ErrorModal = require('ErrorModal');


var Weather = React.createClass({
  getInitialState: function(){
    return{
      isLoading: false
    }
  },
  handleSearch: function(location){
    var that = this;

    this.setState({
      isLoading: true,
      errorMessage: undefined,
      location: undefined,
      temp: undefined
    });

    OpenWeatherMap.getTemp(location).then(function(temp){
      that.setState({
        location: location,
        temp: temp,
        isLoading: false
      });
    }, function(e){
      that.setState({
        isLoading: false,
        errorMessage: e.message
      });
    });
  },
  componentDidMount: function () {
    let locationObject = queryString.parse(this.props.location.search);
    // let location = locationObject.location
    // alert(locationObject.location);
    if (locationObject.location && locationObject.location.length > 0){
      this.handleSearch(locationObject.location);
      // window.location.hash = '#/';
      // browserHistory.push('/');
      browserHistory.push('/');
      // withRouter((history) => { history.push('/asdasdas')});
      alert('ok');
      // this.context.history.push('/')
    }
  },
  render: function (){
    var {isLoading, location, temp, errorMessage} = this.state;

    function renderMessage(){
      if(isLoading){
        return <h3 className="text-center">Fetching Weather...</h3>
      } else if(temp && location){
        return(
          <WeatherMessage location={location} temp={temp}/>
        );
      }
    }

    function renderError(){
      if(typeof errorMessage === 'string'){
        return(
          <ErrorModal message={errorMessage}/>
        );
      }
    }

    return(
      <div>
        <h3 className="text-center page-title">Get Weather</h3>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
        {renderError()}
      </div>
    );
  }
});

module.exports = Weather;
