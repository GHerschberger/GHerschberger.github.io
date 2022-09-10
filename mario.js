height = parseInt(prompt("please enter a pyramid height"));

// printPyramid(height);


function drawPyramid(height) {
    let space = ".";
    let brick = "#";
    let rows = height;

    let layer = space;
    for (let i = 1; i<rows; i++){
      layer += space;
    }
    layer += brick;
      for(let j=0; j<rows; j++){
        layer = layer.substring(1)
        layer += (brick);

         document.write( layer + " <br>");
    }
}


// function printPyramid(height) {
//     let space = ".";
//     let brick = "#";
//     let rows = height;

//     let layer = space;
//     for (let i = 1; i<rows ; i++){
//       layer += space;
//     }
//     layer += brick;
//       for(let j=0; j<rows; j++){
//         layer = layer.substring(1)
//         layer += (brick);
//         console.log(layer);
//     }

// }

const para = document.createElement("p");

const node = document.createTextNode(drawPyramid(height) );

// para.appndChild(node);
const element = document.getElementById("pyramid");

element.appendChild(para);
