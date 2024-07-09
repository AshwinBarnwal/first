// components/ProblemComponent.tsx

import React from 'react';
import { ProblemData } from './interfaces'; // Adjust the path based on your project structure

interface ProblemProps {
  data: ProblemData;
}

const ProblemComponent: React.FC<ProblemProps> = ({ data }) => {
  return (
    <div>
      <h2>{`${data.questionFrontendId}. ${data.questionTitle}`}</h2>
      <p>{data.difficulty}</p>
      <p dangerouslySetInnerHTML={{ __html: data.question }} />
    </div>
  );
};

export default ProblemComponent;
