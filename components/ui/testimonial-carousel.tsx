"use client";

import * as React from "react";
import useEmblaCarousel, {
  type UseEmblaCarouselType,
} from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type TestimonialCardApi = UseEmblaCarouselType[1];
type UseTestimonialCardParameters = Parameters<typeof useEmblaCarousel>;
type TestimonialCardOptions = UseTestimonialCardParameters[0];
type TestimonialCardPlugin = UseTestimonialCardParameters[1];

type TestimonialCardProps = {
  opts?: TestimonialCardOptions;
  plugins?: TestimonialCardPlugin;
  setApi?: (api: TestimonialCardApi) => void;
};

type TestimonialCardContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0];
  api: ReturnType<typeof useEmblaCarousel>[1];
  scrollPrev: () => void;
  scrollNext: () => void;
  canScrollPrev: boolean;
  canScrollNext: boolean;
} & TestimonialCardProps;

const TestimonialCardContext =
  React.createContext<TestimonialCardContextProps | null>(null);

function useTestimonialCard() {
  const context = React.useContext(TestimonialCardContext);
  if (!context)
    throw new Error(
      "useTestimonialCard must be used within a <TestimonialCard />",
    );
  return context;
}

function TestimonialCard({
  opts,
  setApi,
  plugins,
  className,
  children,
  ...props
}: React.ComponentProps<"div"> & TestimonialCardProps) {
  const [carouselRef, api] = useEmblaCarousel({ ...opts, loop: true }, plugins);
  const [canScrollPrev, setCanScrollPrev] = React.useState(false);
  const [canScrollNext, setCanScrollNext] = React.useState(false);

  const onSelect = React.useCallback((api: TestimonialCardApi) => {
    if (!api) return;
    setCanScrollPrev(api.canScrollPrev());
    setCanScrollNext(api.canScrollNext());
  }, []);

  const scrollPrev = React.useCallback(() => {
    if (api) api.scrollPrev();
  }, [api]);
  const scrollNext = React.useCallback(() => {
    if (api) api.scrollNext();
  }, [api]);

  const handleKeyDown = React.useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        scrollPrev();
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        scrollNext();
      }
    },
    [scrollPrev, scrollNext],
  );

  React.useEffect(() => {
    if (api && setApi) setApi(api);
  }, [api, setApi]);

  React.useEffect(() => {
    if (!api) return;
    onSelect(api);
    api.on("reInit", onSelect);
    api.on("select", onSelect);
    return () => {
      if (api) {
        api.off("reInit", onSelect);
        api.off("select", onSelect);
      }
    };
  }, [api, onSelect]);

  return (
    <TestimonialCardContext.Provider
      value={{
        carouselRef,
        api,
        opts,
        scrollPrev,
        scrollNext,
        canScrollPrev,
        canScrollNext,
      }}
    >
      <div
        onKeyDownCapture={handleKeyDown}
        className={cn("relative", className)}
        role="region"
        aria-roledescription="carousel"
        {...props}
      >
        {children}
      </div>
    </TestimonialCardContext.Provider>
  );
}

function TestimonialCardContent({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const { carouselRef } = useTestimonialCard();
  return (
    <div ref={carouselRef} className="overflow-hidden">
      <div className={cn("flex", className)} {...props} />
    </div>
  );
}

function TestimonialCardItem({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      role="group"
      aria-roledescription="slide"
      className={cn("min-w-0 shrink-0 grow-0 basis-full px-4", className)}
      {...props}
    />
  );
}

const TestimonialItem = React.memo(
  ({ testimonial }: { testimonial: Testimonial }) => (
    <TestimonialCardItem className="flex justify-center">
      <Card className="bg-card border-feat-border/40 border shadow-xs w-full max-w-[92vw] md:max-w-5xl mx-auto rounded-2xl overflow-hidden">
        <CardContent className="p-6 md:p-10 flex items-center justify-center">
          <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left max-w-4xl gap-6 md:gap-12">
            <Avatar className="w-16 h-16 md:w-24 md:h-24 ring-2 ring-primary-general/5 transition-transform hover:scale-105 duration-300 shrink-0">
              <AvatarImage src={testimonial.image} alt={testimonial.name} />
              <AvatarFallback>
                {testimonial.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>

            <div className="flex flex-col justify-center space-y-4 md:space-y-6">
              <p className="text-sm md:text-xl text-foreground italic opacity-95">
                "{testimonial.description}"
              </p>

              <div className="space-y-1">
                <h3 className="text-base md:text-xl font-semibold text-testim-ttl">
                  {testimonial.name}
                </h3>
                <p className="text-[10px] md:text-xs text-testim-desc font-normal tracking-widest uppercase opacity-70">
                  {testimonial.handle}
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </TestimonialCardItem>
  ),
);
TestimonialItem.displayName = "TestimonialItem";

type Testimonial = {
  description: string;
  image: string;
  name: string;
  handle: string;
};

type TestimonialCarouselProps = {
  data: Testimonial[];
  borderType?: "solid" | "gradient";
};

export default function TestimonialCarousel({
  data,
}: TestimonialCarouselProps) {
  const [api, setApi] = React.useState<TestimonialCardApi>();

  return (
    <div className="relative flex flex-col items-center w-full select-none pt-5 pb-10">
      <TestimonialCard className="relative w-full" setApi={setApi}>
        <TestimonialCardContent>
          {data.map((testimonial, index) => (
            <TestimonialItem key={index} testimonial={testimonial} />
          ))}
        </TestimonialCardContent>

        <div className="flex items-center justify-center gap-6 mt-8 md:mt-12">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full size-10 md:size-12 border-primary-general/20 hover:bg-primary-general hover:text-primary2 transition-all duration-300"
            onClick={() => api?.scrollPrev()}
          >
            <ArrowLeft className="size-5 md:size-6" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full size-10 md:size-12 border-primary-general/20 hover:bg-primary-general hover:text-primary2 transition-all duration-300"
            onClick={() => api?.scrollNext()}
          >
            <ArrowRight className="size-5 md:size-6" />
          </Button>
        </div>
      </TestimonialCard>
    </div>
  );
}
