type PageProps = {
    params: {
        guideId: string
    }
}

function GuidePage({ params: { guideId }}: PageProps) {
    return (
        <div>
            Guide Id: {guideId}
        </div>
    );
}

export default GuidePage