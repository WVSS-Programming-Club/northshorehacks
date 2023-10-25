import Image from "next/image";
import style from "./hack.module.scss";
import Link from "next/link";
import {Metadata} from "next";
import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";

export const generateMetadata = (): Metadata => {
    return {
        "title": "NSH Hackathon",
        "description": "North Shore Hacks' presents the North Shore's Premier Hackathon"
    }
}

const HackathonPage = () => {
    return (
        <>
            <Header></Header>
            <div className={style.landing}>
                <section className={style.splash}>
                    <h1 className={style.tag}>
                        <span id={style.empower}>Empower</span> the Future, One Line of <span id={style.code}>Code</span> at a Time
                    </h1>
                    <Image src="/code.svg" alt="Code" sizes="100%" width={0} height={0} className={style.code} />
                </section>
                <span>North Shore Hacks presents the North Shore&apos;s Leading Hackathon</span>
                <Link href="#main">
                    <Image src="/expand.svg" alt="Expand" sizes="100%" width={0} height={0} className={style.down} />
                </Link>
            </div>
            <main className="container" id="main">
                <Link href="https://north-shore-hacks.devpost.com/" style={{
                    "width": "100%",
                    "display": "flex",
                    "justifyContent": "center"
                }}>
                    <Image src="/devpost.png" alt="DevPost" sizes="100%" width={0} height={0} style={{
                        "width": "250px",
                        "height": "auto"
                    }} />
                </Link>
                <div className={style.join}>
                    <h1 style={{"textAlign": "center"}}>Why You Should Join Our <span style={{"color": "var(--primary)"}}>Hackathon</span></h1> 
                    <div className={style.reasons}>
                        <section>
                            <Image src="/school.svg" alt="School" sizes="100%" width={0} height={0} />
                            <span>University Applications</span>
                        </section>
                        <section>
                            <Image src="/money.svg" alt="Money" sizes="100%" width={0} height={0} />
                            <span>Cash Reward</span> 
                        </section>
                        <section>
                            <Image src="/bolt.svg" alt="Bolt" sizes="100%" width={0} height={0} />
                            <span>Meaningful Skills</span>
                        </section>
                        <section>
                            <Image src="/globe.svg" alt="Globe" sizes="100%" width={0} height={0} />
                            <span>Networking</span>
                        </section>
                        <section>
                            <Image src="/group.svg" alt="Group" sizes="100%" width={0} height={0} />
                            <span>Teamwork</span>
                        </section>
                        <section>
                            <Image src="/light.svg" alt="Light" sizes="100%" width={0} height={0} />
                            <span>Express Creativity</span>
                        </section>
                    </div>
                </div>
                <h2 style={{
                    "textAlign": "center",
                    "marginTop": "5rem"
                }}>Contact us at <Link href="mailto:northshorehacks@gmail.com">northshorehacks@gmail.com</Link></h2>
                <h1 style={{
                    "textAlign": "center",
                    "textTransform": "uppercase",
                    "fontWeight": "900"
                }}>Proudly Sponsored by</h1>
                <div className={style.sponsors}>
                    <Link href="https://gen.xyz/" className={style.sponsor}>
                        <Image src="/xyz.png" alt="XYZ" sizes="100%" width={0} height={0} />
                    </Link>
                    <Link href="https://www.axure.com" className={style.sponsor}>
                        <Image src="/axure.svg" alt="Axure" sizes="100%" width={0} height={0} />
                    </Link>
                    <Link href="https://1password.com" className={style.sponsor}>
                        <Image src="/1pass.png" alt="1Password" sizes="100%" width={0} height={0} />
                    </Link>
                </div>
            </main>
            <Footer></Footer>
        </>
    );
}

export default HackathonPage;
