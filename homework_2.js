/**
 * Created by andrey on 25.10.15.
 */

// to complete any level use the script bellow
var directions = ['north', 'east', 'south', 'west'];
var levelIncomplete = false;
var rightHand, lastStep;
var oppositeSide = {'north' : 'south', 'east' : 'west', 'south' : 'north', 'west' : 'east'};

function runForestRun() {
  if(lastStep !== undefined) {
    if(isFree(rightHand)) {
      makeStepTo(rightHand);
    } else if(isFree(lastStep)) {
      makeStepTo(lastStep);
    }else if(isFree(newDirection(lastStep))) {
      rightHand = lastStep;
      makeStepTo(newDirection(lastStep));
    } else {
      makeStepTo(oppositeSide[lastStep]);
    }
  } else {
    for(var i = 0; i < 4; i++) {
      if(isFree(directions[i])) {
        makeStepTo(directions[i]);
        break;
      }
    }
  }

}

function newDirection(landmark) {
  if(landmark === 'north') {
    return 'west';
  } else {
    var index = directions.indexOf(landmark) - 1;
    return directions[index];
  }
}

function makeStepTo(direction) {
  var result;
  lastStep = direction;
  switch (direction) {
    case 'north':
      result = north();
      break;
    case 'east':
      result = east();
      break;
    case 'south':
      result = south();
      break;
    case 'west':
      result = west();
      break;
  }
  if(result === 'next' || result === 'end') levelIncomplete = true
  updateRightHand(lastStep);
  map();
}

function updateRightHand(lastStep) {
  // if lastStep equal to last element in array we need to calculate 'rightHand' in another way
  if (lastStep !== 'west') {
    var index = directions.indexOf(lastStep) + 1;
    rightHand = directions[index];
  } else {
    rightHand = 'north';
  }
}

while(levelIncomplete) {
  runForestRun();
}