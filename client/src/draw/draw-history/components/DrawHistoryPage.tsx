'use client';

import MaxWidthWrapper from '@/common/components/utils/MaxWidthWrapper';
import React, { useState } from 'react';
import DrawHistoryItem from './DrawHistoryItem';
import DateRangePicker from '@/common/components/utils/DateRangePicker';
import { Button } from '@/common/components/shadcn/button';
import { DateRange } from 'react-day-picker';
import { usePathname, useRouter } from 'next/navigation';
import { appDayjs } from '@/common/configs/dayjs.config';
import { DATE_FORMAT_FILTER_DRAW } from '@/draw/common/constants/draw.constant';
import { useGetDrawListHook } from '@/draw/common/hooks/use-get-draw-list.hook';

type DrawHistoryPageProps = {
  from?: string;
  to?: string;
};

export default function DrawHistoryPage(props: DrawHistoryPageProps) {
  const { from, to } = props;
  const router = useRouter();
  const pathname = usePathname();

  const [date, setDate] = useState<DateRange | undefined>(() => {
    const parsedFrom = appDayjs(from, DATE_FORMAT_FILTER_DRAW, true);
    const parsedTo = appDayjs(to, DATE_FORMAT_FILTER_DRAW, true);

    if (!parsedFrom.isValid() || !parsedTo.isValid()) return undefined;
    return { from: parsedFrom.toDate(), to: parsedTo.toDate() };
  });

  const { data, isFetching, fetchNextPage, hasNextPage } = useGetDrawListHook();

  console.log('data', data)

  const handleSearch = () => {
    if (!date?.from || !date.to) return;

    const urlSearchParams = new URLSearchParams({
      from: appDayjs(date.from).format(DATE_FORMAT_FILTER_DRAW),
      to: appDayjs(date.to).format(DATE_FORMAT_FILTER_DRAW),
    });
    router.push(`${pathname}?${urlSearchParams}`, { scroll: false });
  };

  return (
    <MaxWidthWrapper className="pt-6 pb-12">
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Result History
      </h2>

      {/* <div className="flex items-center my-8">
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight row-span-1 col-span-1 mr-4">
          Pick a date:
        </h3>

        <DateRangePicker date={date} onChange={setDate} />

        <Button className="ml-6" onClick={handleSearch}>
          Search
        </Button>
      </div> */}

      <div className="flex flex-col gap-6">
        {data?.length &&
          data.flatMap((page) =>
            page[0].result?.draws.map((item) => (
              <DrawHistoryItem key={item.frameIdx} luckyNumber={item.luckyNumber} endTime={Number(item.endTime)} frameIdx={Number(item.frameIdx)}  />
            )),
          )}
      </div>
    </MaxWidthWrapper>
  );
}
