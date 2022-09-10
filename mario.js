height = parseInt(prompt("please enter a pyramid height"));

printPyramid(height);

function printPyramid(height) {
    let space = " ";
    let brick = "#";
    let rows = height;

    let layer = space;
    for (let i = 0; i<rows ; i++){
      layer += space;
    }
    layer += brick;
      for(let j=0; j<rows; j++){
        layer = layer.substring(1)
        layer += (brick);
        console.log(layer);
      
    
    }

}