var isClick = 0;
var categ;
async function showCategoria(){

  if(categ == null){
    const lol = await getCategorias();
    var res = [];
    await lol.forEach((doc) => {
      res.push('<label class="container">'+doc.data.nombre+'<input type="checkbox" checked="checked"><span class="checkmark"></span><li id = "resultIngredientes"></li></label>');
    });
    categ = res;
  }
  /*const categ =
  ['<label class="container">Coffee<input type="checkbox" checked="checked"><span class="checkmark"></span><li id = "resultIngredientes"></li></label>',
    '<label class="container">Tea<input type="checkbox" checked="checked"><span class="checkmark"></span><li id = "resultIngredientes"></li></label>',
    '<label class="container">Water<input type="checkbox" checked="checked"><span class="checkmark"></span><li id = "resultIngredientes"></li></label>',
  ];*/

  const result = document.getElementById('resultCategoria');

  if(isClick % 2 == false){
    isClick += 1;
    for(i = 0; i < categ.length; i++){
      result.innerHTML += categ[i];
    }
  }
  else{
    isClick += 1
    result.innerHTML = "";
  }  
}