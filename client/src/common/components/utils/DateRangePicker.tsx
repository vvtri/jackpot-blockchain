'use client';

import React, { useState } from 'react';
import {
  DateRange,
  SelectRangeEventHandler,
  SelectSingleEventHandler,
} from 'react-day-picker';
import { Popover, PopoverContent, PopoverTrigger } from '../shadcn/popover';
import { Button } from '../shadcn/button';
import { Calendar as CalendarIcon } from 'lucide-react';
import { appDayjs } from '@/common/configs/dayjs.config';
import { Calendar } from '../shadcn/calendar';

type DateRangePickerProps = {
  date?: DateRange;
  onChange?: SelectRangeEventHandler;
};

export default function DateRangePicker(props: DateRangePickerProps) {
  const { date, onChange } = props;
  const [isOpen, setIsOpen] = useState(false);

  const handleChange: SelectRangeEventHandler = (...params) => {
    if (params[0]?.from && params[0]?.to) {
      setIsOpen(false);
    }
    onChange?.(...params);
  };

  return (
    <Popover open={isOpen} onOpenChange={(open) => setIsOpen(open)}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className="w-[300px] justify-start text-left font-normal bg-transparent"
        >
          <CalendarIcon className="mr-2 h-4 aspect-square" />
          {date?.from ? (
            date?.to ? (
              <>
                {appDayjs(date.from).format('DD/MM/YYYY')}
                {' - '}
                {appDayjs(date.to).format('DD/MM/YYYY')}
              </>
            ) : (
              appDayjs(date.from).format('DD/MM/YYYY')
            )
          ) : (
            'Pick a date'
          )}
        </Button>
      </PopoverTrigger>

      <PopoverContent className="w-auto">
        <Calendar
          initialFocus
          mode="range"
          defaultMonth={date?.from}
          selected={date}
          onSelect={handleChange}
          numberOfMonths={2}
        />
      </PopoverContent>
    </Popover>
  );
}
