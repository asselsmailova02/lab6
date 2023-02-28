function greeting(name) {
    return "Hi, "+name+"!";
}

function greatestofthree(i1, i2, i3) {
    if (i1>=i2 && i2>=i3) {
        console.log(i1+" is greatest");
    } else if(i2>=i1 && i2>=i3) {
        console.log(i2+" is greatest");
    } else if (i3>=i1 && i3>=i2) {
        console.log(i3+" is greatest");
    }
}

function evenorodd(i) {
    if (i%2==0) {
        console.log(i+" is even");
    } else {
        console.log(i+" is odd");
    }
}