import React from 'react'

import { useContext } from 'react';
import { HowIBuiltThisContext } from './Provider';

export default function HowIBuiltThisWrapper({
    children
}: Readonly<{ children: React.ReactNode; }>) {
    const { useHowIBuiltThis } = useContext(HowIBuiltThisContext);
    
    const borderInfo = useHowIBuiltThis ? 'border border-2 border-info position-relative rounded': '';

    const handleClick = (e: React.MouseEvent) => { 
      e?.stopPropagation(); 
      alert('Whatever!');
    }

    return (
      <div className={ borderInfo }>
          { children }
          { useHowIBuiltThis && <button className='position-absolute border rounded btn btn-primary' style={{ bottom: '1px', right: '1px' }} onClick={ handleClick }>?</button> }
      </div>
    );
  }
