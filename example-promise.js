/*function getTempCallback (location, callback){
    callback(undefined,78);
    callback('City not found');
}

getTempCallback('Pamplona', function(err, temp){
    if(err){
        console.log('error', err);
    }else{
        console.log('success', temp);
    }
});

function getTempPromise(location){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve(79);
            reject('City not found');
        }, 1000);
    });
};

getTempPromise('Pamplona').then(function(temp){
    console.log('promise success', temp);
}, function(error){
    console.log('promise error', err);
});*/

//Challenge Area

/*function addPromise(a, b){
    return new Promise(function (resolve, reject){
        if (typeof a === 'number' && typeof b === 'number'){
            resolve(a+b);
        }else{
            reject('A & B need to be numbers!');
        }
    });
}

addPromise(10,40).then(function(sum){
    console.log('success', sum);
}, function(err){
    console.log('error', err);
});

addPromise('andres',9).then(function(sum){
    console.log('this should not show up', sum);
}, function(err){
    console.log('this should appear', err);
})*/

/*function addPromiseString(a,b){
    return new Promise(function(resolve, reject){
        if(typeof a === 'string' && typeof b === 'string'){
            resolve(a+b);
        }else{
            reject('Have to be strings!')
        }
    });
}

addPromiseString('hola',' tio').then(function(value){
    console.log('Success: ',value);
}, function(err){
    console.log('Error: ', err);
});

addPromiseString(4,'hola').then(function(value){
    console.log('This should not appear', value);
}, function(err){
    console.log('Error: ', err);
});*/

