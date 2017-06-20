var React = require('react');

// var CityMessage = React.createClass({
//   render: function(){
//     var {location,temp} = this.props;
//
//     return(
//       <div>
//         <p>it's it {temp} in {location}</p>
//       </div>
//     );
//   }
// });

// var WeatherMessage = (props) => {
//   var {location,temp} = props;
//   return(
//     <div>
//       <p>it's it {temp} in {location}</p>
//     </div>
//   );
// };

//da pra colocar {location,temp} na chamada da função pois já existe
//uma funcionalidade da propria linguagem que pega automaticamente
//props na chamada da função, então conseguimos usar o disruption
//para pegar os valores que queremos através do nome da propriedade
var WeatherMessage = ({location,temp}) => {
  return(
    <div>
      <p>it's it {temp} in {location}</p>
    </div>
  );
};

module.exports = WeatherMessage;
