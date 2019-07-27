import axios from "axios";
const BASEURL ="https://www.googleapis.com/books/v1/volumes?q=";
const APIKEY = "&key=" + process.env.REACT_APP_GOOGLE_BOOKS_API_KEY;
export default {

  search: function(query) {
    return axios.get(BASEURL + query + APIKEY);
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
    console.log(postData);
    return axios.post("/api/books", postData);
  }
};
