import FooterLogin from '@/components/authFooters/FooterLogin';
import React from 'react';

const loginLayout = ({children}) => {
    return (
        <div>
           {children}
           <FooterLogin/>
        </div>
    );
};

export default loginLayout;