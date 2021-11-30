console.log("Script loaded!")
var form1 = document.getElementById("form");
form1.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log("submit");
    var nameValue = document.getElementById("name").value;
    var Lastname = document.getElementById("Lastname").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var address = document.getElementById("address").value;
    var city = document.getElementById("City").value;
    var born = document.getElementById("born").value;
    var height = document.getElementById("height").value;
    var bio = document.getElementById("bio").value;
    var password = document.getElementById("password").value;
    console.log(nameValue);
    document.getElementById("textchange").textContent = nameValue + " " + Lastname + " " + email + " " + phone + " " + address + " " + city + " "
        + born + " " + height + " " + bio + " " + password;
});

function showDescriptbtn() {
    var x = document.getElementById("descript");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}