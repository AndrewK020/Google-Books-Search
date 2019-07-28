import React, { Component } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import ResultContainer from "./ResultContainer";

import API from "../utils/API";

class BookContainer extends Component {
  state = {
    result: [],
  };

  getBooks = () => {
      API.getBooks().then(res => {
        this.setState({
            result: res.data
        });
      });
  }

  componentDidMount() {
      this.getBooks();
  }

 
  render() {
    return (
     <div>
         <Jumbotron>
             <h3>Saved Books</h3>
         </Jumbotron>
         <ResultContainer
            result={this.state.result}
            saved={true}
            />
     </div>
     
    );
  }
}

export default BookContainer;
