import React from 'react';

export interface PageProps {
  label?: string;
}
function Page({}: PageProps) {
  return <main>Settings page</main>;
}

export default Page;
