$( document ).ready(function() {
  // AOS JS Initialization
  AOS.init();

  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;

  if (screenWidth > 1200) {
    $('.mobile').hide();
  } else {
    $('.web').hide();
  }

  function myFunction() {
    if ($('#myTopnav').hasClass('topnav') && $('#myTopnav').hasClass('responsive')) {
      $('#myTopnav').removeClass('responsive');
    } else {
      $('#myTopnav').addClass('responsive');
    }
  }

  function email() {
    location.href = "https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSBptCNkzXPGKQFhFQflhqSTFvRPLDPfnfkrRTJscwSZgRdNDhKwPHhSdVjJPrbcxhzQZTlW";
  }
  
  // Linkedin button
  function linked() {
    location.href = "https://www.linkedin.com/in/fikri-dean-radityo-23bb3621a/";
  }
  
  // Github button
  function github() {
    location.href = "https://github.com/Rianadi";
  }
  
  // Freecodecamp button
  function freecodecamp() {
    location.href = "https://www.freecodecamp.org/fikridean";
  }

  $(document).on('click', 'input[id^="icon"]', function() {
    myFunction();
  });

  $(document).on('click', 'input[id^="email"]', function() {
    email();
  });

  $(document).on('click', 'input[id^="linked"]', function() {
    linked();
  });

  $(document).on('click', 'input[id^="github"]', function() {
    github();
  });

  $(document).on('click', 'input[id^="freecodecamp"]', function() {
    freecodecamp();
  });

  $(document).on('click', 'button[id^="cerLeft"]', function() {
    const numChange = 200;
    let numLeft = $(".card-web").scrollLeft() - numChange;
    $('.certificate-web').animate({scrollLeft: numLeft}, 300);
  });

  $(document).on('click', 'button[id^="cerRight"]', function() {
    const numChange = 200;
    let numLeft = $(".card-web").scrollLeft() + numChange;
    $('.certificate-web').animate({scrollLeft: numLeft}, 300);
  });

  $(document).on('click', 'button[id^="proLeft"]', function() {
    const numChange = 200;
    let numLeft = $(".card-web").scrollLeft() - numChange;
    $('.project-web').animate({scrollLeft: numLeft}, 300);
  });

  $(document).on('click', 'button[id^="proRight"]', function() {
    const numChange = 200;
    let numLeft = $(".card-web").scrollLeft() + numChange;
    $('.project-web').animate({scrollLeft: numLeft}, 300);
  });

  $(document).on('mouseenter', 'h5[id^="footer-text"]', function(){
    $(this).css("color", "#FF5403");
  });

  $(document).on('mouseleave', 'h5[id^="footer-text"]', function(){
    $(this).css("color", "#FFCA03");
  });

  $(document).on('click', 'h1[id^="sidebar-icon"]', function(){
    if ($(this).hasClass('hide')) {
      $(this).removeClass('hide');
      $('.sidebar').css({
        'width': '20%',
        'transition': '300ms'
      });
      $('.main').css({
        'width': '80%',
        'transition': '300ms'
      });
      $(this).css({
        'text-align': 'left',
        'transition': '300ms'
      });
      $('.nav-link').show();
      $('#footer-text').show();
      $(this).html(`<i class="fa-solid fa-circle-xmark"></i>`);
    } else {
      $(this).addClass('hide');
      $('.sidebar').css({
        'width': '5%',
        'transition': '300ms'
      });
      $('.main').css({
        'width': '95%',
        'transition': '300ms'
      })
      $(this).css({
        'text-align': 'center',
        'transition': '300ms'
      });
      $('.nav-link').hide();
      $('#footer-text').hide();
      $(this).html(`<i class="fa fa-bars"></i>`);
    }
  });

  $('.nav ul li a').on({
    click: function() {
      $('nav ul .active').removeClass('active');
      $(this).addClass('active');

      if ($(this).hasClass('contact-value')) {
        $('.main').html(`<main class='contact-value' id="contact" data-aos="zoom-in">
                          <div class="row">
                            <div class='col-12 col-s-12'>
                              <h1><a href="javascript:;">Fikri Dean Radityo</a></h1>
                              <h2><a href="javascript:;" class="job">Web Developer</a></h2>
                              <h3><a href="javascript:;">rianadi.github.io</a></h3>
                            </div>
                          </div>
                          <div class="row btn">
                            <div class="col-3 col-s-12">
                              <input type="button" formtarget="_blank" class='email' value="Email" id="email">
                            </div>
                            <div class="col-3 col-s-12">
                              <input type="button" formtarget="_blank" class='linked' value="LinkedIn" id="linked">
                            </div>
                            <div class="col-3 col-s-12">
                              <input type="button" formtarget="_blank" class='github' value="Github" id="github">
                            </div>
                            <div class="col-3 col-s-12">
                              <input type="button" formtarget="_blank" class='freecodecamp' value="FreeCodeCamp" id="freecodecamp">
                            </div>
                          </div>
                        </main>`);
      } else if ($(this).hasClass('personal')) {
        $('.main').html(`<div data-aos="zoom-in">
                          <div class="row intro" id="intro">

                          <div class="col-6 col-s-12 img">
                            <img src="img/formal1000.png" alt="FIKRI DEAN RADITYO">
                          </div>
                        
                          <div class="col-6 col-s-12 diri">
                            <h1><a href="javascript:;">Fikri Dean Radityo</a></h1>
                            <h3><a href="javascript:;">18 December 2002</a></h3>
                          </div>
                        </div>

                        <div class="row univ">
                          <div class="col-6 col-s-12">
                            <div class="img">
                              <a href="https://www.uinjkt.ac.id/" target="_blank" title="click to go to uin official website">
                                <img src="img/uin.png" alt="Universitas Islam Negeri Syarif Hidayatullah Jakarta">
                              </a>
                            </div>
                          </div>

                          <div class="col-6 col-s-12">
                            <div class="profile">
                              <h1><a href="https://www.uinjkt.ac.id/" target="_blank" title="click to go to uin official website">Universitas Islam Negeri Syarif Hidayatullah Jakarta</a></h1>
                              <h3><a href="javascript:;">College Student</a></h3>
                            </div>
                          </div>
                        </div>
                      </div>`);
      } else if ($(this).hasClass('certificate')) {
          $('.main').html(`
                          <div class="row button btn-certificate" data-aos="fade-up">
                            <div class="col-6 col-s-12">
                              <button class="button" id="cerLeft">
                                <i class="fa-solid fa-arrow-left"></i> Left 
                              </button>
                            </div>

                            <div class="col-6 col-s-12">
                              <button class="button" id="cerRight">
                                Right <i class="fa-solid fa-arrow-right"></i>
                              </button>
                            </div>
                          </div>
                          <div class="row card-web certificate-web" id="certificate-web" data-aos="zoom-in">
                            <div class="col-12 col-s-12">
                              <div class="card-list first">
                                <a href="https://www.freecodecamp.org/certification/fikridean/responsive-web-design" target="_blank"><img src='./img/certificate responsive web.png' alt="Responsive Web Design" /></a>
                                <div class="card-info">
                                  <p class="rating"><span class="star"><i class="fa-solid fa-star"></i></span> FreeCodeCamp</span></p>
                                  <p class="info">Responsive Web Design</p>
                                  <p class="date"><span>Issued</span> • November 2nd, 2021</p>
                                </div>
                              </div>
                              <div class="card-list">
                                <img src='./img/JF certificate.png' alt="Java Fundamentals" />
                                <div class="card-info">
                                  <p class="rating"><span class="star"><i class="fa-solid fa-star"></i></span> Oracle Academy</span></p>
                                  <p class="info">Java Fundamentals</p>
                                  <p class="date"><span>Issued</span> • December 26th, 2021</p>
                                </div>
                              </div>
                              <div class="card-list">
                                <a href="https://www.freecodecamp.org/certification/fikridean/javascript-algorithms-and-data-structures" target="_blank"><img src='./img/JavaScript Algorithms and Data Structures Certificate.png' alt="JavaScript Algorithms and Data Structures" /></a>
                                <div class="card-info">
                                  <p class="rating"><span class="star"><i class="fa-solid fa-star"></i></span> FreeCodeCamp</span></p>
                                  <p class="info">JavaScript Algorithms and Data Structures</p>
                                  <p class="date"><span>Issued</span> • January 18th, 2022</p>
                                </div>
                              </div>
                              <div class="card-list">
                                <img src='./img/JFo Certificate.png' alt="JavaScript Algorithms and Data Structures" />
                                <div class="card-info">
                                  <p class="rating"><span class="star"><i class="fa-solid fa-star"></i></span> Oracle Academy</span></p>
                                  <p class="info">Java Foundations</p>
                                  <p class="date"><span>Issued</span> • April 6th, 2022</p>
                                </div>
                              </div>
                            </div>
                          </div>`)
      }
      else if ($(this).hasClass('project')) {
        $('.main').html(`<div class="row button btn-project" data-aos="fade-up">
                          <div class="col-6 col-s-12">
                            <button class="button" id="proLeft">
                              <i class="fa-solid fa-arrow-left"></i> Left 
                            </button>
                          </div>

                          <div class="col-6 col-s-12">
                            <button class="button" id="proRight">
                              Right <i class="fa-solid fa-arrow-right"></i>
                            </button>
                          </div>
                        </div>
        
                        <div class="row card-web project-web" id="project-web" data-aos="zoom-in">
                          <div class="col-12 col-s-12">
                              <div class="card-list">
                                <a href="https://rianadi.github.io/tribute/" target="_blank"><img src='./img/tiger_woods.png' alt="card" /></a>
                                <div class="card-info">
                                  <p class="rating"><span><i class="fa-solid fa-star star"></i> Tribute Page</span></p>
                                </div>
                              </div>
                              <div class="card-list">
                                <a href="https://rianadi.github.io/survey-form/" target="_blank"><img src='./img/survey.png' alt="card" /></a>
                                <div class="card-info">
                                  <p class="rating"><span><i class="fa-solid fa-star star"></i> Survey Page</span></p>
                                </div>
                              </div>
                              <div class="card-list">
                                <a href="https://rianadi.github.io/js-doc/" target="_blank"><img src='./img/js_doc.png' alt="card" /></a>
                                <div class="card-info">
                                  <p class="rating"><span><i class="fa-solid fa-star star"></i> JS Documentation Page</span></p>
                                </div>
                              </div>
                              <div class="card-list">
                                <a href="https://dribbble.com/shots/12230630-Vacansy-Landing-Page" target="_blank"><img src='./img/vacansy_remake.png' alt="card" /></a>
                                <div class="card-info">
                                  <p class="rating"><span><i class="fa-solid fa-star star"></i> Vacansy Remake</span></p>
                                </div>
                              </div>
                              <div class="card-list">
                                <a href="https://dribbble.com/shots/15607887-StepWorld" target="_blank"><img src='./img/step_world.png' alt="card" /></a>
                                <div class="card-info">
                                  <p class="rating"><span><i class="fa-solid fa-star star"></i> Step World</span></p>
                                </div>
                              </div>
                              <div class="card-list">
                                <img src='./img/step_world2.png' alt="card" />
                                <div class="card-info">
                                  <p class="rating"><span><i class="fa-solid fa-star star"></i> Step World v2</span></p>
                                </div>
                              </div>
                          </div>
                        </div>`)
      }
    }
  });
});
