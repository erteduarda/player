import { useEffect, useMemo, useRef, useState } from 'react';
import styles from './AudioPlayer.module.css';
import Timeline from '../../inputs/Timeline/Timeline';

export default function AudioPlayer(props) {

    const [canPlay, setCanPlay] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [duration, setDuration] = useState(1);
    const [currentTime, setCurrentTime] = useState(0);
    const audioRef = useRef(null);
    const width = useMemo(() => {
        return (currentTime / duration) * 100;
    }, [duration, currentTime])

    useEffect(() => {
        if (isPlaying) {
            audioRef.current.play();
        } else {
            audioRef.current.pause();
        }
    }, [isPlaying, props.music])

    useEffect(() => {
        const interval = setInterval(() => {
            isPlaying && setCurrentTime(audioRef.current.currentTime);
        }, 500)

        return () => {
            clearInterval(interval);
        }
    }, [isPlaying])

    useEffect(() => {
        if (props.music) {
            setCurrentTime(0);
            setCanPlay(false);
        }
    }, [props.music])

    function onCanPlay() {
        setDuration(audioRef.current.duration);
        setCanPlay(true);
    }

    function onEnded() {
        setIsPlaying(false);
        props?.onComplete();
    }

    function changeTime(percent) {
        if (props?.music) {
            audioRef.current.currentTime = (percent / 100) * duration;
        }
    }

    function handlePlay() {
        if (props?.music) {
            setIsPlaying(!isPlaying);
        }
    }

    return <div className={styles['player-container']}>
        <div className={styles['button-container']}>
            <button
                className={styles['play-button']}
                disabled={!canPlay}
                onClick={handlePlay}
            >
                {isPlaying ? `\u2759\u2759` : `\u25B8`}
            </button>
        </div>
        <Timeline width={width} onChangeWidth={changeTime} />
        <audio
            ref={audioRef}
            controls
            onCanPlay={onCanPlay}
            onEnded={onEnded}
            src={props?.music?.url}
            className={styles['audio']}
        />
    </div>
}