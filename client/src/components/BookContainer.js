import React, { Component } from "react";

import API from "../utils/API";

class BookContainer extends Component {
  state = {
    result: {},
    search: ""
  };

  componentDidMount() {
    this.searchBooks("The Divine Comedy");
  }

  searchBooks = query => {
    API.search(query)
      .then(res => this.setState({ result: res.data }))
      .catch(err => console.log(err));
  };

//   handleInputChange = event => {
//     const value = event.target.value;
//     const name = event.target.name;
//     this.setState({
//       [name]: value
//     });
//   };



  render() {

    return (
      <div>
       hello world
      </div>
    );
  }
}

export default BookContainer;
