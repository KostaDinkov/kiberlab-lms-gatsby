import React from 'react';
import styles from './lmsTable.module.scss';
import efrontLogo from '../../media/lmsLogo/efront-logo.png'
import matrixLogo from '../../media/lmsLogo/matrix-logo.png'
import sabaLogo from '../../media/lmsLogo/saba-logo.png'
import neoLogo from '../../media/lmsLogo/neo-logo.png'
import cornerstoneLogo from '../../media/lmsLogo/cornerstone-ondemand-logo.png'
import talentLmsLogo from '../../media/lmsLogo/talentlms-logo.png'
import proProfsLogo from '../../media/lmsLogo/proprofs-logo.png'

export default function LmsTable() {
  return (
    <div >
      <table className={styles.lmsTable} >
        <caption>Сравнителна таблица на някои популярни LMS</caption>
        <thead >
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
            <td>
              <img src={efrontLogo} alt="efront logo" />
              <br />
              <a href="https://technologyadvice.com/products/efrontpro-reviews/">eFront</a>
            </td>
            <td>4.5/5</td>
            <td><CheckIcon/></td>
            <td><CheckIcon/></td>
            <td><CheckIcon/></td>
            <td><CheckIcon/></td>
          </tr>
          <tr>
            <td>
              <img src={matrixLogo} alt="matrix logo" /><br />
              <a href="https://technologyadvice.com/products/matrix-lms-reviews/">Matrix</a>
            </td>
            <td>4.5/5</td>
            <td><CheckIcon/></td>
            <td><CheckIcon/></td>
            <td><CheckIcon/></td>
            <td><CheckIcon/></td>
          </tr>
          <tr>
            <td>
              <img src={sabaLogo} alt="saba logo" /><br />
              <a href="https://technologyadvice.com/products/saba-software-reviews/">Saba Cloud</a>
            </td>
            <td>4.5/5</td>
            <td><CheckIcon/></td>
            <td><CheckIcon/></td>
            <td><BanIcon/></td>
            <td><CheckIcon/></td>
          </tr>
          <tr>
            <td>
              <img src={neoLogo} alt="neo logo" /><br />
              <a href="https://technologyadvice.com/products/neo-lms-reviews/">NEO LMS</a>
            </td>
            <td>4.5/5</td>
            <td><CheckIcon/></td>
            <td><CheckIcon/></td>
            <td><CheckIcon/></td>
            <td><CheckIcon/></td>
          </tr>
          <tr>
            <td>
              <img src={cornerstoneLogo} alt="cornerstone logo" />
              <a href="https://technologyadvice.com/products/cornerstone-ondemand-reviews/">Cornerstone</a>
            </td>
            <td>4.5/5</td>
            <td><CheckIcon/></td>
            <td><BanIcon/></td>
            <td><CheckIcon/></td>
            <td><BanIcon/></td>
          </tr>
          <tr>
            <td>
              <img src={talentLmsLogo} alt="talentLms logo" /><br />
              <a href="https://technologyadvice.com/products/talentlms-reviews/">telentlms</a>
            </td>
            <td>4.5/5</td>
            <td><CheckIcon/></td>
            <td><CheckIcon/></td>
            <td><CheckIcon/></td>
            <td><BanIcon/></td>
          </tr>
          <tr>
            <td>
              <img src={proProfsLogo} alt="proProfsLogo" /><br />
              <a href="https://technologyadvice.com/products/proprofs-reviews/">ProProfs</a>
            </td>
            <td>4.5/5</td>
            <td><CheckIcon/></td>
            <td><BanIcon/></td>
            <td><BanIcon/></td>
            <td><BanIcon/></td>
          </tr>
        </tbody>
      </table>
    </div>

  )
}

function CheckIcon() {
  return (
    <i className="fa fa-check-circle-o pass fa-2x" aria-hidden="true"/>
  )
}

function BanIcon() {
  return (
    <i className="fa fa-ban ban fa-2x" aria-hidden="true"/>
  )
}

