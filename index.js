console.log("JAVASCRIPT CONSOLE")

// READ
let food = await fetch("http://127.0.0.1:8000/food")
let result = await food.json()
