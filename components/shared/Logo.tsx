import Link from "next/link";

const Logo = () => {
    return (
        <Link href={'/'} className="font-bold text-2xl leading-1">
            Book <span className="text-[#00d991]">Vibe</span>
        </Link>
    );
};

export default Logo;