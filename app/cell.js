function Cell(state){
  this.state = state;
  this.neighbours = [];
};

Cell.prototype.setNeighbours = function(neighbours){
  this.neighbours = neighbours;
};

Cell.prototype.getState = function(){
  return this.state;
};

Cell.prototype.check = function(){
  const aliveN = (this.neighbours.map(function(val){
    return val.getState()
  })).filter(function(val){
      if(val===1){
        return true;
      }
      return false
    });

    switch (aliveN.length) {
      case 2:
        this.state =this.state;
        break;
      case 3:
        this.state =1;
        break;
      default:
      this.state = 0;
    }
  }
