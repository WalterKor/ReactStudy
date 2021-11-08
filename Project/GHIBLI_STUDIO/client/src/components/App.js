import React, {Suspense} from "react";
import {Route, Switch} from 'react-router-dom';

function App() {
  return (
    <Suspense fallback={(<div>Loading...</div>)}>
      <div>hello</div>
    </Suspense>
  );
}

export default App;
