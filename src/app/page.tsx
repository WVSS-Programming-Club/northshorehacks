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
                    <Link href="/team">Learn about our team</Link>
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
                <section className={style.about}>
                    <h1>About the WVSS Programming Club</h1>
                    <p>
                        The WVSS Programming Club has the objective of spreading the infectious love of programming to all students.
                        We are dedicated to ensuring that students are able to learn at their own pace while also having fun. We operate
                        on the principle of project based learning instead of hard coded boundaries and expectations. We hope you join
                        us in our initiative.
                    </p>
                </section>
                <section className={style.join}>
                    <h2>What are you waiting for? Join the club!</h2>
                    <div className={style.resources}>
                        <div className={style.resource}>
                            <h2>Join our Discord</h2>
                            <span>You will be able to find updates, resources, and just hang out.</span>
                            <iframe style={{ "border": "none" }} src="https://discord.com/widget?id=1163706248521318420&theme=dark" width="250" height="250" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
                        </div>
                        <div className={style.resource}>
                            <h2>Join our DevPost Hackathon</h2>
                            <span>Compete against other students to make the best project possible.</span>
                            <Link href="https://north-shore-hacks.devpost.com/">
                                <Image src="/devpost.png" alt="DevPost" sizes="100%" width={0} height={0} style={{
                                    "width": "250px",
                                    "height": "auto",
                                }} />
                            </Link>
                            <span>or</span>
                            <Link href="/hackathon">
                                Visit NSH here
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
            <Footer></Footer>
        </>
    );
}

export default Home;
