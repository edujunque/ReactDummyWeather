var React = require('react');

// var About = React.createClass({
//   render: function (){
//
//   }
// });
//Só da pra usar dessa forma abaixo pois o componente não gerencia nenhum state, caso contrario tem que usar o exemplo acima
var About = (props) => {
  return(
    <h3>About Component</h3>
  );
};

module.exports = About;
