"use client"

import Webcam from 'react-webcam';
import React, { useRef } from 'react'

type Props = {}

const HomePage = (props: Props) => {
    const webcamRef = useRef<Webcam>(null);

    return (
        <div className='flex h-screen'>
            <div className='relative'>
                <div className='relative h-screen w-full'>
                    <Webcam ref={webcamRef}
                        mirrored={true}
                        className='h-full w-full object-contain p-2'
                    />
                </div>
            </div>
        </div>
    )
}

export default HomePage