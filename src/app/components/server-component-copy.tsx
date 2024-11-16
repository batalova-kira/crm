import React from 'react';

export interface CopyServerComponentProps {
  children?: React.ReactNode;
}
function CopyServerComponent({ children }: CopyServerComponentProps) {
  console.log('Copy Server Component');

  return (
    <div>
      <span>Copy Server Component</span> {children}
    </div>
  );
}

export default CopyServerComponent;
