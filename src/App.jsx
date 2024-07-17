import './App.css';
import {getSoldCount ,getStockCount,getToBeSoldCount} from "./helper/tempFunction.js";
import {
    displayBestBoughtTvName, displayBestTvAvailableSizes,
    displayBestTvPrice,
} from "./helper/displayProduct.js";
// import styles from "./helper/styles.css";
import "./helper/styles.css";
import {bestSellingTv} from "./constants/inventory.js";

function App() {

  const soldCount = getSoldCount();
  const stockCount = getStockCount();
  const toBeSoldCount = getToBeSoldCount();
  // const bestTvName = displayBestBoughtTvName();

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
                  <h3>{toBeSoldCount}</h3>
              </div>
          </div>

          <div>
              <h2>Best verkochte tv</h2>
              <div className="second_lower_container">
                  <div className="second_lower_container_img">
                      <img src={bestSellingTv.sourceImg.toString()} alt="best sold tv image"/>
                  </div>
                  <div className="second_lower_container_detail">
                      <p>
                          {displayBestBoughtTvName()}
                      </p>
                      <p>
                          {displayBestTvPrice()}
                      </p>
                      <p>
                          {displayBestTvAvailableSizes()}
                      </p>
                      <div className="second_lower_container_option_details">
                          {bestSellingTv.options[0].applicable ?
                          (<img src="src/assets/check.png" alt="check image"/>
                              ) : (
                                  <img src="src/assets/minus.png" alt="minus image"/>
                              )}
                          {bestSellingTv.options[0].name}

                          {bestSellingTv.options[1].applicable ?
                              (<img src="src/assets/check.png" alt="check image"/>
                              ) : (
                                  <img src="src/assets/minus.png" alt="minus image"/>
                              )}
                          {bestSellingTv.options[1].name}


                          {bestSellingTv.options[2].applicable ?
                              (<img src="src/assets/check.png" alt="check image"/>
                              ) : (
                                  <img src="src/assets/minus.png" alt="minus image"/>
                              )}
                          {bestSellingTv.options[2].name}

                          {bestSellingTv.options[3].applicable ?
                              (<img src="src/assets/check.png" alt="check image"/>
                              ) : (
                                  <img src="src/assets/minus.png" alt="minus image"/>
                              )}
                          {bestSellingTv.options[3].name}

                          {bestSellingTv.options[4].applicable ?
                              (<img src="src/assets/check.png" alt="check image"/>
                              ) : (
                                  <img src="src/assets/minus.png" alt="minus image"/>
                              )}
                          {bestSellingTv.options[4].name}
                      </div>
                  </div>
              </div>
          </div>


          <div className="third_lower_container">
              <button>Meest verkocht eerst</button>
              <button>Goedkoopste eerst</button>
              <button>Meest geschikt voor sport eerst</button>
          </div>
      </>
  )
}

export default App
