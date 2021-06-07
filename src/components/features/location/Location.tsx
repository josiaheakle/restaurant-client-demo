import * as React from 'react';

interface LocationProps {
    
}

const Location: React.FC<LocationProps> = ({}) => {
    return (
        <div id='location' className='Location' style={{
            backgroundColor: 'var(--grey)',
            height: '100vh',
            width: '100vw'
        }}>

        </div>
    );
}

export {Location};