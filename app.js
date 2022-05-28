//const mun_date = [4,30,17,0] //month day hour minute

var mun_date_ = new Date(2022, 4, 23, 3, 0);

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}


function get_date_difference(mun_date) {
    const current_date = new Date();
    const current_date_list = Date().split(' ');
    const current_year = Number(current_date_list[3]);
    const current_day = Number(current_date_list[2]);
    var date1 = new Date(current_year, current_date.getMonth(), current_day, current_date.getHours(), current_date.getMinutes(), current_date.getSeconds());
    var diff = mun_date - date1;
    var seconds = diff / (1000);
    var minute = seconds / 60;
    seconds = seconds % 60;
    var hour = minute / 60;
    minute = minute % 60;
    var day = Math.floor(hour / 24);
    hour = hour % 24;

    if (seconds < 0) {
        day = 0;
        hour = 0;
        minute = 0;
        seconds = 0;
    }
    return [Math.floor(day), Math.floor(hour), Math.floor(minute), Math.floor(seconds)];
}

function set_timer(remaining_date) {
    let timer = document.querySelector("#timer");
    let day_count = timer.children[0].querySelector("h1");
    let hour_count = timer.children[1].querySelector("h1");
    let minute_count = timer.children[2].querySelector("h1");
    let second_count = timer.children[3].querySelector("h1");
    day_count.textContent = remaining_date[0];
    hour_count.textContent = remaining_date[1];
    minute_count.textContent = remaining_date[2];
    second_count.textContent = remaining_date[3];

}
var interval1 = window.setInterval(function () {
    set_timer(get_date_difference(mun_date_));
}, 1000);

function send_message(message){
    console.log(message);
}

function change_logo_position(){
    let logo_img = document.getElementById("main-logo");
    let navbar = document.getElementById("navbar");
    console.log(logo_img);
    logo_img.parentElement = navbar;
}

window.onscroll = function() {myFunction()};



function myFunction() {
    var header = document.getElementById("header-main");
    var sticky = header.clientHeight;
  if (window.pageYOffset >= sticky){
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}


function openApplication(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the link that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

function openFirstApplication(){
  var button = document.getElementById("first-tab-id");
  openApplication(button,"committee-director");
}

openFirstApplication();