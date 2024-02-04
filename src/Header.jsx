import devLogo from './assets/dev-log.svg';

export default function Header() {
    return (
        <nav className="py-6 md:py-8 fixed top-0 w-full !bg-[#191D26] z-50">
            <div className="container flex items-center justify-between mx-auto gap-x-6">
                <a href="/">
                    <img
                        className="h-[60px]"
                        src={devLogo}
                        alt="Lws"
                    />
                </a>
            </div>
        </nav>
    );
}
