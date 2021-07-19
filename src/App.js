import SwaggerUI from "swagger-ui-react"
import "swagger-ui-react/swagger-ui.css"
import './App.css';

function App() {
  return (
    <div className="App">
      <SwaggerUI url={process.env.PUBLIC_URL + '/openAPI/openapi.yaml'} />
    </div>
  );
}

export default App;
