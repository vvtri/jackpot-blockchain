'use client';

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/common/components/shadcn/card';
import CountDown from '@/common/components/utils/CountDown';
import MaxWidthWrapper from '@/common/components/utils/MaxWidthWrapper';
import { appDayjs } from '@/common/configs/dayjs.config';
import WinnerCard from '@/draw/common/components/WinnerCard';
import WinningNumberCard from '@/draw/common/components/WinningNumberCard';
import { useGetHomeStatistic } from '../hooks/use-get-home-statistic.hook';
import PickTicketNumber from './PickTicketNumber';

export default function HomePage() {
  const { data } = useGetHomeStatistic();

  return (
    <MaxWidthWrapper className="pt-6 pb-12">
      <div className="grid grid-cols-3 gap-6">
        <WinningNumberCard drawStatistic={data?.lastDraw} />

        <Card>
          <CardHeader>
            <CardTitle className="text-center">Next Drawing</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col justify-center items-center">
              <p className="font-bold text-lg">
                {data?.nextDraw.endTime &&
                  appDayjs
                    .unix(Number(data.nextDraw.endTime))
                    .format('ddd, MMM, D, YYYY')}
              </p>

              {data?.nextDraw.endTime && (
                <CountDown
                  time={appDayjs.unix(Number(data.nextDraw.endTime)).toDate()}
                  className="mt-4"
                />
              )}

              <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-4 py-4 px-2 bg-primary  text-muted w-full text-center rounded-lg">
                Estimated jackpot
              </h3>

              <p className="text-red-500 text-4xl font-bold mt-2">1 ETH</p>
            </div>
          </CardContent>
        </Card>

        <WinnerCard drawStatistic={data?.lastDraw} />
      </div>

      <h2 className="text-4xl font-bold text-center my-12">
        Pick your lucky number
      </h2>

      <PickTicketNumber />
    </MaxWidthWrapper>
  );
}
