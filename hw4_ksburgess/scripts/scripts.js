
function encrypt(){
    var input = document.getElementById("Entry").value;

    var aes = CryptoJS.AES.encrypt(input,"Secret Passphrase");
    var sha1 = CryptoJS.HmacSHA1(input,"Secret Passphrase");
    var sha224 = CryptoJS.HmacSHA3(input,"Secret Passphrase")
    var sha512 = CryptoJS.HmacSHA512(input,"Secret Passphrase")


    document.getElementById("output1").innerHTML = aes;
    document.getElementById("output2").innerHTML = sha1;
    document.getElementById("output3").innerHTML = sha224;
    document.getElementById("output4").innerHTML = sha512;
    
}

//-----------------------------------------------------------------------------------

function b2d(){
    var input = document.getElementById("Entry").value;
    var len = input.length;
    var pwr = len-1;
    var total = 0;

    var status = 1;

    for(i = 0; i<len;i++){
  
          if (input[i] == '0' || input[i] == '1'){
            total = input[i] * Math.pow(2,pwr) + total;
          }
  
          else {
            status = 0;
            alert("Invalid, Not a binary number.");
            break;  
          }
          pwr -= 1;

    }


    if (status){
        document.getElementById("output1").innerHTML = total;
    }

    else{
        document.getElementById("output1").innerHTML = 'INVALID';
    }

}

//----------------------------------------------------------------------------

function d2b(){
    var input = document.getElementById("Entry").value;
    var num = input;
    var output = '';



    if (isNaN(input)){
        alert("Invalid, Not a decimal number.");
        output = "INVALID";
    }

    else{
        while(num != 0){
            output = output + (num%2);
            num = parseInt(num/2);
        }

        var splitString = output.split('');         //Splits String
        var reverseArray = splitString.reverse();   //Reverses the Array
        var joinArray = reverseArray.join('');      //Joins Array into String

        output = joinArray;                         //output = Reversed String


    }

    document.getElementById("output1").innerHTML = output;

}
