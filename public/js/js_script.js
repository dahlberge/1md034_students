function MenuItem(name, kCal, gluten, lactose, imgURL) {
  this.name = name;
  this.kCal = kCal;
  this.gluten = gluten;
  this.lactose = lactose;
  this.imgURL = imgURL;
}
/*
function initBurgers() {
  var brg1 = new MenuItem("Hamburger", 1000, true, true, "http://www.pngpix.com/wp-content/uploads/2016/03/Hamburger-PNG-Image.png");
  var brg2 = new MenuItem("Bacon Burger", 1300, true, true, "http://freepngimages.com/wp-content/uploads/2016/11/bacon-burger.png");
  var brg3 = new MenuItem("Kids Burger", 800, true, false, "http://pngimg.com/uploads/burger_sandwich/burger_sandwich_PNG4115.png");
  var brg4 = new MenuItem("Gluten free Burger", 1000, false, true, "http://2.bp.blogspot.com/-1CjtsX1zh0w/UBsl2UtatZI/AAAAAAAAAj8/pXAS4ksZOak/s1600/Kinnikinnick+Gluten+Free+Hamburger+Bun.JPG");
  var brg5 = new MenuItem("Seudoburger", 150, false, false, "http://topdogimaging.net/blog/wp-content/uploads/image/Dog-Toy-Burger.jpg");
  var burgers = [];
  burgers.push(brg1, brg2, brg3, brg4, brg5);
  return burgers;
}

var burgers = initBurgers();
*/

var wrapper = document.getElementsByClassName("wrapper")[0];

function displayBurgers() {
  var i = 0;
  var max = 5;
  for (i; i < max; i++)
  {
    var burger = burgers[i];

    var titleDiv = document.createElement("div");
    titleDiv.setAttribute("class", "row0 col" + i);
    var heading = document.createElement("h1");
    heading.innerHTML = burger.name;
    titleDiv.appendChild(heading);

    var imgDiv = document.createElement("div");
    imgDiv.setAttribute("class", "row1 col" + i);
    var img = document.createElement("img");
    img.setAttribute("src", burger.imgURL);
    img.setAttribute("width", "200");
    imgDiv.appendChild(img);

    var ingrDiv = document.createElement("div");
    ingrDiv.setAttribute("class", "row2 col" + i);
    var list = document.createElement("ul");
    var listElem = document.createElement("li");
    listElem.innerHTML = burger.kCal + " kCal";
    list.appendChild(listElem);
    ingrDiv.appendChild(list);

    if (burger.gluten) {
      listElem = document.createElement("li");
      listElem.innerHTML = "Contains <span class=\"allergy\">gluten</span>";
      list.appendChild(listElem);
    }

    if (burger.lactose) {
      listElem = document.createElement("li");
      listElem.innerHTML = "Contains <span class=\"allergy\">lactose</span>";
      list.appendChild(listElem);
    }

    var buttonDiv = document.createElement("div");
    buttonDiv.setAttribute("class", "row3 col" + i);
    var button = document.createElement("input");
    button.setAttribute("class", "burgerButt")
    button.setAttribute("type", "checkbox");
    buttonDiv.appendChild(button);

    wrapper.appendChild(titleDiv);
    wrapper.appendChild(imgDiv);
    wrapper.appendChild(ingrDiv);
    wrapper.appendChild(buttonDiv);
  }
}
displayBurgers();

function displayConfirmation() {
  var confirm = document.createElement("section");
  confirm.setAttribute("id", "confirmation");
  var main = document.getElementsByTagName("main")[0];
  main.appendChild(confirm);
  confirm.innerHTML = "<h1>Order Confirmation</h1>";

  var name = document.getElementById("name").value;
  var nameH = document.createElement("h3");
  nameH.innerHTML = "Name";
  var nameP = document.createElement("p");
  nameP.innerHTML = name;
  confirm.appendChild(nameH);
  confirm.appendChild(nameP);

  var email = document.getElementById("email").value;
  var emailH = document.createElement("h3");
  emailH.innerHTML = "Email";
  var emailP = document.createElement("p");
  emailP.innerHTML = email;
  confirm.appendChild(emailH);
  confirm.appendChild(emailP);

  var street = document.getElementById("street").value;
  var house = document.getElementById("house"). value;
  var addressH = document.createElement("h3");
  addressH.innerHTML = "Address";
  var addressP = document.createElement("p");
  addressP.innerHTML = street + " " + house;
  confirm.appendChild(addressH);
  confirm.appendChild(addressP);

  var payment = document.getElementById("payment").value;
  var genderButtons = document.getElementsByName("gender");
  var gender = null;
  for (var i = 0, length = genderButtons.length; i < length; i++) {
    if (genderButtons[i].checked)
    {
      gender = genderButtons[i].value;
    }
  }
  var genderH = document.createElement("h3");
  genderH.innerHTML = "Gender";
  var genderP = document.createElement("p");
  genderP.innerHTML = gender;
  confirm.appendChild(genderH);
  confirm.appendChild(genderP);

  var chosenBurgers = [];
  var burgerCheckBoxes = document.getElementsByClassName("burgerButt");
  for (var i = 0, length = burgerCheckBoxes.length; i < length; i++) {
    if (burgerCheckBoxes[i].checked)
    {
      console.log(burgers[i].name);
      chosenBurgers.push(burgers[i].name);
    }
  }
  var burgerH = document.createElement("h3");
  burgerH.innerHTML = "Selected Burgers";
  var burgerP = document.createElement("p");
  burgerP.innerHTML = chosenBurgers;
  confirm.appendChild(burgerH);
  confirm.appendChild(burgerP);

  console.log(name, email, street, house, payment, gender);
}

var btnSubmit = document.getElementById("btnSubmit");
btnSubmit.onclick = displayConfirmation;
