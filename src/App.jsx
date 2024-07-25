import './App.css';
import {getSoldCount ,getStockCount,getToBeSoldCount} from "./helper/getTVStatistics.js";
import {
    displayAvailableSizes,
    displayBestBoughtTvName, displayBestTvAvailableSizes,
    displayBestTvPrice, displayPrice, displayTvName,
} from "./helper/displayProduct.js";

import {
    consoleFunctions,
    getSoldOutTV,
    getAvailableTVOnSize,
    getTvOnType,
    getAvaialableTVOnRefreshRate, getAvailableTVOnAmbilightOption
} from "./helper/consoleFunctions.js";

// import styles from "./helper/styles.css";
import "./helper/styles.css";
import {bestSellingTv, inventory} from "./constants/inventory.js";
import {getTvBrands, getTvNames, getTvTypes} from "./helper/getTvTypes.js";
import check from "./assets/check.png";
import minus from "./assets/minus.png";

function App() {

  const soldCount = getSoldCount();
  const stockCount = getStockCount();
  const toBeSoldCount = getToBeSoldCount();
  // const bestTvName = displayBestBoughtTvName();

  return (
      <>
          <section>
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
          </section>

          <section>
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
          </section>

          <section>
              <div className="third_lower_container">
                  <h2>Alle tvs</h2>
                  <button>Meest verkocht eerst</button>
                  <button>Goedkoopste eerst</button>
                  <button>Meest geschikt voor sport eerst</button>
                  {getTvTypes()}
                  {getTvNames()}
                  {getTvBrands()}
                  <div>
                      {inventory.map((tv) => {
                          return (
                              <article className="product" key={tv.type}>
                                  <span className="product-image">
                                      <img src={tv.sourceImg} alt="Afbeelding van het product"/>
                                  </span>

                                  <div className="product-info">
                                      <h3>{displayTvName(tv)}</h3>
                                      <p className="product-price">{displayPrice(tv)}</p>
                                      <p>{displayAvailableSizes(tv)}</p>
                                      <ul className="option-list">
                                          {tv.options.map((option) => {
                                              if (option.applicable === true) {
                                                  return <li key={`${tv.type}-${option.name}`}><img src={check} alt="Icoon: aanwezig" className="icon"/>{option.name}</li>
                                              } else {
                                                  return <li key={`${tv.type}-${option.name}`}><img src={minus} alt="Icoon: niet aanwezig" className="icon"/>{option.name}</li>
                                              }
                                          })}
                                      </ul>
                                  </div>
                              </article>
                          )
                      })}
                  </div>


                  {/*<div>*/}
                  {/*    /!*console logs begins here*!/*/}
                  {/*    /!*opdracht deel 2*!/*/}
                  {/*    {consoleFunctions()}*/}
                  {/*    {getSoldOutTV()}*/}
                  {/*    {getAvailableTVOnSize()}*/}
                  {/*    {getTvOnType()}*/}
                  {/*    {getAvaialableTVOnRefreshRate()}*/}
                  {/*    {getAvailableTVOnAmbilightOption()}*/}
                  {/*</div>*/}
              </div>
          </section>
      </>
  )
}

export default App
