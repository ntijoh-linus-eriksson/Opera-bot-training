export const fetcher = (url : any, data : any) =>
    fetch(window.location.origin + url, {
        cache: 'no-store',
        method: data ? "POST" : "GET",
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    }).then((r) => {
        return r.json()
    })