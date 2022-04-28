export class InvalidInputError extends Error {
  constructor(message) {
    super();
    this.message = message;
  }
}

const directions = ["north", "east", "south", "west"];
let co = [0,0]
let inst = []
export class Robot {
  orient(position) {
    if (!directions.includes(position)) {
      throw new InvalidInputError("wrong error");
    } else {
      this.location = position;
    }
  }

  get bearing() {
    return this.location;
  }

  get coordinates() {
    return this.coor
  }

  turnRight() {
    let index = directions.indexOf(this.location)
    if(index < 3){
      index++
    }else{
      index = 0
    }
    this.location = directions[index]
  }
  

  turnLeft() {
    let index = directions.indexOf(this.location)
    if(index <= 3 && index != 0){
      index--
    }else{
      index = 3
    }
    this.location = directions[index]
  }

  at(x,y) {
    co[0] = x
    co[1] = y
    this.coor = co
  }

  advance() {
    if( this.location === 'north'){
      co[1]+=1
    }
    else if( this.location === 'south'){
      co[1]-=1
    }
    else if( this.location === 'west'){
      co[0]-=1
    }
    else if( this.location === 'east'){
      co[0]+=1
    }
    this.coor = co
  }

  static instructions(street) {
    for (i= 0; i<street.length; i++){
      if(street[i]=== 'L'){
        inst.push('turnLeft')
      }
      else if(street[i]=== 'R'){
        inst.push('turnRight')
      }
      else if(street[i]=== 'A'){
        inst.push('advance')
      }
    }
    this.order = inst
  }
  place() {
    //Delete and write code
  }
  evaluate() {
    //Delete and write code
  }
}

