export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="flex place-content-center py-5 bg-indigo-700">
        <h1 className="font-bold text-center">Apex Rollouts</h1>
      </div>

      <div className="flex flex-row justify-center my-6">
        <div className="m-4">
          <p className="max-w-xs p-3 rounded-lg bg-gray-800">Apex Rollouts is the right place if you want to improve your movement skills in Apex Legends.</p>
        </div>
        <div className="m-4">
          <iframe
            className="rounded-lg"
            width="426" height="240" 
            src="https://www.youtube.com/embed/OA4hkmX89ro" 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowFullScreen>
          </iframe>
        </div>
      </div>

      <div>

      </div>
    </div>
  )
}
