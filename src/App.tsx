import React, { ReactElement } from "react";
import { BrowserRouter, Route } from "react-router-dom";

const repository = "template-react";

export default function App(): ReactElement {
  return (
    <BrowserRouter basename={repository}>
      <Route exact path="/" component={() => <>Home</>} />
      <Route path="/login" component={() => <>Login</>} />
    </BrowserRouter>
  );
}
