import React from "react";
import { useUser } from '@auth0/nextjs-auth0'

export default function Nav() {
    return (
        <div className="navbar font-mono lowercase">
            <div className="flex-1">
                <a className="btn btn-ghost lowercase text-lg font-normal" href="/">to do</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal p-0">
                <li><a href="/api/auth/logout">logout</a></li>
                <li><a href="/api/auth/login">login</a></li>
                </ul>
            </div>
        </div>
    )
}