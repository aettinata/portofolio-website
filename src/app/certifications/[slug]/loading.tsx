import { Skeleton } from "@/components/ui/Skeleton";
import { ArrowLeft } from "lucide-react";

export default function Loading() {
  return (
    <div role="status" aria-label="Memuat konten..." className="flex-1 py-12 md:py-24 bg-bg-primary animate-fade-in">
      <div className="container mx-auto px-6 sm:px-12 max-w-[1024px]">
        {/* Back Link Placeholder */}
        <div className="inline-flex items-center gap-2 mb-12 opacity-40">
          <ArrowLeft size={16} /> <Skeleton variant="text" className="w-32 h-[14px]" />
        </div>

        <div className="bg-bg-secondary rounded-2xl p-8 md:p-12 overflow-hidden">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            
            {/* Avatar Section */}
            <div className="w-full md:w-1/3 flex justify-center">
              <Skeleton variant="avatar" className="w-32 h-32 md:w-40 md:h-40" />
            </div>
            
            {/* Content Section */}
            <div className="w-full md:w-2/3 space-y-6">
              <div>
                {/* h1 height matching (56px-60px typically, we use 56px here for title) */}
                <Skeleton variant="title" className="h-[48px] md:h-[56px] w-4/5 mb-2" />
                {/* issuer height matching */}
                <Skeleton variant="text" className="h-[25px] w-1/2" />
              </div>

              <div className="space-y-4 pt-6 border-t border-border">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    {/* Label */}
                    <Skeleton variant="text" className="h-[18px] w-20 mb-1" />
                    {/* Value */}
                    <Skeleton variant="text" className="h-[22px] w-32" />
                  </div>
                  <div>
                    <Skeleton variant="text" className="h-[18px] w-24 mb-1" />
                    <Skeleton variant="text" className="h-[22px] w-32" />
                  </div>
                </div>
                
                <div>
                  <Skeleton variant="text" className="h-[18px] w-24 mb-1" />
                  <Skeleton variant="text" className="h-[22px] w-48" />
                </div>
              </div>

              <div className="pt-6">
                {/* Link/Button matching */}
                <Skeleton variant="text" className="h-[20px] w-32" />
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
