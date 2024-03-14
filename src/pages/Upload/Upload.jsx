import { useEffect, useState } from 'react';
import style from './Upload.module.css'
import { useDropzone } from 'react-dropzone'
import clsx from 'clsx';
import { uploadVideo, publishVideo } from '../../services';



export default function UploadVideo () {

    const [uploading, setUploading] = useState(false);

    const [uploaded, setUploaded] = useState(null);

    const onDrop = async (files) => {
        //console.log('Drop', e);
        const [file] = files;
        setUploading(true);
        const [error, fileUrl] = await uploadVideo({ videoFile: file });
        if (error) return  console.error(error)
        //console.log(fileUrl);
        setUploaded(fileUrl);
    }

    const { 
        isDragAccept, 
        isDragReject, 
        getRootProps, 
        getInputProps 
    } = useDropzone({
        disabled: uploading || uploaded,
        maxFiles:1,
        //accept: 'video/mp4,video/x-m4v,video/*',
        accept: {
            'video/mp4': ['.mp4', '.mpeg']
        },
        onDrop
    })

    useEffect(() => {
        if(isDragReject) navigator.vibrate(100)
        //console.log(isDragReject);
    }, [isDragReject]);

    const dndClassNames = clsx(style.dnd, {
        [style.uploaded]: uploaded,
        [style.uploading && !style.uploaded]: uploading,
        [style.dndReject]: isDragReject,
        [style.dndAccept]: isDragAccept
    });

    const renderDndContent = () => {
        if(uploaded) return <h4>Archivo cargado con exitoj!!</h4>
        if(uploading) return <h4>Subiendo archivo...</h4>
        if (isDragReject) return <h4>Archivo no soportado</h4>
        if (isDragAccept) return <h4>Suelta el archivo para subirlo!</h4>

        return <>
            <h4>Selecciona el video para cargar</h4>
            <h5>O arrastra y suelta un archivo</h5>
            <ul>
                <li>MP4 O WebM</li>
                <li>Resolucion de al menos 720x1280</li>
                <li>Hasta 180 segundos</li>
            </ul>
        </>
    };

    const handleSubmit = async (e) => {

       e.preventDefault();

       if(!uploaded) return;
  
       const description = e.target.description.value

       const [error] = await publishVideo({videoSrc:uploaded , description}) 

       if(error) return console.log(error)

       console.log('Video Published!!!');
    }

    return(
        <div className={style.upload}>
            <h1>Cargar video</h1>
            <p>Este video se publicara en el perfil de @ChotoLoko</p>
            <form className={style.form} onSubmit={handleSubmit}>
                <div {...getRootProps()}>
                    <input {...getInputProps()} />
                    <div className={dndClassNames}>
                        <img src='https://cdn.icon-icons.com/icons2/1660/PNG/512/3844483-cloud-computing-data-server-upload_110328.png' width='49' /> 
                        {renderDndContent()}
                    </div>

                </div>
                <label>
                    leyenda
                    <input 
                         placeholder=''  
                         name='description' 
                    />
                </label>
                <button>
                    Publicar
                </button>
            </form>
        </div>
    )
}