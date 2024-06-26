function isEmpty(obj) {
	let cnt = 0;
	for (let key in obj) {
		cnt++;
		break;
	}
	return cnt === 0;
}

// 답안
function isEmpty(obj){
  for (let key in obj){
    return false;
  }
  return true;
}
