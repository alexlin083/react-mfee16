import React from 'react';

import { Steps, Step } from 'react-step-builder';
import Step1 from './Step1';
import Step2 from './Step2';
import FinalStep from './FinalStep';

function App() {
  return (
    <>
      <form>
        <Steps>
          <Step component={Step1} />
          <Step component={Step2} />
          <Step component={FinalStep} />
        </Steps>
      </form>
    </>
  );
}

export default App;
