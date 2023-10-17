import Image from "next/image";
import style from "./home.module.scss";
import Link from "next/link";

const Home = () => {
    return (
        <>
            <div className={style.splash}>
                <div className={style.content}>
                    <h1>WVSS Programming Club</h1>
                    <span>Lead by Andy G., Parham K., and Cameron A.</span>
                </div>
                <Image src="/expand.svg" alt="Expand" sizes="100%" width={0} height={0} className={style.down} style={{
                    "animationDelay": "1s"
                }} />
                <span className={style.down} style={{
                    "width": "fit-content",
                    "textTransform": "uppercase",
                    "fontWeight": "900"
                }}>Learn More</span>
            </div> 
            <main className="container">
                <Link href="/hackathon"><h1>Our Hackathon</h1></Link>
            </main>
        </>
    );
}

export default Home;
