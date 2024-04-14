import { createRef, useEffect, useState } from 'react';
import { trackMocks } from '@/features/library-music/mock.ts';

import styles from './inline-player.module.scss';
import { ScrubberSlider } from '@/features/library-music-player/components/scrubber-slider/scrubber-slider.tsx';
import { noop } from '@/support/noop.ts';
import { Cover } from '@/features/library-music/components/artwork/cover';
import Text from '@douyinfe/semi-ui/lib/es/typography/text';
import {
  NextButton,
  PauseButton,
  PlayButton,
  PreviousButton,
} from '@/features/library-music-player/components/player-controls/player-controls.tsx';
import { useMusicPlayerContext } from '@/features/library-music-player/providers';
import { Song } from '@/graphql/__generated__/graphql.ts';


export function InlinePlayer() {
  const musicPlayerContext = useMusicPlayerContext();
  const [isPlaying, setIsPlaying] = useState(false);
  const [song, setSong] = useState<Song | null>(null);
  const [currentTime, setCurrentTime] = useState(0);

  const audio = createRef<HTMLAudioElement>();

  useEffect(() => {
    if (musicPlayerContext.song?.data) {
      setSong(musicPlayerContext.song.data.song)
    }
  }, [musicPlayerContext.song?.data]);

  useEffect(() => {
    if (audio.current) {
      audio.current.addEventListener('playing', () => {
        setIsPlaying(true);
      });

      audio.current.addEventListener('pause', () => {
        setIsPlaying(false);
      });
    }
  }, [audio.current]);

  const togglePlayPause = () => {
    if (isPlaying) {
      audio.current?.pause();
    } else {
      audio.current?.play();
    }
  }

  return (
    <div className={styles.inlinePlayer}>
      <div className={styles.trackInfo}>
        <Cover size={64} />

        <Text>{song?.track} - {song?.title}</Text>
      </div>


      <div className={styles.controls}>
        <ScrubberSlider value={currentTime} onChange={noop} max={song?.length ?? 0} />

        <div className={styles.buttonGroup}>
          <PreviousButton onClick={noop} />

          {isPlaying
            ? <PauseButton onClick={() => togglePlayPause()} />
            : <PlayButton onClick={() => togglePlayPause()} />
          }

          <NextButton onClick={noop} />

          <audio
            src={song?.streamUrls?.directStream ?? undefined}
            autoPlay={true}
            controls={false}
            ref={audio}
          />
        </div>
      </div>
    </div>
  )
}
