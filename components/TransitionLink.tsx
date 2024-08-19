import { usePathname, useRouter } from "next/navigation";
import { animatePageOut } from "@/utils/animation/animations";

interface Props {
    href: string,
    children: React.ReactNode
}

const TransitionLink = ({ href, children }: Props) => {
    const router = useRouter();
    const pathname = usePathname();

    const handleClick = () => {
        if(pathname != href) {
            animatePageOut(href, router);
        }
    }

    return (
        <button title={`${href === "/" ? "home" : href.substring(1)}`} className="text-xl font-anton_display text-primary hover:text-neutral-500" onClick={handleClick}>
            {children}
        </button>
    )
}

export default TransitionLink;