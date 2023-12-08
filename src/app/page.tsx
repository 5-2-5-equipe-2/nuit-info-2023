

export default function Home() {
    return (
        <>
            <div className="hero h-max" style={{backgroundImage: "url(/nasa-vhSz50AaFAs-unsplash.jpg)"}}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">CrowdEnv</h1>
                        <p className="mb-5">Learn and contribute to better understand the world and the environment.</p>
                        <button className="btn btn-primary m-5">Learn</button>
                        <button className={"btn btn-info m-5"}>Contribute</button>
                    </div>
                </div>
            </div>
        </>
    )
}
