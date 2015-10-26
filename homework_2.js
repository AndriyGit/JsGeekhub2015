/**
 * Created by andrey on 25.10.15.
 */

// to complete any level use the script bellow
var oppositeSideFor  = {'north' : 'south', 'east' : 'west', 'south' : 'north', 'west' : 'east'};
var rightHandBasedOn = {'north' : 'east', 'east' : 'south', 'south' : 'west', 'west' : 'north'};
var levelComplete = true;
var rightHand, lastStep;

if(levelComplete) initialize();

while(!levelComplete) {
  runForestRun();
}

function initialize() {
  levelComplete = false;
  rightHand = 'west';
  lastStep = 'south';
}

function runForestRun() {
  if(isFree(rightHand)) {
    makeStepTo(rightHand);
  } else if(isFree(lastStep)) {
    makeStepTo(lastStep);
  } else if(isFree(oppositeSideFor[rightHand])) {
    makeStepTo(oppositeSideFor[rightHand]);
  } else {
    makeStepTo(oppositeSideFor[lastStep]);
  }
}

function makeStepTo(direction) {
  var result;
  lastStep = direction;
  result = window[direction]();
  if(result === 'next' || result === 'end') levelComplete = true;
  rightHand = rightHandBasedOn[lastStep];
  map();
}
