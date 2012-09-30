goog.provide('app');
goog.require('app.data');
goog.require('Exfy');

(function(window, Exfy){
  var ex = new Exfy();

  var b64 = ex.addElement($('#human')[0]);
  $('#one')[0].src = ex.base64;

  console.log(ex.toObject());

  var img = new Image();
  img.src = $('#human')[0].src;
  img.onload = function(){
    var newex = new Exfy();
    var newb64 = newex.addElement(this);
    $('#two')[0].src = newex.base64;
    console.log(newex.toObject());
  };

  var dataImg = new Image();
  dataImg.src = app.data.human64Head + app.data.human64;
  dataImg.onload = function(){
    var newex = new Exfy();
    var newb64 = newex.addElement(this);
    $('#three')[0].src = newex.base64;
    console.log(newex.toObject());
  };

  console.log('Manual data:');
  var dataEx = new Exfy();
  dataEx.addBase64(app.data.human64);
  console.log(dataEx.toObject());



})(window, Exfy);
