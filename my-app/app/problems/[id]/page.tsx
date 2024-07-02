'use client'
import "../../../components/vals.css"
import { useState, useEffect } from 'react'
import ExcalidrawWrapper from '@/components/excali'

export default function Page({ params }: { params: { id: string } }) {
  const [isBoxVisible, setIsBoxVisible] = useState(true);

  useEffect(() => {
    document.title = `${params.id}`;

    return () => {
      document.title = 'Problems';
    };
  }, [params.id]);

  return (
    <div className="custom-height flex flex-col z-40">
      <div className="z-40 custom-height flex flex-row">
        {isBoxVisible && (
          <div className="flex-[0_0_33%] p-4 border-r-2 border-border/40 z-40">
            <h2 className="text-xl font-bold mb-4 z-40">Head</h2>
            <p>
              text
            </p>
          </div>
        )}
        <div className={isBoxVisible ? "flex-[0_0_67%]" : "flex-1"}>
          <ExcalidrawWrapper id={params.id} setIsBoxVisible={setIsBoxVisible} isBoxVisible={isBoxVisible}/>
        </div>
      </div>
    </div>
  )
}
/*<button 
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded self-start" 
        onClick={toggleBox}
      >
        {isBoxVisible ? 'Hide Text Box' : 'Show Text Box'}
      </button>*/