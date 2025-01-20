'use client';

import * as React from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';

interface ListingImageCarouselProps {
  imageUrls: string[];
  slidesPerView?: number;
}

export default function ListingImageCarousel({
  imageUrls,
  slidesPerView = 1,
}: ListingImageCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    slidesToScroll: 1,
    align: 'start',
    containScroll: 'trimSnaps',
  });

  const scrollPrev = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {imageUrls.map((src, index) => (
            <div
              className="min-w-0 pl-4 first:pl-0"
              style={{ flex: `0 0 ${100 / slidesPerView}%` }}
              key={index}
            >
              <Card>
                <CardContent className="p-0">
                  <div className="relative aspect-[3/2] w-full">
                    <Image
                      src={src || '/placeholder.svg'}
                      alt={`Carousel image ${index + 1}`}
                      fill
                      className="rounded-2xl object-cover"
                      priority={index === 0}
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
      <Button
        variant="outline"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full"
        onClick={scrollPrev}
      >
        <ChevronLeft className="h-4 w-4" />
        <span className="sr-only">Previous slide</span>
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full"
        onClick={scrollNext}
      >
        <ChevronRight className="h-4 w-4" />
        <span className="sr-only">Next slide</span>
      </Button>
    </div>
  );
}
