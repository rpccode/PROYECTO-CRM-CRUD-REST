
const url = 'http://localhost:4000/clientes';


//cuando creamos un nuevo cliente
export const nuevoCliente = async cliente => {

      try {
        await fetch(url,{
           method:'POST',
           body: JSON.stringify(cliente),
           headers:{
             'Content-Type':'application/JSON'
           }
         });
         window.location.href = 'index.html';
      } catch (e) {
          console.log(e);
      }


}

//obtener todos los clinetes
export const obtenerClientes = async () =>{
  try {
    const resultado = await fetch(url);
    const clientes = await resultado.json();
    return clientes;
  } catch (e) {
      console.log(e);
  }
}
