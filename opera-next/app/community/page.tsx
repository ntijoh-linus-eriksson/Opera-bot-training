function Community() {
    const Posts: object = []

    return (
        <div className="flex flex-col">
            <div className="flex place-content-center py-5 bg-emerald-700">
                <h1 className="font-bold text-center">Community Page</h1>
            </div>
            <form action="" method="post" className="flex flex-col">
                <div className="flex flex-col">
                    <label className="max-w-6xl">Title</label>
                    <input type="text" id="title" className="block max-w-6xl p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                </div>
                <div className="flex flex-col">
                    <label className="max-w-6xl">Content</label>
                    <input type="text" id="content" className="block max-w-6xl p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                </div>
            </form>
        </div>
    );
}

export default Community;