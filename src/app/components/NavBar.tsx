import {Fragment} from 'react'
import Link from "next/link";

interface Page {
    name: string
    url: string
    enabled: boolean
}

export default function NavBar() {

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
        },
        {
            name: 'Settings',
            url: '/settings',
            enabled: false
        },
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
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <img alt="Tailwind CSS Navbar component" src="http://thispersondoesnotexist.com/"/>
                    </div>
                </label>
                <ul tabIndex={0}
                    className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    <li><Link href={"/api/auth/signout"}>Logout</Link></li>
                </ul>
            </div>
        </div>
    )
}
