import React, { useState } from 'react'
import './App.css'
import butcherPigImage from './assets/butcherPig.jpeg'

// Cherry and Vance - KoiHops!

//Initial Approach - 
  // - talk through code to understand it
  // - functions in functions in functions

//Hardest thing - 
  // - formatting effectively
  // - knowing how our code was working with the code that was already present
  // - troubleshooting effectively
  
//Workflow
  // - breaks, persepective




const App = () => {

  // ACTION ITEM: to make the development process easier there are some preassigned words in the input field, when you are ready for your full user experience delete the test words passed to useState and pass an empty string
  const [userInput, setUserInput] = useState("apple through queen squeal fry fluent")
  const [inputTranslated, setInputTranslated] = useState("")

  // ACTION ITEM: the "myPigLatinCodeHere" function is where you will put your logic to translate the sentence entered by the user into Pig Latin
  const myPigLatinCodeHere = () => {

    // NO MODIFICATION NEEDED: the variable "arrayOfUserInput" will contain the text input from the user split into an array of words
    const arrayOfUserInput = userInput.split(" ")
    console.log("arrayOfUserInput:", arrayOfUserInput)
    // NO MODIFICATION NEEDED: now that we have an array of words, we can map over the array and look at each word
    const translatedWordsArray = arrayOfUserInput.map(eachWord => {
      console.log("eachWord:", eachWord)
      // NO MODIFICATION NEEDED: this code will look at each word and identify the vowels
      const vowelsArray = eachWord.split("").filter(vowel => {
        return (vowel === "a" || vowel === "e" || vowel === "i" || vowel === "o" || vowel === "u")
      })
      console.log("vowelsArray:", vowelsArray)

      // ACTION ITEM: your Pig Latin logic goes here!
    // Input: eachWord and vowelsArray variables
    // Output: words that start with vowels, with way attached to the end
    // Process: create a function that checks if the first letter is a vowel and adds "way" and using .join to put it back together into one word
      if (vowelsArray.includes(eachWord[0])){
        return eachWord + "way"
      }
      else if (eachWord.indexOf("qu") === 0){
        return eachWord.substring(2) + "quay"
      } else if (eachWord.indexOf("qu") === 1 
        || eachWord.charAt[0] === "s"){
        return eachWord.substring(eachWord.indexOf("qu")+2) + eachWord.slice(0, eachWord.indexOf("qu")) + "quay"
      } else if (eachWord.includes("y") && !eachWord.includes("a" || "e" || "i" || "o"|| "u")){
         return eachWord.slice(eachWord.indexOf("y")) + eachWord.slice(0, (eachWord.indexOf("y"))) + "ay"
       } else {
        return eachWord
      }     
          
      // ACTION ITEM: this return will be the output of your Pig Latin'd code
    }) 

    // NO MODIFICATION NEEDED: once the code has been modified it gets joined from an array back to a string
    const translatedWords = translatedWordsArray.join(" ")
    console.log("translatedWords:", translatedWords)

    // NO MODIFICATION NEEDED: this will update the inputTranslated variable in state
    setInputTranslated(translatedWords)
  }

  // ACTION ITEM: this method restarts the game by setting the original state, when you are ready for your full user experience delete the test words in setUserInput and pass an empty string
  const restartGame = () => {
    setUserInput("apple through queen squeal fry fluent")
    setInputTranslated("")
  }

  // NO MODIFICATION NEEDED: this method prevents React from refreshing the page unnecessarily
  const setUpPreventDefault = (e) => {
    e.preventDefault()
    myPigLatinCodeHere()
  }

  // NO MODIFICATION NEEDED: this method takes the value of the input and saves it in state
  const handleInput = (e) => {
    setUserInput(e.target.value)
  }

  return (
    <div className="page-container">
      <div className="body-container">
        <h1>Pig Latin Translator</h1>
        <img
          src={butcherPigImage}
          alt="pig with butcher cut names in pig latin"
          className="butcher-pig-image"
        />

        <div className="input-section">
          <h4>Enter phrase to be translated:</h4>
          <input
            type="text"
            className="user-input"
            onChange={handleInput}
            value={userInput}
          />
          <br />
          <button onClick={setUpPreventDefault}>Submit</button>
          <button onClick={restartGame}>Clear</button>
        </div>
        <p>{inputTranslated}</p>
      </div>
      <footer>&copy; Charlie 2023 | Coded by: Vance and Cherry</footer>
    </div>
  )
}

export default App