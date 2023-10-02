//curreny converter from GBP to Colombian Pesos 
function converterCurrency() {
	const gbpAmount = document.getElementById("gbp-amount").value;
	const exchangeRate = 5.40;
	const colombianPesos = gbpAmount * exchangeRate;
	document.getElementById("cop-amount").textContent = colombianPesos;
}


//copied and pasted below from HTML into JS and worked the same
  //this function will execute when onmouseover is triggered 
      function func()
      {
        // an alert will pop up when onmouseover get triggered
        alert("onmouseover alert.");
      }

//object.onmouseover = function_name() 
//{ function_script };

//object.addEventListener("mouseover", function_name);
