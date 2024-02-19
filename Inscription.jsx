import React from 'react';
function Inscription()
{
    return(<div>
        <H1>INSCRIPTION</H1>
        <form><label htmlFor='nom'>nom:</label>
        <input type='text' id='nom' ></input>
        <label htmlFor='prenom'>prenom:</label>
        <input type='text' id='prenom' ></input>
        <label htmlFor='login'>LOGIN</label>
        <input type='text' id='login' ></input>
        <label  htmlFor='mdp'>Mot de passe :</label>
        <input type='password' id="mdp"></input></form>
        

          </div>);
    
}
export default Inscription;