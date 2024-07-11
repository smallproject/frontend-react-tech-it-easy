import './App.css';
import {getSoldCount} from "./helper/tempFunction.js";
import {getStockCount} from "./helper/tempFunction.js";
// import styles from "./helper/styles.css";
import "./helper/styles.css";

function App() {

  const soldCount = getSoldCount();
  const stockCount = getStockCount();

  return (
      <>
          <h1>Tech it easy dashboard</h1>
          <h2>Verkoopoverzicht</h2>
          <div className="upper_container">
              <div id="sold">
                  <h3>Aantal verkochte producten:</h3>
                  <h3>{soldCount}</h3>
              </div>

              <div id="purchased">
                  <h3>Aantal ingekochte producten Stock:</h3>
                  <h3>{stockCount}</h3>
              </div>

              <div id="toBeSold">
                  <h3>Aantal te verkopen producten:</h3>
                  <h3>{stockCount - soldCount}</h3>
              </div>
          </div>

          <div>
              <h1>Verkoopoverzicht</h1>
              <div className="lower_container">
              </div>
          </div>
      </>
  )
}

export default App
