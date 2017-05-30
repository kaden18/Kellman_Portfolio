function myFunction()
{
  var d = new Date();
  var n = d.getHours();

  if (n < 18 && n >= 6)
  {
      document.getElementById('container').style.backgroundColor = 'rgba(255, 255, 255, .9)';
      document.body.style.color = '#000000';
      document.getElementById('nav').style.backgroundColor = 'rgba(0, 0, 0, .1)';
      document.getElementById('email').style.color = 'rgb(0, 0, 0)';
      document.getElementById('mayLink').style.color = 'rgb(0, 0, 0)';
  }
  else {}
}

myFunction();
