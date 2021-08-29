var imagenes;
async function showBusqueda(){

  if(imagenes == null){
    var lol = await getRecetas();
    var res = [];
    await lol.forEach(async (doc) => {
          const link = await getLink(doc.id);
          res.push('<div class = "GridItems StyledPictureContainer" style = "background-image: url(\'' + link + '\')"><div class = "StyledPictureContainer"></div></div>');
      });
    imagenes = res;
    console.log(res);
    console.log(imagenes);
  }
  /*const imagenes =
  ['<label class="container">Coffee<input type="checkbox" checked="checked"><span class="checkmark"></span><li id = "resultIngredientes"></li></label>',
    '<label class="container">Tea<input type="checkbox" checked="checked"><span class="checkmark"></span><li id = "resultIngredientes"></li></label>',
    '<label class="container">Water<input type="checkbox" checked="checked"><span class="checkmark"></span><li id = "resultIngredientes"></li></label>',
  ];*/

  const result = document.getElementById('images');
  

  for(i = 0; i < imagenes.length; i++){
      result.innerHTML += imagenes[i];
    }
}