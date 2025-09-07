import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs'
import React from 'react'

const Header = () => {
  return (
    <header>
      <nav>
        <Link>
        <Image src={"/logo.png"} alt="Vehiqle Logo"
         width={200}
         height={60}
        />
        </Link>
      </nav>
    </header>
  )
}

export default Header