


// part 1
function computeForce() {
    var mass = document.getElementById("mass").value;
    var acceleration = document.getElementById("acceleration").value;
    var force = mass * acceleration

    document.getElementById("output1").innerHTML = force + " N";

}


// part 2
function computeDisplacement() {
    var inVelocity = document.getElementById("inVelocity").value;
    var time = document.getElementById("time").value;
    var acceleration2 = document.getElementById("acceleration2").value;
    var displacement = inVelocity * time - (1/2) * acceleration2 * time ** 2;

    document.getElementById("output2").innerHTML = displacement + " units";

}


// part 3
function computeQuadEquation() {
    var A = document.getElementById("sideA").value;
    var B = document.getElementById("sideB").value;
    var C = document.getElementById("sideC").value;
    var root1;
    var root2;

    var discriminant = (B**2 - 4 * A * C);
    

    if (discriminant > 0) {
        root1 = (-B + Math.sqrt(discriminant)) / (2*A);
        root2 = (-B - Math.sqrt(discriminant)) / (2*A);
        document.getElementById("output3").innerHTML = root1 + " , " + root2;
    }
    else if (discriminant == 0) {
        root1 = root2 = -B / (2 * A);
        document.getElementById("output3").innerHTML = root1 + " , " + root2;
    }
    else {
        root1 = (-B / (2 * A)).toFixed(2);
        root2 = (Math.sqrt(-discriminant) / (2 * A)).toFixed(2);
        document.getElementById("output3").innerHTML = root1 + " + " + root2 + "i" + " , " + root1 + " - " + root2 + "i";
    }
    
}    




// part 4
function computePayment() {
    var PMT = document.getElementById("PMT").value;
    var r = document.getElementById("r").value;
    var n = document.getElementById("n").value;
    var total = PMT * ((1-(1/((1+r)**n)))/r);//var total = PMT * (1-(1/(1+r)**n)/r);                                           
    document.getElementById("output4").innerHTML = "$ " + total;
}





function clr() {
    document.getElementById("form1").reset();
}

function clr2() {
    document.getElementById("form2").reset();
}

function clr3() {
    document.getElementById("form3").reset();
}

function clr4() {
    document.getElementById("form4").reset();
}