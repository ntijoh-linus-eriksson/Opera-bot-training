import Link from "next/link";

function Guides() {
    return (
        <div className="flex flex-col">
            <div className="flex place-content-center my-6">
                <h1 className="font-bold text-center">MOVEMENT GUIDES</h1>
            </div>
            <div className="flex">
                <ul>
                    <li>
                        <Link href="/guides/1">Wall Bouncing</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Guides;