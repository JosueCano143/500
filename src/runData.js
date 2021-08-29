
const firebaseConfig = {
    
  };


firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();
var storage = firebase.storage();


function postIngrediente(data){
    if(data.nombre !== undefined){
        db.collection("ingredientes").add({
            nombre: nombre,
            tipo: tipo
        }).then((docRef) => {
            console.log("Document written with ID: ",docRef.id);
        }).catch((error) => console.log(error));
    }
}


/*
{
autor: autor,
categoria: categoria,
dificultad: "bajo",
ingredientes: [
    {nombre: "lechuga", cantidad: "1/2"}
],
nombre: nombre,
nutricion: [270,90,100,50],
procedimiento: "agarras la lechuga y le pones mango",
tiempo_preparacion: 45,
valoracion: 1
} 
*/

function test2(){
    let inputFile = document.getElementById("avatar").value;
    let imagen = document.getElementById("avatar").files[0];
    let datos = {
        autor: "yo x3",
        categoria: "mexicana",
        dificultad: "bajo",
        ingredientes: [
            {nombre: "agua", cantidad: "1 litro"},
            {nombre: "fritos", cantidad: "1"}
        ],
        nombre: "te de fritos",
        nutricion: [100,20,100,50],
        procedimiento: "agarras los fritos y le pones agua y la hierves",
        tiempo_preparacion: 45,
        valoracion: 1,
        }
        console.log(inputFile.split('.').pop());
        console.log(imagen);
    postReceta(datos,imagen);
}

async function getLink(documentId){
    var gsReference = storage.refFromURL('gs://cookingbook-70bd6.appspot.com/splash_images/'+documentId+'.jpg');
    return await gsReference.getDownloadURL();
}

function postReceta(data, imagen){
    if( data.autor !== undefined && 
        data.categoria !== undefined &&
        data.dificultad !== undefined &&
        data.ingredientes !== undefined &&
        data.autor !== undefined &&
        data.nutricion !== undefined &&
        data.procedimiento !== undefined &&
        data.tiempo_preparacion !== undefined &&
        data.valoracion !== undefined &&
        imagen !== undefined){

        db.collection("recetas").add(data).then((docRef) => {
            console.log("Document written with ID: ",docRef.id);
            return docRef.id;
        })
        .then((docId) => {
            let extension = imagen.name.split('.').pop();
            let storageRef = storage.ref().child("splash_images/"+docId+"."+extension);
            storageRef.put(imagen).then(function(snapshot) {
                console.log('Uploaded a blob or file!');
                snapshot.ref.getDownloadURL().then(function(downloadURL) {
                    console.log('File available at', downloadURL);
                });
              });
        })
        .catch((error) => console.log(error));
    }
    else{
        console.log("datos incompletos");
    }
}

/**
 * Obtiene todas las recetas
 * @async
 * @return  {Array<{id,data}>} categoria el nombre de la categoria
 */
async function getRecetas(){
    return await db.collection("recetas").get().then((querySnapshot) => {
        result = [];
        querySnapshot.forEach((doc) => {
            result.push({id: doc.id, data: doc.data()});
            console.log(doc.id, doc.data());
        });
        return result;
    });
}

async function getCategorias(){
    return await db.collection("categorias").get().then((querySnapshot) => {
        result = [];
        querySnapshot.forEach((doc) => {
            console.log(doc.id, doc.data());
            result.push({id: doc.id, data: doc.data()});
        });
        return result;
    });

}

/**
 * Busca las recetas que tengan la categoria dada
 * @async
 * @param {String} categoria el nombre de la categoria
 * @return  {Array<{id,data}>} id del documento, datos del documento
 */
async function getRecetasPorCategoria(categoria){
    return await db.collection("recetas").where("categoria","==",categoria).get()
    .then((querySnapshot) => {
        result = [];
        querySnapshot.forEach((doc) => {
            result.push({id: doc.id, data: doc.data()})
        });
        return result;
    });
}

/**
 * Busca todos los ingredientes
 * @async
 * @return  {Array<{id,data}>} id del documento, datos del documento
 */
async function getIngredientes(){
    result = []
    await db.collection("ingredientes").get().then((querySnapshot) => {
        result = []
        querySnapshot.forEach((doc) => {
            console.log(doc.id, doc.data());
            result.push({id: doc.id, data: doc.data()});
        });
    });
    console.log(result);
    return result;
}

/**
 * Busca los ingredientes que tengan la categoria dada
 * @param  {String} categoria el nombre de la categoria
 */
function getIngredientesPorCategoria(categoria){
    db.collection("ingredientes").where("tipo","==",categoria).get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            console.log(doc.id, doc.data());
        });
    });
}

function getIngredientesPorNombre(nombre){
    db.collection("ingredientes").where("nombre","==",nombre).get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            console.log(doc.id, doc.data());
        });
    });
}

/**
 * Busca una receta dado el nombre de un documento
 * @param  {String} documento el nombre del documento
 */
function getRecetaDetalles(documento){
    db.collection("recetas").doc(documento)
    .get().then((doc) => {
        if (doc.exists){
            console.log("Document data:",doc.data().ingredientes);
            return doc.data();
        } else{
            console.log("no hay doc");
        }
    });
}

/**
 * Busca un ingrediente dada la referencia a un documento
 * @param  {Kg} doc la referencia al documento
 * @return {Number} The total of the two numbers
 */
function getIngredienteDetalles(doc){
    doc.get().then((doc) =>{
        if (doc.exists){
            console.log("ingredient data:", doc.data());
        } else{
            console.log("algo salio mal chaleeee");
        }
    })
}






/*
db.collection("recetas").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data()}`);
        });
    });


var docRef = db.collection("cities").doc("SF");

docRef.get().then((doc) => {
    if (doc.exists) {
        console.log("Document data:", doc.data());
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch((error) => {
    console.log("Error getting document:", error);
});
*/