import Link from "next/link";
import style from "./header.module.scss";
import Image from "next/image";

const Header = () => {
    return (
        <header className={style.header}>
            <section>
                <Link href="/" style={{
                    "display": "flex",
                    "alignItems": "center",
                    "gap": "0.5rem"
                }}>
                    <Image src="/logo.png" alt="Logo" sizes="100%" width={0} height={0} className={style.logo} />
                    <span>WVSS Programming Club</span>
                </Link>
            </section>
            <section>
                <Link href="/">Home</Link>
                <Link href="/team">Team</Link>
                <Link href="/hackathon">NSH</Link>
            </section>
        </header>
    );
}

export default Header;
