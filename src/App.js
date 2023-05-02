import React, { useState } from 'react'
import './App.css'
import butcherPigImage from './assets/butcherPig.jpeg'

const App = () => {

  // ACTION ITEM: to make the development process easier there are some preassigned words in the input field, when you are ready for your full user experience delete the test words passed to useState and pass an empty string
  const [userInput, setUserInput] = useState("apple through queen squeal fry fluent")
  const [inputTranslated, setInputTranslated] = useState("")

  // ACTION ITEM: the "myPigLatinCodeHere" function is where you will put your logic to translate the sentence entered by the user into Pig Latin
  const myPigLatinCodeHere = () => {

    // NO MODIFICATION NEEDED: the variable "arrayOfUserInput" will contain the text input from the user split into an array of words
    const arrayOfUserInput = userInput.split(" ")
    console.log("arrayOfUserInput:", arrayOfUserInput)
    //takes user input and splits a string into an array of individual words: 
    //['apple', 'through', 'queen', 'squeal', 'fry', 'fluent']

    // NO MODIFICATION NEEDED: now that we have an array of words, we can map over the array and look at each word
    const translatedWordsArray = arrayOfUserInput.map(eachWord => {
      console.log("eachWord:", eachWord)
      //maps the arrayOfUserInput so we can iterate through one word at a time - first gives us apple, then through, then queen, etc. as an individual string

      // NO MODIFICATION NEEDED: this code will look at each word and identify the vowels
      const vowelsArray = eachWord.split("").filter(vowel => {
        //splits individual word string into individual word array and logs the values from the
        return (
          vowel === "a" || 
          vowel === "e" || 
          vowel === "i" || 
          vowel === "o" || 
          vowel === "u"
        )
      })
      console.log("vowelsArray:", vowelsArray)
      //takes the currently mapped word and returns an array of its vowels:
      //for apple, 

      // ACTION ITEM: your Pig Latin logic goes here!

    // Can type any word that begins with a vowel in the text input (e.g. apple)
    // Can hit the submit button
    // Can see the words that begin with a vowel translated to Pig Latin and rendered to the page (e.g. appleway)

    // Input: eachWord and vowelsArray variables
    // Output: words that start with vowels, with way attached to the end
    // Process: create a function that checks if the first letter is a vowel and adds "way" and using .join to put it back together into one word

      const vowelsFirst = () => {
        if (vowelsArray.includes(eachWord[0])){
          return eachWord + "way"
        } else {
          return eachWord
        }

          // if(vowelsArray.includes(char[0]))
          // return eachWord.join("") + "way"
      }
      
      const translatedWord = vowelsFirst()
      console.log("translatedWord:", translatedWord)

      return translatedWord

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