'use client';

import React, { useState } from 'react';
import { Popover, PopoverContent, PopoverTrigger } from '../shadcn/popover';
import { Calendar } from '../shadcn/calendar';
import { SelectSingleEventHandler } from 'react-day-picker';
import { Button } from '../shadcn/button';
import { Calendar as CalendarIcon } from 'lucide-react';
import { appDayjs } from '@/common/configs/dayjs.config';

type DatePickerProps = {
  date?: Date;
  onChange?: SelectSingleEventHandler;
};

export default function DatePicker(props: DatePickerProps) {
  const { date, onChange } = props;
  const [isOpen, setIsOpen] = useState(false);

  const handleChange: SelectSingleEventHandler = (...params) => {
    setIsOpen(false);
    onChange?.(...params);
  };

  return (
    <Popover open={isOpen} onOpenChange={(open) => setIsOpen(open)}>
      <PopoverTrigger asChild>
        <Button>
          <CalendarIcon className="w-4 aspect-square mr-4" />
          {date ? appDayjs(date).format('DD/MM/YYYY') : 'Pick a date'}
        </Button>
      </PopoverTrigger>

      <PopoverContent>
        <Calendar mode="single" selected={date} onSelect={handleChange}  />
      </PopoverContent>
    </Popover>
  );
}
