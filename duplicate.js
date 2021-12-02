let name = ["ball", "bat"," glove", "glove", "glove"]
let price = [2,3,1,2,1]
let weight = [2,5,1,1,1]
function duplicate (name,price, weight) {
    let object = new Object (
        constructor (name, price, weight){
            this._idComputadora = ++
        }
    )
    for ( let i of name) {
    }
}

SELECT ID, NAME

FROM CUSTOMER

WHERE NAME IN (
    SELECT NAME
    FROM CUSTOMER
    GROUP BY NAME
    HAVING COUNT(NAME) >1
    ORDER BY NAME DESC
)

ORDER BY NAME ASC;