import React from "react";
   import ReactDOM from "react-dom";
   import { BrowserRouter, Route, Switch } from "react-router-dom";

   import Home from "./Home";
   import Results from "./Results";

    const rootElement = document.getElementById("root");
    ReactDOM.render(
      <BrowserRouter>
       <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/results" component={Results} />
      </Switch>
      </BrowserRouter>,
      rootElement
    );