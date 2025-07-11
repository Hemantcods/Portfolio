import React, { useState, useEffect } from 'react';
import '../Animation/ActivateButton.css'; // Make sure to include the CSS

const Sendbtn = ({ initName = 'Submit', hoverName = 'Submiting', doneName = 'Submited', sentStatus = false ,onClick }) => {
  const [status, setStatus] = useState('idle'); // idle, loading, done

  useEffect(() => {
    if (status === 'loading') {
      const doneTimeout = setTimeout(() => {
        setStatus('done');
      }, 3200);
      return () => clearTimeout(doneTimeout);
    }
    if (sentStatus) {
      setStatus('done')
    }
  }, [status, sentStatus]);

  const handleClick = () => {
    if (status === 'idle') setStatus('loading');
    if (onClick) onClick();
  };

  return (
    <>
        <a
          className={`activate ${status === 'loading' ? 'loading' : ''} ${status === 'done' ? 'done' : ''
            }`}
          onClick={handleClick}    >
          <span>
            <svg>
              <use xlinkHref="#circle" />
            </svg>
            <svg>
              <use xlinkHref="#arrow" />
            </svg>
            <svg>
              <use xlinkHref="#check" />
            </svg>
          </span>
          <ul>
            <li>{initName}</li>
            <li>{hoverName}</li>
            <li>{doneName}</li>
          </ul>
        </a>

        {/* SVG Symbols */}
        <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
          <symbol viewBox="0 0 16 16" id="circle">
            <circle cx="8" cy="8" r="7.5" />
          </symbol>
          <symbol viewBox="0 0 12 12" id="arrow">
            <path d="M2.7,5.38c0.22,0.22,0.58,0.22,0.8,0l1.8-2.35v7.32c0,0.36,0.29,0.65,0.65,0.65s0.65-0.29,0.65-0.65V3.03l1.8,2.3c0.2,0.25,0.56,0.29,0.8,0.05s0.29-0.56,0.05-0.8L6.76,1.43C6.4,1.01,5.77,0.96,5.35,1.32L2.67,4.43C2.43,4.71,2.44,5.12,2.7,5.38z" />
          </symbol>
          <symbol viewBox="0 0 12 12" id="check">
            <path d="M4.76,6.77l3.5-3.51c0.35-0.35,0.92-0.35,1.27,0c0.32,0.32,0.32,0.85,0,1.17L5.18,8.83c-0.23,0.23-0.6,0.23-0.83,0L2.5,6.97c-0.32-0.32-0.32-0.85,0-1.17c0.35-0.35,0.92-0.35,1.27,0L4.76,6.77z" />
          </symbol>
        </svg>
    </>
    )
};

      export default Sendbtn;
