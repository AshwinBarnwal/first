'use client'
import './vals.css'
import {useEffect} from  'react'
import ExcalidrawWrapper from '@/components/excali'

export default function Page({ params }: { params: { id: string } }) {
  useEffect(() => {
    // Change the document title when the component mounts
    document.title = `${params.id}`;

    // Optional: Cleanup function to reset the title when the component unmounts
    return () => {
      document.title = 'Problems';
    };
  }, []);
    return (
    <div className="custom-height flex flex-col">
    
    <div className="z-40 custom-height">
    <ExcalidrawWrapper id={params.id}/>
    </div>
    </div>
    )
  }

  //className="h-screen flex-col"