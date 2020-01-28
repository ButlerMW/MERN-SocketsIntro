import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import Chat from './components/Chat';
import './App.css';

function App() {
  const [socket] = useState(io(":8000"));
  const [file, setFile] = useState(null);

  useEffect(() => {
    console.log("Is this running?");
    socket.on("Welcome", data => console.log(data));
  }, []);


  const onChangeHandler = e => {
    console.log(e.target.files[0]); 
    setFile(e.target.files[0]);
  }

  
  const fileUploadHandler = e => {

  }

  return (
    <div className="App">
      {/* <input type="file" onChange={onChangeHandler}/>
      <button onClick={fileUploadHandler}>Upload</button> */}
      <h1>Basic Bitch Socket Chat</h1>
      <Chat socket={socket} />
    </div>
  );
}

export default App;
