import Image from "next/image"

export function TopBanner() {
    return (
        <div className="w-full bg-white flex justify-center py-2">
            <div className="relative w-full max-w-4xl h-[60px] md:h-[60px]">
                <Image
                    src="/krishna-image.jpg"
                    alt="Shree Krishna"
                    fill
                    className="object-contain"
                    priority
                />
            </div>
        </div>
    )
}
