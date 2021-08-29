var isClicked = 0;
var facts;
async function showIngredients(){

  if (facts == null){
    const lol = await getIngredientes();
    var res = [];
    await lol.forEach((doc) => {
      res.push('<label class="container">'+doc.data.nombre+'<input type="checkbox" checked="checked"><span class="checkmark"></span><li id = "resultIngredientes"></li></label>');
    });
    facts = res;
  }
  
  const result = document.getElementById('resultIngredientes');

  if(isClicked % 2 == false){
    isClicked += 1;
    for(i = 0; i < facts.length; i++){
      result.innerHTML += facts[i];
    }
  }
  else{
    isClicked += 1;
    result.innerHTML = "";
  }  
}