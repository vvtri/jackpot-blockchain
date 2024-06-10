import MaxWidthWrapper from '@/common/components/utils/MaxWidthWrapper';
import React from 'react';
import ResultHistoryItem from './ResultHistoryItem';

export default function ResultHistoryPage() {
  return (
    <MaxWidthWrapper className="pt-6 pb-12">
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Result History
      </h2>

      <div className="space-y-6">
        <ResultHistoryItem />
        <ResultHistoryItem />
        <ResultHistoryItem />
      </div>
    </MaxWidthWrapper>
  );
}
