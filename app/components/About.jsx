var React = require('react');

// var About = React.createClass({
//   render: function (){
//
//   }
// });
//Só da pra usar dessa forma abaixo pois o componente não gerencia nenhum state, caso contrario tem que usar o exemplo acima
var About = (props) => {
  return(
    <div>
      <h3 className="text-center">About!</h3>
      <p>
        Welcome to About page!
      </p>
    </div>
  );
};

module.exports = About;
