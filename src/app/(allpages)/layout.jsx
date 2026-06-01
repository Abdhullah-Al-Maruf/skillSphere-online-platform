
import Footer from '@/components/footer/Footer';
import React from 'react';

const layout = ({children}) => {
    return (
        <div >
       
            <main className='w-[85%] mx-auto'>
                {children}
                </main>  
                <Footer/>
        </div>
    );
};

export default layout;