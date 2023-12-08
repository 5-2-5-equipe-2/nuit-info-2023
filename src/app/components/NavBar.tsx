import {Fragment} from 'react'
import Link from "next/link";
import {getServerSession} from "next-auth/next";
import {nextAuthOptions} from "@/app/api/auth/[...nextauth]/route";

interface Page {
    name: string
    url: string
    enabled: boolean
}

export default async function NavBar() {
    const session = await getServerSession(
        nextAuthOptions
    )
    let title = "🌍 CrowdEnv"

    let pages: Page[] = [
        {
            name: 'Quiz',
            url: '/quiz/select',
            enabled: false
        },
        {
            name: 'CrowdData',
            url: '/data',
            enabled: false
        }
    ]


    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <Link className="btn btn-ghost text-xl" href="/">{title}</Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    {
                        pages.map((page: Page) => <li key={page.url}><Link href={page.url}>{page.name}</Link></li>)
                    }
                </ul>
            </div>
            <div className="dropdown dropdown-end">
                {session?.user ? (
                    <Fragment>
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                        <span className="text-3xl">
                            {session?.user?.image ? <img src={session.user.image} alt=""/> : session?.user?.name}
                        </span>
                            </div>
                        </label>
                        <ul tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <div className="flex flex-col">
                                    <span className="text-xl">{session?.user?.name}</span>
                                    <span className="text-sm">{session?.user?.email}</span>
                                </div>
                            </li>
                            <li><Link href={"/api/auth/signout"}>Logout</Link></li>
                        </ul>
                    </Fragment>
                ) : (
                    <Link href={"/api/auth/signin"}
                    className={"btn btn-primary"}
                    >Login</Link>
                )}
            </div>
        </div>
    )
}
