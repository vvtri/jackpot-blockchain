import { Button } from '@/common/components/shadcn/button';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from '@/common/components/shadcn/card';
import LuckyNumber from '@/common/components/utils/LuckyNumber';
import React from 'react';
import { appDayjs } from '../../../common/configs/dayjs.config';
import { useGetHomeStatistic } from '@/home/hooks/use-get-home-statistic.hook';

type WinningNumberCardProps = {
  drawStatistic?: Pick<
    Exclude<
      ReturnType<typeof useGetHomeStatistic>['data'],
      null | undefined
    >['nextDraw'],
    'endTime' | 'luckyNumber'
  >;
};

export default function WinningNumberCard(props: WinningNumberCardProps) {
  const { drawStatistic } = props;

  const isValid = drawStatistic?.endTime && drawStatistic.endTime > 0;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-center">Winning Numbers</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col justify-center items-center">
          <p className="font-bold text-lg">
            {isValid &&
              appDayjs
                .unix(Number(drawStatistic.endTime))
                .format('ddd, MMM, D, YYYY')}
          </p>

          {isValid && (
            <LuckyNumber className="mt-4" data={drawStatistic.luckyNumber} />
          )}

          {isValid && (
            <Button className="w-full mt-4 text-base">View result</Button>
          )}
          {isValid && (
            <Button className="w-full mt-2 text-base">Check your number</Button>
          )}

          {!isValid && (
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              This is the first day launching of jackpot
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
