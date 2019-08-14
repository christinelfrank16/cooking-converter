// Frontend

$(document).ready(function(){
  $("a").click(function(){
    var value = $(this).text();
    $(this).closest(".dropdown").find(".btn").text(value);
  });

  $("form#temp-form").submit(function(event){
    event.preventDefault();

    var conversion = $("button#dropdownTemp").text();
    var value = parseInt($("input#from-temp").val());
    var output;
    //store form input in var
    if (conversion === "Celsius to Fahrenheit") {
      output = celsiusToFahrenheit(value);
    } else if (conversion === "Fahrenheit to Celsius") {
      output = fahrenheitToCelsius(value);
    } else {
      output = "No Conversion Selected";
    }

    $("#temp-convert").text(output);
  });

  $("form#volume-form").submit(function(event){
    event.preventDefault();
    var convertFrom = $("button#dropdownVol1").text();
    var convertTo = $("button#dropdownVol2").text();
    var value = parseInt($("input#from-volume").val());
    var output;
    if(convertFrom === "Volume Unit (From)" || convertTo === "Volume Unit (To)"){
      output = "Missing Conversion Selection"
    }
    else {
      output = convert(convertFrom, convertTo, value);
    }
    $("#volume-convert").text(output);
  });
});





//Backend:

function celsiusToFahrenheit(value) {
  return (value * 1.8 + 32);
}

function fahrenheitToCelsius(value) {
  return ((value - 32) / 1.8);
}

// Convert units to ml
function convertTsp(){
  return 5;
}

function convertCups(){
  return 236.5882365;
}

function convertQrt(){
  return 946.35295;
}

function convertTbsp(){
  return 15;
}

// perform Conversion
function convert(unitFrom, unitTo, value){
  var fromValue;
  var toValue;
  switch (unitFrom) {
    case "Cup":
      fromValue = convertCups();
      break;
    case "Teaspoon":
      fromValue = convertTsp();
  }
  switch (unitTo) {
    case "Tablespoon":
      toValue = convertTbsp();
      break;
    case "Quart":
      toValue = convertQrt();
  }
  return ((fromValue/toValue)*value).toFixed(3);
}
