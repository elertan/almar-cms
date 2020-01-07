import React from 'react';

const Header2 = (data) => {
    return (
        <div style={{ height: 100, background: 'red', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 21 }}>
            {data.title}
        </div>
    );
};

export default Header2;
