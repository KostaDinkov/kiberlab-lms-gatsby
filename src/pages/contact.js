import React from "react"
import PageLayout from '../layouts/page-layout'
import styles from './contact.module.scss'
export default function Contact(){
  return(
    <PageLayout>
      <div className={styles.contactWrapper}>
      <h1>Свържете се с нас</h1>
      <table className={styles.contactsTable}>
        <tr>
          <td>Адрес:</td>
          <td>гр. София, п.к. 1784, бул. “Цариградско шосе” № 119</td>
        </tr>
        <tr>
          <td>Телефон:</td>
          <td>+359 (0) 2 970 85 88/+359 882 129 397</td>
        </tr>
        <tr>
          <td>Електронна поща:</td>
          <td>unibit@unibit.bg</td>
        </tr>
        
      </table>

      <h2>Направете запитване</h2>
      <form action="" method="get" className={styles.contactForm}>
        <textarea name="message" id="message" rows="10" placeholder="Въведете вашето съобщение тук..."/>
        <input className="actionButton" type="submit" value="Изпрати"/>
      </form>
      </div>
    </PageLayout>
  )
}
