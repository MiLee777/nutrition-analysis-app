function DetailedProductAnalysis({ 
    calories,
    fatNutrients, 
    fatDaily, 
    faSatNutrients, 
    faSatDaily, 
    faTrnNutrients, 
    faTrnDaily,
    choleNutrients,
    choleDaily,
    sodiumNutrients,
    sodiumDaily,
    totalCarbNutrients,
    totalCarbDaily,
    fibersNutrients,
    fibersDaily,
    sugarNutrients,
    proteinNutrients,
    proteinDaily,
    vitaminDNutrients,
    vitaminDDaily,
    calciumNutrients,
    calciumDaily,
    ironNutrients,
    ironDaily,
    potassiumNutrients,
    potassiumDaily
}) {

    return (
        <div className='container__nutrition'>
            <div className='container'>
                <h2>Nutrition Facts</h2>
            </div>
            <hr/>
            <div>
                <h3>Amount Per Serving</h3>
                <div className='container__facts'>
                    <h2>Calories</h2>
                    <h2>{ calories }</h2>
                </div>
            </div>
            <hr/>
            <div className='daily__value'>
                <h6>% Daily Value*</h6>
            </div>
            <hr/>
            <div className='container__facts'>
                <p className='par'><span>Total Fat</span> { fatNutrients.toFixed(1) } g</p>
                <span>{ fatDaily.toFixed() } %</span>
            </div>
            <div className='container__facts'>
                <p className='par'>Saturated Fat { faSatNutrients.toFixed(1) } g</p>
                <span>{ faSatDaily.toFixed() } %</span>
            </div>
            <div className='container__facts'>
                <p className='par'>Trans Fat { faTrnNutrients.toFixed(1) } g</p>
                <span>{ faTrnDaily.toFixed() } %</span>
            </div>
            <hr/>
            <div className='container__facts'>
                <p className='par'><span>Cholesterol</span> { choleNutrients.toFixed(1) } mg</p>
                <span>{ choleDaily.toFixed() } %</span>
            </div>
            <hr/>
            <div className='container__facts'>
                <p className='par'><span>Sodium</span> { sodiumNutrients.toFixed(1) } mg</p>
                <span>{ sodiumDaily.toFixed() } %</span>
            </div>
            <hr/>
            <div className='container__facts'>
                <p className='par'><span>Total Carbohydrate</span> { totalCarbNutrients.toFixed(1) } g</p>
                <span>{ totalCarbDaily.toFixed() } %</span>
            </div>
            <div className='container__facts'>
                <p className='par'>Dietary Fiber { fibersNutrients.toFixed(1) } g</p>
                <span>{ fibersDaily.toFixed() } %</span>
            </div>
            <div className='container__facts'>
                <p className='par'>Total Sugars { sugarNutrients.toFixed(1) } g</p>
            </div>
            <div className='container__facts'>
                <p className='par'>Includes - Added Sugars</p>
            </div>
            <hr/>
            <div className='container__facts'>
                <p className='par'><span>Protein</span> { proteinNutrients.toFixed(1) } g</p>
                <span>{ proteinDaily.toFixed() } %</span>
            </div>
            <div className='container__facts'>
                <p className='par'>Vitamin D { vitaminDNutrients.toFixed(1) } g</p>
                <span>{ vitaminDDaily.toFixed() } %</span>
            </div>
            <div className='container__facts'>
                <p className='par'>Calcium { calciumNutrients.toFixed(1) } g</p>
                <span>{ calciumDaily.toFixed() } %</span>
            </div>
            <div className='container__facts'>
                <p className='par'>Iron { ironNutrients.toFixed(1) } g</p>
                <span>{ ironDaily.toFixed() } %</span>
            </div>
            <div className='container__facts'>
                <p className='par'>Potassium { potassiumNutrients.toFixed(1) } g</p>
                <span>{ potassiumDaily.toFixed() } %</span>
            </div>
            <div className='container'>
                <p className='daily__calories'>*Percent Daily Values are based on a 2000 calorie diet</p>
            </div>
        </div>
    )
}

export default DetailedProductAnalysis;