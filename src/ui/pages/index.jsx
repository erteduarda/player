import MusicList from '../components/data-display/MusicList/MusicList';
import AudioPlayer from '../components/data-display/AudioPlayer/AudioPlayer';
import styles from './index.module.css';
import { useContext } from 'react';
import { AppContext } from '../../App';

export default function Index() {
    const { selectedMusic, time, setTime, selectMusic, musicList } = useContext(AppContext);
    return (
        <div className={styles['page-container']}>
            <MusicList
                musics={musicList}
                selectedMusic={selectedMusic}
                onSelect={selectMusic}
            />

            <AudioPlayer
                music={selectedMusic}
                onComplete={() => console.log("ACABOU")}
            />
        </div>
    )
}