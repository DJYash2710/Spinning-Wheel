# Wheel Spin

A browser-based wheel-of-fortune demo built with p5.js. The project draws a rotating prize wheel, lets users click a spin button, and shows a result when the wheel stops.

## Demo

- Spin the wheel by clicking the `SPIN` button.
- The wheel starts spinning at a random speed and slows down naturally.
- When the wheel stops, the winning segment result is displayed.
- A confetti effect plays automatically after each spin.

## Features

- Responsive canvas using `windowWidth` and `windowHeight`
- 6 prize segments with alternating colors
- Labels for each segment:
  - `100 points`
  - `200 points`
  - `Free Spin`
  - `400 points`
  - `500 points`
  - `Try Again`
- Smooth spin physics with acceleration and deceleration
- Pointer that indicates the current winning segment
- Confetti celebration using `tsparticles.confetti`

## Files

- `index.html` - loads p5.js, confetti library, and `sketch.js`
- `sketch.js` - main p5.js sketch with wheel rendering, spin logic, and result calculation
- `css/style.css` - basic centered layout and background styling

## How to Run

1. Open `index.html` in a modern web browser.
2. Click the `SPIN` button on the canvas.
3. Watch the wheel rotate and see the result once it stops.

### Recommended Local Server

For best results, run from a local server instead of opening the file directly.

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js
npx http-server
```

Then open `http://localhost:8000` in your browser.

## Development Notes

- The wheel logic is implemented in `sketch.js` using p5.js.
- The current segment is determined by mapping the wheel angle to one of six segments.
- The result text is drawn above the wheel after the spin ends.
- Window resizing is handled by `windowResized()` to keep the canvas full-screen.

## Dependencies

- `p5.js`
- `tsparticles.confetti`
