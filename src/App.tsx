import React from 'react';
import './App.css';
import styled from 'styled-components';
import URL from './images/1690381007943 (1).jpg'

function App() {
  return (
    <div className="App">
      <Card>
        
      <p>card</p>
        <Img>
        picture
        </Img>
        <p>Headline</p>
        <p>The simple text is nothing.</p>
      <Buttons>
      <StyledBtn>See more</StyledBtn>
      <StyledBtn2 color='white'>Save</StyledBtn2>
      </Buttons>
      </Card>
    </div>
  );
}

export default App;

const StyledBtn  = styled.button`
  display: flex;
  border: solid;
  background-color: blue;
  padding: 10px, 20px;
  border-radius: 5px;
  color: white;
  &:hover {
    background-color: #39d658;
  }
`
const StyledBtn2  = styled.button`
  display: flex;
  border: solid;
  background-color: ${props => props.color || "black"};
  padding: 10px, 20px;
  border-radius: 5px;
  color: blue;
  

`

const Card = styled.div`
  padding: 10px;
  margin-left: 500px;
  margin-top: 100px;
  display: column;  
  height: px;
  width: 200px;
  background-color: #c2bcbc;
  justify-content: center;
  align-items: center;

  ${StyledBtn} {
    cursor: pointer;
  }

  ${StyledBtn2} {
    cursor: pointer;
  }

`
const Img = styled.image`
  height: 200px;
  display: flex;
  border: solid;
  background-color: snow;
  padding: 10px, 20px;
  border-radius: 5px;
  justify-content: center;
  align-items: center;

`

const Buttons = styled.nav`
  display: flex;
  justify-content: center;
  width: 150px;
  gap: 10px;
`

