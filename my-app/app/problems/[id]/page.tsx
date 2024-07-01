'use client'

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
      <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
    <div>Hello {params.id}</div>
    <div className="z-50">
    <ExcalidrawWrapper id={params.id}/>
    </div>
    </div>
    )
  }