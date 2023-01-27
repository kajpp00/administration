import execData from "./executive-admin-data.json";

function App() {
  return (
    <div className="App s-wysiwygBlock wysiwygWhite">
      <div className="container">
        <div className="wysiwygBlock">
          <div className="tab-content" id="nav-bio-tab">
            {execData &&
              execData.map((x, i) => (
                <div
                  aria-labelledby={x.name}
                  className=""
                  id={`${x.id}-bio`}
                  key={x.id}
                  role="tabpanel"
                >
                  <h2 className="first-name">
                    {x.firstName} <span>{x.lastName}</span>
                  </h2>
                  <p className="">{x.title}</p>
                </div>
              ))}
          </div>
          <nav>
            <div class="nav nav-tabs" id="nav-tab" role="tablist">
              <a
                aria-controls="nav-executive-administration"
                aria-selected="true"
                class="nav-item nav-link active"
                data-toggle="tab"
                href="#nav-executive-administration"
                id="nav-executive-administration-tab"
                role="tab"
                target=""
              >
                Executive Administration
              </a>{" "}
              <a
                aria-controls="nav-university-administration"
                aria-selected="false"
                class="nav-item nav-link"
                data-toggle="tab"
                href="#nav-university-administration"
                id="nav-university-administration-tab"
                role="tab"
                target=""
              >
                University Administration
              </a>{" "}
              <a
                aria-controls="nav-org-charts"
                aria-selected="false"
                class="nav-item nav-link"
                data-toggle="tab"
                href="#nav-org-charts"
                id="nav-org-charts-tab"
                role="tab"
                target=""
              >
                Organizational Charts
              </a>
            </div>
          </nav>
          <div class="tab-content" id="nav-profile">
            <div
              aria-labelledby="nav-executive-administration-tab"
              class="tab-pane fade show active"
              id="nav-executive-administration"
              role="tabpanel"
            >
              <nav>
                <div
                  class="nav nav-tabs row px-2 border-0"
                  role="tablist"
                  id="executive-profiles"
                >
                  {execData &&
                    execData.map((x, i) => (
                      <button
                        className="nav-item nav-link col-xl-2 col-lg-3 col-md-4 col-6"
                        data-toggle="tab"
                        title={`view {x.fullName}'s Bio`}
                        id={x.id}
                        role="tab"
                        key={i}
                      >
                        test
                      </button>
                    ))}
                  {/* <button
                    class="nav-item nav-link col-xl-2 col-lg-3 col-md-4 col-6"
                    data-toggle="tab"
                    title="View Dr. James R. Hallmark's Bio"
                    id="james-hallmark"
                    role="tab"
                    href="#james-hallmark-bio"
                    aria-controls="james-hallmark-bio"
                    aria-selected="false"
                  >
                    <div class="card h-100 bg-light">
                      <img
                        alt="Dr. James R. Hallmark"
                        class="cropped-card-image"
                        src="https://www.tamuk.edu/administration/_images_administration/hallmark.jpg"
                      />
                      <div class="pt-3 mx-1">
                        <h4 class="h5">Dr. James R. Hallmark</h4>
                        <p>
                          <small>Interim President</small>
                        </p>
                      </div>
                    </div>
                  </button> */}
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
