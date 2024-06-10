import LuckyNumber from '@/common/components/utils/LuckyNumber';
import { FaChevronRight } from 'react-icons/fa6';
import React from 'react';

export default function ResultHistoryItem() {
  return (
    <div className="flex items-center border-[2px] border-border rounded-md justify-between group cursor-pointer p-8 transition hover:border-primary">
      <p className="text-base font-bold group-hover:text-primary transition">
        Sat, Jun 8, 2024
      </p>

      <LuckyNumber />

      <FaChevronRight className="text-3xl group-hover:text-primary transition" />
    </div>
  );
}
