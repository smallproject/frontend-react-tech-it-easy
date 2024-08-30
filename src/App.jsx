// imported necessary class dependency
import './App.css';
import {useState} from "react";

// imported helper functions
import {getSoldCount ,getStockCount,getToBeSoldCount} from "./helper/getTVStatistics.js";
import {
    displayAvailableSizes,
    displayBestBoughtTvName, displayBestTvAvailableSizes,
    displayBestTvPrice, displayPrice, displayTvName,
} from "./helper/displayProduct.js";

import {
    goedKoopsteEerst,
    grootsteSchermgroottesEerst,
    meestGeschiktVoorSportEerst,
    meestVerkochtEerst
} from "./helper/getSorting.js";
import {getTvBrands, getTvNames, getTvTypes} from "./helper/getTvTypes.js";

// imported constant files
import {bestSellingTv, inventory} from "./constants/inventory.js";
import "./helper/styles.css";
import check from "./assets/check.png";
import minus from "./assets/minus.png";

function App() {

  const soldCount = getSoldCount();
  const stockCount = getStockCount();
  const toBeSoldCount = getToBeSoldCount();

  const [televisions, setTelevision] = useState(inventory);

    function setter(sorted) {
        setTelevision(sorted);
    }

  return (
      <>
          <main>
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
                      <article className="product">
                          <span className="product-image">
                              <img src={bestSellingTv.sourceImg} alt="best sold tv image"/>
                          </span>
                          <div className="product-information">
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
                      </article>
                  </div>
              </section>

              <section>
                  <div className="third_lower_container">
                      <h2>Alle tvs</h2>
                      <button onClick={() => setter(meestVerkochtEerst)}>Meest verkocht eerst</button>
                      <button onClick={() => setter(goedKoopsteEerst)}>Goedkoopste eerst</button>
                      <button onClick={() => setter(meestGeschiktVoorSportEerst)}>Meest geschikt voor sport eerst</button>
                      <button onClick={() => setter(grootsteSchermgroottesEerst)}>Grootste schermgroottes eerst</button>
                      {getTvTypes()}
                      {getTvNames()}
                      {getTvBrands()}

                      <div>


                          {televisions.map((televisions) => {
                              return (
                                  <article key={televisions.type} className="product" >
                                      <span className="product-image">
                                          <img src={televisions.originalStock === televisions.sold ? "src/assets/out-of-stock.png" : televisions.sourceImg} alt="Afbeelding van het product"/>
                                      </span>

                                      <div className="product-information">
                                          <h3>{displayTvName(televisions)}</h3>
                                          <p className="product-price">{displayPrice(televisions)}</p>
                                          <p>{displayAvailableSizes(televisions)}</p>
                                          <ul className="option-list">
                                              {televisions.options.map((option) => {
                                                  if (option.applicable === true) {
                                                      return <li key={`${televisions.type}-${option.name}`}><img src={check} alt="Icoon: aanwezig" className="icon"/>{option.name}</li>
                                                  } else {
                                                      return <li key={`${televisions.type}-${option.name}`}><img src={minus} alt="Icoon: niet aanwezig" className="icon"/>{option.name}</li>
                                                  }
                                              })}
                                          </ul>
                                      </div>
                                  </article>
                              )
                          })}
                      </div>


                      {/*console logs is hidden here*/}
                      <div>
                      {/*    /!*console logs begins here*!/*/}
                      {/*    /!*opdracht deel 2*!/*/}
                      {/*    {consoleFunctions()}*/}
                      {/*    {getSoldOutTV()}*/}
                      {/*    {getAvailableTVOnSize()}*/}
                      {/*    {getTvOnType()}*/}
                      {/*    {getAvaialableTVOnRefreshRate()}*/}
                      {/*    {getAvailableTVOnAmbilightOption()}*/}
                      </div>
                  </div>
              </section>
          </main>
      </>
  )


}

export default App
