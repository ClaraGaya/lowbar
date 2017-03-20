var _ = {};

// Collections

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



if (typeof module !== 'undefined') {
  module.exports = _;
}