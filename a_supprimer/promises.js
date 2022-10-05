class fakeAxios {
  get(url) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if(Math.random() < 0.3) resolve('Pleins de users');
        else reject('BOOM !')
      }, 2000)
    })
  }
}
// import
const axios = new fakeAxios();

let users;

axios.get('www.monapi.com/user')
  .then((response) => {
    users = response;
    displayUsers();
  }).catch((error) => console.log(`Oups, quelque chose s'est mal passé : ${error}`))


function displayUsers() {
  console.log(users)
}


