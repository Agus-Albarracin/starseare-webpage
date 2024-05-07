import Image from "next/image";

export function BackgroundCenter() {
    return (
        <div className="left-80 absolute top-70">
            <Image src="/assets/background-floated-center.png" width={850} height={650} alt="logocenteraccount" />
        </div>
    )
}
