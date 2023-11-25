"use client";
import Link from "next/link";
import Image from "next/image";

export default function Cabecalho() {

  if (sessionStorage.getItem("token-user")) {
    return (
      
      <header className="bg-009ff7 text-white shadow-lg text-center">
        <Image src="/user.png" alt="User" width={40} height={40}/>
      </header>
    );
  } else {
    return (
      <header className="bg-azulCabecalho shadow-lg text-center shadow-custom">
        <div className="mx-auto max-w-2xl flex items-center justify-center flex-col">
            <Image src="/logo_educahealth.png" alt="Logo Educahealth" width={100} height={90}/>
        </div>

      <button className="absolute top-0 right-0 mt-2 mr-2 text-black px-4 pb-6 rounded">
        <Link href="/login">Login</Link>
      </button>

      </header>
    );
  }
}


