var grid=[];
var w=35;   //35-hard 14-easy   28-medium
var cellQueue=[];
var current;
var count=0;
var index=0;

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
    cellQueue.push(current);  
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
    
    current.checkNeighbors();
    current.visited=true;
    var lengthNeigh=current.neighbors.length;
    for(var i=0;i<lengthNeigh;i++){
        var n=current.pickRandom();
        if(!n.visited&&!n.queued){
            cellQueue.push(n);
            n.queued=true;
        }
    }
    //var r=floor(random(0,cellQueue.length));
    current.nextCell(cellQueue[1]);
    cellQueue.splice(0,1);
    current=cellQueue[0];
    for(var i=0;i<cellQueue.length;i++){
        cellQueue[i].show(1);
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    push();
    noStroke();
    fill(255,200,170);
    rect(current.x*current.w+2,current.y*current.w+2,current.w-3,current.w-3);
    pop();
    
}