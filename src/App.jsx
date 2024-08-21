// import React, { Component } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

// export default class RandomNamePicker extends Component {
//   state = {
//     names: [], // Ismlar ro'yxati
//     selectedName: '', // Tanlangan ism
//     newName: '' // Yangi ism qo'shish uchun input qiymati
//   };

//   pickRandomName = () => {
//     const { names } = this.state;
//     const randomIndex = Math.floor(Math.random() * names.length);
//     const selectedName = names[randomIndex];
//     this.setState({ selectedName });
//   };

//   handleInputChange = (event) => {
//     this.setState({ newName: event.target.value });
//   };

//   addName = () => {
//     const { names, newName } = this.state;
//     if (newName) {
//       this.setState({
//         names: [...names, newName],
//         newName: '' // Inputni bo'shatish
//       });
//     }
//   };

//   deleteName = (index) => {
//     const { names } = this.state;
//     const updatedNames = names.filter((_, i) => i !== index);
//     this.setState({ names: updatedNames });
//   };

//   render() {
//     const { selectedName, newName, names } = this.state;

//     return (
//       <div className="text-center mt-5">
//         <h1 className="fs-3">Random Name Picker</h1>
//         <div className="mt-3">
//           <input
//             type="text"
//             value={newName}
//             onChange={this.handleInputChange}
//             placeholder="Enter a name"
//             className="form-control d-inline-block w-auto me-2"
//           />
//           <button
//             className="btn btn-success"
//             onClick={this.addName}
//           >
//             Add Name
//           </button>
//         </div>

//         {names.length > 0 && (
//           <ul className="list-group mt-3 ml-[510px]" >
//             {names.map((name, index) => (
//               <li key={index}  className="list-group-item col-md-4 offset-1 d-flex justify-content-between align-items-center">
//                 {name}
//                 <button
//                   className="btn btn-danger btn-sm"
//                   onClick={() => this.deleteName(index)}
//                 >
//                   Delete
//                 </button>
//               </li>
//             ))}
//           </ul>
//         )}

//         <button
//           className="btn btn-info mt-3"
//           onClick={this.pickRandomName}
//           disabled={names.length === 0}
//         >
//           Pick a Random Name
//         </button>

//         {selectedName && (
//           <h2 className="mt-3">Selected Name: {selectedName}</h2>
//         )}
//       </div>
//     );
//   }
// }

import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class RandomNamePicker extends Component {
  state = {
    names: [], // Ismlar ro'yxati
    selectedName: '', // Tanlangan ism
    newName: '' // Yangi ism qo'shish uchun input qiymati
  };

  pickRandomName = () => {
    const { names } = this.state;
    const randomIndex = Math.floor(Math.random() * names.length);
    const selectedName = names[randomIndex];
    this.setState({ selectedName });
  };

  handleInputChange = (event) => {
    this.setState({ newName: event.target.value });
  };

  addName = () => {
    const { names, newName } = this.state;
    if (newName) {
      this.setState({
        names: [...names, newName],
        newName: '' // Inputni bo'shatish
      });
    }
  };

  deleteName = (index) => {
    const { names } = this.state;
    const updatedNames = names.filter((_, i) => i !== index);
    this.setState({ names: updatedNames });
  };

  render() {
    const { selectedName, newName, names } = this.state;

    return (
      <div className="container mt-5">
        <h1 className="fs-3 text-center">Random Name Picker</h1>
        <div className="row justify-content-center mt-3">
          <div className="col-md-6 col-sm-10">
            <input
              type="text"
              value={newName}
              onChange={this.handleInputChange}
              placeholder="Enter a name"
              className="form-control mb-2"
            />
            <button
              className="btn btn-success w-100"
              onClick={this.addName}
            >
              Add Name
            </button>
          </div>
        </div>

        {names.length > 0 && (
          <ul className="list-group mt-3">
            {names.map((name, index) => (
              <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                {name}
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => this.deleteName(index)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}

        <div className="text-center mt-3">
          <button
            className="btn btn-info"
            onClick={this.pickRandomName}
            disabled={names.length === 0}
          >
            Pick a Random Name
          </button>
        </div>

        {selectedName && (
          <h2 className="mt-3 text-center">Selected Name: {selectedName}</h2>
        )}
      </div>
    );
  }
}
