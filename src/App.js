import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Form from './components/Form';
import AdminPage from './components/AdminPage';
import CardList from './components/CardList';
import LearnHubPage from "./components/LearnHubPage";
import './App.css';
const App=()=>{
    const [cards,setCards] =useState([]);
    const addCard = (cardData) => {
  const newCard = { ...cardData, id: Date.now() };
  setCards((prevCards) => {
    const updatedCards = [...prevCards, newCard];
    console.log(updatedCards); // Check the cards array here
    return updatedCards;
  });
};
    const deleteCard=(id)=> {
        const updatedCards=cards.filter((card)=>card.id!==id);
        setCards(updatedCards);
    };
    const placedCount=cards.filter((card)=>card.status==='placed').length;
    const unplacedCount=cards.filter((card)=>card.status==='unplaced').length;
    return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
             <div className="app">
            <Header />
            <Form addCard={addCard} />       
            <CardList cards={cards} deleteCard={deleteCard} />
        </div>
          }
        />
        <Route path="/learnhub" element={<LearnHubPage />} />
      <Route
          path="/admin"
          element={<AdminPage cards={cards} deleteCard={deleteCard} />} // Pass cards to AdminPage
        />
       </Routes>
    </Router>
  );
};
export default App;


