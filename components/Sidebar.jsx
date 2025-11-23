/*"use client";

import Link from "next/link";
import { lessons } from "../app/data/lessons";

export default function Sidebar() {
return ( <aside className="w-64 border-r dark:border-gray-800 p-4"> <h2 className="font-bold mb-3">Lessons</h2> <ul className="space-y-2">
{lessons.map(l => ( <li key={l.id}>
<Link
href={`/lesson/${l.slug}`}
className="block px-3 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800"
>
{l.title} </Link> </li>
))} </ul> </aside>
);
}
*/