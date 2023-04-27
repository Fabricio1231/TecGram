import Dropzone from "dropzone";

Dropzone.autoDiscover = false;

const dropzone = new Dropzone('#dropzone',{
    dictDefaultMessage:'Da click para subir fotografias',
    acceptedFiles:'.png,.jpg,.jpeg,.gif',
    addRemoveLinks:true,
    dictRemoveFile:'Borrar Fotografia',
    maxFiles:1,
    uploadMultiple:false,
});

dropzone.on('success', function(file,response){
    console.log(response);
});