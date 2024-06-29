'use client'

import { Metadata } from 'next'
import { useParams } from 'next/navigation'
import {useEffect} from  'react'
import ExcalidrawWrapper from '@/components/excali'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
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
    <div>
      <SiteHeader/>
    </div>
    <div>
    Hello {params.id}
    <ExcalidrawWrapper/>
    </div>
    <div>
        <SiteFooter/>
      </div>
    </div>
    )
  }