const form = document.querySelector("form")
const a = document.querySelector("#a")
const b = document.querySelector("#b")
const c = document.querySelector("#c")
const Results = document.querySelector("#Results")
const ResultsAprox = document.querySelector("#ResultsAprox")

class Quadratic {
    constructor(a, b, c) {
        this.a = a
        this.b = b
        this.c = c
    }

    solveQuadratic() {
        let discriminant = this.b ** 2 - 4 * this.a * this.c;

        if (this.a === 0) {
            return "This is not a quadratic equation.";
        }
        else if (discriminant > 0) {
            let root1 = (-this.b + Math.sqrt(discriminant)) / (2 * this.a);
            let root2 = (-this.b - Math.sqrt(discriminant)) / (2 * this.a);
            Results.innerHTML = `X<sub>1</sub>: ${root1}, X<sub>2</sub>: ${root2}`;
            ResultsAprox.innerHTML = `X<sub>1</sub>: ${Math.round(root1)}, X<sub>2</sub>: ${Math.round(root2)}`;
        }
        else if (discriminant == 0) {
            let root = -this.b / (2 * this.a);
            Results.innerHTML = `X : ${root}`;
        }
        else {
            Results.innerHTML = `X: Is A Comlpex Number`;
        }
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const aValue = a.value;
    const bValue = b.value;
    const cValue = c.value;

    const solution = new Quadratic(aValue, bValue, cValue).solveQuadratic()
})