module.exports = chirp;


function chirp (x, chirps){
  if (!chirps){
    chirps = 0;
  }
  if (chirps === x){
    var chirping = [];
    while (chirping.length !== chirps){
      chirping.push("chirp");
    }
    return chirping.join(' ');
  }else{
    chirps += 1;
    return chirp(x, chirps);
  }
}