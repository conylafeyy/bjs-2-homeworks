function parseCount(smth) {
    let result = Number.parseInt(smth);
    if (isNaN(result)) {
        throw new Error("Невалидное значение");
    } 
    return result;
}

function validateCount(smth) {
    try {
        let result = parseCount(smth);
        return result;
    } catch (e) {
        return e;
    }
}

class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
        if (this.a + this.b < this.c || this.a + this.c < this.b || this.c + this.b < this.a) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
    }

    getPerimeter() {
        return this.a + this.b +this.c;
    }

    getArea() {
        let p = this.getPerimeter() / 2;
        let area = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(3);
        return Number(area);
    }
}

function getTriangle(a, b, c) {
    try {
    return new Triangle(a, b, c);
    } catch (e) {
        return {
            getArea() {
            return "Ошибка! Треугольник не существует"
        }, 
            getPerimeter() {
            return "Ошибка! Треугольник не существует"
        }
    };
    }

}