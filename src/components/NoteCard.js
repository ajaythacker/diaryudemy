import React from 'react';

// const NoteCard = (props) => {
//     return (
//         <div className='jumbotron'>
//             <div>{props.children}</div>
//         </div>
//     );
// };

//or use object desctructuring to get children from props
const NoteCard = ({ children }) => {
    return (
        <div className='jumbotron'>
            <div>{children}</div>
        </div>
    );
};

export default NoteCard;

//equivalent class component
// export default class NoteCard extends Component {
//     render() {
//         return (
//             <div className='jumbotron'>
//                 <div>{this.props.children}</div>
//             </div>
//         );
//     }
// }
