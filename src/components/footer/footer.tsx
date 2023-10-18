import Image from "next/image";
import style from "./footer.module.scss";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className={style.footer}>
            <section>
                <Image src="/logo.png" alt="Logo" sizes="100%" width={0} height={0} className={style.logo} />
                <div className={style.links}>
                    <Link href="https://www.instagram.com/wvssprogrammingclub/"><Image src="/Instagram_Glyph_White.svg" alt="Instagram" sizes="100%" width={0} height={0} className={style.link} /></Link>
                    <Link href="https://github.com/WVSS-Programming-Club/northshorehacks"><Image src="/github-mark-white.svg" alt="GitHub" sizes="100%" width={0} height={0} className={style.link} /></Link>
                </div>
            </section> 
            <section>
                <strong>Navigation</strong>
                <Link href="/">Home</Link>
                <Link href="/hackathon">Hackathon</Link>
                <Link href="/team">Our Team</Link>
            </section>
            <section>
                <strong>DevPost Hackathon</strong>
                <Link href="https://north-shore-hacks.devpost.com/">
                    <Image src="/devpost.png" alt="DevPost" sizes="100%" width={0} height={0} style={{
                        "width": "250px",
                        "height": "auto"
                    }} />
                </Link>
            </section>
        </footer>
    );
}

export default Footer;
