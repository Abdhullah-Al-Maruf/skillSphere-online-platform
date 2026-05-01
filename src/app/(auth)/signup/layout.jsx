import Signupfooter from '@/components/authFooters/Signupfooter';
import React from 'react';

const SignupLayout = ({children}) => {
  return (
    <div>
      {children}
      <Signupfooter/>
    </div>
  );
};

export default SignupLayout;