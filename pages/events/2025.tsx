import Image from "next/image"
import React from "react"

export default function Events() {
    return (
        <div className="flex w-full flex-col">
            <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-black via-bgGray to-black">
                <div className="w-2/3 flex-row text-center">
                    <h1 className="bg text-7xl">Event 2025</h1>
                    <p className="hidden text-sm md:block md:text-lg">
                        Marking the third edition of Pakistan's groundbreaking collegiate off-road racing competition, Event 2025 is set to elevate the thrill to an unprecedented level. Teams from universities across the country will return to push boundaries, showcase innovation, and battle for supremacy in one of the most exhilarating motorsports challenges in Pakistan. This edition continues the tradition with three dynamic stages that promise unmatched excitement, fierce competition, and unforgettable racing moments.
                    </p>
                </div>
            </div>

            <div className="flex w-full flex-col items-center bg-white p-10">
                <br />
                <br />
                <AutoShow2025 />
                <BrandLaunch />
            </div>
        </div>
    )
}

const AutoShow2025 = () => {
    const images = [
        "/autoshow 2025/27b2a605-5bed-4c8e-b9a7-bd9e7c75c178.jpg",
        "/autoshow 2025/68817daa-c1d3-4c1b-96c2-0b059926a439.jpg",
        "/autoshow 2025/694cd666-fe64-438b-a1ae-c0f1cd9a36a5.jpg",
        "/autoshow 2025/706f1818-5382-4359-9d1a-6e936d17fc18.jpg",
        "/autoshow 2025/75b94fd6-f04d-434b-9fa1-80613d82d3a9.jpg",
        "/autoshow 2025/DSC_0055.jpg",
        "/autoshow 2025/DSC_0061.jpg",
        "/autoshow 2025/DSC_0064-Enhanced-NR.jpg",
        "/autoshow 2025/DSC_0071.JPG",
        "/autoshow 2025/DSC_0075.JPG",
        "/autoshow 2025/DSC_0081.JPG",
        "/autoshow 2025/DSC_0092-Enhanced-NR.jpg",
        "/autoshow 2025/DSC_0099-Enhanced-NR.jpg",
        "/autoshow 2025/DSC_0102-Enhanced-NR.jpg",
        "/autoshow 2025/DSC_0117-Enhanced-NR.jpg",
        "/autoshow 2025/DSC_0126.JPG",
        "/autoshow 2025/DSC_0132.jpg",
        "/autoshow 2025/DSC_0136-Enhanced-NR.jpg",
        "/autoshow 2025/DSC_0139.JPG",
        "/autoshow 2025/DSC_0144.JPG",
        "/autoshow 2025/DSC_0229.JPG",
        "/autoshow 2025/DSC_0235.JPG",
        "/autoshow 2025/DSC_0238.JPG",
        "/autoshow 2025/DSC_0239.JPG",
        "/autoshow 2025/DSC_0256.JPG",
        "/autoshow 2025/DSC_0264.JPG",
        "/autoshow 2025/DSC_0297.JPG",
        "/autoshow 2025/DSC_1395.jpg",
        "/autoshow 2025/DSC_1423.jpg",
        "/autoshow 2025/DSC_1554.jpg",
        "/autoshow 2025/IMG_2638.jpg",
        "/autoshow 2025/IMG_3253.jpg",
        "/autoshow 2025/d32755dd-5771-4954-a8c9-b0a362da0367.jpg",
    ]
    const mid = Math.ceil(images.length / 2)
    return (
        <div className="mt-10 w-full md:px-10">
            <p className="w-full text-center text-6xl font-bold text-primary">
                AUTOSHOW 2025
            </p>
            <p className="mt-2 text-center text-lg text-secondary">
                Highlights from the 2025 Autoshow
            </p>
            {/* Row 1 */}
            <div className="my-6 flex h-72 w-full flex-row justify-start gap-2 overflow-x-auto">
                {images.slice(0, mid).map((item) => (
                    <img
                        key={item}
                        src={item}
                        className="h-72 flex-shrink-0 rounded-lg object-cover"
                        alt="Autoshow 2025"
                    />
                ))}
            </div>
            {/* Row 2 */}
            <div className="my-6 flex h-72 w-full flex-row justify-start gap-2 overflow-x-auto">
                {images.slice(mid).map((item) => (
                    <img
                        key={item}
                        src={item}
                        className="h-72 flex-shrink-0 rounded-lg object-cover"
                        alt="Autoshow 2025"
                    />
                ))}
            </div>
        </div>
    )
}

const BrandLaunch = () => {
    const images = [
        "/IMG_9942.JPG",
        "/IMG_9961.JPG",
        "/IMG_9966.JPEG",
        "/IMG_9967.JPEG",
        "/IMG_9968.JPEG",
        "/IMG_9969.JPEG",
        "/IMG_9970.JPEG",
        "/IMG_9971.JPEG",
        "/IMG_9972.JPEG",
        "/IMG_9973.JPEG",
        "/IMG_9974.JPEG",
        "/IMG_9975.JPEG",
        "/IMG_9977.JPEG",
        "/IMG_9978.JPEG",
        "/IMG_9979.JPEG",
        "/IMG_9980.JPEG",
        "/IMG_9934.JPG",
        "/IMG_9935.JPG",
        "/IMG_9936.JPG",
        "/IMG_9937.JPG",
        "/IMG_9941.JPG"
    ]
    const mid = Math.ceil(images.length / 2)
    return (
        <div className="mt-10 w-full md:px-20">
            <p className="w-full text-center text-6xl font-bold text-primary">
                BRAND LAUNCH
            </p>
            {/* Row 1 */}
            <div className="my-10 flex h-72 w-full flex-row justify-center gap-2 overflow-x-auto">
                {images.slice(0, mid).map((item) => (
                    <img key={item} src={item} className="h-72 object-cover" alt="Brand Launch" />
                ))}
            </div>
            {/* Row 2 */}
            <div className="my-10 flex h-72 w-full flex-row justify-center gap-2 overflow-x-auto">
                {images.slice(mid).map((item) => (
                    <img key={item} src={item} className="h-72 object-cover" alt="Brand Launch" />
                ))}
            </div>
        </div>
    )
}
