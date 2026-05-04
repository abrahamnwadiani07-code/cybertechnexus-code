import { motion } from 'framer-motion';

export function PageSkeleton() {
  return (
    <div className="min-h-screen bg-ctn-bg animate-pulse">
      {/* Navbar skeleton */}
      <div className="h-[72px] border-b border-ctn-border bg-ctn-bg-elevated" />
      {/* Hero skeleton */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <div className="h-4 w-48 bg-ctn-border rounded mb-8" />
        <div className="h-12 w-[500px] max-w-full bg-ctn-border rounded mb-4" />
        <div className="h-12 w-[400px] max-w-full bg-ctn-border rounded mb-8" />
        <div className="h-5 w-[600px] max-w-full bg-ctn-border rounded mb-4" />
        <div className="h-5 w-[500px] max-w-full bg-ctn-border rounded mb-10" />
        <div className="flex gap-4">
          <div className="h-12 w-48 bg-ctn-border rounded-lg" />
          <div className="h-12 w-48 bg-ctn-border rounded-lg" />
        </div>
      </div>
    </div>
  );
}

export function CardSkeleton({ count = 3 }: { count?: number }) {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {[...Array(count)].map((_, i) => (
        <div key={i} className="p-6 rounded-xl border border-ctn-border bg-ctn-bg-elevated animate-pulse">
          <div className="w-10 h-10 bg-ctn-border rounded-lg mb-4" />
          <div className="h-5 w-32 bg-ctn-border rounded mb-3" />
          <div className="h-3 w-full bg-ctn-border rounded mb-2" />
          <div className="h-3 w-3/4 bg-ctn-border rounded" />
        </div>
      ))}
    </div>
  );
}
