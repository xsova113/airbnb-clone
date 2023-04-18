'use client'

import Image from "next/image"
import { useRouter } from "next/navigation"

const Logo = () => {
    const router = useRouter()
    return (
        <div className="items-center">
            <Image
                onClick={() => router.push("/")}
                src="/images/logo.png" className="hidden md:block cursor-pointer" alt="logo-img" width={100} height={100} />
        </div>
    )
}

export default Logo