export const roll = (sides, num_dice, num_rolled) => {
  let result = {
    sides: sides,
    dice: num_dice,
    rolls: num_rolled,
    results: [],
  };
  for (let i = 0; i < num_rolled; i++) {
    let num = 0;
    for (let j = 0; j < num_dice; j++) {
      num += Math.floor(Math.random()*sides)+1;
    }
    result['results'].push(num);
  }
  return result;
};
