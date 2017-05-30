function myFunction()
{
  var d = new Date();
  var n = d.getHours();

  if (n < 18 && n >= 6)
  {
	  document.getElementById('container').style.backgroundColor = 'rgba(255, 255, 255, .95)';
    document.body.style.color = '#000000';
    document.getElementById('nav').style.backgroundColor = '#000000';
    document.getElementById('email').style.color = '#000000';
	  document.getElementById('mayLink').style.color = '#000000';
  }
  else {}
}

myFunction();
