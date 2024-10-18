import React, { useState } from 'react';
import { BrowserRouter, Route, Routes, Link, useParams } from 'react-router-dom';
import './App.css';

function Navbar({ searchTerm, setSearchTerm, filter, setFilter }) {
  return (
    <nav className="navbar">
      <div className="logo">Student</div>
      <div className="searchbar">
        <input 
          type="text" 
          placeholder="Search" 
          value={searchTerm} 
          onChange={(e) => setSearchTerm(e.target.value)} 
        />
        <button>Search</button>
      </div>
      <div className="buttons">
        <button className="button" onClick={() => setFilter('all')}>All</button>
        <button className="button" onClick={() => setFilter('active')}>Active</button>
        <button className="button" onClick={() => setFilter('inactive')}>Inactive</button>
      </div>
    </nav>
  );
}

function Card({ card, index }) {
  return (
    <div className="card" style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly" }}>
      <div className="div1">
        <img style={{ height: "50px", borderRadius: "50%" }} src="data:image/jpeg;base64,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" alt="" />
      </div>
      <div className="div2">
        <div className="innerdiv1">
          <p><b style={{ fontSize: "20px" }}>{card.title}</b></p>
          <p>{card.description}</p>
        </div>
        <div className="innerdiv2">
          <p style={{ display: "flex", justifyContent: "start" }}>
            <span style={{ fontSize: "13px", marginRight: "10px" }}>Email: </span>
            <p style={{ fontFamily: "monospace" }}>{card.email}</p>
          </p>
        </div>
        <div className="innerdiv3" style={{ display: "flex" }}>
          <button className="btn btn-outline-dark" style={{ marginLeft: "auto", marginRight: "5px" }}>Block</button>
          <Link to={`/details/${index}`} style={{ textDecoration: 'none' }}>
            <button className="btn btn-dark" style={{ marginRight: "50px", marginLeft: "5px" }}>Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

function Details({ cards }) {
  const { index } = useParams();
  const card = cards[parseInt(index)];

  if (!card) {
    return <div>Card not found</div>;
  }

  return (
    <div className="details">
      <h1>{card.title}</h1>
      <p>{card.description}</p>
      <p>Email: {card.email}</p>
      <Link to="/">
        <button className="btn btn-primary">Back to Cards</button>
      </Link>
    </div>
  );
}

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');  
  const cards = [
    { title: "Abhishek Porwal", description: "This is card 1", email: "abhishek.porwal@email.com", status: "active" },
    { title: "Abhishek Mishra", description: "This is card 2", email: "abhishek.mishra@email.com", status: "active" },
    { title: "Harsh Triphathi", description: "This is card 3", email: "harsh.triphathi@email.com", status: "inactive" },
    { title: "Anuj Awasthi", description: "This is card 4", email: "anuj.awasthi@email.com", status: "inactive" },
    { title: "Ankur Shukla", description: "This is card 5", email: " ankur.shukla@email.com", status: "inactive" },
    { title: "Ankur Shukla", description: "This is card 5", email: " ankur.shukla@email.com", status: "inactive" },
     
  ];

  const filteredCards = cards.filter((card) => {
    if (filter === 'all') {
      return (
        card.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        card.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        card.email.toLowerCase().includes(searchTerm.toLowerCase())
      );
    } else if (filter === 'active') {
      return card.status === 'active' && (
        card.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        card.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        card.email.toLowerCase().includes(searchTerm.toLowerCase())
      );
    } else if (filter === 'inactive') {
      return card.status === 'inactive' && (
        card.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        card.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        card.email.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
  });

  return (
    <BrowserRouter>
      <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} filter={filter} setFilter={setFilter} />
      <div className="cards">
        {filteredCards.map((card, index) => (
          <Card key={index} card={card} index={index} />
        ))}
      </div>
    </BrowserRouter>
  );
}

export default App;