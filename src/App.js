import React from "react";
import {BrowserRouter} from "react-router-dom";
import Routes from "./app/Routes";

function App() {
  return (
    <React.Suspense fallback={() => <div>Loading...</div>}>
      {/* Override `basename` (e.g: `homepage` in `package.json`) */}
      <BrowserRouter>
        <Routes/>
      </BrowserRouter>
    </React.Suspense>
  );
}

export default App;
