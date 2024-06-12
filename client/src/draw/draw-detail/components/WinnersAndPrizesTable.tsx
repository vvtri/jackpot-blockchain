import {
  TableCaption,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  Table,
} from '@/common/components/shadcn/table';
import Ball from '@/common/components/utils/Ball';
import PrizeBallSymbol from '@/draw/common/components/PrizeBallSymbol';
import { MAP_PRIZE_TO_NUMBER } from '@/draw/common/constants/prize.constant';
import { useGetDrawDetail } from '@/draw/common/hooks/use-get-draw-detail.hook';
import React from 'react';
import { formatUnits } from 'viem';

type WinnersAndPrizesTableProps = {
  drawDetail: Exclude<ReturnType<typeof useGetDrawDetail>['data'], undefined>;
};

export default function WinnersAndPrizesTable(
  props: WinnersAndPrizesTableProps,
) {
  const { drawDetail } = props;

  return (
    <Table className="">
      <TableCaption className="font-bold caption-top py-5 text-lg">
        Winners and prizes
      </TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="font-bold">Match</TableHead>
          <TableHead className="font-bold">Winners</TableHead>
          <TableHead className="font-bold">Prize</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        <TableRow>
          <TableCell>
            <PrizeBallSymbol prize={MAP_PRIZE_TO_NUMBER.JACKPOT} />
          </TableCell>
          <TableCell>{drawDetail.jackpot.winners.length}</TableCell>
          <TableCell>{formatUnits(drawDetail.jackpot.money, 18)} ETH</TableCell>
        </TableRow>

        <TableRow>
          <TableCell>
            <PrizeBallSymbol prize={MAP_PRIZE_TO_NUMBER.FIVE_FIRST_NUMBER} />
          </TableCell>
          <TableCell>{drawDetail.matchFive.winners.length}</TableCell>
          <TableCell>{formatUnits(drawDetail.matchFive.money, 18)} ETH</TableCell>
        </TableRow>

        <TableRow>
          <TableCell>
            <PrizeBallSymbol
              prize={MAP_PRIZE_TO_NUMBER.FOUR_FIRST_NUMBER_AND_LAST_NUMBER}
            />
          </TableCell>
          <TableCell>{drawDetail.matchFourAndLast.winners.length}</TableCell>
          <TableCell>
            {formatUnits(drawDetail.matchFourAndLast.money, 18)} ETH
          </TableCell>
        </TableRow>

        <TableRow>
          <TableCell>
            <PrizeBallSymbol prize={MAP_PRIZE_TO_NUMBER.FOUR_FIRST_NUMBER} />
          </TableCell>
          <TableCell>{drawDetail.matchFour.winners.length}</TableCell>
          <TableCell>{formatUnits(drawDetail.matchFour.money, 18)} ETH</TableCell>
        </TableRow>

        <TableRow>
          <TableCell>
            <PrizeBallSymbol
              prize={MAP_PRIZE_TO_NUMBER.THREE_FIRST_NUMBER_AND_LAST_NUMBER}
            />
          </TableCell>
          <TableCell>{drawDetail.matchThreeAndLast.winners.length}</TableCell>
          <TableCell>
            {formatUnits(drawDetail.matchThreeAndLast.money, 9)} Gwei
          </TableCell>
        </TableRow>

        <TableRow>
          <TableCell>
            <PrizeBallSymbol prize={MAP_PRIZE_TO_NUMBER.THREE_FIRST_NUMBER} />
          </TableCell>
          <TableCell>{drawDetail.matchThree.winners.length}</TableCell>
          <TableCell>{formatUnits(drawDetail.matchThree.money, 9)} Gwei</TableCell>
        </TableRow>

        <TableRow>
          <TableCell>
            <PrizeBallSymbol
              prize={MAP_PRIZE_TO_NUMBER.TWO_FIRST_NUMBER_AND_LAST_NUMBER}
            />
          </TableCell>
          <TableCell>{drawDetail.matchTwoAndLast.winners.length}</TableCell>
          <TableCell>
            {formatUnits(drawDetail.matchTwoAndLast.money, 9)} Gwei
          </TableCell>
        </TableRow>

        <TableRow>
          <TableCell>
            <PrizeBallSymbol prize={MAP_PRIZE_TO_NUMBER.LAST_NUMBER} />
          </TableCell>
          <TableCell>{drawDetail.matchLast.winners.length}</TableCell>
          <TableCell>{formatUnits(drawDetail.matchLast.money, 9)} Gwei</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
