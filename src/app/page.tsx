export default function Home() {
    return (
        <>
            <div className="hero h-max" style={{backgroundImage: "url(/nasa-vhSz50AaFAs-unsplash.jpg)"}}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content flex-col">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">CrowdEnv</h1>
                        <p className="mb-5">Learn and contribute to better understand the world and the environment.</p>
                        <button className="btn btn-primary m-5">Learn</button>
                        <button className={"btn btn-info m-5"}>Contribute</button>
                    </div>
                    <div className={"flex w-full m-0 justify-between"}>
                        <div className="stats shadow mr-5">

                            <div className="stat">
                                <div className="stat-figure text-secondary">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16"
                                         className="inline-block w-8 h-8 stroke-current"
                                         viewBox="0 0 512 512">
                                        <path
                                            d="M176 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64c-35.3 0-64 28.7-64 64H24c-13.3 0-24 10.7-24 24s10.7 24 24 24H64v56H24c-13.3 0-24 10.7-24 24s10.7 24 24 24H64v56H24c-13.3 0-24 10.7-24 24s10.7 24 24 24H64c0 35.3 28.7 64 64 64v40c0 13.3 10.7 24 24 24s24-10.7 24-24V448h56v40c0 13.3 10.7 24 24 24s24-10.7 24-24V448h56v40c0 13.3 10.7 24 24 24s24-10.7 24-24V448c35.3 0 64-28.7 64-64h40c13.3 0 24-10.7 24-24s-10.7-24-24-24H448V280h40c13.3 0 24-10.7 24-24s-10.7-24-24-24H448V176h40c13.3 0 24-10.7 24-24s-10.7-24-24-24H448c0-35.3-28.7-64-64-64V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H280V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H176V24zM160 128H352c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32H160c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32zm192 32H160V352H352V160z"/>
                                    </svg>
                                </div>
                                <div className="stat-title">Devices</div>
                                <div className="stat-value">31K</div>
                                <div className="stat-desc">Shared between XX users</div>
                            </div>

                            <div className="stat">
                                <div className="stat-figure text-secondary">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="16" width="14"
                                         className="inline-block w-8 h-8 stroke-current"
                                         viewBox="0 0 448 512">
                                        <path
                                            d="M448 80v48c0 44.2-100.3 80-224 80S0 172.2 0 128V80C0 35.8 100.3 0 224 0S448 35.8 448 80zM393.2 214.7c20.8-7.4 39.9-16.9 54.8-28.6V288c0 44.2-100.3 80-224 80S0 332.2 0 288V186.1c14.9 11.8 34 21.2 54.8 28.6C99.7 230.7 159.5 240 224 240s124.3-9.3 169.2-25.3zM0 346.1c14.9 11.8 34 21.2 54.8 28.6C99.7 390.7 159.5 400 224 400s124.3-9.3 169.2-25.3c20.8-7.4 39.9-16.9 54.8-28.6V432c0 44.2-100.3 80-224 80S0 476.2 0 432V346.1z"/>
                                    </svg>
                                </div>
                                <div className="stat-title">Data Points</div>
                                <div className="stat-value">4,200</div>
                                <div className="stat-desc">XXX data points per second</div>
                            </div>

                        </div>

                        <div className="stats shadow">

                            <div className="stat">
                                <div className="stat-figure text-secondary">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16"
                                         className="inline-block w-8 h-8 stroke-current"
                                         viewBox="0 0 512 512">
                                        <path
                                            d="M512 240c0 114.9-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6C73.6 471.1 44.7 480 16 480c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4l0 0 0 0 0 0 0 0 .3-.3c.3-.3 .7-.7 1.3-1.4c1.1-1.2 2.8-3.1 4.9-5.7c4.1-5 9.6-12.4 15.2-21.6c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208z"/>
                                    </svg>
                                </div>
                                <div className="stat-title">Quizz</div>
                                <div className="stat-value">31K</div>
                            </div>

                            <div className="stat">
                                <div className="stat-figure text-secondary">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="16" width="10"
                                         className="inline-block w-8 h-8 stroke-current"
                                         viewBox="0 0 320 512">
                                        <path
                                            d="M80 160c0-35.3 28.7-64 64-64h32c35.3 0 64 28.7 64 64v3.6c0 21.8-11.1 42.1-29.4 53.8l-42.2 27.1c-25.2 16.2-40.4 44.1-40.4 74V320c0 17.7 14.3 32 32 32s32-14.3 32-32v-1.4c0-8.2 4.2-15.8 11-20.2l42.2-27.1c36.6-23.6 58.8-64.1 58.8-107.7V160c0-70.7-57.3-128-128-128H144C73.3 32 16 89.3 16 160c0 17.7 14.3 32 32 32s32-14.3 32-32zm80 320a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"/>
                                    </svg>
                                </div>
                                <div className="stat-title">Questions</div>
                                <div className="stat-value">4,200</div>
                                <div className="stat-desc">XXX data points per second</div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
