import React from 'react';
import { MAP_PRIZE_TO_NUMBER } from '../constants/prize.constant';
import Ball from '@/common/components/utils/Ball';
import { cn } from '@/common/utils/shadcn';
import { Plus } from 'lucide-react';

type PrizeBallSymbolProps = {
  prize: (typeof MAP_PRIZE_TO_NUMBER)[keyof typeof MAP_PRIZE_TO_NUMBER];
};

export default function PrizeBallSymbol(props: PrizeBallSymbolProps) {
  const { prize } = props;

  const containerClass = cn('flex gap-2 w-fit items-center');

  switch (prize) {
    case MAP_PRIZE_TO_NUMBER.LAST_NUMBER:
      return (
        <div className={containerClass}>
          <Ball variant="red" size="sm" className="text-xs">
            Ball
          </Ball>
        </div>
      );

    case MAP_PRIZE_TO_NUMBER.TWO_FIRST_NUMBER_AND_LAST_NUMBER:
      return (
        <div className={containerClass}>
          <Ball size="sm" />
          <Ball size="sm" />

          <Plus />

          <Ball variant="red" size="sm" className="text-xs">
            Ball
          </Ball>
        </div>
      );

    case MAP_PRIZE_TO_NUMBER.THREE_FIRST_NUMBER:
      return (
        <div className={containerClass}>
          <Ball size="sm" />
          <Ball size="sm" />
          <Ball size="sm" />
        </div>
      );
    case MAP_PRIZE_TO_NUMBER.THREE_FIRST_NUMBER_AND_LAST_NUMBER:
      return (
        <div className={containerClass}>
          <Ball size="sm" />
          <Ball size="sm" />
          <Ball size="sm" /> <Plus />
          <Ball variant="red" size="sm" className="text-xs">
            Ball
          </Ball>
        </div>
      );
    case MAP_PRIZE_TO_NUMBER.FOUR_FIRST_NUMBER:
      return (
        <div className={containerClass}>
          <Ball size="sm" />
          <Ball size="sm" />
          <Ball size="sm" />
          <Ball size="sm" />
        </div>
      );
    case MAP_PRIZE_TO_NUMBER.FOUR_FIRST_NUMBER_AND_LAST_NUMBER:
      return (
        <div className={containerClass}>
          <Ball size="sm" />
          <Ball size="sm" />
          <Ball size="sm" />
          <Ball size="sm" /> <Plus />
          <Ball variant="red" size="sm" className="text-xs">
            Ball
          </Ball>
        </div>
      );
    case MAP_PRIZE_TO_NUMBER.FIVE_FIRST_NUMBER:
      return (
        <div className={containerClass}>
          <Ball size="sm" />
          <Ball size="sm" />
          <Ball size="sm" />
          <Ball size="sm" />
          <Ball size="sm" />
        </div>
      );

    case MAP_PRIZE_TO_NUMBER.JACKPOT:
      return (
        <div className={containerClass}>
          <Ball size="sm" />
          <Ball size="sm" />
          <Ball size="sm" />
          <Ball size="sm" />
          <Ball size="sm" />
          <Plus />
          <Ball variant="red" size="sm" className="text-xs">
            Ball
          </Ball>
        </div>
      );

    default:
      throw new Error(`Prize not implemented. Received=${prize}`);
  }
}
