function ProductAnalysis({ quantity, measure, food, weight, calories }) {
    return (
        <div className="container container__info">
            <div>
                <h4>Qty</h4>
                <p>{ quantity }</p>
            </div>
            <div>
                <h4>Unit</h4>
                <p>{ measure }</p>
            </div>
            <div>
                <h4>Food</h4>
                <p>{ food }</p>
            </div>
            <div>
                <h4>Weight</h4>
                <p>{ weight } g</p>
            </div>
            <div>
                <h4>Calories</h4>
                <p>{ calories } kcal</p>
            </div>
        </div>
    )
}

export default ProductAnalysis;