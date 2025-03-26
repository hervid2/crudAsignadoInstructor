/**
 * Función para cargar los usuarios de la base de datos
 * @module app/usuarios/listar_usuarios
 * @returns
 */
export const listarUsuarios = async () => {
    try {
        const envio = await fetch('http://localhost:3000/usuarios');
        const respuesta = await envio.json();
        return respuesta;
        
    } catch (error) {
        console.error(error);
    }
}