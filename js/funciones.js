export function mostrarAlerta(mensaje){
    const alerta =  document.querySelector('.bg-red-100');

    if (!alerta) {
           const alerta = document.createElement('p');
           alerta.classList.add('bg-red-100','border-red-400','text-red-700',
           'py-4','px-3','rounder','max-w-lg','mx-auto','mt-6','text-center');


           alerta.innerHTML= `
                  <strong class="font-bold">Error!</strong>
                  <span class"block sm:inline">${mensaje}</span>
           `;
           const formulario = document.querySelector('#formulario');
           formulario.appendChild(alerta);

           setTimeout(()=>{
              alerta.remove();
           }, 3000 );
    }
}
