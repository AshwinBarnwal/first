"use client"

import {writedoc, readdoc} from '@/lib/firebase/crud';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
     hi hlep
     <Button onClick={()=>writedoc("321","whynot")}>bananas</Button>
     <Button onClick={()=>readdoc("321")}>get banana :D</Button> 
    </div>
  );
}