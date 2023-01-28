import * as React from "react";
import "./../assets/scss/App.scss";
import MyButton from '../module-federation/components/MyButton';

const App = () => (
  <div className="app">
    <h1>Hello from remote</h1>
      <MyButton label="my remote button" />
  </div>
);

export default App;
