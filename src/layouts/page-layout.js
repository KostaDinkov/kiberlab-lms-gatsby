import React, {Fragment} from "react";
import Header from "../components/header/header"
import Footer from '../components/footer/footer';

export default function PageLayout({children}){

  return(
    <Fragment>
    <div class = "page-background"></div>
      <div className="page-container">
        <div className="page-content">
          <Header />
          {children}
         
        </div>
        <Footer/>
      </div>
      </Fragment>
    )

}