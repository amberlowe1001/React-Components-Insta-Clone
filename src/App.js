/*
Start here and then work through the
PostsContainer components and the CommentSection Components.
Not all files need code added.
Look at each file to see where you need to pass props or add code
*/
import React,{components} from "react";
import logo from './logo.svg';
import dummyData from './dummy-data.js';
import PostsContainer from './components/PostContainer/PostContainer.js';
import SearchBar from './components'
import "./App.css";
// import the PostsPage and SearchBar and add them to the App
// import dummydata

class App extends Components {
  constructor(props){
    super(props);
    this.state ={
      dummyData,
    }
  }
  // set up state for the dummy data and pass to your PostsPage
  render(){
  return (
    <div className="App">
    <header className = 'App-header'>
    <SearchBar />
    </header>
    </div>
  );
};

export default App;
