const convert= document.getElementById('convert-btn');
const inputNum = document.getElementById('number');
const result = document.getElementById('output');

const numToRoman = (num) =>{
  if(num < 1){ 
    return "";
    }
  if(num >= 1000){ 
    return "M" + numToRoman(num - 1000);
  }
  if(num >= 900){ 
    return "CM" + numToRoman(num - 900);
  }
  if(num >= 500){ 
    return "D" + numToRoman(num - 500);
  }
  if(num >= 400){ 
    return "CD" + numToRoman(num - 400);
  }
  if(num >= 100){ 
    return "C" + numToRoman(num - 100);
  }
  if(num >= 90){ 
    return "XC" + numToRoman(num - 90);
  }
  if(num >= 50){ 
    return "L" + numToRoman(num - 50);  
    }
  if(num >= 40){ 
    return "XL" + numToRoman(num - 40);  
    }
  if(num >= 10){ 
    return "X" + numToRoman(num - 10);
    }
  if(num >= 9){ 
    return "IX" + numToRoman(num - 9);
    }
  if(num >= 5){ 
    return "V" + numToRoman(num - 5);
    }
  if(num >= 4){ 
    return "IV" + numToRoman(num - 4);
    }
  if(num >= 1){ 
    return "I" + numToRoman(num - 1);
    } 
  
}

const checkInput = () => {
  const numInt = parseInt(inputNum.value);
  

  if(!inputNum || isNaN(numInt)){
    result.textContent = "Please enter a valid number";
    return;
  }

  if(numInt < 0){
    result.textContent = "Please enter a number greater than or equal to 1";

    return;

  }

  if(numInt >= 4000){
    result.textContent = "Please enter a number less than or equal to 3999"

    return;
  }

  result.textContent = numToRoman(numInt)
 
}

convert.addEventListener('click', checkInput)

inputNum.addEventListener('keydown', (e)=> {
  if (e.key === "Enter") {
    checkInput();
  }
})