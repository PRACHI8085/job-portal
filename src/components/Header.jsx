import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from './ui/button'
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/clerk-react'

const Header = () => {
  return (
    <>
        <nav className='flex justify-between p-4 items-center'>
            <Link>
                <img src='/job-portal/logo2.png' className='h-20'/>
            </Link>
            {/* <Button variant="outline">Login</Button> */}
            <SignedOut>
              <SignInButton />
              
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
        </nav>
    
    </>
  )
}

export default Header