// var uicontroller = (function(){
//     var x = 12;
//     y = 4;
//     console.log("hello");
// })();


// var financecontroller = (function(){
//     // var y = 7;
//     x =3;
//     console.log("hello finance mudule " + y);
// })();


// console.log(x);


// var uiController = (function(){
//     var x = 100;

//    function add(y){
//         return x + y;
//     }

//     return {
//         publicAdd: function(a){
//             a = add(a);
//             console.log(a)
//         }
//     }
// })();


// var finanCecontroller = (function(){
    
// })();


// var appController = (function(uiController, finanCecontroller){
//     uiController.publicAdd(50);
// })(uiController, finanCecontroller);




var uiController = (function(){

})();


var finanCecontroller = (function(){
    
})();


var appController = (function(uiController, finanCecontroller){

    var CtrlAddItem = function(){
        console.log("Ogogdol avah heseg");
    }
    
    document.querySelector('.add__btn').addEventListener('click', function(){
        CtrlAddItem();
    });

    document.addEventListener('keypress', function(event){
        if(event.keyCode === 13 || event.which === 13){
                CtrlAddItem();
        }
    });
    
})(uiController, finanCecontroller);