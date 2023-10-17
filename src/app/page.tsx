import Image from "next/image";
import style from "./home.module.scss";
import Link from "next/link";
import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";

const Home = () => {
    return (
        <>
            <Header></Header>
            <div className={style.splash}>
                <div className={style.content}>
                    <h1>WVSS Programming Club</h1>
                    <span>Lead by Andy G., Parham K., Cameron A., and Danny W.</span>
                    <Link href="/team">Learn more about our team</Link>
                </div>
                <Link href="#main">
                    <Image src="/expand.svg" alt="Expand" sizes="100%" width={0} height={0} className={style.down} style={{
                        "animationDelay": "1s"
                    }} />
                    <span className={style.down} style={{
                        "width": "fit-content",
                        "textTransform": "uppercase",
                        "fontWeight": "900"
                    }}>Learn More</span>
                </Link>
            </div>
            <main className="container" id="main">
                <section style={{
                    "display": "flex",
                    "gap": "1rem",
                    "flexDirection": "column",
                    "alignItems": "center",
                    "justifyContent": "center"
                }}>
                    <h1>Join our Discord!</h1>
                    <span>You will be able to find updates, resources, and just hang out.</span>
                    <iframe src="https://discord.com/widget?id=1163706248521318420&theme=dark" width="350" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
                </section>
                <section className={style.hackathon}>
                    <Link href="/hackathon"><h1>North Shore Hacks</h1></Link>
                    <span>North Shore Hacks is our very own Hackathon. We focus on providing beginner-friendly experiences, while allowing for expierenced programmers to have fun!</span>
                </section>
            </main>
            <Footer></Footer>
        </>
    );
}

export default Home;
