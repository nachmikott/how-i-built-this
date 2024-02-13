import React, { useState } from 'react';

import HowIBuiltThisWrapper from '../Wrapper';
import HowIBuiltThisProvider from '../Provider';
import HowIBuiltThisToggle from '../Toggler';
import 'bootstrap/dist/css/bootstrap.min.css';

interface ButtonProps {}


const listOfLabels: string[] = [
  'Doesnt Do Anything Yet',
  'Seriously, Relax',
  'First time pressing a button eh?'
];

/**
 * Primary UI component for user interaction
 */
export const HowIBuiltThis = ({ }: ButtonProps) => {
  const [currentLabel, setCurrentLabel] = useState(0);
  return (
    <HowIBuiltThisProvider>  
      <HowIBuiltThisWrapper>
        <span>
          <img src='https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg' alt='picture of mountains' />
        </span>
        <button onClick={(): void => { setCurrentLabel(currentLabel < listOfLabels.length - 1 ? currentLabel + 1 : 0) }}>
          {listOfLabels[currentLabel]}
        </button>
      </HowIBuiltThisWrapper>
      <HowIBuiltThisToggle />
    </HowIBuiltThisProvider>
  );
};
