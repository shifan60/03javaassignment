 # JavaScript
## Assignment 3

### 1. The value of numb1 =?
### Let numb1 = 12
### Numb1 /= 3
```js
 num1 = num1 / num1 
 therefore,
  12/3= 4
  ```
### 2.What does ‘a’ equal?
### Let a = 17 % 4
```js
 Here we perform division :
 let a = 17
 let b = 4
 let a = b % 4
 the reminder = 1 so that a= 1
 ```
### 3.What does x++ equals?
### let x = 3
### x++
   ```js
given x = 3 
   x++ (increment operator)
   so, x = 3+1 ie,
        x = 4
``` 

### 4.Create a Fahrenheit to Celsius converter
### C = ((F -32) * 5) / 9
```js
let celcius = prompt ( "Enter the temp in celcius ")
 f = (celcius * 9/5)+32 
let message = "your current temp is "
alert(`${message} ${f}`)
```

### 4.Create a discount percentage calculator
### discountPercentage = ((MRP – sellingPrice) * 100) / MRP
 ```js
       let MRP = 200 
         
        let sellingPrice = 150
         let discountPercentage = (MRP-sellingPrice)*100/MRP
   //     let message = "The Maximum Retail Price is"
        console.log(discountPercentage + "%");
```
### Create a BMI Calculator 
### BMI = Weight(kg) / (height(m) * height(m))
```js
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function calculateBMI(weight, height) {
    return weight / (height * height);
}
rl.question('Enter your weight (kg): ', (weightInput) => {
    const weight = parseFloat(weightInput);
    rl.question('Enter your height (m): ', (heightInput) => {
        const height = parseFloat(heightInput);
        if (isNaN(weight) || isNaN(height) || height <= 0) {
            console.log('Please enter valid weight and height.');
        } else {
            const bmi = calculateBMI(weight, height);
            let category;
            if (bmi < 18.5) {
                category = 'Underweight';
            } else if (bmi < 24.9) {
                category = 'Normal weight';
            } else if (bmi < 29.9) {
                category = 'Overweight';
            } else {
                category = 'Obese';
            }
            console.log(`Your BMI is: ${bmi.toFixed(2)} (${category})`);
        }
        rl.close();
    });
});
```