var grid=[];
var w=35;   //35-hard 14-easy   28-medium
var cellVisit=[];
var allVisited;
var current;

function setup(){
    var cnv=createCanvas(700,700);
    cnv.position((windowWidth - width) / 2,(windowHeight - height)/2);
    background(51);
    for(var x=0;x<w;x++){
        grid[x]=[];
        for(var y=0;y<w;y++){
            grid[x][y]=new Cell(x,y,floor(width/w));
        }
    }
    current=grid[0][0];
    cellVisit.push(current);  
    //frameRate(10);
    colorMode(HSB);

}

function draw(){
    
    for(var i=0;i<grid.length;i++){
        for(var j=0;j<grid[0].length;j++)
            {
                grid[i][j].show(0);
            }
    }
    for(var i=0;i<11;i++){       //6 fastest    //3 semi-fast
    current.visited=true;
    //current.checkNeighbors();  //Normal Setting
    current.checkNeighbors(6); // Horizontal Heavy
    if(current.neighbors.length>0){
        var r=floor(random(0,current.neighbors.length));

        current.show();
        //console.log(current);
        current=current.nextCell(current.neighbors[r]);
        cellVisit.push(current);
        
    }
    else{
        if(cellVisit.length>1){
        cellVisit.pop();
        current=cellVisit[cellVisit.length-1];
        
                current.restart(); } 
        if(cellVisit.length==1)
            {
                noLoop();
            }
        
    }
//        for(var i=0;i<cellVisit.length;i++){
//            cellVisit[i].show(1);
//        }
    }
    
    
    //console.log(current);
    push();
    noStroke();
    fill(255,200,170);
    rect(current.x*current.w+2,current.y*current.w+2,current.w-3,current.w-3);
    pop();
    
}