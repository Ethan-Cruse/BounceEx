

const guide= document.querySelectorAll(".sub-menu")[2];
const url = "https://staff.bounceinc.com.au/booking-app/arrivals#/dashboard/5?time=";
const classTml = "<a class ='time' href='";
var time = makingURL();
const timeJoin = time.join("");
const injection = timeJoin;



function makingURL () {              // function forming object with number from 9-21 and combining into injection html text.
    var result = [];
    for (var i=9; i<22; i++) {
        var time = i;
        var urlTogeather = classTml + url + time + "-00'> " + time + " </a>";
        result.push (urlTogeather);
    }
    return result;
}

const injectGuide = function(){                                      // Injection replaceing text in sub-menu with links.
    guide.innerHTML = injection;
    guide.classList.add("timeButton")
}

injectGuide();

                                //event listen to refresh page on click 

// guide.addEventListener("click",clicked)

//     function clicked(){
//     // window.location.reload();
//     history.pushState({}, null, newUrl);
//     }




