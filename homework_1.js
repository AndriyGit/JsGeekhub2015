/**
 * Created by andrey on 19.10.15.
 */

//Level 1
north();
north();

//Level 2
while(isFree('east')) {
  map();
  east();
}

//Level 3
while(isFree('south')) {
  map();
  south();
  east();
}

// Level 4
while(isFree('east')) {
  map();
  east();
  while(isFree('south')) {
    south();
  }
}

// Level 5
var directions = ['west', 'south', 'west', 'north', 'west', 'south', 'east'];
directions.forEach(function(direction) {
  while(isFree(direction)) {
    map();
    window[direction]();
  }
});

// Level 6
var directions = ['south', 'east', 'north', 'east', 'north', 'east', 'south', 'west', 'south', 'east'];
directions.forEach(function(direction, i) {
  while(isFree(direction)) {
    if(i == 6 &&  isFree('west') && isFree('north') && isFree('south')) break;
    map();
    window[direction]();
  }
});

// Level 7
var directions = ['south', 'east', 'north', 'east', 'south', 'east', 'south', 'west', 'south', 'east', 'south', 'east'];
directions.forEach(function(direction, i) {
  while(isFree(direction)) {
    map();
    window[direction]();
    if(i == 11) break;
  }
});
