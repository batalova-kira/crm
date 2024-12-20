import React from 'react';

import DashboardCard from '@/app/components/dashboard-card';
import SummaryTableCell from '@/app/components/summary-table-cell';
import SummaryTable from '@/app/components/summary-table';
import SummaryTableHeader from '@/app/components/summary-table-header';
import { getSummaryPromotions } from '@/lib/api';

export default async function Page() {
  const data = await getSummaryPromotions();

  return (
    <DashboardCard label="Promotions">
      <SummaryTable
        headers={
          <>
            <SummaryTableHeader>Company</SummaryTableHeader>
            <SummaryTableHeader>Name</SummaryTableHeader>
            <SummaryTableHeader align="center">%</SummaryTableHeader>
          </>
        }
      >
        {data.map(({ promotionId, promotionName, companyTitle, discount }) => (
          <tr key={promotionId}>
            <SummaryTableCell>{companyTitle}</SummaryTableCell>
            <SummaryTableCell>{promotionName}</SummaryTableCell>
            <SummaryTableCell align="center">{`-${discount}%`}</SummaryTableCell>
          </tr>
        ))}
      </SummaryTable>
    </DashboardCard>
  );
}
