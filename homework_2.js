/**
 * Created by andrey on 25.10.15.
 */

// to complete any level use the script bellow
var oppositeSide = {'north' : 'south', 'east' : 'west', 'south' : 'north', 'west' : 'east'};
var directions = Object.keys(oppositeSide);
var levelComplete = false;
var rightHand, lastStep;

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
  result = window[direction]();
  if(result === 'next' || result === 'end') levelComplete = true
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

while(!levelComplete) {
  runForestRun();
}

if(levelComplete) {
  levelComplete = false;
  rightHand = lastStep = undefined;
}