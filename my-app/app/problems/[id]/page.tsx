'use client'
import "../../../components/vals.css"
import { useState, useEffect } from 'react';
import ExcalidrawWrapper from '@/components/excali';
import ProblemComponent from '@/components/ProblemComponent'; // Adjust the path based on your project structure
import { ProblemData } from '../../../components/interfaces'; // Adjust the path based on your project structure

export default function Page({ params }: { params: { id: string } }) {
  const [isBoxVisible, setIsBoxVisible] = useState(true);
  const [problemData, setProblemData] = useState<ProblemData | null>(null);

  useEffect(() => {
    document.title = `${params.id}`;

    return () => {
      document.title = 'Problems';
    };
  }, [params.id]);

  useEffect(() => {
    const fetchProblemData = async () => {
      try {
        const response = await fetch(`https://alfa-leetcode-api.onrender.com/select?titleSlug=${params.id}`); // Replace with your API endpoint
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        const problemData: ProblemData = {
          questionFrontendId: data.questionFrontendId,
          questionTitle: data.questionTitle,
          difficulty: data.difficulty,
          question: data.question,
        };
        setProblemData(problemData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchProblemData();
  }, [params.id]);

  return (
    <div className="custom-height flex flex-col z-40">
      <div className="z-40 custom-height flex flex-row overflow-hidden">
        {isBoxVisible && problemData && (
          <div className="flex-[0_0_33%] p-4 border-r-2 border-border/40 z-40 overflow-auto">
            <ProblemComponent data={problemData} />
          </div>
        )}
        <div className={isBoxVisible ? "flex-[0_0_67%]" : "flex-1"}>
            <ExcalidrawWrapper id={params.id} setIsBoxVisible={setIsBoxVisible} isBoxVisible={isBoxVisible} />
        </div>
      </div>
    </div>
  )
}
