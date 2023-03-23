document.getElementById('login').onclick = function () {
  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;
  if (email === 'admin@user.com' && password === '123456') {
    window.location.href = "home.html"
  }
  else {
    Toastify({
      text: "This is a toast",
      duration: 3000,
      destination: "https://github.com/apvarun/toastify-js",
      newWindow: true,
      close: true,
      gravity: "top", // `top` or `bottom`
      position: "left", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)",
      },
      onClick: function () { } // Callback after click
    }).showToast();
  }
}
// clear output

var cities = ["Fasialabad", "Lahore", "Karachi", "Islamabad", "Quetta",]
function Clear() {
    document.getElementById("ot").innerHTML = " ";
    document.getElementById("ot").style.height = "250px"
}


// input column
function Case() {
    document.getElementById("basic-url").innerHTML = " ";
}


function printCities() {
    for (let i = 0; i < cities.length; i++) {
        let num = i + 1 + ") "
        let cityName = cities[i]
        document.getElementById("ot").innerHTML += num + cityName + '</br>'
    }
}





function addCity() {
    let yourCity = document.getElementById("basic-url").value;
    if (!yourCity) {
        return alert("Please Enter Your City Name")
    }
    let firstName = yourCity.slice(0, 1).toUpperCase();
    let lastName = yourCity.slice(1).toLowerCase();
    let fullName = firstName + lastName;
    let ourCity = cities.push(fullName)
    for (let i = 0; i < cities.length; i++) {
        let num = i + 1 + ") "
        let cityName = cities[i]
        document.getElementById("ot").innerHTML += num + cityName + '</br>'
    }
    document.getElementById("ot").style.height = "auto"
}


function checkCity() {
    let yourCity = document.getElementById("basic-url").value;
    if (!yourCity) {
        return alert("Please Enter Some Text!!!!!")
    }
    let firstName = yourCity.slice(0, 1).toUpperCase();
    let lastName = yourCity.slice(1).toLowerCase();
    let fullName = firstName + lastName;
    let cityFound = false;
    for (let i = 0; i < cities.length; i++) {
        if (cities[i] === fullName)
            cityFound = true;
        let html = '<span style="color:red;">"' + fullName + '"</span>';}}