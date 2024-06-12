'use client';

import MaxWidthWrapper from '@/common/components/utils/MaxWidthWrapper';
import DrawHistoryItem from '@/draw/draw-history/components/DrawHistoryItem';
import { useGetMyTicketList } from '@/tickets/common/hooks/use-get-ticket-list.hook';
import { usePathname, useRouter } from 'next/navigation';
import TicketHistoryItem from './TicketHistoryItem';

type TicketHistoryPageProps = {};

export default function TicketHistoryPage(props: TicketHistoryPageProps) {
  const { data, isFetching } = useGetMyTicketList();

  return (
    <MaxWidthWrapper className="pt-6 pb-12">
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Ticket History
      </h2>

      <div className="flex flex-col gap-6 my-8">
        {data &&
          data.map((item) => (
            <TicketHistoryItem key={item.frameIdx} ticket={item} />
          ))}
      </div>
    </MaxWidthWrapper>
  );
}
