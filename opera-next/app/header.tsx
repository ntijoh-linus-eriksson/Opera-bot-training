import Link from "next/link";

function Header() {
    return (
        <header className="p-5 bg-blue-500 flex justify-evenly">
            <p className="font-bold text-white">I am the Header</p>
            <ul className="flex column">
                <li className="mx-5"><Link href="/">Home</Link></li>
                <li className="mx-5"><Link href="/guides">Guides</Link></li>
                <li className="mx-5"><Link href="/community">Community</Link></li>
            </ul>
        </header>
    );
}

export default Header;