import React from 'react'
import PageLayout from '../layouts/page-layout';
import styles from './forms.module.scss';
import {Link} from 'gatsby'

export default function SignIn(){
  return(
    <PageLayout>
      <div className={styles.formWrapper}>
        <h1>Вход за потребители</h1>
        <p>Моля въведете вашитата електронна поща и парола в съответните полета</p>
      <form action="" method="post" className="halfCentered">
        <label for="email">Електронна поща</label>
        <input className={styles.textInput} type="email" name="email" id="email" required/>
        
        <label for="password">Парола</label>
        <input className={styles.textInput} type="password" name="password" id="password"required/>
        
        <input className= "actionButton" type="submit" value="Влез"/> 
        <span> Или се <Link to="/register">регистрирай</Link></span>
      </form>
      </div>
    </PageLayout>
  )
}