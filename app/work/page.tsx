import Link from "next/link";


export default function Work() {
    return (
        <div>
            My Work Display
            <br/>
            <Link href="/">Back to Home</Link>
            <div className="grid grid-cols-3 grid-flow-row mx-auto">
                <div></div>
            </div>
        </div>
    )
}