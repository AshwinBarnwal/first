import { ThemeToggle } from "@/components/theme-toggle";
import { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Home',
}

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className="flex flex-col justify-items-end items-center px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:max-w-lg sm:rounded-lg sm:px-10">
        <ThemeToggle/>
      </div>
      </div>
    </div>
  );
}
