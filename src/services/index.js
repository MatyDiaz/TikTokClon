import {supabase} from './supabase.js'

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

  return [error, data]
}