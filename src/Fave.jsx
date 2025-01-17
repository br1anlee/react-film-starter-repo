// import React, { Component } from "react";

// class Fave extends Component {
//   state = {
//     isFave: false
//   }
//     handleClick = (e) => {
//         e.stopPropagation()
//         // console.log('handling fave click!')
//         this.setState((prevState)=>{ return {isFave: !prevState.isFave} })
//       }
//   render() {
//     return (
//       <div onClick={this.handleClick} className={`film-row-fave ${this.state.isFave ? "remove_from_queue" : "add_to_queue"}`}>
//         <p className="material-icons">add_to_queue</p>
//       </div>
//     );
//   }
// }

// export default Fave;
export default function Fave({onFaveToggle, isFave}){
    const handleClick = (e) => {
        e.stopPropagation()
        console.log('handling the click')
        onFaveToggle()
    }
    const action =  isFave?'remove_from_queue':'add_to_queue'
    return (

        <div onClick={handleClick} className={`film-row-fave ${action}`}>
            <p className="material-icons">add_to_queue</p>
        </div>
    )
} 