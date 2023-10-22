// Write a function called ***addCommas*** which accepts a number and converts it into a string formatted with commas added for readability.

// *Examples of the output we’d like:*

// | Input | Expected Output |
// | --- | --- |
// | 1234 | “1,234” |
// | 1000000 | “1,000,000” |
// | 9876543210 | “9,876,543,210” |
// | 6 | “6” |
// | -10 | “-10” |
// | -5678 | “-5,678” |
// | (bonus) 12345.678 | “12,345.678” |
// | (bonus) -3141592.65 | “-3,141,592.65” |

// **Write tests for these (non-bonus) cases** and make sure your code passes these. Feel free to add any other tests you deem necessary.

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// put comma after every 3 characters, starting from the right
// convert result to a string

const addCommas = (num) => {
  // convert num to an array
  const numStr = num.toString();
  const numArray = numStr.split('');
  console.log('numArray...', numArray);

  // use splice to insert comma at desired index
  // reverse array to iterate through every 3rd index
  numArray.reverse();
  for (let i=3; i<numArray.length; i += 4) {
    numArray.splice(i, 0, ',');
  }
  numArray.reverse();

  return numArray.join('');
}

module.exports = addCommas;



// const result = num.toString();
// console.log('result...', result);
// console.log(typeof result);

// // 3rd char from right
// const thirdCharIdx = result.length -3;
// console.log('3rdCharIdx...', thirdCharIdx);
// console.log(result.charAt(thirdCharIdx));
// console.log(result.charAt(3));



 // let commaIdx = numArray.length - 3;
  // if (numArray.length % 3 === 1) {
  //   numArray.splice(commaIdx, 0, ',');
  //   commaIdx = 
  // }

  // numArray.splice(2, 0, ',');
  // console.log(numArray);

  // // convert numArray to a str
  // const result = numArray.join('');
  // console.log(result);


  // https://stackoverflow.com/questions/54077062/insert-into-array-at-every-nth-position
