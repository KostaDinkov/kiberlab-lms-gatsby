import React from 'react';
import styles from './lmsTable.module.css';

export default function LmsTable() {
  return (
    <div >
      <table className={styles.lmsTable} >
        <thead >
          <tr>
            <th colSpan="6">Сравнение на някои популярни LMS</th>
          </tr>
          <tr>
            <td>Продукт</td>
            <td>TA Rating</td>
            <td>Curriculum & Content mgmnt</td>
            <td>Gamification</td>
            <td>Mobile Learning</td>
            <td>Social Learning</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>eFront</td>
            <td>4.5/5</td>
            <td><i class="fa fa-check-circle-o" aria-hidden="true"></i></td>
            <td><i class="fa fa-ban" aria-hidden="true"></i></td>
            <td><i class="fa fa-check-circle-o" aria-hidden="true"></i></td>
            <td><i class="fa fa-check-circle-o" aria-hidden="true"></i></td>
          </tr>
          <tr>
            <td>Matrix</td>
            <td>4.5/5</td>
            <td><i class="fa fa-check-circle-o" aria-hidden="true"></i></td>
            <td><i class="fa fa-ban" aria-hidden="true"></i></td>
            <td><i class="fa fa-check-circle-o" aria-hidden="true"></i></td>
            <td><i class="fa fa-check-circle-o" aria-hidden="true"></i></td>
          </tr>
          <tr>
            <td>Saba Cloud</td>
            <td>4.5/5</td>
            <td><i class="fa fa-check-circle-o" aria-hidden="true"></i></td>
            <td><i class="fa fa-ban" aria-hidden="true"></i></td>
            <td><i class="fa fa-check-circle-o" aria-hidden="true"></i></td>
            <td><i class="fa fa-check-circle-o" aria-hidden="true"></i></td>
          </tr>
          <tr>
            <td>NEO LMS</td>
            <td>4.5/5</td>
            <td><i class="fa fa-check-circle-o" aria-hidden="true"></i></td>
            <td><i class="fa fa-ban" aria-hidden="true"></i></td>
            <td><i class="fa fa-check-circle-o" aria-hidden="true"></i></td>
            <td><i class="fa fa-check-circle-o" aria-hidden="true"></i></td>
          </tr>
          <tr>
            <td>Cornerstone</td>
            <td>4.5/5</td>
            <td><i class="fa fa-check-circle-o" aria-hidden="true"></i></td>
            <td><i class="fa fa-ban" aria-hidden="true"></i></td>
            <td><i class="fa fa-check-circle-o" aria-hidden="true"></i></td>
            <td><i class="fa fa-check-circle-o" aria-hidden="true"></i></td>
          </tr>
          <tr>
            <td>telentlms</td>
            <td>4.5/5</td>
            <td><i class="fa fa-check-circle-o" aria-hidden="true"></i></td>
            <td><i class="fa fa-ban" aria-hidden="true"></i></td>
            <td><i class="fa fa-check-circle-o" aria-hidden="true"></i></td>
            <td><i class="fa fa-check-circle-o" aria-hidden="true"></i></td>
          </tr>
          <tr>
            <td>ProProfs</td>
            <td>4.5/5</td>
            <td><i class="fa fa-check-circle-o" aria-hidden="true"></i></td>
            <td><i class="fa fa-ban" aria-hidden="true"></i></td>
            <td><i class="fa fa-check-circle-o" aria-hidden="true"></i></td>
            <td><i class="fa fa-check-circle-o" aria-hidden="true"></i></td>
          </tr>
        </tbody>
      </table>
    </div>

  )
}