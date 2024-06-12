import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/common/components/shadcn/card';
import { appDayjs } from '../../../common/configs/dayjs.config';
import { useGetHomeStatistic } from '@/home/hooks/use-get-home-statistic.hook';

type WinnerCardCardProps = {
  drawStatistic?: Pick<
    Exclude<
      ReturnType<typeof useGetHomeStatistic>['data'],
      null | undefined
    >['nextDraw'],
    'endTime' | 'jackpotWinners' | 'matchFiveWinners'
  >;
};

export default function WinnerCard(props: WinnerCardCardProps) {
  const { drawStatistic } = props;
  const { endTime, jackpotWinners, matchFiveWinners } = drawStatistic || {};

  const isValid = drawStatistic?.endTime && drawStatistic.endTime > 0;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-center">Winners</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col justify-center items-center">
          {isValid && (
            <>
              <p className="font-bold text-lg">
                {appDayjs
                  .unix(Number(drawStatistic.endTime))
                  .format('ddd, MMM, D, YYYY')}
              </p>

              <h4 className="scroll-m-20 text-2xl font-bold tracking-wide mt-4 uppercase ">
                Jackpot Winner
              </h4>
              <p className="text-red-500 font-medium">
                {jackpotWinners?.length && jackpotWinners?.length > 0
                  ? jackpotWinners.join(', ')
                  : 'None'}
              </p>

              <h4 className="scroll-m-20 text-2xl font-bold tracking-wide mt-4 uppercase ">
                Match Five Winner
              </h4>
              <p className="text-red-500 font-medium">
                {matchFiveWinners?.length && matchFiveWinners?.length > 0
                  ? matchFiveWinners.join(', ')
                  : 'None'}
              </p>
            </>
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
