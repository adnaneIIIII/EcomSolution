import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Ghost } from 'lucide-react';

interface iAppProps {
    images:string[];
}
function ImageSlider({images}:iAppProps) {
  return (
    <div className='grid gap-6 md:gap-3 items-start'>
      <div className='relative overflow-hidden rounded-lg'>
        <Image src={images[0]} width={600} height={600} alt='Product images'
        className='object-cover w-[600] h-[600] rounded-lg' />
        <div className='absolute inset-0 flex items-center justify-between px-4'>
            <Button variant="ghost" size='icon'>
                <ChevronLeft className='w-6 h-6' />
            </Button>
            <Button variant="ghost" size='icon' className='mr-72'>
                <ChevronRight className='w-6 h-6' />
            </Button>
        </div>
        <div className='grid'>

        </div>
      </div>
    </div>
  )
}

export default ImageSlider
