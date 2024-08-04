import { usePathname, useRouter } from "next/navigation";
import { animatePageOut } from "@/utils/animations";

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
        <button className="text-xl text-neutral-900 hover:text-neutral-500" onClick={handleClick}>
            {children}
        </button>
    )
}

export default TransitionLink;