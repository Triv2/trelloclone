import { SignUp } from "@clerk/nextjs";
 
export default function Page() {
  return <SignUp appearance={{
    elements: {
      formButtonPrimary:
        "bg-emerald-800 hover:bg-emerald-500 text-lg normal-case",
        card: "bg-zinc-100/80",
        socialButtons: "bg-red-800 hover:bg-red-500 rounded-md text-white",
        headerTitle:"font-bold text-3xl",
        socialButtonsBlockButtonText: "text-white text-lg font-bold",
    },
  }} />;
}