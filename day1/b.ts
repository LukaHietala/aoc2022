const input = await Deno.readTextFile("input.txt");

const calories = [0]

input.split("\n\n").forEach((line) => {

    const numbers = line.split("\n").map((line) => {
        return parseInt(line);
    });

    const sums = numbers.reduce((a, b) => a + b);
    calories.push(sums);
});

const threeHighest = calories.sort((a, b) => b - a).slice(0, 3);
const sum = threeHighest.reduce((a, b) => a + b);

console.log(sum);