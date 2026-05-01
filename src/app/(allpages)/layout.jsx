import NavigationBar from '@/components/common/NavigationBar';
import Footer from '@/components/footer/Footer';
import React from 'react';

const layout = ({children}) => {
    return (
        <div>
       
            <main>
                {children}
                </main>  
                <Footer/>
        </div>
    );
};

export default layout;