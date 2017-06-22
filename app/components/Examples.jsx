var React = require('react');
import { Link } from 'react-router-dom';

// var Examples = React.createClass({
//   render: function (){
//     return(
//       <h3>Examples Component</h3>
//     );
//   }
// });

var Examples = (props) => {
  return(
    <div>
      <h3 className="text-center">Examples!</h3>
      <p>here are a few examples to try out:</p>
      <ol>
        <li>
          <Link to="/?location=campinas">campinas, SP</Link>
        </li>
        <li>
          <Link to="/?location=Rio">Rio, Brasil</Link>
        </li>
      </ol>
    </div>

  );
};
module.exports = Examples;
