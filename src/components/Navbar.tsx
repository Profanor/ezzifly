import Image from "next/image";

export default function Navbar() {
  return (
    <header className="w-full bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <Image
            src="/assets/logo.svg"
            alt="Ezzifly Logo"
            width={120}
            height={40}
          />
        </div>

        {/* Right section */}
        <div className="flex items-center gap-3">
          {/* Cart icon */}
          <button title="cart" type="button" className="relative">
            <Image src="/assets/cart.svg" alt="Cart" width={24} height={24} />
          </button>

          {/* NG Flag + Currency Selector */}
          <div className="flex items-center">
            {/* NG Flag */}
            <Image src="/assets/ng.svg" alt="NG Flag" width={20} height={20} />

            {/* Divider between flag and EN */}
            <div className="h-5 border-l border-black mx-2" />

            {/* EN */}
            <span className="text-sm font-medium text-black">EN</span>

            {/* Divider between EN and NGN */}
            <div className="h-5 border-l border-black mx-2" />

            {/* NGN */}
            <span className="text-sm font-medium text-black flex items-center gap-1">
              NGN
              <Image
                src="/assets/chevron_down.svg"
                alt="Chevron Down"
                width={12}
                height={12}
              />
            </span>
          </div>

          {/* Sign in / Register button */}
          <button
            type="button"
            className="px-4 py-2 rounded-sm text-white font-medium"
            style={{ backgroundColor: "#295B86" }}
          >
            Sign in / Register
          </button>
        </div>
      </div>
    </header>
  );
}
