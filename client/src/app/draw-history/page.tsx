import MaxWidthWrapper from '@/common/components/utils/MaxWidthWrapper';
import DrawHistoryPage from '@/draw/draw-history/components/DrawHistoryPage';
import React from 'react';

type DrawHistoryProps = {
  params: {};
  searchParams: {
    from?: string;
    to?: string;
  };
};

export default function DrawHistory(props: DrawHistoryProps) {
  const { searchParams } = props;
  const { from, to } = searchParams;

  return <DrawHistoryPage from={from} to={to} />;
}
