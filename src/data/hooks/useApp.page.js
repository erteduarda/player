import { useState } from "react"

const musicList = [
    {
        id: 1,
        name: 'Eenie Meenie',
        artist: 'Sean Kingston, Justin Bieber',
        time: 120,
        url: 'musics/Sean Kingston, Justin Bieber - Eenie Meenie.mp3'
    },
    {
        id: 2,
        name: 'Praise Jah in the Moonlight',
        artist: 'YG Marley',
        time: 152,
        url: 'musics/YG Marley - Praise Jah in the Moonlight_.mp3'
    }
]

export function useApp() {
    const [selectedMusic, setSelectedMusic] = useState();
    const [time, setTime] = useState(0);
    function selectMusic(music) {
        setTime(0);
        setSelectedMusic(music);
    }
    return{
        selectMusic,
        time,
        setTime,
        selectedMusic,
        musicList,
    }
}