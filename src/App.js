
import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, InputGroup, FormControl, Button, Row, Card} from 'react-bootstrap';
import { useState,useEffect } from 'react';

const CLIENT_ID = "2f90f1bdd0fc4312a0d5b93165df7cce";
const CLIENT_SECRET ="c8f74697e0c442a7b6c3553f90df7a23";
function App() {
  const [searchInput, setSearchInput] = useState("");
  const [accessToken, setAccessToken] = useState("");

  useEffect(() =>{
    //api Acess Token
    var authParameters = {
      method: 'POST',
      headers:{
        'Content-Type':'application/x-www-form-urlencoded'
      },
      body: 'grant_type=client_credentials&client_id=' +CLIENT_ID + '&client_secret=' +CLIENT_SECRET
    }
    fetch('https://accounts.spotify.com/api/token',authParameters)
    .then(result => result.json())
    .then(data =>setAccessToken(data.access_token))
  }, [])
  return (
    <div className="App">
      <Container>
        <InputGroup className="mb-3" size="lg">
        <FormControl
          placeholder="Search For Artist"
          type="input"
          onKeyDown={(event) => {
            if (event.key === "Enter") {
                console.log("Pressed Enter");
            }
        }}
        onChange={event => setSearchInput(event.target.value)}
        />
        <button class="btn btn-success" >
        Search
        </button>
        </InputGroup>
      </Container>
      <Container>
        <Row className="mx-2 row row-cols-4">
        <Card>
          <Card.Img src='#'/>
          <Card.Body>
            <Card.Title>Album Name</Card.Title>
          </Card.Body>
        </Card>
        
        </Row>
        
      </Container>
    </div>
  );
}

export default App;
