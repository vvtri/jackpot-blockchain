'use client';

import { Separator } from '@/common/components/shadcn/separator';
import DatePicker from '@/common/components/utils/DatePicker';
import MaxWidthWrapper from '@/common/components/utils/MaxWidthWrapper';
import { appDayjs } from '@/common/configs/dayjs.config';
import WinnerCard from '@/draw/common/components/WinnerCard';
import WinningNumberCard from '@/draw/common/components/WinningNumberCard';
import { DATE_FORMAT_FILTER_DRAW } from '@/draw/common/constants/draw.constant';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import { SelectSingleEventHandler } from 'react-day-picker';
import WinnersAndPrizesTable from './WinnersAndPrizesTable';
import { useGetDrawDetail } from '@/draw/common/hooks/use-get-draw-detail.hook';

type DrawDetailPageProps = {
  frameIdx: number;
};

export default function DrawDetailPage(props: DrawDetailPageProps) {
  const { frameIdx } = props;
  const router = useRouter();
  const pathname = usePathname();

  const { data, isPending } = useGetDrawDetail(frameIdx);

  // const [dateState, setDateState] = useState<Date | undefined>(() => {
  //   const parsedDate = appDayjs(date, DATE_FORMAT_FILTER_DRAW, true);
  //   if (!parsedDate.isValid()) return undefined;

  //   return parsedDate.toDate();
  // });

  // const onDateChange: SelectSingleEventHandler = async (newDate) => {
  //   setDateState(newDate);
  //   if (!newDate) return;

  //   const searchParams = new URLSearchParams({
  //     date: appDayjs(newDate).format(DATE_FORMAT_FILTER_DRAW),
  //   });
  //   router.push(`${pathname}?${searchParams.toString()}`, { scroll: false });
  // };

  return (
    <MaxWidthWrapper className="pt-6 pb-12">
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Draw Result
      </h2>

      {/* <div className="flex items-center my-8">
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight row-span-1 col-span-1 mr-4">
          Draw date:
        </h3>

        <DatePicker date={dateState} onChange={onDateChange} />
      </div> */}

      <div className="grid grid-cols-2 gap-4 my-8">
        <WinningNumberCard drawStatistic={data} />
        <WinnerCard
          drawStatistic={
            data && {
              endTime: data.endTime,
              jackpotWinners: data.jackpot.winners,
              matchFiveWinners: data.matchFive.winners,
            }
          }
        />
      </div>

      <Separator className="my-5" />

      <div className="bg-background px-5 pb-5">
        {data && <WinnersAndPrizesTable drawDetail={data} />}
      </div>
    </MaxWidthWrapper>
  );
}
