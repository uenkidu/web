  function startMove(obj, json, fn) {
   clearInterval(obj.timer);    
   obj.timer = setInterval(function() {      
        
    for(var attr in json) {
     //目标值
     var flag = true;
     var iCur = 0; 
     if(attr == 'opacity') {       
      iCur = Math.round(parseFloat(getStyle(obj,attr)) * 100);       
     } else {   
      iCur = parseInt(getStyle(obj,attr));     
     }            
     //speed      
     var iSpeed = (json[attr] - iCur) / 8;     
     iSpeed = iSpeed>0?Math.ceil(iSpeed):Math.floor(iSpeed);             
     //stop       
     if(iCur != json[attr]) {      
      flag = false;    
     }    
     if(attr == 'opacity') {       
      obj.style.filter = 'alpha(opacity:'+ (iCur + iSpeed) +')';       
      obj.style.opacity = (iCur + iSpeed) / 100;       
     } else {       
      obj.style[attr] = iCur + iSpeed + 'px';      
     }
    }  
    if(flag){  
     clearInterval(obj.timer);
     if(fn){      
      fn();      
     }
    }      
   }, 30)
  }
  function getStyle(obj, attr) {
   if(obj.currentStyle) {
    return obj.currentStyle[attr];
   } else {
    return getComputedStyle(obj, false)[attr];
   }
  }