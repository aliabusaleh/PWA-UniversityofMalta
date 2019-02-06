// var database = firebase.database();
let restNames = [];
let restCdValues = [];
let restCerValues = [];
let restPastaValues = [];

//Query DB what food is available
async function checkBottled(bd){
let restNames = [];
let restBdValues = [];
    firebase.database().ref('/Food').once('value').then(function(snapshot){
        let data = snapshot.val();
        restNames = []
        for(key in data){
            restNames.push(key);
        }
        let promise = new Promise(function(resolve, reject){
            let i = 0;
            for(;i<restNames.length;i++){
                firebase.database().ref('/Food/'+ restNames[i]).once('value').then(function(snapshot){
                    let promise1 = new Promise(function(resolve, reject){
                        let data1 = (snapshot.val());
                        if(data1 != null){
                            resolve(data1);
                        }else {
                            reject(Error("Broke"))
                        }
                    })
                    promise1.then(function(result){
                        if(bd >= result.BottledDrinks){
                            restBdValues.push({Name: result._RestName, BottledDrinks: result.BottledDrinks})
                            resolve(restBdValues);
                        }else {
                            reject(Error("Not filled correctly"))
                        }
                    },function(err){
                    }) 
                })
            }
        })
        promise.then(function(result){
           console.log(result) 
           return result
        },function(err){
           console.log(err) 
        })
    })
}
function checkCanned(cd){
    firebase.database().ref('/Food').once('value').then(function(snapshot){
        let data = snapshot.val();
        for(key in data){
            restNames.push(key);
        }
        let i;
        for(i=0; i<restNames.length;i++){
            firebase.database().ref('/Food/'+ restNames[i]).once('value').then(function(snapshot){
                let data = (snapshot.val());
                if(cd >= data.CannedFood){
                    obj = {Name: data._RestName, CannedFood: data.CannedFood}
                    restCdValues.push(obj);
                }
            })
        }
    })
    return restCdValues
}
function checkCereal(cer){
    firebase.database().ref('/Food').once('value').then(function(snapshot){
        var data = snapshot.val();
        for(key in data){
            restNames.push(key);
        }
        var i;
        for(i=0; i<restNames.length;i++){
            firebase.database().ref('/Food/'+ restNames[i]).once('value').then(function(snapshot){
                var data = (snapshot.val());
                if(cer >= data.Cereal){
                    obj = {Name: data._RestName, Cereal: data.Cereal}
                    restCerValues.push(obj);
                }
            })
        }
    })
    return restCerValues
}   
function checkPasta(pasta){
    firebase.database().ref('/Food').once('value').then(function(snapshot){
        var data = snapshot.val();
        for(key in data){
            restNames.push(key);
        }
        var i;
        for(i=0; i<restNames.length;i++){
            firebase.database().ref('/Food/'+ restNames[i]).once('value').then(function(snapshot){
                var data = (snapshot.val());
                if(pasta >= data.Cereal){
                    obj = {Name: data._RestName, Pasta: data.Pasta}
                    restPastaValues.push(obj);
                }
            })
        }
    })
    return restPastaValues
    }
function displayFood(){
}
