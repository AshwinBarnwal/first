'use client'

import { Metadata } from 'next'
import { useParams } from 'next/navigation'
import {useEffect} from  'react'



export default function Page({ params }: { params: { id: string } }) {
  useEffect(() => {
    // Change the document title when the component mounts
    document.title = `${params.id}`;

    // Optional: Cleanup function to reset the title when the component unmounts
    return () => {
      document.title = 'Problems';
    };
  }, []);
    return <div>Hello {params.id}</div>
  }