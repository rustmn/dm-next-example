import Head from 'next/head';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';

const Player = dynamic(() => import('dm-standard').then(_ => _.Player), { ssr: false });

const types = {
  dash: 'application/dash+xml',
  hls: 'application/x-mpegURL'
}

const videos = [
  {
    id: `-en`,
    language: 'en',
    captions: {
      src: 'https://cdn.player-standart-aws.deep.movie/out/INTRO_NI/av1/en/captions/INTRO_NI_ENG.vtt',
      language: 'en'
    },
    video: {
      hls: {
        src: 'https://cdn.player-standart-aws.deep.movie/NI_NEW/NI_EN/H265/index.m3u8',
        type: types.hls
      },
      dash: {
        src: 'https://cdn.player-standart-aws.deep.movie/NI_NEW/NI_EN/AV1/stream.mpd',
        type: types.dash,
      }
    }
  },
  {
    id: `-ru`,
    language: 'ru',
    captions: {
      src: 'https://cdn.player-standart-aws.deep.movie/out/INTRO_NI/av1/ru/captions/INTRO_NI_RUS.vtt',
      language: 'ru'
    },
    video: {
      hls: {
        src: 'https://cdn.player-standart-aws.deep.movie/NI_NEW/NI_RU/H265/index.m3u8',
        type: types.hls
      },
      dash: {
        src: 'https://cdn.player-standart-aws.deep.movie/NI_NEW/NI_RU/AV1/stream.mpd',
        type: types.dash,
      }
    }
  }
];

export default function Home() {
  /*
  const [Player, setPlayer] = useState();

  useEffect(async () => {
    const { Player } = await import('dm-standard');
    console.log('PL', Player)
    setPlayer(Player);
  }, []);
  */
  return (
    <div style = {{
      width: '80vw',
      height: '80vh'
    }}>
      {
        Player && <Player videos = { videos } />
      }
    </div>
  )
}