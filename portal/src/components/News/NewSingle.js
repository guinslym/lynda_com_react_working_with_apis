import React,{Component} from 'react';

// export default class NewSingle extends Component {
//
//     render() {
//         return (
//             <div className="class-name">
//                 content
//             </div>
//         );
//     }
// }
//Stateless component
const NewSingle = ({item}) => (
  <li>
    <p>{item.title}</p>
  </li>
);

export default NewSingle;
