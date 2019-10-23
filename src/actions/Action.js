//call backend to create a new User and return the saved User.
export const createUserAPI = (originComp, name, age, sex, email) => {
    
    const url = `http://localhost:8080/api/v1/users`;

    fetch(url, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
        }
    }).then(response => {
        convertToJSON(response).then(result => {
            originComp.setNewUser(result);
        })
    }).catch(err => {
       originComp.showError(err);
    })
};

//call backend to get the List of Users.
export const getUserListAPI = (originComp) => {
    
    //const url = 'http://localhost:8080/api/v1/users';
    const url = '../data/users.json';
    
    fetch(url, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
        }
    }).then(response => {
        convertToJSON(response).then(result => {
            originComp.setUserList(result);
        })
    }).catch(err => {
       originComp.showError(err);
    })
};

const convertToJSON = (response) => {
    return Promise.resolve(response.json());
};