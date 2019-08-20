module.exports = function createPage(event) {
  var rules = event.rules.map(rule => (`<li>${rule}</li>`))
  return `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <link rel="stylesheet" href="../css/bootstrap.min.css" />
        <link rel="stylesheet" href="../css/event.css" />
        <script src="../js/jquery.min.js"></script>
    
        <title>Hackerz | ${event.name}</title>
      </head>
      <body>
        <!-- Login modal -->
    
        <div
          class="modal fade"
          tabindex="-1"
          role="dialog"
          id="login-register"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content" id="register">
              <div class="modal-body">
                <ul class="nav nav-tabs nav-fill">
                  <li class="nav-item">
                    <a
                      class="nav-link active show"
                      id="login-tab"
                      data-toggle="tab"
                      href="#login"
                      role="tab"
                      aria-controls="login"
                      aria-selected="true"
                      >Login</a
                    >
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      id="signup-tab"
                      data-toggle="tab"
                      href="#signup"
                      role="tab"
                      aria-controls="signup"
                      >Sign Up</a
                    >
                  </li>
                </ul>
                <div class="tab-content">
                  <div
                    class="tab-pane fade"
                    role="tabpanel"
                    id="signup"
                    aria-labelledby="signup-tab"
                  >
                    <!-- <p class="title text-center event-reg-header">
                        Let me hack the event
                      </p>
                      <hr /> -->
                    <!-- <input type="email" name="email" id="mail-id" /> -->
                    <form action="" class="text-center">
                      <div class="row align-items-center justify-content-center">
                        <div class="col-12 col-auto">
                          <div class="mat-input-outer">
                            <input
                              type="email"
                              id="register-email"
                              autocomplete="on"
                            />
                            <label for="register-email">Email</label>
                            <div class="border"></div>
                          </div>
                        </div>
                        <div class="col-12 col-auto">
                          <div class="mat-input-outer">
                            <input type="text" id="college" autocomplete="on" />
                            <label for="college">College</label>
                            <div class="border"></div>
                          </div>
                        </div>
                        <div class="col-12 col-auto">
                          <div class="mat-input-outer">
                            <input
                              type="number"
                              max="4"
                              id="year"
                              autocomplete="on"
                            />
                            <label for="year">Year</label>
                            <div class="border"></div>
                          </div>
                        </div>
                        <div class="col-12 col-auto">
                          <div class="mat-input-outer">
                            <input type="text" id="department" autocomplete="on" />
                            <label for="department">Department</label>
                            <div class="border"></div>
                          </div>
                        </div>
                        <div class="col-12 col-auto">
                          <div class="mat-input-outer">
                            <input type="tel" id="phone-num" autocomplete="on" />
                            <label for="phone-num">Phone number</label>
                            <div class="border"></div>
                          </div>
                        </div>
                        <div class="col-12 col-auto">
                          <div class="mat-input-outer">
                            <input
                              type="password"
                              id="register-password"
                              autocomplete="on"
                            />
                            <label for="register-password">Password</label>
                            <div class="border"></div>
                          </div>
                        </div>
    
                        <button class="bttn showw" type="submit">Register me</button>
                      </div>
                    </form>
                  </div>
                  <div
                    class="tab-pane fade active show"
                    role="tabpanel"
                    id="login"
                    aria-labelledby="login-tab"
                  >
                    <form action="" class="text-center">
                      <div class="row align-items-center justify-content-center">
                        <div class="col-12 col-auto">
                          <div class="mat-input-outer">
                            <input
                              type="email"
                              id="login-email"
                              autocomplete="on"
                            />
                            <label for="login-email">Email</label>
                            <div class="border"></div>
                          </div>
                        </div>
                        <div class="col-12 col-auto">
                          <div class="mat-input-outer">
                            <input
                              type="password"
                              id="login-password"
                              autocomplete="on"
                            />
                            <label for="register-password">Password</label>
                            <div class="border"></div>
                          </div>
                        </div>
                      </div>
    
                      <button class="bttn showw" type="submit">Login</button>
                    </form>
                  </div>
                </div>
                <div id="pbg2"></div>
              </div>
            </div>
          </div>
        </div>
    
        <!-- Navbar -->
        <section id="nav-bar">
          <nav class="navbar navbar-expand-lg navbar-dark justify-content-between">
            <a class="navbar-brand" href="#">
              <img
                src="images/NewHackerzCircle.png"
                height="85"
                class="d-inline-block align-top"
                alt=""
              />
              <span class="hackerz-brand" data-text="Hackerz">Hackerz</span>
            </a>
            <div class="navbar-nav">
              <a
                class="nav-item nav-link active"
                href="#login"
                id="login-btn"
                data-toggle="modal"
                data-target="#login-register"
              >
                Login
              </a>
              <a class="nav-item nav-link active" id="events-btn" href="events.html"
                >Events</a
              >
            </div>
          </nav>
        </section>
    
        <!-- Main -->
        <div class="container-fluid">
          <section class="container-fluid">
            <div
              class="row justify-content-center align-items-center"
              id="event-container"
            >
              <div class="col-md-9 col-12 col-auto" id="event-info">
                <p class="title text-center event-title">${event.name}</p>
                <hr />
                <div class="about-wrapper">
                  <p class="title rules">About the event</p>
                  <p class="title">
                    ${event.description}
                  </p>
                </div>
                <div class="rules-wrapper">
                  <p class="title rules">Rules</p>
                  <ul>
                    ${rules.join('')}
                  </ul>
                </div>
              </div>
              <div class="col-md-3 col-12 col-auto text-center" id="">
                <button
                  class="bttn title text-center event-reg-header"
                  data-toggle="modal"
                  data-target="#login-register"
                  style="width: 70%; height: 70px; cursor: pointer; font-size: 1.3rem;"
                >
                  Register
                </button>
              </div>
              <div id="particle-bg"></div>
            </div>
          </section>
        </div>
      </body>
    
      <script src="../js/bootstrap.min.js"></script>
      <script src="../js/particles.js"></script>
      <script>
        particlesJS.load("particle-bg", "../js/particles-config.json");
        particlesJS.load("pbg2", "../js/particles-config.json");
        document.getElementById("pbg2").onclick = function n(e) {
          $("#login-register").modal("hide");
        };
      </script>
    </html>
    `
}