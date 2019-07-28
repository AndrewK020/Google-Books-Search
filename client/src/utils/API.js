import axios from "axios";
const BASEURL ="https://www.googleapis.com/books/v1/volumes?q=";
const APIKEY = "&key=" + process.env.REACT_APP_GOOGLE_BOOKS_API_KEY;
export default {

  search: function(query) {
    return axios.get(BASEURL + query + APIKEY);
  },
  getBooks: function() {
    return axios.get('/api/books');
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    const postData = {
      title: bookData.title,
      author: bookData.author,
      description: bookData.description,
      image: bookData.image,
      link: bookData.link
    }
    return axios.post("/api/books", postData);
  }
};
