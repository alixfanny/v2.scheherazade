import React, { useState } from 'react';

function Tooltip({ children, text }) {
    const [show, setShow] = useState(false);
  
    return (
      <div
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        style={{ position: 'relative', display: 'inline-block', marginLeft: '2%' }}
      >
        {children}
        {show && (
          <div style={{ 
              position: 'absolute', 
              bottom: '100%', 
              left: '50%', 
              transform: 'translateX(10%)', 
              border: '1px solid #E29624', 
              backgroundColor: 'white', 
              padding: '5px', 
              zIndex: 1,
              width: '450px',
              fontSize: '18px',
            }}
          >
            {text}
          </div>
        )}
      </div>
    );
}

export default Tooltip