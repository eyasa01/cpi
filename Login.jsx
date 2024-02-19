import React from 'react';
function Login()
{
    return(<div className='auth'>
        <h1>LOGIN</h1>
        <form><label htmlFor='login'>LOGIN</label>
        <input type='text' id='login' ></input>
        <label  htmlFor='mdp'>Mot de passe :</label>
        <input type='password' id="mdp"></input></form>
        <button>ENTREE</button>
        
    </div>);
    
}
export default Login;