![license](https://img.shields.io/badge/license-MIT-blue)
<div align="center">
  <a href="https://opencollective.com/matherrias" target="_blank" rel="noopener noreferrer">
    <img width="300" src="https://opencollective.com/public/images/opencollectivelogo.svg" alt="Open Collective">
  </a>
</div>

# `Type`
[`Circle`](#circle)
[`Cone`](#cone)
[`Rectangle`](#rectangle)
[`Regularpolygon`](#regularpolygon)
[`Rhombus`](#rhombus)
[`Sphere`](#sphere)
[`Square`](#square)
[`Trapezoid`](#trapezoid)
[`Triangle`](#triangle)

## `Circle`
[Area](#circlegetarea)
### `circleGetArea`
- `usage`
```
/*
    @param r - Radius of the circle
    @param P - Pi (mathematical constant, approximately 3.14)
*/
const circleGetArea = require('matherrias');

// Set the radius value (replace '5' with your desired radius)
const r = 5;

// Set the value of Pi (approximately 3.14)
const Pi = 3.14;

// Calculate the area using the circleGetArea function
const result = circleGetArea(r, Pi);

// Output the result
console.log(result);
```
## `Cone`
[Area](#conegetarea)
### `coneGetArea`
- `usage`
```
/*
    @param r - Radius of the cone's base
    @param s - Slant height of the cone
*/
const coneGetArea = require('matherrias');

// Set the radius of the cone's base (replace '4' with your desired radius)
const radius = 4;

// Set the slant height of the cone (replace '7' with your desired slant height)
const slantHeight = 7;

// Calculate the surface area of the cone using the coneGetArea function
const result = coneGetArea(radius, slantHeight);

// Output the result
console.log(result);
```
## `Rectangle`
[Area](#rectanglegetarea)
### `rectangleGetArea`
- `usage`
```
/*
    @param w - Width of the rectangle
    @param h - Height of the rectangle
*/
const rectangleGetArea = require('matherrias');

// Set the width and height values (replace '4' and '6' with your desired values)
const width = 4;
const height = 6;

// Calculate the area using the rectangleGetArea function
const area = rectangleGetArea(width, height);

// Output the result
console.log(area);
```
## `Regularpolygon`
[Area](#regularpolygongetarea)
### `regularpolygonGetArea`
- `usage`
```
/*
    @param P - Perimeter of the regular polygon
    @param a - Length of each side of the regular polygon
*/
const regularPolygonGetArea = require('matherrias');

// Set the perimeter value (replace '20' with your desired perimeter)
const P = 20;

// Set the length of each side (replace '4' with your desired side length)
const a = 4;

// Calculate the area using the regularPolygonGetArea function
const result = regularPolygonGetArea(P, a);

// Output the result
console.log(result);
```
## `Rhombus`
[Area](#rhombusgetarea)
### `rhombusGetArea`
- `usage`
```
/*
    @param D - Length of the longer diagonal
    @param d - Length of the shorter diagonal
*/
const rhombusGetArea = require('matherrias');

// Set the length of the longer diagonal (replace '8' with your desired value)
const D = 8;

// Set the length of the shorter diagonal (replace '6' with your desired value)
const d = 6;

// Calculate the area using the rhombusGetArea function
const result = rhombusGetArea(D, d);

// Output the result
console.log(result);
```
## `Sphere`
[Area](#spheregetarea)
### `sphereGetArea`
- `usage`
```
/*
    @param r - Radius of the sphere
*/
const sphereGetArea = require('matherrias');

// Set the radius value (replace '3' with your desired radius)
const r = 3;

// Calculate the surface area using the sphereGetArea function
const result = sphereGetArea(r);

// Output the result
console.log(result);
```
## `Square`
[Area](#squaregetarea)
### `squareGetArea`
- `usage`
```
/*
    @param l - Length of one side of the square
*/
const squareGetArea = require('matherrias');

// Set the length of one side of the square (replace '4' with your desired length)
const l = 4;

// Calculate the area using the squareGetArea function
const result = squareGetArea(l);

// Output the result
console.log(result);
```
## `Trapezoid`
[Area](#trapezoidgetarea)
### `trapezoidGetArea`
- `usage`
```
/*
    @param B - Length of the longer base of the trapezoid
    @param b - Length of the shorter base of the trapezoid
    @param h - Height of the trapezoid
*/
const trapezoidGetArea = require('matherrias');

// Set the lengths of the bases and the height (replace values as needed)
const B = 8;  // Length of the longer base
const b = 5;  // Length of the shorter base
const h = 3;  // Height of the trapezoid

// Calculate the area using the trapezoidGetArea function
const result = trapezoidGetArea(B, b, h);

// Output the result
console.log(result);
```
## `Triangle`
[Area](#trianglegetarea)
### `triangleGetArea`
- `usage`
```
/*
    @param b - Base length of the triangle
    @param h - Height of the triangle
*/
const triangleGetArea = require('matherrias');

// Set the base length (replace '6' with your desired base length)
const baseLength = 6;

// Set the height (replace '8' with your desired height)
const height = 8;

// Calculate the area using the triangleGetArea function
const triangleArea = triangleGetArea(baseLength, height);

// Output the result
console.log(triangleArea);
```