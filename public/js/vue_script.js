var main = new Vue({
  el: '#main',
  data: {
    menuItems: burgers,
    customerName: "",
    customerEmail: "",
    customerStreet: "",
    customerHouse: "",
    customerPayment: "Credit card",
    customerGender: "female",
    chosenBurgers: [],
    buttonIsClicked: false
  },
  methods: {
    buttonClick: function () {
      var chosenBurgers =  getBurgerSelection();
      main.chosenBurgers = chosenBurgers;
      main.buttonIsClicked = true;
  }
  }
})

function getBurgerSelection() {
  var chosenBurgers = [];
  var burgerCheckBoxes = document.getElementsByClassName("burgerButt");
  for (var i = 0, length = burgerCheckBoxes.length; i < length; i++) {
    if (burgerCheckBoxes[i].checked)
    {
      console.log(burgers[i].name);
      chosenBurgers.push(burgers[i].name);
    }
  }
  return chosenBurgers;
}
