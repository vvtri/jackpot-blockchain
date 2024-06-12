import DrawDetailPage from '@/draw/draw-detail/components/DrawDetailPage';
import React from 'react';

type DrawResultProps = {
  params: {
    frameIdx: string;
  };
};

export default function DrawResult(props: DrawResultProps) {
  const { params } = props;

  return <DrawDetailPage frameIdx={Number(params.frameIdx)} />;
}
