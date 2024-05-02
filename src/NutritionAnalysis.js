import { useEffect, useState } from 'react';
import ProductAnalysis from './ProductAnalysis';
import DetailedProductAnalysis from './DetailedProductAnalysis';

function NutritionAnalysis() {
    const MY_ID = '6590dde0';
    const MY_KEY = 'b2a254f2b9be408c005471a70901b6c3';

    const [search, setSearch] = useState('');
    const [product, setProduct] = useState({});
    const [wordSubmitted, setWordSubmittet] = useState('');

    useEffect(() => {
        const nutritionAnalysisData = async () => {
            const response = await fetch(`https://api.edamam.com/api/nutrition-data?app_id=${MY_ID}&app_key=${MY_KEY}&nutrition-type=cooking&ingr=${wordSubmitted}`);
            const data = await response.json();
            setProduct(data);
        };
        nutritionAnalysisData();
    }, [wordSubmitted]);

    const searchProduct = (e) => {
        setSearch(e.target.value)
    }

    const searchByEnter = (e) => {
        e.preventDefault();
        setWordSubmittet(search)
    }

    const getNutrientValue = (nutrient) => {
        return product.totalNutrients && product.totalNutrients[nutrient] ? product.totalNutrients[nutrient].quantity : 0;
    }

    const getDailyValue = (nutrient) => {
        return product.totalDaily && product.totalDaily[nutrient] ? product.totalDaily[nutrient].quantity : 0;
    }

    return (
        <div>
            <div className="container">
                <h1>Nutrition Analysis</h1>
            </div>
            <div>
                <form className='input-form' onSubmit={ searchByEnter }>
                    <i className='fas fa-search'></i>
                    <input placeholder='Enter quantity, unit and product name (for example: 1 cup rice) ...'
                    onChange={ searchProduct }
                    value={search} />
                </form>
            </div>
            <div className="container">
                <button onClick={ searchByEnter }>Analyze</button>
            </div>
            <div>
                {product.ingredients && product.ingredients.length > 0 && product.ingredients[0].parsed && product.ingredients[0].parsed.length > 0 && (    
                    <ProductAnalysis
                    quantity={product.ingredients[0].parsed[0].quantity}
                    measure={product.ingredients[0].parsed[0].measure}
                    food={product.ingredients[0].parsed[0].foodMatch}
                    weight={product.totalWeight}
                    calories={product.calories} />
                )}
            </div>
            <div>
                <DetailedProductAnalysis
                calories={product.calories}
                fatNutrients={getNutrientValue('FAT')}
                fatDaily={getDailyValue('FAT')}
                faSatNutrients={getNutrientValue('FASAT')}
                faSatDaily={getDailyValue('FASAT')}
                faTrnNutrients={getNutrientValue('FATRN')}
                faTrnDaily={getDailyValue('FATRN')}
                choleNutrients={getNutrientValue('CHOLE')}
                choleDaily={getDailyValue('CHOLE')}
                sodiumNutrients={getNutrientValue('NA')}
                sodiumDaily={getDailyValue('NA')}
                totalCarbNutrients={getNutrientValue('CHOCDF')}
                totalCarbDaily={getDailyValue('CHOCDF')} 
                fibersNutrients={getNutrientValue('FIBTG')}
                fibersDaily={getDailyValue('FIBTG')}
                sugarNutrients={getNutrientValue('SUGAR')}
                proteinNutrients={getNutrientValue('PROCNT')}
                proteinDaily={getDailyValue('PROCNT')}
                vitaminDNutrients={getNutrientValue('VITD')}
                vitaminDDaily={getDailyValue('VITD')}
                calciumNutrients={getNutrientValue('CA')}
                calciumDaily={getDailyValue('CA')}
                ironNutrients={getNutrientValue('FE')}
                ironDaily={getDailyValue('FE')}
                potassiumNutrients={getNutrientValue('K')}
                potassiumDaily={getDailyValue('K')}
                
                />
            </div>
        </div>
    );
}

export default NutritionAnalysis;