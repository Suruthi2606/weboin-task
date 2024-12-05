import React from 'react';

const AdminPage=({cards,deleteCard})=>{
  console.log(cards);
  if (cards.length === 0){
    return(
      <div className="admin-page">
        <h1>Admin Dashboard</h1>
        <p>No cards to display</p>
      </div>
    );
  }
  return(
    <div className="admin-page">
      <h1>Admin Dashboard</h1>
      <div className="card-container">
        {cards.map((card) => (
          <div key={card.id} className="card">
            <div className="card-header">
              <span>{card.name[0]}</span>
            </div>
            <div className="card-body">
              <p><strong>Name:</strong> {card.name}</p>
              <p><strong>Role:</strong> {card.role}</p>
              <p><strong>Email:</strong> {card.email}</p>
              <p><strong>Phone Number:</strong> {card.phone}</p>
              <p><strong>Course:</strong> {card.course}</p>
              <p><strong>Status:</strong> {card.status}</p>
            </div>
            <button className="delete-button" onClick={() => deleteCard(card.id)}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
export default AdminPage;
