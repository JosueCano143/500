var isClick = 0;
async function showCategoria(){

  const facts =
  ['<label class="container">Coffee<input type="checkbox" checked="checked"><span class="checkmark"></span><li id = "resultIngredientes"></li></label>',
    '<label class="container">Tea<input type="checkbox" checked="checked"><span class="checkmark"></span><li id = "resultIngredientes"></li></label>',
    '<label class="container">Water<input type="checkbox" checked="checked"><span class="checkmark"></span><li id = "resultIngredientes"></li></label>',
  ];

  const result = document.getElementById('resultCategoria');

  if(isClick % 2 == false){
    isClick += 1;
    for(i = 0; i < facts.length; i++){
      result.innerHTML += facts[i];
    }
  }
  else{
    isClick += 1
    result.innerHTML = "";
  }  
}