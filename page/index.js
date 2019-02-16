window.onload = function () {
   var ajax = new XMLHttpRequest();

   ajax.open('GET', './getData', true);
   ajax.onreadystatechange = function () {
      if(ajax.readyState == 4 && ajax.status == 200) {
         // console.log('pos-ajax',ajax.responseText)
      }
   }

   ajax.send();
}