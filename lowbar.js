var _ = {};

// Collections


// each *************************************************
_.each = function (list, func) {
   if (arguments.length !== 2 ) return false;
   if (typeof func!=='function') return false;
   if (typeof list !=='object') return false;
   
   if(Array.isArray(list)){
      for(var i=0;i<list.length;i++){
        func(list[i], i, list)
      }
   }
   else if(typeof list ==='object'){
     for(var item in list){
       func(list[item])
     }
   }
};

// map *************************************************
_.map = function (list, func) {
  if (arguments.length !== 2 ) return false;
  if (typeof func!=='function') return false;
  if (typeof list !=='object') return false;

  var newArr = [];
  if(Array.isArray(list)){
      for(var i=0;i<list.length;i++){
        newArr.push(func(list[i], i, list))
      }
   }
   else if(typeof list ==='object'){
     for(var item in list){
       newArr.push(func(list[item]))
     }
   }
   return newArr;
};

// reduce *************************************************
_.reduce = function (array, func, memo) {
  if (arguments.length !== 2 ) return false;
  if (typeof func!=='function') return false;
  if (!Array.isArray(array)) return false;

  return array.reduce(func, memo);
};

// filter *************************************************
_.filter = function (list, func){
    if(arguments.length !== 2) return false;
    if (typeof func!=='function') return false;
    if (typeof list !=='object') return false;

    var newArr =[];

    if(Array.isArray(list)){
      for(var i=0;i<list.length;i++){
         if(func(list[i])===true){
           newArr.push(list[i])
         }
      }
    }
    else if(typeof list ==='object'){
      for(var item in list){
         if(func(list[item])===true){
           newArr.push(list[item])
         }
      }
    }
    
    return newArr;
}


if (typeof module !== 'undefined') {
  module.exports = _;
}