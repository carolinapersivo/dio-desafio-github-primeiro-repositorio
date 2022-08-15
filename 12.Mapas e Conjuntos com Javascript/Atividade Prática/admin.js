function getAdmin (Map){
    for ([user, category] of Map){
        if(category === 'Admin'){
            console.log(user);
        }
    }
}
function getAdminExample (Map){
    let listaAdm = [];
    for ([user, category] of Map){
        if(category === 'Admin'){
            listaAdm.push(user);
        }
    }
    return listaAdm;
}

const userList = new Map();
userList.set('Luiz','Admin');
userList.set('Carla','Admin');
userList.set('Joana','User');
userList.set('Igor','User');
userList.set('Maria','Admin');

getAdmin(userList);
console.log(getAdminExample(userList));
console.log('Os administradores são: '+ getAdminExample(userList));