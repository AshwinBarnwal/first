import { Button } from "@/components/ui/button"
import { ModeSwitch } from "@/components/mode-switch";
import { useToast } from "@/components/ui/use-toast"
import { ToastSimple } from "@/components/toasties";

export default function Home() {
  return (
<div className="relative flex min-h-screen flex-col justify-center overflow-hidden py-6 sm:py-12">
  <div className="relative px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
        <div className="flex space-x-4">
          <Button>Hello</Button>
          <ModeSwitch />
        </div>
  </div>
</div>
  );
}