import React, { Component } from "react";
import Jumbotron from "./Jumbotron";
import Container from "./Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ResultContainer from "./ResultContainer";

import API from "../utils/API";

class BookContainer extends Component {
  state = {
    result: [],
    search: ""
  };

  componentDidMount() {
  }

  searchBooks = query => {
    API.search(query)
      .then(res => this.setState({ result: res.data.items
        .map(book => {
          return {
            title: book.volumeInfo.title,
            author: book.volumeInfo.authors,
            description: book.volumeInfo.description,
            image: book.volumeInfo.imageLinks.thumbnail,
            link: book.volumeInfo.canonicalVolumeLink
          }
        }) }))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.searchBooks(this.state.search);
  };

  render() {
    return (
     <div>
       <Jumbotron>
         <h1>(React) Google Books Search</h1>
         <h3>Search for and Save Books of Interest</h3>
        </Jumbotron>
        <Container>
         <Form>
         <h5>Book Search</h5>
         <Form.Label>Book</Form.Label>
         <Form.Control
          onChange={this.handleInputChange} 
          placeholder="Enter a book title"
          type="text"
          name="search"
          value={this.state.search}
         />
         <Button variant="primary" type="submit" onClick={this.handleFormSubmit}>Submit</Button>
         </Form>
        </Container>
        <ResultContainer
        result={this.state.result}>
        </ResultContainer>
   
     </div>
     
    );
  }
}

export default BookContainer;
