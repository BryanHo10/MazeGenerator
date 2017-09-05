function Cell(x,y,w){
    this.x=x;
    this.y=y;
    this.w=w;
    this.topWall=true;
    this.bottomWall=true;
    this.rightWall=true;
    this.leftWall=true;
    this.visited=false;
    this.neighbors=[];
    
    
    
    this.show=function(setting){
        if(this.visited){
            push();
            noStroke();
            if(setting==1){
                fill(0,150,100);
            }
            else{
                fill(150,90,140);
            }
            rect(this.x*this.w,this.y*this.w,w+1,w+1);
            pop();
            
        }
        push();
        colorMode(RGB);
        stroke(51);
        strokeWeight(3);
        if(this.topWall){
            line(this.x*this.w,this.y*this.w,(this.x+1)*this.w,this.y*this.w);
        }
        if(this.bottomWall){
            line(this.x*this.w,(this.y+1)*this.w,(this.x+1)*this.w,(this.y+1)*this.w);
        }
        if(this.rightWall){
            line((this.x+1)*this.w,this.y*this.w,(this.x+1)*this.w,(this.y+1)*this.w);
        }
        if(this.leftWall){
            line(this.x*this.w,this.y*this.w,this.x*this.w,(this.y+1)*this.w);
        }
        pop();
        
    }

    
    this.checkNeighbors=function(setting){
        var topCell;
        var rightCell;
        var bottomCell;
        var leftCell;
        var set;
        if(setting>0)
            set =setting;
        else
            set=1;
        if(this.y>0)
        var topCell = grid[this.x][this.y-1];
        if(this.x<grid[0].length-1)
        var rightCell = grid[this.x+1][this.y];
        if(this.y<grid[0].length)
        var bottomCell= grid[this.x][this.y+1];
        if(this.x>0)
        var leftCell=grid[this.x-1][this.y];
        
        if(topCell && !topCell.visited){
            this.neighbors.push(topCell);
        }
        if(rightCell && !rightCell.visited){
            for(var i=0;i<set;i++)
                this.neighbors.push(rightCell);
            
        }
        if(bottomCell && !bottomCell.visited){
            this.neighbors.push(bottomCell);
        }
        if(leftCell && !leftCell.visited){
            for(var i=0;i<set;i++)
                this.neighbors.push(leftCell);
        }
        
    }
    this.nextCell=function(target){
        var dX=target.x-this.x;
        var dY=target.y-this.y;
        
        if(dY>0){
            this.bottomWall=false;
            target.topWall=false;
        }
        if(dY<0){
            this.topWall=false;
            target.bottomWall=false;
        }
            
        if(dX>0){
            this.rightWall=false;
            target.leftWall=false;
        }
            
        if(dX<0){
            this.leftWall=false;
            target.rightWall=false;
        }
            
        
        
        
        return target;
    }
    this.restart=function(){
        this.neighbors=[];
    }
    
    
    
    
}