'use client';
import React, { useState } from 'react';
import CompanyFormModal from './company-form-modal';
import Button from './button';

function AddCompanyButton ()  {
  const [show, setShow] = useState(false);
  
  return (
    <>
      <Button onClick={() => setShow(true)}>Add Company</Button>
      <CompanyFormModal
        onSubmit={console.log}
        show={show}
        onClose={() => setShow(false)}
      />
    </>
  );
};

export default AddCompanyButton;
