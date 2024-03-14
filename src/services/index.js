import {supabase} from './supabase.js'

const prefix = import.meta.env.VITE_SUPABASE_STORAGE_URL

export const uploadVideo = async ({videoFile}) => {

    const filename = window.crypto.randomUUID();

    const { data, error } = await supabase
    .storage
    .from('Videos')
    .upload(`uploads/${filename}.mp4`, videoFile, {
        cacheControl: '3600',
        upsert: false
    })

    console.log(data);
    const file = data?.fullPath ? `${prefix}${data.fullPath}` : ' '

    return [error, file]
}

export const publishVideo= async ({videoSrc, description}) => {

    const defaultAlbum = 'https://p77-sign-va.tiktokcdn.com/tos-maliva-avt-0068/74d92ffe45e784fec8b4acf7e45cf341~c5_100x100.jpeg?lk3s=a5d48078&x-expires=1710273600&x-signature=Db0fQ9S9fLqTshoVwSj6IFNHZKA%3D';
    const defaultSong = 'The lamas: Live your way Lobo';

    const {data, error} = await supabase
    .from('videos')
    .insert([
        { 
            user_id: 'e0feff52-6f8a-41ef-ba25-35544f31781b', 
            description, 
            albumCover: defaultAlbum, 
            songTitle: defaultSong,
            src: videoSrc, 
        },
      ])
      //.select()

    return [error, data]
}

export const getVideos = async () => {
    const { data, error } = await supabase
        .from('videos')
        .select(`
        *,
        users (
            username,
            avatar,
            id
        )
       `)
        .order(
            'created_at',
            { ascending: false }
        )

    return [error, data]
}