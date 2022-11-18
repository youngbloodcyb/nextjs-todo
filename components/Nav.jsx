import React from "react";

export default function Nav() {
    return (
        <div className="navbar font-mono lowercase">
            <div className="flex-1">
                <a className="btn btn-ghost lowercase text-lg font-normal">to do</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal p-0">
                <li><a>Item 1</a></li>
                <li><a href="/">Item 3</a></li>
                </ul>
            </div>
        </div>
    )
}