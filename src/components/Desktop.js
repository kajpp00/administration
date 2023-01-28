import React from "react";
import execData from "../executive-admin-data.json";

export default function Desktop() {
  return (
    <div className="desktop container-fluid">
      <div className="row p-5">
        <div className="col-4">
          <div className="row">
              <h2 className="position-absolute" style={{zIndex:1,padding:'.5rem',marginTop: '-50px'}}>
                Bio
              </h2>
            <div className="col-12 mb-5 dt-bio">
              {execData.map((x, i) => (
                <div key={i}>
                  <div dangerouslySetInnerHTML={{ __html: x.bio }} />
                </div>
              ))}
            </div>

            <div className="col-12">
              <h2>
                Oversees
              </h2>
              {execData.map((x, i) => (
                <div key={i}>
                  <div dangerouslySetInnerHTML={{ __html: x.oversees }} />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="col-8">
          <div className="row">
            {execData.map((x, i) => (
              <div key={i} className="col-xl-3 col-lg-4 col-md-5 pb-4">
                <div className="card" >
                  <img
                    alt={x.name}
                    className="img-fluid"
                    src={`https://www.tamuk.edu/administration/_images_administration/${x.image}`}
                  />
                  <div className="card-body">
                    <div className="h5 card-title">{x.fullName}</div>
                    <div className="card-text">{x.title}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
