import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Newscard from "../Newscard.js/Newscard";
import './newscontent.css';
const  newcontent=({newsarray,newresults})=> {
    console.log(newsarray);
  return (
    <React.Fragment>
    <CssBaseline />
      <Container id='contanier'>
          {
             newsarray.map((newsItem)=>(
                <Newscard  newsItem={newsItem}  key={newsItem.title} />
             ))
        
          }
        
          <button className="loadmore">Loadmore</button>
     
      </Container>
  </React.Fragment>
  );
}
export default newcontent;
