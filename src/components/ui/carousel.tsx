"use client"

import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type CarouselContextValue = {
  contentRef: React.RefObject<HTMLDivElement | null>
  scrollPrevious: () => void
  scrollNext: () => void
}

const CarouselContext = React.createContext<CarouselContextValue | null>(null)

function useCarousel() {
  const context = React.useContext(CarouselContext)

  if (!context) {
    throw new Error("useCarousel must be used within a Carousel")
  }

  return context
}

function Carousel({
  className,
  children,
  ...props
}: React.ComponentProps<"div">) {
  const contentRef = React.useRef<HTMLDivElement>(null)

  const scrollBySlide = React.useCallback((direction: 1 | -1) => {
    const content = contentRef.current
    if (!content) return

    content.scrollBy({
      left: direction * content.clientWidth,
      behavior: "smooth",
    })
  }, [])

  const context = React.useMemo(
    () => ({
      contentRef,
      scrollPrevious: () => scrollBySlide(-1),
      scrollNext: () => scrollBySlide(1),
    }),
    [scrollBySlide]
  )

  return (
    <CarouselContext.Provider value={context}>
      <div
        data-slot="carousel"
        className={cn("relative", className)}
        {...props}
      >
        {children}
      </div>
    </CarouselContext.Provider>
  )
}

function CarouselContent({
  className,
  children,
  ...props
}: React.ComponentProps<"div">) {
  const { contentRef } = useCarousel()

  return (
    <div
      ref={contentRef}
      data-slot="carousel-content"
      className={cn(
        "flex snap-x snap-mandatory overflow-x-auto scroll-smooth rounded-lg [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

function CarouselItem({
  className,
  children,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="carousel-item"
      className={cn("min-w-0 shrink-0 grow-0 basis-full snap-center", className)}
      {...props}
    >
      {children}
    </div>
  )
}

function CarouselPrevious({
  className,
  ...props
}: React.ComponentProps<typeof Button>) {
  const { scrollPrevious } = useCarousel()

  return (
    <Button
      data-slot="carousel-previous"
      variant="outline"
      size="icon"
      className={cn("absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-background/90 backdrop-blur", className)}
      onClick={scrollPrevious}
      aria-label="上一张"
      {...props}
    >
      <ChevronLeft className="h-4 w-4" />
    </Button>
  )
}

function CarouselNext({
  className,
  ...props
}: React.ComponentProps<typeof Button>) {
  const { scrollNext } = useCarousel()

  return (
    <Button
      data-slot="carousel-next"
      variant="outline"
      size="icon"
      className={cn("absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-background/90 backdrop-blur", className)}
      onClick={scrollNext}
      aria-label="下一张"
      {...props}
    >
      <ChevronRight className="h-4 w-4" />
    </Button>
  )
}

export {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
}
