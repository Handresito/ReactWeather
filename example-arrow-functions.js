//var names = ['Andres','Edurne','Pepe','Merche','Javier']

/*
names.forEach(function(name){
    console.log('forEach', name);
});

names.forEach((name) => {
    console.log('arrowFunc', name);
    console.log('something else');
    var x = 'something';
});

names.forEach((name) => console.log(name));
*/

/*
var returnMe = (name) => name + '!';
console.log(returnMe('Mauri'));
*/

/*
var person = {
    name: 'Mauri',
    greet: function(){
        names.forEach((name) => {
            console.log(this.name + ' says hi to ' + name)
        });
    }
};

person.greet();
*/

//Challenge area



var addExpression = (a,b) => console.log(a+b);

addExpression(10,5);

var addStatement = (a,b) => {
    console.log(a+b);
    console.log('something else');
}

addStatement(15,5);



