import MusicList from "../components/MusicList/MusicList"

export default function Index() {
    const musics = [
        {
            id: 1,
            name: 'Fortnight (feat. Post Malone)',
            artist: 'Taylor Swift, Post Malone',
            time: 120
        },
        {
            id: 2,
            name: 'Cry',
            artist: 'Benson Boone',
            time: 152
        }
    ]
    return (
        <div>
            <MusicList musics={musics} selectedMusic={musics[0]} onSelect={() =>{}} />
        </div>
    )
}