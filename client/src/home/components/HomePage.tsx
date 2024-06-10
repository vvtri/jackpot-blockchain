import { Button } from '@/common/components/shadcn/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/common/components/shadcn/card';
import CountDown from '@/common/components/utils/CountDown';
import LuckyNumber from '@/common/components/utils/LuckyNumber';
import MaxWidthWrapper from '@/common/components/utils/MaxWidthWrapper';
import dayjs from 'dayjs';
import PickTicketNumber from './PickTicketNumber';
import { lotteryAbi } from 'ethereum-contract';
import { useReadContracts } from 'wagmi';

export default function HomePage() {
  return (
    <MaxWidthWrapper className="pt-6 pb-12">
      <div className="grid grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-center">Winning Numbers</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col justify-center items-center">
              <p className="font-bold text-lg">
                {dayjs('08/06/2024', 'DD/MM/YYYY').format('ddd, MMM, D, YYYY')}
              </p>

              <LuckyNumber className="mt-4" />

              <Button className="w-full mt-4 text-base">View result</Button>
              <Button className="w-full mt-2 text-base">
                Check your number
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-center">Next Drawing</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col justify-center items-center">
              <p className="font-bold text-lg">
                {dayjs('08/06/2024', 'DD/MM/YYYY').format('ddd, MMM, D, YYYY')}
              </p>

              <CountDown
                time={new Date('2024-06-11T05:25:46.415Z')}
                className="mt-4"
              />

              <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-4 py-4 px-2 bg-primary  text-muted w-full text-center rounded-lg">
                Estimated jackpot
              </h3>

              <p className="text-red-500 text-4xl font-bold mt-2">1 ETH</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-center">Winners</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col justify-center items-center">
              <p className="font-bold text-lg">
                {dayjs('08/06/2024', 'DD/MM/YYYY').format('ddd, MMM, D, YYYY')}
              </p>

              <h4 className="scroll-m-20 text-2xl font-bold tracking-wide mt-4 uppercase ">
                Jackpot Winner
              </h4>
              <p className="text-red-500 font-medium">None</p>

              <h4 className="scroll-m-20 text-2xl font-bold tracking-wide mt-4 uppercase ">
                Jackpot Winner
              </h4>
              <p className="text-red-500 font-medium">None</p>

              <h4 className="scroll-m-20 text-2xl font-bold tracking-wide mt-4 uppercase ">
                Jackpot Winner
              </h4>
              <p className="text-red-500 font-medium">None</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <h2 className="text-4xl font-bold text-center my-12">
        Pick your lucky number
      </h2>

      <PickTicketNumber />
    </MaxWidthWrapper>
  );
}
