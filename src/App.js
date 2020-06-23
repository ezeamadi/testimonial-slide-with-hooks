import React, { useState } from 'react'
import Characters from './characters'
import CharacterCard from './Components/CharacterCard'
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"
import Search from "./Components/Search"

import './App.css'

function App() {

  const [character, setCharacter] = useState({
    characterIndex: 0,
    currentCharacterHobbies: Characters[0].hobbies
  })

  const handlePrevClick = () => {
    let { characterIndex } = character;

    if (characterIndex === 0){
      characterIndex = Characters.length
    }

    setCharacter({
      characterIndex: characterIndex - 1,
      currentCharacterHobbies: Characters[characterIndex - 1].hobbies,
    })
  }

  const handleNextClick = () => {
    let { characterIndex } = character;
    
    if (characterIndex === Characters.length-1){
      characterIndex = -1
    }

    setCharacter({
      characterIndex: characterIndex + 1,
      currentCharacterHobbies: Characters[characterIndex + 1].hobbies,
    })
  }

  const setUpdate = (e) => {
    // const { currentCharacterHobbies: hobbies, characterIndex: i } = character;

    console.log(e.value)
    
    // const hobbies = event.target.value
    // console.log(hobbies)

    // hobbies.split(", ").map(hobby => console.log(hobby))
    // if (hobbies !== text) {
    //   console.log(text)
    // }

    // setCharacter({
    //     characterIndex: i,
    //     currentCharacterHobbies: text,
    //   })
  }

  return (
    <React.Fragment>
      <CharacterCard {...Characters[character.characterIndex]}
        prevClick = {() => handlePrevClick(character.characterIndex-1)}
        nextClick={() => handleNextClick(character.characterIndex + 1)} 
        setUpdate = {setUpdate}
      />

      <MuiThemeProvider>
        <div>
          <Search
            index={character.characterIndex}
            hobbies={character.currentCharacterHobbies}
          />
        </div>
      </MuiThemeProvider>
    </React.Fragment>
  )
}

export default App