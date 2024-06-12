'use client';

import MaxWidthWrapper from '@/common/components/utils/MaxWidthWrapper';
import React, { useState } from 'react';
import DateRangePicker from '@/common/components/utils/DateRangePicker';
import { Button } from '@/common/components/shadcn/button';
import { DateRange } from 'react-day-picker';
import { usePathname, useRouter } from 'next/navigation';
import { appDayjs } from '@/common/configs/dayjs.config';
import { DATE_FORMAT_FILTER_DRAW } from '@/draw/common/constants/draw.constant';
import { useGetDrawListHook } from '@/draw/common/hooks/use-get-draw-list.hook';
import { useAccount } from 'wagmi';
import { useShouldShowDrawing } from '../hooks/use-should-show-drawing.hook';
import { usePrepareDrawing } from '../hooks/use-prepare-drawing.hook';
import { useDrawing } from '../hooks/use-drawing.hook';
import { Loader2 } from 'lucide-react';
import { useSetCurrentEndTime } from '../hooks/use-set-current-end-time.hook';
import DatePicker from '@/common/components/utils/DatePicker';
import { DateTimePicker } from '@/common/components/shadcn/datetime-picker';
import {
  CalendarDate,
  CalendarDateTime,
  Time,
  ZonedDateTime,
} from '@internationalized/date';

type ManageDrawPageProps = {};

export default function ManageDrawPage(props: ManageDrawPageProps) {
  const { isLoading, shouldDrawing, shouldPreparingDrawing } =
    useShouldShowDrawing();
  const { prepareDrawing, isPrepareDrawing } = usePrepareDrawing();
  const { drawing, isDrawing } = useDrawing();
  const { setCurrentEndTime, isSetCurrentEndTime } = useSetCurrentEndTime();
  const [newCurrentEndTime, setNewCurrentEndTime] = useState<
    CalendarDateTime | undefined
  >();

  return (
    <MaxWidthWrapper className="pt-6 pb-12 min-h-[200vh]">
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 ">
        Manage Draw
      </h2>

      <div className="mt-8 space-y-6">
        <div className="flex gap-4 items-center">
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight basis-3/12">
            Prepare drawing:
          </h3>
          <div className="grow-[7]">
            <Button
              className=""
              disabled={
                isLoading || !shouldPreparingDrawing || isPrepareDrawing
              }
              onClick={prepareDrawing}
            >
              {isPrepareDrawing && <Loader2 className="mr-2 animate-spin" />}
              Prepare drawing
            </Button>
          </div>
        </div>

        <div className="flex gap-4 items-center">
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight basis-3/12">
            Drawing:
          </h3>
          <div className="grow-[7]">
            <Button
              disabled={isLoading || !shouldDrawing || isDrawing}
              onClick={drawing}
            >
              {isDrawing && <Loader2 className="mr-2 animate-spin" />}
              Drawing
            </Button>
          </div>
        </div>

        <div className="flex gap-4 items-center">
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight basis-3/12">
            Set current end time:
          </h3>

          <DateTimePicker
            granularity="second"
            hourCycle={24}
            value={newCurrentEndTime}
            onChange={(date) => setNewCurrentEndTime(date as CalendarDateTime)}
          />

          <div className="grow-[7]">
            <Button
              disabled={!newCurrentEndTime || isSetCurrentEndTime}
              onClick={() => {
                newCurrentEndTime &&
                  setCurrentEndTime(
                    newCurrentEndTime.toDate(
                      Intl.DateTimeFormat().resolvedOptions().timeZone,
                    ),
                  );
              }}
            >
              {isDrawing && <Loader2 className="mr-2 animate-spin" />}
              Set
            </Button>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
