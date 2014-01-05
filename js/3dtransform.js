var init = function() {
  var box = document.querySelectorAll('#threedbox'),
      directionArray = ['show-front', 'show-right', 'show-back', 'show-left'],
      threeDButtons = document.querySelectorAll('.btn-three-d'),
      directionClass;
  var onButtonClick = function( event ) {
    directionClass = $(box).attr('class');
    var index = directionArray.indexOf(directionClass);
    var targetClass = event.target.className;
    
    if (targetClass.indexOf("btn-rotate-right") > -1) {
      index = ++index%directionArray.length;
      console.log(index);
    }
    else if (targetClass.indexOf("btn-rotate-left") > -1){
      index = index <= 0 ? directionArray.length-1 : index-1;
    }
    $(box).removeClass();
    $(box).addClass(directionArray[index]);
  }
  for (var i=0, len = threeDButtons.length; i < len; i++) {
    threeDButtons[i].addEventListener( 'click', onButtonClick, false);
  }  
};
  
window.addEventListener( 'DOMContentLoaded', init, false);