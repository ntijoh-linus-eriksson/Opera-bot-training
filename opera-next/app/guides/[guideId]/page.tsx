type PageProps = {
    params: {
        guideId: string
    }
}

function GuidePage({ params: { guideId }}: PageProps) {
    var guideNum: number = +guideId

    switch(guideNum) {
        case 1: {
            return (
                <div className="flex flex-col">
                    <div className="flex place-content-center my-6">
                        <h1 className="font-bold text-center">Slide Hopping</h1>
                    </div>
                </div>
            );
        }
        case 2: {
            return (
                <div className="flex flex-col">
                    <div className="flex place-content-center my-6">
                        <h1 className="font-bold text-center">Bunny Hopping</h1>
                    </div>
                </div>
            );
        }
        case 3: {
            return (
                <div className="flex flex-col">
                    <div className="flex place-content-center my-6">
                        <h1 className="font-bold text-center">Wall Hopping</h1>
                    </div>
                </div>
            );
        }
    }

    
}

export default GuidePage