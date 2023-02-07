import Link from "next/link";

function Guides() {
    return (
        <div className="flex flex-col">
            <div className="flex place-content-center py-5 bg-sky-700">
                <h1 className="font-bold text-center">Movement Guide</h1>
            </div>
            <div className="flex place-content-evenly my-6">
                <ul className="flex flex-row flex-wrap max-w-5xl">
                    <li className="flex flex-col mx-5 my-2">
                        <h1 className="place-self-center">Slide Hopping</h1>
                        <img className="my-4" src="https://thumbs.gfycat.com/BarrenUntidyIberianlynx-size_restricted.gif" alt="wall bounce" width="300" height="200" />
                        <Link className="place-self-center w-48" href="/guides/1"><button className="rounded-full bg-blue-500 w-full px-4 py-2">Learn</button></Link>
                    </li>
                    <li className="flex flex-col mx-5 my-2">
                        <h1 className="place-self-center">Bunny Hopping</h1>
                        <img className="my-4" src="https://thumbs.gfycat.com/BarrenUntidyIberianlynx-size_restricted.gif" alt="wall bounce" width="300" height="200" />
                        <Link className="place-self-center w-48" href="/guides/2"><button className="rounded-full bg-blue-500 w-full px-4 py-2">Learn</button></Link>
                    </li>
                    <li className="flex flex-col mx-5 my-2">
                        <h1 className="place-self-center">Wall Hopping</h1>
                        <img className="my-4" src="https://media.giphy.com/media/UvEh2ckTWWUQ5o4iiA/giphy.gif" alt="wall bounce" width="300" height="200" />
                        <Link className="place-self-center w-48" href="/guides/3"><button className="rounded-full bg-blue-500 w-full px-4 py-2">Learn</button></Link>
                    </li>
                    <li className="flex flex-col mx-5 my-2">
                        <h1 className="place-self-center"></h1>
                        <img className="my-4" src="https://media.giphy.com/media/UvEh2ckTWWUQ5o4iiA/giphy.gif" alt="wall bounce" width="300" height="200" />
                        <Link className="place-self-center w-48" href="/guides/3"><button className="rounded-full bg-blue-500 w-full px-4 py-2">Learn</button></Link>
                    </li>
                    <li className="flex flex-col mx-5 my-2">
                        <h1 className="place-self-center"></h1>
                        <img className="my-4" src="https://media.giphy.com/media/UvEh2ckTWWUQ5o4iiA/giphy.gif" alt="wall bounce" width="300" height="200" />
                        <Link className="place-self-center w-48" href="/guides/3"><button className="rounded-full bg-blue-500 w-full px-4 py-2">Learn</button></Link>
                    </li>
                    <li className="flex flex-col mx-5 my-2">
                        <h1 className="place-self-center"></h1>
                        <img className="my-4" src="https://media.giphy.com/media/UvEh2ckTWWUQ5o4iiA/giphy.gif" alt="wall bounce" width="300" height="200" />
                        <Link className="place-self-center w-48" href="/guides/3"><button className="rounded-full bg-blue-500 w-full px-4 py-2">Learn</button></Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Guides;