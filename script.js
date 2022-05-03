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

  $(document).on('click', 'a[id^="icon"]', function() {
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

  $(document).on('mouseenter', 'input[id^="email"]', function() {
    $('.email-hover').css({
      'opacity': 1,
      'transform': 'translateY(40px)'
    })
  });

  $(document).on('mouseleave', 'input[id^="email"]', function() {
    $('.email-hover').css({
      'opacity': 0,
      'transform': 'translateY(-40px)'
    })
  });

  $(document).on('mouseenter', 'input[id^="linked"]', function() {
    $('.linked-hover').css({
      'opacity': 1,
      'transform': 'translateY(40px)'
    })
  });

  $(document).on('mouseleave', 'input[id^="linked"]', function() {
    $('.linked-hover').css({
      'opacity': 0,
      'transform': 'translateY(-40px)'
    })
  });

  $(document).on('mouseenter', 'input[id^="github"]', function() {
    $('.github-hover').css({
      'opacity': 1,
      'transform': 'translateY(40px)'
    })
  });

  $(document).on('mouseleave', 'input[id^="github"]', function() {
    $('.github-hover').css({
      'opacity': 0,
      'transform': 'translateY(-40px)'
    })
  });

  $(document).on('mouseenter', 'input[id^="freecodecamp"]', function() {
    $('.freecodecamp-hover').css({
      'opacity': 1,
      'transform': 'translateY(40px)'
    })
  });

  $(document).on('mouseleave', 'input[id^="freecodecamp"]', function() {
    $('.freecodecamp-hover').css({
      'opacity': 0,
      'transform': 'translateY(-40px)'
    })
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

  $(document).on('click', 'h1[id^="open-icon"]', function(){
    $('.sidebar').css({
      'width': '20%',
      'transition': '2s'
    });
    $('.main').css({
      'width': '80%',
      'transition': '2s'
    });
    setTimeout(() => {
      $('#close-icon').css({
        'text-align': 'left',
        'transition': '2s',
        'opacity': '1'
      });

      $('.nav-link').css({
        'opacity': '1',
        'transition': '3s'
      })
    }, 1000);
    
    $('.nav-link').show();
    $('#open-icon').hide();
    $('#close-icon').show();
    $('#contact-icon, #personal-icon, #certificate-icon, #project-icon, #open-icon, #home-icon').css({
      'opacity': '0'
    });
    $('#contact-icon, #personal-icon, #certificate-icon, #project-icon, #open-icon, #home-icon').hide();
  });

  $(document).on('click', 'h1[id^="close-icon"]', function(){
    $('.sidebar').css({
      'width': '5%',
      'transition': '2s'
    });
    $('.main').css({
      'width': '95%',
      'transition': '2s'
    });
    $('.nav-link').css({
      'opacity': '0'
    })
    $('.nav-link').hide();
    $('#close-icon').css({
      'opacity': '0'
    });
    $('#burger-icon, #contact-icon, #personal-icon, #certificate-icon, #project-icon, #open-icon, #home-icon').css({
      'padding': '15px 0',
      'margin': '15px 0',
      'transition': '2s'
    });
    setTimeout(() => {
      $('#burger-icon, #contact-icon, #personal-icon, #certificate-icon, #project-icon, #open-icon, #home-icon').css({
        'opacity': '1',
      })
    }, 1000);
    $('#close-icon').hide();
    $('#contact-icon, #personal-icon, #certificate-icon, #project-icon, #open-icon, #home-icon').show();
  });

  $(document).on('click', 'h1[id^="home-icon"]', function(){
    $('.active').removeClass('active');
    $('.active-icon').removeClass('active-icon');
    landing();
  });

  $(document).on('click', 'h1[id^="contact-icon"]', function(){
    $('.active').removeClass('active');
    $('.active-icon').removeClass('active-icon');
    contactMain();
  });

  $(document).on('click', 'h1[id^="personal-icon"]', function(){
    $('.active').removeClass('active');
    $('.active-icon').removeClass('active-icon');
    personalMain();
  });

  $(document).on('click', 'h1[id^="certificate-icon"]', function(){
    $('.active').removeClass('active');
    $('.active-icon').removeClass('active-icon');
    certificateMain();
  });

  $(document).on('click', 'h1[id^="project-icon"]', function(){
    $('.active').removeClass('active');
    $('.active-icon').removeClass('active-icon');
    projectMain();
  });

  $('.nav ul li a').on({
    click: function() {
      $('nav ul .active').removeClass('active');
      $('.active-icon').removeClass('active-icon');

      if ($(this).hasClass('home')) {
        landing();
      }
      else if ($(this).hasClass('contact-value')) {
        contactMain();
      } else if ($(this).hasClass('personal')) {
        personalMain();
      } else if ($(this).hasClass('certificate')) {
        certificateMain();
      } else if ($(this).hasClass('project')) {
        projectMain();
      }
    }
  });

  $(document).on('click', 'div[id^="l-linked"]', function(){
    linked();
  });

  $(document).on('click', 'div[id^="l-github"]', function(){
    github();
  });

  $(document).on('click', 'div[id^="l-freecodecamp"]', function(){
    freecodecamp();
  });

  $(document).on('click', 'div[id^="l-contact"]', function(){
    $('.landing').css({
      'opacity': '0',
    });

    setTimeout(() => {
      $('.landing').css({
        'display': 'none',
      });
    }, 500);

    $('.active').removeClass('active');

    $('.active-icon').removeClass('active-icon');

    contactMain();
  });

  $(document).on('click', 'div[id^="l-personal"]', function(){
    $('.landing').css({
      'opacity': '0',
    });

    setTimeout(() => {
      $('.landing').css({
        'display': 'none',
      });
    }, 500);

    $('.active').removeClass('active');

    $('.active-icon').removeClass('active-icon');

    personalMain();
  });

  $(document).on('click', 'div[id^="l-certificate"]', function(){
    $('.landing').css({
      'opacity': '0',
    });

    setTimeout(() => {
      $('.landing').css({
        'display': 'none',
      });
    }, 500);

    $('.active').removeClass('active');

    $('.active-icon').removeClass('active-icon');

    certificateMain();
  });

  $(document).on('click', 'div[id^="l-project"]', function(){
    $('.landing').css({
      'opacity': '0',
    });

    setTimeout(() => {
      $('.landing').css({
        'display': 'none',
      });
    }, 500);

    $('.active').removeClass('active');
    $('.active-icon').removeClass('active-icon');
    projectMain();
  });

});

const landing = function() {
  $('.landing').css({
    'display': 'flex'
  });
  
  setTimeout(() => {
    $('.landing').css({
      'opacity': '1'
    });
  }, 0);

  $('.home').addClass('active');

  $('#home-icon').addClass('active-icon');
}

const contactMain = function() {
  $('.contact-value').addClass('active');
  $('#contact-icon').addClass('active-icon');
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

                      <div class="row home-hover">
                        <div class="col-3 col-s-12">
                          <img class="email-hover" src="./img/email.png" alt="">
                        </div>
                        <div class="col-3 col-s-12">
                          <img class="linked-hover" src="./img/linkedin.png" alt="">
                        </div>
                        <div class="col-3 col-s-12">
                          <img class="github-hover" src="./img/github.png" alt="">
                        </div>
                        <div class="col-3 col-s-12">
                          <img class="freecodecamp-hover" src="./img/freecodecamp.png" alt="">
                        </div>
                      </div>

                      <!-- <div class="row footer">
                        <h5 id="footer-text">2022 ● FIKRI DEAN RADITYO</h5>
                      </div> -->
                    </main>`);
};

const personalMain = function() {
  $('.personal').addClass('active');
  $('#personal-icon').addClass('active-icon');
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
}

const certificateMain = function() {
  $('.certificate').addClass('active');
  $('#certificate-icon').addClass('active-icon');
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
                    </div>`);
}

const projectMain = function() {
  $('.project').addClass('active');
  $('#project-icon').addClass('active-icon');
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
                    </div>`);
}