import { ProfileForm } from "@/components/lc-form";
import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Problems',
}
export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex-1 flex justify-center items-center">
      <div className="flex flex-col justify-items-end items-center px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:max-w-lg sm:rounded-lg sm:px-10">
        <ProfileForm/>
      </div>
      </div>
    </div>
  );
}

// className="h-screen flex flex-col"
// className="flex-1 flex justify-center items-center"
