'use client';

import { Button } from '@/common/components/shadcn/button';
import { Input } from '@/common/components/shadcn/input';
import { useToast } from '@/common/components/shadcn/use-toast';
import Ball from '@/common/components/utils/Ball';
import {
  MAX_LAST_TICKET_NUMBER,
  MAX_NORMAL_TICKET_NUMBER,
  MIN_TICKET_NUMBER,
  NORMAL_BALL_SIZE,
} from '@/common/constants/app.constant';
import { Loader2 } from 'lucide-react';
import { ReactNode, useState } from 'react';
import { FaRandom } from 'react-icons/fa';
import { useBuyTicketHook } from '../hooks/use-buy-ticket.hook';

export default function PickTicketNumber() {
  const { toast } = useToast();

  const { buyTicket, hash, isPending } = useBuyTicketHook();

  const normalBalls: ReactNode[] = [];
  const lastBalls: ReactNode[] = [];
  const [ticketAmount, setTicketAmount] = useState(1);

  const [selectedNormalBalls, setSelectedNormalBalls] = useState<number[]>([]);
  const [selectedLastBal, setSelectedLastBal] = useState<number | null>(null);

  const selectNormalBall = (ball: number) => {
    setSelectedNormalBalls((prev) => {
      if (prev.length >= NORMAL_BALL_SIZE) return prev;

      return [...prev, ball];
    });
  };

  const handleClearBall = () => {
    setSelectedNormalBalls([]);
    setSelectedLastBal(null);
  };

  const handleRandomBall = () => {
    const normalNumbers: number[] = [];
    for (let i = 0; i < NORMAL_BALL_SIZE; i++) {
      normalNumbers.push(
        Math.floor(
          Math.random() * (MAX_NORMAL_TICKET_NUMBER - MIN_TICKET_NUMBER + 1) +
            MIN_TICKET_NUMBER,
        ),
      );
    }
    const lastNumber = Math.floor(
      Math.random() * (MAX_LAST_TICKET_NUMBER - MIN_TICKET_NUMBER + 1) +
        MIN_TICKET_NUMBER,
    );

    setSelectedNormalBalls(normalNumbers);
    setSelectedLastBal(lastNumber);
  };

  const handleBuyTicket = async () => {
    if (isPending) return;
    if (selectedNormalBalls.length < 5)
      return toast({
        variant: 'destructive',
        title: 'Please select first 5 balls',
      });
    if (!selectedLastBal)
      return toast({
        variant: 'destructive',
        title: 'Please select last ball',
      });

    buyTicket(ticketAmount, [...selectedNormalBalls, selectedLastBal]);
  };

  for (let i = MIN_TICKET_NUMBER; i <= MAX_NORMAL_TICKET_NUMBER; i++) {
    normalBalls.push(
      <Ball
        key={i}
        children={i}
        className="cursor-pointer border-primary border"
        variant={
          selectedNormalBalls.some((item) => item === i) ? 'green' : 'default'
        }
        onClick={() => selectNormalBall(i)}
      />,
    );
  }
  for (let i = MIN_TICKET_NUMBER; i <= MAX_LAST_TICKET_NUMBER; i++) {
    lastBalls.push(
      <Ball
        key={i}
        children={i}
        className="cursor-pointer border-primary border"
        variant={selectedLastBal === i ? 'red' : 'default'}
        onClick={() => setSelectedLastBal(i)}
      />,
    );
  }

  return (
    <div className="">
      <div className="flex gap-10">
        <div className="flex flex-[7] py-6 px-8 border-[3px] border-primary rounded-2xl flex-wrap gap-4">
          {normalBalls}
        </div>
        <div className="flex flex-[3] py-6 px-8 border-[3px] border-primary rounded-2xl flex-wrap gap-4">
          {lastBalls}
        </div>
      </div>

      <div className="flex py-6 px-8 border-[3px] border-primary rounded-2xl mt-6 items-center w-full justify-between">
        <div className="flex h-12 items-center justify-center">
          <p className="font-bold text-2xl block shrink-0 mr-5 ">
            Selected number:
          </p>
        </div>

        <div className="shrink-0 flex gap-4 items-center">
          {selectedNormalBalls.map((item, idx) => (
            <Ball
              children={item}
              key={`${item} ${idx}`}
              onClick={() =>
                setSelectedNormalBalls((prev) => [
                  ...prev.slice(0, idx),
                  ...prev.slice(idx + 1),
                ])
              }
              className="cursor-pointer"
              variant="green"
              showCloseIcon
            />
          ))}

          {selectedLastBal && (
            <Ball
              children={selectedLastBal}
              onClick={() => setSelectedLastBal(null)}
              className="cursor-pointer"
              variant="red"
              showCloseIcon
            />
          )}
        </div>

        <div className="space-x-5 flex items-center">
          <Button
            variant="outline"
            className="border-primary"
            disabled={selectedNormalBalls.length === 0 && !selectedLastBal}
            onClick={handleClearBall}
          >
            Clear <span className="ml-3 text-xl">&times;</span>
          </Button>
          <Button
            onClick={handleRandomBall}
            variant="outline"
            className="border-primary"
          >
            Auto select
            <FaRandom className="ml-3" />
          </Button>

          <Input
            type="number"
            value={ticketAmount}
            onChange={(e) => setTicketAmount(Number(e.target.value) || 0)}
            className="w-[100px]"
          />

          <Button onClick={handleBuyTicket} disabled={isPending}>
            {isPending && <Loader2 className="mr-2 animate-spin" />}
            Checkout
          </Button>
        </div>
      </div>
    </div>
  );
}
