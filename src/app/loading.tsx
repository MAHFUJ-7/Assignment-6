export default function Loading() {
  return (
    <div className="min-h-screen w-full bg-black flex flex-col items-center justify-center gap-4">
      <div className="relative h-12 w-12">
        <div className="absolute inset-0 rounded-full border-4 border-[#2D313B]" />
        <div className="absolute inset-0 rounded-full border-4 border-[#CCFF00] border-t-transparent animate-spin" />
      </div>
      <p className="text-[#9CA3AF] text-sm font-medium tracking-wide">
        Loading...
      </p>
    </div>
  );
}
