import { useSession } from "next-auth/react"
import Link from "next/link"
import { useRouter } from "next/router"

export default function Header() {

  const { data: session } = useSession()

  const router = useRouter();
  const { pathname } = router;

  const active = 'text-green-600 transition hover:text-green-500/75 p-3 bg-gray-200 rounded-md'
  const inactive = 'text-gray-500 transition hover:text-gray-500/75 p-3'

  if (session) {
    return <>
      <header className="bg-white border-b sticky top-0">
        <div className=" lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex-1 md:flex md:items-center md:gap-12">
              <Link className="block text-teal-600" href="/">
                <span className="sr-only">Home</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
                </svg>

              </Link>
            </div>

            <div className="md:flex md:items-center md:gap-12">
              <nav aria-label="Global" className="hidden md:block">
                <ul className="flex items-center gap-6 text-lg">
                  <li>
                    <Link className={location.pathname === '/' ? active : inactive} href="/"> Dashboard </Link>
                  </li>

                  <li>
                    <Link className={location.pathname === '/products' ? active : inactive} href="/products"> Products </Link>
                  </li>

                  <li>
                    <Link className={location.pathname === '/categories' ? active : inactive} href="/"> Categories </Link>
                  </li>
                  <li>
                    <Link className={location.pathname === '/orders' ? active : inactive} href="/"> Orders </Link>
                  </li>

                  <li>
                    <Link className={location.pathname === '/settings' ? active : inactive} href="/settings"> Settings </Link>
                  </li>


                </ul>
              </nav>

              <div className="flex items-center gap-4">
                <div className="sm:flex sm:gap-4">
                  <div class="h-10 w-10">
                    <img class="h-full w-full rounded-full object-cover object-center" src={session.user.image} alt="" />
                  </div>
                </div>

                <div className="block md:hidden">
                  <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  }
}