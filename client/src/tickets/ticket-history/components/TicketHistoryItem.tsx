import LuckyNumber from '@/common/components/utils/LuckyNumber';
import { appDayjs } from '@/common/configs/dayjs.config';
import { getLinkDrawResultDetail } from '@/common/utils/link.util';
import { MAP_PRIZE_TO_NUMBER } from '@/draw/common/constants/prize.constant';
import { useGetMyTicketList } from '@/tickets/common/hooks/use-get-ticket-list.hook';
import { boolean } from 'boolean';
import Link from 'next/link';
import { FaChevronRight } from 'react-icons/fa6';

type TicketHistoryItemProps = {
  ticket: Exclude<
    Exclude<ReturnType<typeof useGetMyTicketList>, undefined>['data'],
    undefined
  >[number];
};

export default function TicketHistoryItem(props: TicketHistoryItemProps) {
  const { ticket } = props;

  let prizeTitle = '';

  if (ticket.prize > 1) {
    for (const key of Object.keys(MAP_PRIZE_TO_NUMBER)) {
      if (
        MAP_PRIZE_TO_NUMBER[key as keyof typeof MAP_PRIZE_TO_NUMBER] !==
        Number(ticket.prize)
      )
        continue;

      prizeTitle = `Prize: ${key}`;
      break;
    }
  }

  return (
    <div className="flex items-center border-[2px] border-border rounded-md justify-between group cursor-pointer p-8 transition hover:border-primary">
      <p className="text-base font-bold group-hover:text-primary transition">
        {appDayjs.unix(Number(ticket.endTime)).format('ddd, MMM, D, YYYY')}
      </p>

      <LuckyNumber data={ticket.luckyNumber} />

      {Boolean(prizeTitle) && <p className="text-lg font-bold">{prizeTitle}</p>}

      <FaChevronRight className="text-3xl group-hover:text-primary transition" />
    </div>
  );
}
