function run(){
    //let storeOne = document.forms.namedItem("mf");

    let ans = ServerSide();
    console.log(ans);


    let ansTwo = ServerSideTwo();
    console.log(ansTwo);

    let ansThree = ServerSideThree();
    console.log(ansThree);

    if (ans == "1" && ansTwo == "1" && ansThree == "1") {
        document.getElementById("mark").textContent = "Congratulations, You Passed!";
    } else {
        document.getElementById("mark").textContent = "Thank You For Attempting, You Failed!";
    }
}

function ServerSide(){
    let storeOne = document.forms.namedItem("mf");
    let retOne = storeOne.elements.namedItem("flag").value;
    return retOne;
}


function ServerSideTwo(){
    let storeTwo = document.forms.namedItem("mf");
    let retTwo = storeTwo.elements.namedItem("brain").value;
    return retTwo;
}

function ServerSideThree(){
    let storeThree = document.forms.namedItem("mf");
    let retThree = storeThree.elements.namedItem("psy").value;
    return retThree;
}