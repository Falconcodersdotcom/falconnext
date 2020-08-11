import Link from 'next/link'
import React from "react";

export default function Home() {
  return (
    <div>
      <h1>Hello world</h1>
      <Link  href="/test">Test Link</Link>
    </div>
  )
}
