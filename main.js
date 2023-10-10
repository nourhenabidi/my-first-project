function each(array, func) { 
    for (var i = 0; i < array.length; i++) { 
          func(array[i], i); 
    } 
  }
  
  function map(array, f) { 
    var acc = []; 
    each(array, function(element, i) { 
          acc.push(f(element, i)); 
    }); 
    return acc; 
  }
  
  function filter(array, predicate) {
  var acc = [];
  each(array, function (element, index) {
   // notice we added the index here
   if (predicate(element, index)) {
     // notice we added the index here
     acc.push(element);
   }
  });
  return acc;
  }
  
  function reduce(array, f, acc) {
  if (acc === undefined) {
   acc = array[0];
   array = array.slice(1);
  }
  each(array, function (element, i) {
   acc = f(acc, element, i);
  });
  return acc;
  }
function generateId(){
    var counter=0
        return function(){
        counter++
    }
  }
////ID
  var id=generateId()
      
function makecandle(Name,Price,images,Description){
  return{
     Name:Name,
    Price:Price,
    images:images,
    Description:Description,
   date:new Date(),
    id:id(),
  }
}

var candle1= makecandle('Lighting Up Your Life',150,["https://i.pinimg.com/564x/d9/52/ba/d952ba5f784d38a5294a66bc677f58fb.jpg","https://i.pinimg.com/564x/8e/18/4d/8e184df5f56d76d0c83e423ca760ce85.jpg","https://i.pinimg.com/564x/16/9b/68/169b6896d20cd87a37cda9ad8db28404.jpg","https://i.pinimg.com/564x/f9/06/29/f906294014bc03409c7c1a04cb7bba03.jpg","https://i.pinimg.com/564x/c1/37/3f/c1373fa418aa74caabd4db21bffea490.jpg","https://i.pinimg.com/564x/ab/63/6c/ab636c8ecd72efd2982bed619ce22cda.jpg","https://i.pinimg.com/564x/6a/9a/99/6a9a9948d3d76dd9b60a7cb180c581a4.jpg","https://i.pinimg.com/564x/6c/73/53/6c73534febf1e2e07155cc7afb9a67ea.jpg"],"inspired from nature and human being; the art of god")
 $('#candle').append(`
   <img src=${candle1.images[0]} id="img1">
   <p>Name: ${candle1.Name}</p>
  <p>Price : ${candle1.Price}</p>
  <p>Description: ${candle1.Description}</p>
 `)
 console.log(candle1.price)
 console.log('rr',candle1)

var counter=0
var initial=$('#img1')
    initial.on('click',function(){
      counter++
    $('#img1')[0].src=candle1.images[counter]
      if(counter===candle1.images.length-1){
        counter=-1
      }
    })
    // $("#hide").click(function(){
    //   $("tr").hide();
    // });
    
    // $("#show").click(function(){
    //   $("tr").show();
    // });

    // function chooseCandle() {
    //   $('#secondbutton').show();
    //   $('button:contains("Choose")').hide();
    // }

    $('.firstbutton').click(function() {
      $(this).hide()
      console.log("ee");
      alert('You gonna receive your delivery in 24 hours ')
  })
  $('#secondbutton').click(function() {
    $(this).show()
})
