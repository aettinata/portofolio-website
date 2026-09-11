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
          {/* Project Header */}
          <div className="mb-10 text-center">
            <Skeleton variant="title" className="h-[48px] md:h-[64px] w-3/4 mx-auto mb-4" />
            <Skeleton variant="text" className="h-[25px] w-1/2 mx-auto" />
          </div>

          {/* Project Image */}
          <div className="aspect-video w-full rounded-xl overflow-hidden mb-12">
            <Skeleton variant="image" className="w-full h-full" />
          </div>

          {/* Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="space-y-4">
              <div>
                <Skeleton variant="text" className="h-[18px] w-20 mb-2" />
                <Skeleton variant="text" className="h-[22px] w-32" />
              </div>
            </div>
            <div className="space-y-4 md:col-span-2">
              <Skeleton variant="text" className="h-[18px] w-20 mb-2" />
              <div className="flex gap-2 flex-wrap">
                <Skeleton variant="text" className="h-[32px] w-24 rounded-full" />
                <Skeleton variant="text" className="h-[32px] w-20 rounded-full" />
                <Skeleton variant="text" className="h-[32px] w-28 rounded-full" />
              </div>
            </div>
          </div>

          {/* Content Paragraphs */}
          <div className="space-y-4 border-t border-border pt-8">
            <Skeleton variant="text" className="h-[22px] w-full" />
            <Skeleton variant="text" className="h-[22px] w-[90%]" />
            <Skeleton variant="text" className="h-[22px] w-[95%]" />
            <Skeleton variant="text" className="h-[22px] w-3/4" />
          </div>
        </div>
      </div>
    </div>
  );
}
