// Rover Object Goes Here
// ======================

var rover={
direction:"N",
x:0,
y:0,
travelLog:[[0,0]]
};


// ======================
function turnLeft(rover){
  console.log("turnLeft was called!");
  
  switch(rover.direction)
  {
    case "N":
      rover.direction="W";
      break;
      
    case "E":
      rover.direction="N";
      break;

    case "S":
      rover.direction="E";
      break;

    case "W":
      rover.direction="S";
      break;
  }
  return rover;


}

function turnRight(rover){
  console.log("turnRight was called!");
  switch(rover.direction)
  {
    case "N":
      rover.direction="E";
      break;
      
    case "E":
      rover.direction="S";
      break;

    case "S":
      rover.direction="W";
      break;

    case "W":
      rover.direction="N";
      break;
  }
  return rover;


}


function moveForward(rover,grid){
  console.log("moveForward was called");

  switch(rover.direction)
  {
    case "N":
      if (rover.y!=0){
        if (grid[rover.x][rover.y-1]==0){
        
        rover.y-=1;
        rover.travelLog.push([rover.x,rover.y]);}

        else 
          console.log("Error. There is an obstacle!");}

      else
        console.log("Error. Out of limits!");
      break;
      



    case "E":
       if (rover.x!=9){
       
        if(grid[rover.x+1][rover.y]==0){

          rover.x+=1;
          rover.travelLog.push([rover.x,rover.y]);}

        else 
          console.log("Error. There is an obstacle!");}

      else
        console.log("Error. Out of limits!");
        
      break;

    case "S":
       if (rover.y!=9){
       
        if(grid[rover.x][rover.y+1]==0){
        
          rover.y+=1;
          rover.travelLog.push([rover.x,rover.y]);}

        else 
          console.log("Error. There is an obstacle!");}
        else
            console.log("Error. Out of limits!");
        
      break;

    case "W":
        if (rover.x!=0){
        
          if(grid[rover.x-1][rover.y]==0){
          
            rover.x-=1;
            rover.travelLog.push([rover.x,rover.y]);}

          else 
            console.log("Error. There is an obstacle!");}

        else
          console.log("Error. Out of limits!");  
          
      break;
  
  
    }
  
  
}

function moveBackward(rover,grid){
  console.log("moveBackward was called");

  switch(rover.direction)
  {
    case "N":
      if (rover.y!=9){
      
        if(grid[rover.x][rover.y+1]==0){

          rover.y+=1;
          rover.travelLog.push([rover.x,rover.y]);}

        else 
          console.log("Error. There is an obstacle!");}
      else
        console.log("Error. Out of limits!");

      break;
      
    case "E":
       if (rover.x!=0){
       
        if (grid[rover.x-1][rover.y]==0){

          rover.x-=1;
          rover.travelLog.push([rover.x,rover.y]);}

        else 
          console.log("Error. There is an obstacle!");}

       else
            console.log("Error. Out of limits!");
            
      break;

    case "S":
       if (rover.y!=0){
       
        if(grid[rover.x][rover.y-1]==0){

          rover.y-=1;
          rover.travelLog.push([rover.x,rover.y]);}

        else 
          console.log("Error. There is an obstacle!");}

      else
        console.log("Error. Out of limits!");

      break;

    case "W":
        if (rover.x!=9){
        
          if (grid[rover.x+1][rover.y]==0){

            rover.x+=1;
            rover.travelLog.push([rover.x,rover.y]);}

          else 
            console.log("Error. There is an obstacle!");}

        else
          console.log("Error. Out of limits!");

      break;
  }
  
}

function testMovement(rover,movements,grid){

var grid;

  

for (var i=0;i<=movements.length-1;i++){

  switch(movements[i])
  {
    case "l": 
      turnLeft(rover);
      break;

    case "r": 
      turnRight(rover);
      break;

    case "f": 
      moveForward(rover,grid);
      break;
      
    case "b": 
      moveBackward(rover,grid);
      break;
  }
  

}

for (var i=0;i<=rover.travelLog.length-1;i++)
  console.log("(" + rover.travelLog[i][0] + "," + rover.travelLog[i][1] + ")");
}


function createGrid ()
{
  var randonNumber; 
  var grid = new Array();
  
  for (var i=0;i<10;i++) {
   grid[i]=new Array();
   for (var j=0;j<10;j++) {
    if (Math.floor(Math.random()*(100))>80)
      grid[i][j]=1;
    else
      grid[i][j]=0;
  }
  }
  grid[0][0]=0;

  return grid;

}