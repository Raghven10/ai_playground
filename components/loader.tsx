import Image from "next/image"


const loader = () => {
  return (
    <div className="h-full flex flex-col gap-y-4 items-center justify-center">
        <div className="w-10 h-10 relative animate-spin">
            <Image alt="logo"
            fill
            src="/logo.png"/>
        </div>
        <p className="text-sm text-muted-foregroud">AI agent is working...</p>
    </div>
  )
}

export default loader