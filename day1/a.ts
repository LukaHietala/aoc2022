const input = await Deno.readTextFile("input.txt");

let highest = 0;

input.split("\n\n").forEach((line) => {

    const numbers = line.split("\n").map((line) => {
        return parseInt(line);
    });

    const sums = numbers.reduce((a, b) => a + b);
    highest = Math.max(highest, sums);
});

console.log(highest);