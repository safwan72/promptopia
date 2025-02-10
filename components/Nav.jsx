"use client";

import Image from "@node_modules/next/image";
import Link from "@node_modules/next/link";
import { useEffect, useState } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const Nav = () => {
  const [isuserLoggedIN, setisuserLoggedIN] = useState(true);
  const [toggledropdown, settoggledropdown] = useState(false);
  //const [providers, setproviders] = useState(null);
  // useEffect(() => {
  //   const setproviders=async () => {
  //     const response=await getProviders();
  //     setproviders(response);
  //   }
  // setproviders();
  // }, []);

  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src="assets/images/logo.svg"
          alt="logo"
          className="object-contain"
          width={40}
          height={40}
        />
        <p className="logo_text">Promptopia</p>
      </Link>

      <div className="sm:flex hidden">
        {isuserLoggedIN ? (
          <div className="flex gap-3 md:gap-5">
            <Link href="/" className="black_btn">
              Create Post
            </Link>
            <button onClick={signOut} type="button" className="outline_btn">
              Sign Out
            </button>
            <Link href="/profile">
              <Image
                src="assets/images/logo.svg"
                alt="profile"
                className="rounded-full"
                width={37}
                height={37}
              />
            </Link>
          </div>
        ) : (
          <>
            {/* {providers && Object.values(providers).map((provider)=>(
    <button type="button" key={provider.name} onClick={()=>signIn(provider.id)} className="black_btn">
    Sign In
    </button>
  ))} */}
          </>
        )}
      </div>
      <div className="sm:hidden flex relative">
        {isuserLoggedIN ? (
          <div className="flex">
            <Image
              src="assets/images/logo.svg"
              alt="profile"
              className="rounded-full"
              width={37}
              height={37}
              onClick={() => settoggledropdown((prev) => !prev)}
            />

            {toggledropdown && (
              <div className="dropdown">
                <Link href="/profile" onClick={() => settoggledropdown(false)}>
                  My Profile
                </Link>                
                <Link href="/create-prompt" onClick={() => settoggledropdown(false)}>
                  Create Prompt
                </Link>
                <button type="button" className="mt-5 w-full black_btn" onClick={() => {settoggledropdown(false);
                signOut();
                }}>
Sign Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            {/* {providers && Object.values(providers).map((provider)=>(
    <button type="button" key={provider.name} onClick={()=>signIn(provider.id)} className="black_btn">
    Sign In
    </button>
  ))} */}
          </>
        )}
      </div>
    </nav>
  );
};

export default Nav;
