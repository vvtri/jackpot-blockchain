import LuckyNumber, {
  LuckyNumberProps,
} from '@/common/components/utils/LuckyNumber';
import { appDayjs } from '@/common/configs/dayjs.config';
import { getLinkDrawResultDetail } from '@/common/utils/link.util';
import Link from 'next/link';
import { FaChevronRight } from 'react-icons/fa6';

type DrawHistoryItemProps = {
  luckyNumber: LuckyNumberProps['data'];
  endTime: number;
  frameIdx: number;
};

export default function DrawHistoryItem(props: DrawHistoryItemProps) {
  const { luckyNumber, endTime, frameIdx } = props;

  return (
    <Link href={getLinkDrawResultDetail(frameIdx)}>
      <div className="flex items-center border-[2px] border-border rounded-md justify-between group cursor-pointer p-8 transition hover:border-primary">
        <p className="text-base font-bold group-hover:text-primary transition">
          {appDayjs.unix(Number(endTime)).format('ddd, MMM, D, YYYY')}
        </p>

        <LuckyNumber data={luckyNumber} />

        <FaChevronRight className="text-3xl group-hover:text-primary transition" />
      </div>
    </Link>
  );
}
