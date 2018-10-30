function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector(`#nested .target`);
}

function increaseRankBy(n){
  const rankedLists = document.querySelectorAll('.ranked-list');
  
  for (let x = 0, y = rankedLists.length; x < l; i++) {
    let children = rankedLists[i].children

    for (let j = 0, k = children.length; j < k; j++) {
      children[j].innerHTML = parseInt(children[j].innerHTML) + n
    }
  }
}

function deepestChild(){
  let grandNode = document.getElementById('grand-node');
  let parentNode = grandNode.children[0];
  
  while (parentNode) {
    grandNode = parentNode;
    parentNode = grandNode.children[0];
  }
  
  return grandNode;
}