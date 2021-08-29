var isClicked = 0;
async function showIngredients(){

  const facts =
  ['<label class="container">Coffee<input type="checkbox" checked="checked"><span class="checkmark"></span><li id = "resultIngredientes"></li></label>',
    '<label class="container">Tea<input type="checkbox" checked="checked"><span class="checkmark"></span><li id = "resultIngredientes"></li></label>',
    '<label class="container">Water<input type="checkbox" checked="checked"><span class="checkmark"></span><li id = "resultIngredientes"></li></label>',
    '<label class="container">Tea<input type="checkbox" checked="checked"><span class="checkmark"></span><li id = "resultIngredientes"></li></label>',
    '<label class="container">Water<input type="checkbox" checked="checked"><span class="checkmark"></span><li id = "resultIngredientes"></li></label>',
    '<label class="container">Tea<input type="checkbox" checked="checked"><span class="checkmark"></span><li id = "resultIngredientes"></li></label>',
    '<label class="container">Water<input type="checkbox" checked="checked"><span class="checkmark"></span><li id = "resultIngredientes"></li></label>',
    '<label class="container">Tea<input type="checkbox" checked="checked"><span class="checkmark"></span><li id = "resultIngredientes"></li></label>',
    '<label class="container">Water<input type="checkbox" checked="checked"><span class="checkmark"></span><li id = "resultIngredientes"></li></label>',
    '<label class="container">Tea<input type="checkbox" checked="checked"><span class="checkmark"></span><li id = "resultIngredientes"></li></label>',
    '<label class="container">Water<input type="checkbox" checked="checked"><span class="checkmark"></span><li id = "resultIngredientes"></li></label>',
    '<label class="container">Tea<input type="checkbox" checked="checked"><span class="checkmark"></span><li id = "resultIngredientes"></li></label>',
    '<label class="container">Water<input type="checkbox" checked="checked"><span class="checkmark"></span><li id = "resultIngredientes"></li></label>',
    '<label class="container">Tea<input type="checkbox" checked="checked"><span class="checkmark"></span><li id = "resultIngredientes"></li></label>',
    '<label class="container">Water<input type="checkbox" checked="checked"><span class="checkmark"></span><li id = "resultIngredientes"></li></label>',
    '<label class="container">Tea<input type="checkbox" checked="checked"><span class="checkmark"></span><li id = "resultIngredientes"></li></label>',
    '<label class="container">Water<input type="checkbox" checked="checked"><span class="checkmark"></span><li id = "resultIngredientes"></li></label>'
  ];

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