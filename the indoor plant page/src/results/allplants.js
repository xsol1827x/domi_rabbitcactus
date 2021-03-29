//onclick logout for mobile
function clickLogOut(){
    auth.signOut().then(()=>{
        alert('User signed out');
    })
}

// disable login button when user is logged in?
// listen for auth status changes
auth.onAuthStateChanged(user =>{
    if(user){
        console.log('user logged in')
        document.querySelector('.button-login-open').style.display="none";
    } else{
        console.log('user logged out');
        document.querySelector('.button-login-open').style.display="block";
    }
})