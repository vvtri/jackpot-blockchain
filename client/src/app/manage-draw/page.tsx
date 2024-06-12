import ManageDrawPage from '@/draw/manage-draw/components/ManageDrawPage';
import OwnerGuard from '@/draw/manage-draw/components/OwnerGuard';
import React from 'react';

export default function ManageDraw() {
  return (
    <OwnerGuard>
      <ManageDrawPage />
    </OwnerGuard>
  );
}
