import React from 'react'
import PageLayout from '../layouts/page-layout';
import styles from './forms.module.scss';

export default function Register(){
  return(
    <PageLayout>
      <div className={styles.formWrapper}>
        <h1>Регистрация на нов потребител</h1>
        <p>Попълнете данните в съответните полета.</p>
      <form action="" method="post" className="halfCentered">
        
        <label htmlFor="email">Електронна поща </label>
        <input className={styles.textInput} type="email" name="email" id="email" required/>
        
        <label htmlFor="password">Име </label>
        <input className={styles.textInput} type="text" name="text" id="text" required/>
        
        <label htmlFor="password">Фамилия</label>
        <input className={styles.textInput} type="text" name="text" id="text" required/>
        
        <label htmlFor="password">Парола</label>
        <input className={styles.textInput} type="password" name="password" id="password" required/>

        <label htmlFor="password">Повторете паролата</label>
        <input className={styles.textInput} type="password" name="password" id="password" required/>

        <input className= "actionButton" type="submit" value="Изпрати"/>
      </form>
      </div>
    </PageLayout>
  )
}