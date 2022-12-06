

const guide= document.querySelectorAll(".sub-menu")[2];
const url = "https://staff.bounceinc.com.au/booking-app/arrivals#/dashboard/5?time=";
const classTml = "<a class ='time' href='";
var time = makingURL();
const injection = time[0] + time[1] + time[2] + time[3] + time[4] + time[5] + time[6] + time[7] + time[8] + time[9] + time[10] + time[11] + time[12];



function makingURL () {              // function forming object with number from 9-21 and combining into injection html text.
    var result = [];
    for (var i=9; i<22; i++) {
        var time = i;
        var urlTogeather = classTml + url + time + "-00'> " + time + " </a>";
        result.push (urlTogeather);
    }
    return result;
}

function closingTime () {           // function to add spice to screen on when venue closed 

}

const injectGuide = function(){                 // Injection replaceing text in sub-menu with links.
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




