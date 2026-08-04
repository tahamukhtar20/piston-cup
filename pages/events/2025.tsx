import React from "react"
import Image from "next/image"

export default function Events() {
    return (
        <div className="flex w-full flex-col">
            <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-black via-bgGray to-black">
                <div className="w-2/3 flex-row text-center">
                    <h1 className="bg text-7xl">Event 2025</h1>
                    <p className="hidden text-sm md:block md:text-lg mt-4">
                        Marking the third edition of Pakistan&apos;s groundbreaking collegiate off-road racing competition, Event 2025 elevated the thrill to an unprecedented level. Teams from universities across the country pushed boundaries, showcased innovation, and battled for supremacy in one of the most exhilarating motorsports challenges in Pakistan.
                    </p>
                </div>
            </div>

            {/* Autoshow 2025 Section */}
            <div className="flex w-full flex-col items-center bg-white p-10">
                <AutoShow2025 />
            </div>

            {/* Brand Launch Section */}
            <div className="flex w-full flex-col items-center bg-white p-10">
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
        "/autoshow 2025/DSC_1516.jpg",
        "/autoshow 2025/DSC_1537.jpg",
        "/autoshow 2025/DSC_1551.jpg",
        "/autoshow 2025/DSC_1554.jpg",
        "/autoshow 2025/IMG_2638.jpg",
        "/autoshow 2025/IMG_3040.jpg",
        "/autoshow 2025/IMG_3253.jpg",
        "/autoshow 2025/IMG_7022.jpg",
        "/autoshow 2025/IMG_7202.jpg",
        "/autoshow 2025/IMG_7798.jpg",
        "/autoshow 2025/IMG_7875.jpg",
        "/autoshow 2025/IMG_7928.jpg",
        "/autoshow 2025/IMG_8043.jpg",
        "/autoshow 2025/d32755dd-5771-4954-a8c9-b0a362da0367.jpg"
    ];

    const mid = Math.ceil(images.length / 2)
    return (
        <div className="mt-10 w-full md:px-20">
            <p className="w-full text-center text-6xl font-bold text-primary mb-12 uppercase tracking-wide">
                EXCLUSIVE AUTO SHOW 2025
            </p>

            {/* Row 1 */}
            <div className="item-center my-10 flex h-72 w-full flex-row justify-center gap-2 overflow-x-auto snap-x scrollbar-hide">
                {images.slice(0, mid).map((item) => (
                    <img
                        key={item}
                        src={item}
                        className="h-72 w-auto object-cover rounded-lg shadow-sm snap-center transition-transform hover:scale-[1.02]"
                        loading="lazy"
                    />
                ))}
            </div>

            {/* Row 2 */}
            <div className="item-center my-10 flex h-72 w-full flex-row justify-center gap-2 overflow-x-auto snap-x scrollbar-hide">
                {images.slice(mid).map((item) => (
                    <img
                        key={item}
                        src={item}
                        className="h-72 w-auto object-cover rounded-lg shadow-sm snap-center transition-transform hover:scale-[1.02]"
                        loading="lazy"
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
    ];
    const mid = Math.ceil(images.length / 2);
    return (
        
        <div className="mt-10 w-full md:px-20">
            <p className="w-full text-center text-6xl font-bold text-primary mb-12 uppercase tracking-wide">
                BRAND LAUNCH
            </p>

            {/* Row 1 */}
            <div className="item-center my-10 flex h-72 w-full flex-row justify-center gap-2 overflow-x-auto snap-x scrollbar-hide">
                {images.slice(0, mid).map((item) => (
                    <img
                        key={item}
                        src={item}
                        className="h-72 w-auto object-cover rounded-lg shadow-sm snap-center transition-transform hover:scale-[1.02]"
                        loading="lazy"
                    />
                ))}
            </div>

            {/* Row 2 */}
            <div className="item-center my-10 flex h-72 w-full flex-row justify-center gap-2 overflow-x-auto snap-x scrollbar-hide">
                {images.slice(mid).map((item) => (
                    <img
                        key={item}
                        src={item}
                        className="h-72 w-auto object-cover rounded-lg shadow-sm snap-center transition-transform hover:scale-[1.02]"
                        loading="lazy"
                    />
                ))}
            </div>
        </div>
    )
}
