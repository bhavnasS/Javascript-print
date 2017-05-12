function add()
{ 
	number1 =document.getElementById("num1").value;
	number2 =document.getElementById("num2").value;
  if(number1 =="")
  {
	  alert("Enter the first value");
  	  
  }
  else if(number2 =="")
  {
  alert("Enter the second value");
  }
  else
  {
	  
	document.getElementById("sign").innerHTML = "+";
	document.getElementById("ans").value = parseInt(number1) + parseInt(number2);
	document.getElementById("ans").style.color="#FF0000"; 
	 document.getElementById("finalans").innerHTML = parseInt(number1) + parseInt(number2); 
	document.getElementById("finalans").style.background ="#FF0000"; 
  
 document.getElementById("totalVal12").innerHTML = parseInt(number1) + parseInt(number2); 
	 
  
  }
  
  
}


function sub()
{ 
	number1 =document.getElementById("num1").value;
	number2 =document.getElementById("num2").value;
  if(number1 =="")
  {
	  alert("Enter the first value");
  	  
  }
  else if(number2 =="")
  {
  alert("Enter the second value");
  }
  else
  {
	document.getElementById("sign").innerHTML = "-";
	document.getElementById("ans").value = parseInt(number1) - parseInt(number2);
	document.getElementById("ans").style.color="#FFFF00"; 
	document.getElementById("finalans").innerHTML = parseInt(number1) - parseInt(number2); 
	document.getElementById("finalans").style.background ="#FFFF00"; 
  }
  
  
}

function mul()
{ 
	number1 =document.getElementById("num1").value;
	number2 =document.getElementById("num2").value;
  if(number1 =="")
  {
	  alert("Enter the first value");
  	  
  }
  else if(number2 =="")
  {
  alert("Enter the second value");
  }
  else
  {
	document.getElementById("sign").innerHTML = "*";
	document.getElementById("ans").value = parseInt(number1) * parseInt(number2);
	document.getElementById("ans").style.color="#0000FF"; 
	document.getElementById("finalans").innerHTML = parseInt(number1) * parseInt(number2); 
	document.getElementById("finalans").style.background ="#0000FF"; 
  }
  
  
}

function div()
{ 
	number1 =document.getElementById("num1").value;
	number2 =document.getElementById("num2").value;
  if(number1 =="")
  {
	  alert("Enter the first value");
  	  
  }
  else if(number2 =="")
  {
  alert("Enter the second value");
  }
  else
  {
	document.getElementById("sign").innerHTML = "/";
	document.getElementById("ans").value = parseInt(number1) / parseInt(number2);
	document.getElementById("ans").style.color="#008000"; 
	document.getElementById("finalans").innerHTML = parseInt(number1) / parseInt(number2); 
	document.getElementById("finalans").style.background ="#008000"; 
	
	
  }
  
  
}

/*function printForm()
{
			document.getElementById("val1").innerHTML ="Number1:  " + document.getElementById("num1").value;
			document.getElementById("val2").innerHTML ="Number2:  " +document.getElementById("num2").value;
			document.getElementById("totalVal").innerHTML = "Total:      "+ document.getElementById("sign").innerHTML+" "+document.getElementById("ans").value;
  			var divElements = document.getElementById("print").innerHTML;
            //Get the HTML of whole page
            var oldPage = document.body.innerHTML;
			
            //Reset the page's HTML with div's HTML only
            document.body.innerHTML = 
              "<html><head><title></title></head><body>" + 
              divElements + "</body>";

            //Print Page
            window.print();

            //Restore orignal HTML
            document.body.innerHTML = oldPage;

          
  } */