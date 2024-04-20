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

    var DomStrings = {
        inputType: ".add__type",
        inputDescription: ".add__description",
        inputValue: ".add__value",
        addBtn: ".add__btn"
    }
    return {
        getInput: function(){
            return {
                type: document.querySelector(DomStrings.inputType).value,
                description: document.querySelector(DomStrings.inputDescription).value,
                value: document.querySelector(DomStrings.inputValue).value
            };
        },

        getDOMstrings: function(){
            return DomStrings;
        }
    };

})();


var finanCecontroller = (function(){

    var Income = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };
    
    var Expense = function (id, description, value){
        this.id = id;
        this.description = description;
        this.value = value;
    };


    // var incomes = [];
    // var expenses = [];

    // var totalIncomes = 0;
    // var totalExpenses = 0;


    
var data = {
    allitems: {
        inc: [],
        exp: [];
    },

    finace: {
        totalInc: 0,
        totalExp: 0
    }
}

})();


var appController = (function(uiController, finanCecontroller){

    

    var CtrlAddItem = function(){
        console.log(uiController.getInput());
    }
    

 var setupEventlistener = function(){

    var Dom = uiController.getDOMstrings();

    document.querySelector(Dom.addBtn).addEventListener('click', function(){
        CtrlAddItem();
    });

    document.addEventListener('keypress', function(event){
        if(event.keyCode === 13 || event.which === 13){
                CtrlAddItem();
        }
    });
}

return {
    
    init:function(){
        console.log("Application started...");
    setupEventlistener();
}
}
    
})(uiController, finanCecontroller);

appController.init()