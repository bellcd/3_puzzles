const swapColor = (color) => {
  const ref = ["A","B","C","D","E","F"];
  const refValue = [1,2,3,4,5,6];
  let colorValue, red, green, blue, rgbColor;

  // function for rgb to hex conversion
  const changeToHex = (color) => {
    let a,b,c,value1,value2;

    // Divides value by 16, then rounds down. Multiplies by 16, then subtracts product from initial value
    a = Math.floor(color / 16)
    b = a * 16;
    c = color - b
    value1 = a;
    value2 = c;

    // if "sixteens" value is larger than 9 (ie, it will be A through F in hex notation), compares value to reference array and assigns relevant letter
    if (a >= 10) {
      value1 = a - 9;
      refValue.forEach((element, index) => {
        if (element === value1) {
          value1 = ref[index];
        }
      })
    }

    // same process for the "ones" value
    if (c >= 10) {
      value2 = c - 9;
      refValue.forEach((element, index) => {
        if (element === value2) {
          value2 = ref[index];
        }
      })
    }

    return `${value1}${value2}`;
  }

  // if block to execute if argument is an rgb color
  if (color[0] === "r") {
    const comma1 = color.indexOf(",");
    const comma2 = color.indexOf(",", comma1 + 1);

    // splits rgb values into variables based on where the commas are
    red = parseInt(color.slice(4, comma1), 10);
    green = parseInt(color.slice(comma1 + 1, comma2), 10);
    blue = parseInt(color.slice(comma2 + 1, -1), 10);

    return `#${changeToHex(red)}${changeToHex(green)}${changeToHex(blue)}`;
  }

  // whole process if argument is a hex color
   else if (color[0] === "#") {
    color = Array.from(color);
    color.shift();

    // converts the hexadecimal digits into decimal digits, and stores in an array
    color = color.map((element, index) => {
        for (let j = 0; j < ref.length; j++) {

          // changes any numbers-as-strings into numbers (ie, "5" into 5)
          if (element !== "A" && element !== "B" && element !== "C" && element !== "D" && element !== "E" && element !== "F") {
              element = parseInt(element,10);
          }

          colorValue = element;

          // for 1st, 3rd, & 5th positions in a hex color code, multiples the value by 16
          if (index === 0 || index === 2 || index === 4) {
            if (typeof colorValue === 'number') {
              colorValue = colorValue * 16;
              break;
            }

            // if value is a letter (A through F), compares value to reference array to get correct decimal value, then multiples by 16
            if (element === ref[j]) {
              colorValue = (refValue[j] + 9) * 16;
              break;
            }

            // for 2nd, 4th, & 6th positions in a hex color code, compares value to reference array to get correct decimal value
          } else if ((element === ref[j]) && (index === 1 || index === 3 || index === 5)) {
            colorValue = (refValue[j] + 9);
            break;
          }

        }
        return colorValue

    })

    // splits array of decimal color values into their correct colors
    red = color[0] + color[1];
    green = color[2] + color[3];
    blue = color[4] + color[5];

    return `rgb(${red},${green},${blue})`;

  } else {
    return `Please input (as a string) a color in Hex or RGB format!
    ie,
    "#2E8B57" OR "rgb(255,160,122)"`;
  }

}

const hex = "#FFA07A";
const rgb = "rgb(160,82,45)";
swapColor(rgb);
