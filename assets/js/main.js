goog.provide('mainApp');
goog.require('mainApp.data');
goog.require('Exfy');

(function(window, Exfy){
  var ex = new Exfy();

  var b64 = ex.addElement($('#sushi')[0]);

  console.log(ex.toObject());

})(window, Exfy);
