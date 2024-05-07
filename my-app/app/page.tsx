import Image from "next/image";
import { Button } from "@/components/ui/button"
import { ButtonLink } from "./layout";
import { ModeToggle } from "./layout";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div></div>
      <div className="relative bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
      <Button className="bg-green-500 hover:bg-green-700">Hello</Button>
      <ModeToggle></ModeToggle>
      </div>
      <div></div>
    </main>
  );
}