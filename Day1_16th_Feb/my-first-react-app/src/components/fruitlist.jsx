function FruitList() {
    const fruits = ['Apple', 'Banana', 'Mango', 'Orange', 'Grapes'];
    return (
        <div>
            <h2>Fruit List</h2>
            <ul>
                {
                    fruits.map(
                        (fruit, index) => <li key={index}>{fruit}</li>
                    )
                }
            </ul>
        </div>
    );
}

export default FruitList;