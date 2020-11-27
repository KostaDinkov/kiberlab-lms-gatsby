import React from "react";
import CheckList from "../components/checkList/checkList";
import { graphql } from 'gatsby';
import styles from "./index.module.scss";
import Img from 'gatsby-image';
import ScrollToTop from '../components/scrollToTop/scrollToTop';
import LmsTable from '../components/lmsTable/lmsTable';
import PageLayout from "../layouts/page-layout";

export default function Home(props) {
  return (
    <PageLayout>
      <section className={styles.homePageSection}>
        <div className={styles.heroContainer} >
          <Img className="transparent roundCorners shadow" fluid={props.data.wallpaper.childImageSharp.fluid} />
          <div className={styles.imageOverlay}>
            <h1>Курсова работа по ОУП </h1>
            <p className={styles.subtitle}>
              Прототип на дизайн за система за управление на знанията
                </p>
            <hr></hr>
            <p>
              <em>Автор: Костадин Динков</em><br />
              <em>Студентски №: 46355з </em>
            </p>
            <h3>Съдържание</h3>
            <ul>
              <li><a href="#purpose">Цел на Уеб Проекта</a></li>
              <li><a href="#tech">Използвани технологии</a></li>
              <li><a href="#lms">LMS</a></li>
              <li><a href="#tasks">Курсова работа</a></li>
            </ul>
          </div>
        </div>

        <h2 id="purpose">Цел на Уеб Проекта</h2>
        <p>
          Този уеб проект си поставя за цел две основни задачи.
          Първата е да покрие изискванията на курсовата работа по Основи на Уеб Програмирането
          - дисциплина, която се изучава в първи семестър като част от обучението в направление
          Информатика и Компютърни науки в УниБит. Втората задаче е да бъде разработен прототип на дизайн (UI + UX) за
            уеб базирана ситема за управление на знанията (LMS).<br />
            Кодът на тази курсова работа може да бъде разгледан
            в това <a href="https://github.com/KostaDinkov/kiberlab-lms-gatsby">Github репозитори</a>
        </p>
        <ScrollToTop />

        <h2 id="tech">Използвани Технологии</h2>
        <p>
          За реализирането на този проект е използван Gatsby - генератор за статични сайтове използващ React.
          React е web технология базирана на Javascript и разработена от Facebook, която ни позволява динамично да създаваме
          потребителски интерфейси като комбинираме Javascript и HTML чрез синтаксис наречен JSX. Компонентите написани с
          React могат да постигат високо ниво на абстракция и по-този начин лесно да бъдат преизползвани в различни контексти
          и с променливи данни. Макар че React e front-end-framework, т.е. изпълнява се на клиентския браузър и генерира
          целия HTML в реално време (runtime), Gatsby ни дава възможност да пишем компоненти и уеб страници използвайки
          синтаксиса на React и след това да генерираме статични ресурси (HTML, CSS, Javascript), които да могат да бъдат
          хоствани статично и съответно връщани от http сървър като отговори на Http заяавки.
            </p>
        <ScrollToTop />

        <h2 id="lms">LMS</h2>
        <p style={{ columnCount: 2 }}>
          Системата за управление на знанията, за която се разработва потребителският интерфейс демонстриран с този проект
          има за цел да улесни създаването на онлайн базирани учебни материали и курсове. Потребителите на системата ще
          могат да се регистрират, да се записват за курсове, да разглеждат съдържанието на курсовете, да решават тестове,
          гледат видеа, както и да печелят точки и постижения (badges, achievements) при постигането на определени цели. Администраторите
          на системата ще могат лесно да създават курсове и съдържание, и да получават статискики свързани с прогреса на потребителите.
          Системата е в ранен стадий на разработка (към 23.11.2020), а сървърната технологията, която е използвана е ASP.NET core.
          Дизайнът от този сайт ще бъте пренаписан чрез синтаксисът Razor, който се използва в ASP.NET core и както React, служи
          за описване на UI, чрез комбиниране на Javascript и C#. Кодът за бекенда може да бъде разгледан в
            репозиторито <a href="https://github.com/KostaDinkov/kiberlab-lms-aspnetcore">тук</a>
        </p>
        <LmsTable />
        <ScrollToTop />

        <h2 id="tasks">Курсова работа</h2>
        <p>
          Подробна информация за изпълнението на изискванията по курсовата работа може да бъде намерена в
            раздел <a href="/Courses/">/Courses</a>.<br />
            На текущата страница са използвани следните html/css функционалности:
          </p>
        <CheckList>
          <span>1. Заглавия - <code>&lt;h1&gt; &lt;h2&gt;</code></span>
          <span>2. Параграфи - <code>&lt;p&gt;</code></span>
          <span>3. Хипервръзки - <code>&lt;a&gt;</code></span>
          <span>4. Таблици - за по-добро организиране на кода, таблицата за LMS системите е изнесена в отделен компонент, който може да
                бъде намерен на <code>/src/components/lmsTable/lmsTable.js</code>
          </span>
          <span>5. Списъци - чрез <code>&lt;ul&gt; &lt;li&gt;</code></span>
          <span>6. Използване на изображения - в текущата страница са използвани както html тага <code>&lt;img&gt;</code>,
              така и <code>&lt;Img&gt;</code> компонент от допълнителния плъгин към Gatsby - "gatsby-image", който дава възможност за автоматично оптимизиране
              на използваните изображения</span>
          <span>7. Използване на многоколонен текст - чрез css свойството <code>columnCount:2</code> </span>
          <span>8. Дефиниран CSS в началото на документа или външен CSS файл за стилизиране на документа. <code>normalize.css</code> e външен css файл,
            който предоставя модерни стойности на множество css свойства, като по този начин се преодоляват и някой несъответствия между различните
            браузъри. Във файл <code>/src/styles/global.css</code> се намират глобалните стилове използвани в проекта. Всеки от компонентите или страниците
            в проекта може да съдържа и специфичен файл със css стилове, обикновено с разширение <code>.module.css</code>. По този начин имената на css
            класовете ще станат локални за съответният компонент/страница. Това помага да се избегнат колизии на имена на стилове в проекта.</span>
          <span>9. Включен по избор JavaScript - целият проект е базиран на React, а синтаксиса, използван за описването на потребителския интерфейс, е
          смесица между Javascript и Html.
            </span>
        </CheckList>
        <p>Кодът на текущата страница може се намира в папка <code>src/pages/index.js</code>.</p>
        <ScrollToTop />
      </section>

    </PageLayout>

  )
}
export const pageQuery = graphql`
  query {
  wallpaper:file(sourceInstanceName: {eq: "media"}, relativePath: {eq: "wallpaper.jpg"}) {
    childImageSharp {
      fluid(maxWidth: 960) {
        base64
        tracedSVG
        aspectRatio
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
        originalImg
        originalName
      }
    }
  }
}
`

