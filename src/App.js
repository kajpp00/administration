import React from 'react'
import execData from "./executive-admin-data.json";


function App() {
  return (
    <div className="App container">
      {execData &&
        execData.map((x, i) => (
          <div
            aria-labelledby={x.name}
            className=""
            id={`${x.id}-bio`}
            key={x.id}
            role="tabpanel"
          >
            <img
              alt={`${x.fullName} Headshot`}
              src={`https://www.tamuk.edu/administration/_images_administration/${x.image}`}
            />
            <h2 className="first-name">
              {x.firstName} <span>{x.lastName}</span>
            </h2>
            <p className="title">{x.title}</p>
            <div className="bio" dangerouslySetInnerHTML={{ __html : x.bio }} />
            <div className="oversees" dangerouslySetInnerHTML={ {__html : x.oversees}} />
          </div>
        ))}
    </div>
  );
}

export default App;
