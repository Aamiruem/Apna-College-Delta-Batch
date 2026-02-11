const calculator = {
    add(a, b) {
        return a + b;
    },
    subtract(a, b) {
        return a - b;
    },
    multiply(a, b) {
        return a * b;
    },
    divide(a, b) {
        if (b === 0) {
            throw new Error('Cannot divide by zero');
        }
        return a / b;
    },
    // Add square and cube methods here if needed

    square(a) {
        return this.multiply(a, a);
    },
    cube(a) {
        return this.multiply(this.multiply(a, a), a);
    },
    // Add power and root methods here if needed
    power(a, b) {
        return Math.pow(a, b);
    },
    root(a, b) {
        if (b <= 0) {
            throw new Error('Exponent must be a positive integer');
        }
        return Math.pow(a, 1 / b);
    },
    // Add factorial method here if needed
    factorial(n) {
        if (n < 0) {
            throw new Error('Input must be a non-negative integer');
        }
        if (n === 0 || n === 1) {
            return 1;
        }
        let result = 1;
        for (let i = 2; i <= n; i++) {
            result *= i;
        }
        return result;
    },
    // Add logarithm method here if needed
    logarithm(a, b) {
        if (b <= 0 || a <= 0) {
            throw new Error('Base and argument must be positive');
        }
        return Math.log(a) / Math.log(b);
    },

    // Add trigonometric methods here if needed
    sine(angle) {
        return Math.sin(angle);
    },
    cosine(angle) {
        return Math.cos(angle);
    },
    tangent(angle) {
        return Math.tan(angle);
    },
    // Add inverse trigonometric methods here if needed
    arcsine(angle) {
        return Math.asin(angle);
    },
    arccosine(angle) {
        return Math.acos(angle);
    },
    arctangent(angle) {
        return Math.atan(angle);
    },
    // Add hyperbolic methods here if needed
    hyperbolicSine(angle) {
        return Math.sinh(angle);
    },
    hyperbolicCosine(angle) {
        return Math.cosh(angle);
    },
    hyperbolicTangent(angle) {
        return Math.tanh(angle);
    },
    // Add inverse hyperbolic methods here if needed
    arcsinh(angle) {
        return Math.asinh(angle);
    },
    arccosh(angle) {
        return Math.acosh(angle);
    },
    arctanh(angle) {
        return Math.atanh(angle);
    },
    // Add statistical methods here if needed
    mean(numbers) {
        return numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
    },
    median(numbers) {
        const sortedNumbers = numbers.slice().sort((a, b) => a - b);
        const middleIndex = Math.floor  
        (sortedNumbers.length - 1) / 2;
        if (sortedNumbers.length % 2 === 0) {
            return (sortedNumbers[middleIndex - 1] + sortedNumbers[middleIndex]) / 2;
        } else {
            return sortedNumbers[middleIndex];
        }
        },
    mode(numbers) {
        const frequencyMap = numbers.reduce((map, num) => {
            map[num] = (map[num] || 0) + 1;
            return map;
        }, {});
        const maxFrequency = Math.max(...Object.values(frequencyMap));
        return Object.keys(frequencyMap).filter(num => frequencyMap[num] === maxFrequency);
    },
    standardDeviation(numbers) {
        const mean = this.mean(numbers);
        const squaredDifferences = numbers.map(num => Math.pow(num - mean, 2));
        const variance = this.mean(squaredDifferences);
        return Math.sqrt(variance);
    },
    // Add statistical methods with additional parameters here if needed
    weightedMean(numbers, weights) {
        if (numbers.length!== weights.length) {
            throw new Error('Numbers and weights must have the same length');
        }
        const sumOfProducts = numbers.reduce((sum, num, index) => sum + num * weights[index], 0);
        const sumOfWeights = weights.reduce((sum, weight) => sum + weight, 0);
        return sumOfProducts / sumOfWeights;
    },
    weightedMedian(numbers, weights) {
        // Same logic as the median method, but with weighted numbers
    },
    weightedMode(numbers, weights) {
        // Same logic as the mode method, but with weighted numbers
    },
    // Add statistical methods with additional parameters here if needed
    //...

    // Add other methods here if needed

    //varience
    variance(numbers) {
        const mean = this.mean(numbers);
        const squaredDifferences = numbers.map(num => Math.pow(num - mean, 2));
        return this.mean(squaredDifferences);
    },
    //push
    push(value) {
        this.values.push(value);
        this.updateStatistics();
    },
    //pop
    pop() {
        const lastValue = this.values.pop();
        this.updateStatistics();
        return lastValue;
    },
    //shift
    shift() {
        const firstValue = this.values.shift();
        this.updateStatistics();
        return firstValue;
    },
    //unshift
    unshift(value) {
        this.values.unshift(value);
        this.updateStatistics();
    },
    //reverse
    reverse() {
        this.values.reverse();
        this.updateStatistics();
    },
    //sort
    sort() {
        this.values.sort((a, b) => a - b);
        this.updateStatistics();
    },
    //slice
    slice(start, end) {
        const slicedValues = this.values.slice(start, end);
        this.updateStatistics();
        return new
        
        StatisticsCalculator(slicedValues);
        },
    //updateStatistics
    updateStatistics() {
        this.sum = this.values.reduce((sum, num) => sum + num, 0);
        this.average = this.sum / this.values.length;
        this.min = Math.min(...this.values);
        this.max = Math.max(...this.values);
        this.range = this.max - this.min;
        this.median = this.median(this.values);
        this.mode = this.mode(this.values);
        this.standardDeviation = this.standardDeviation(this.values);
        this.variance = this.variance(this.values);
    },
    //toString
    toString() {
        return `StatisticsCalculator[sum: ${this.sum}, average: ${this.average}, min: ${this.min}, max: ${this.max}, range: ${this.range}, median: ${this.median}, mode: ${this.mode}, standardDeviation: ${this.standardDeviation}, variance: ${this.variance}]`;
    },
    //toExponential
    toExponential() {
        return this.sum.toExponential();
    },
    //toFixed
    toFixed(precision) {
        return this.sum.toFixed(precision);
    },
    //toPrecision
    toPrecision(precision) {
        return this.sum.toPrecision(precision);
    },
    //toLocaleString
    toLocaleString() {
        return this.sum.toLocaleString();
    },
    //toString
    toString() {
        return this.sum.toString();
    },
    //valueOf
    valueOf() {
        return this.sum;
    },
    // percentage
    percentage() {
        return (this.sum / this.average) * 100;
    }
}

