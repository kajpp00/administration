import React from 'react'
import execData from "../executive-admin-data.json";

export default function Mobile() {
    return (
      <div className="App container">
        {execData &&
          execData.map((x, i) => (
            <div
              aria-labelledby={x.name}
              className="profile-wrapper pb-5"
              id={`${x.id}-bio`}
              key={x.id}
              role="tabpanel"
            >
              <div className="row">
                <div className="col-4">
                  <img
                    alt={`${x.fullName} Headshot`}
                    className="img-fluid"
                    src={`https://www.tamuk.edu/administration/_images_administration/${x.image}`}
                  />
                </div>
                <div className="col-8">
                  <h2 className="first-name">{x.fullName}</h2>
                  <p className="title text-muted">{x.title}</p>
                  <a href={`mailto:${x.email}`}> {x.email}</a>
                </div>
              </div>
              {x.bio !== "" && (
                <details>
                  <summary>Bio</summary>
                  <div
                    className="bio"
                    dangerouslySetInnerHTML={{ __html: x.bio }}
                  />
                </details>
              )}
              <details>
                <summary>Oversees</summary>
                <div
                  className="oversees"
                  dangerouslySetInnerHTML={{ __html: x.oversees }}
                />
              </details>
            </div>
          ))}
      </div>
    );
}