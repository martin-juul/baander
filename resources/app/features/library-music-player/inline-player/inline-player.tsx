import { useState } from 'react';
import { trackMocks } from '@/features/library-music/mock.ts';

import styles from './inline-player.module.scss';
import { ScrubberSlider } from '@/features/library-music-player/components/scrubber-slider/scrubber-slider.tsx';
import { noop } from '@/utilities/noop.ts';
import { Cover } from '@/features/library-music/components/artwork/cover';
import Text from '@douyinfe/semi-ui/lib/es/typography/text';
import {
  NextButton,
  PauseButton,
  PlayButton,
  PreviousButton,
} from '@/features/library-music-player/components/player-controls/player-controls.tsx';


export function InlinePlayer() {
  const track = trackMocks[0];
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className={styles.inlinePlayer}>
      <div className={styles.trackInfo}>
        <Cover size={64} />

        <Text>{track.number} - {track.title}</Text>
      </div>


      <div className={styles.controls}>
        <ScrubberSlider value={0.9} onChange={noop} max={2.02} />

        <div className={styles.buttonGroup}>
          <PreviousButton onClick={noop} />

          {isPlaying
            ? <PauseButton onClick={() => setIsPlaying(true)} />
            : <PlayButton onClick={() => setIsPlaying(true)} />
          }

          <NextButton onClick={noop} />

        </div>
      </div>
    </div>
  )
}