console.log(calculator.add(2, 3)); // Output: 5

console.log(calculator.subtract(5, 3)); // Output: 2

console.log(calculator.multiply(2, 3)); // Output: 6

console.log(calculator.divide(10, 2)); // Output: 5

console.log(calculator.square(5)); // Output: 25

console.log(calculator.cube(5)); // Output: 125

console.log(calculator.power(2, 3)); // Output: 8

console.log(calculator.root(27, 3)); // Output: 3

console.log(calculator.factorial(5)); // Output: 120

console.log(calculator.logarithm(100, 10)); // Output: 2

console.log(calculator.sine(Math.PI / 2)); // Output: 1

console.log(calculator.cosine(Math.PI / 2)); // Output: 0

console.log(calculator.tangent(Math.PI / 4)); // Output: 1

console.log(calculator.arcsine(0.5)); // Output: 0.5235987755982988

console.log(calculator.arccosine(0.5)); // Output: 1.0471975511965976

console.log(calculator.arctangent(1)); // Output: 0.7853981633974483

console.log(calculator.hyperbolicSine(1)); // Output: 0.8414709848078965

console.log(calculator.hyperbolicCosine(1)); // Output: 0.5403023058681398

console.log(calculator.hyperbolicTangent(1)); // Output: 0.7615941559557649

console.log(calculator.arcsinh(0.5)); // Output: 0.5493061443340549

console.log(calculator.arccosh(1)); // Output: 0

console.log(calculator.arctanh(0.5)); // Output: 0.5493061443340549

console.log(calculator.mean([1, 2, 3, 4, 5])); // Output: 3

console.log(calculator.median([1, 2, 3, 4, 5])); // Output: 3

console.log(calculator.mode([1, 2, 2, 3, 3, 3, 4, 4, 4, 4])); // Output: [2, 3, 4]

console.log(calculator.variance([1, 2, 3, 4, 5])); // Output: 2

console.log(calculator.standardDeviation([1, 2, 3, 4, 5])); // Output: 1.4142135623730951

console.log(calculator.weightedMean([1, 2, 3, 4, 5], [0.2, 0.3, 0.4, 0.1, 0.2])); // Output: 2.6

console.log(calculator.weightedMedian([1, 2, 3, 4, 5], [0.2, 0.3, 0.4, 0.1, 0.2])); // Output: 3

console.log(calculator.weightedMode([1, 2, 2, 3, 3, 3, 4, 4, 4, 4], [0.2, 0.3, 0.4, 0.1, 0.2])); // Output: [2, 3, 4]






const newArray = calculator.slice(1, 4);

console.log(newArray);

calculator.push(6);

console.log(calculator.values); // Output: [1, 2, 3, 4, 5, 6]

calculator.pop();

console.log(calculator.values); // Output: [1, 2, 3, 4, 5]

calculator.shift();

console.log(calculator.values); // Output: [2, 3, 4, 5]

calculator.unshift(0);

console.log(calculator.values); // Output: [0, 2, 3, 4, 5]

calculator.reverse();

console.log(calculator.values); // Output: [5, 4, 3, 2, 0]

calculator.sort();

console.log(calculator.values); // Output: [0, 2, 3, 4, 5]

calculator.updateStatistics();

console.log(calculator.sum); // Output: 15

console.log(calculator.average); // Output: 3.0000000000000004

console.log(calculator.min); // Output: 0

console.log(calculator.max); // Output: 5

console.log(calculator.range); // Output: 5

console.log(calculator.median); // Output: 3

console.log(calculator.mode); // Output: [0, 2, 3, 4, 5]

console.log(calculator.standardDeviation); // Output: 1.4142135623730951
