import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full bg-black flex flex-col items-center justify-center px-4 text-center">
      <span className="text-[#CCFF00] text-sm font-semibold tracking-widest mb-4">
        ERROR 404
      </span>

      <h1 className="text-white text-6xl sm:text-8xl font-extrabold tracking-tight">
        404
      </h1>

      <h2 className="text-white text-xl sm:text-2xl font-bold mt-4">
        This page skipped leg day
      </h2>

      <p className="text-[#9CA3AF] mt-2 max-w-md">
        We couldn&apos;t find the page you&apos;re looking for. It may have
        been moved, renamed, or never existed.
      </p>

      <div className="flex flex-col sm:flex-row gap-3 mt-8">
        <Link
          href="/"
          className="bg-[#CCFF00] text-black font-semibold px-6 py-3 rounded-full hover:bg-[#b8e600] transition-colors"
        >
          Back to Home
        </Link>
        <Link
          href="/"
          className="border border-[#2D313B] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#1A1C22] transition-colors"
        >
          Browse Library
        </Link>
      </div>
    </div>
  );
}