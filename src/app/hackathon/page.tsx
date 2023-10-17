import Image from "next/image";
import style from "./hack.module.scss";
import Link from "next/link";
import {Metadata} from "next";
import Footer from "@/components/footer/footer";

export const generateMetadata = (): Metadata => {
    return {
        "title": "NSH Hackathon",
        "description": "North Shore Hacks' presents the North Shore's Premier Hackathon"
    }
}

const HackathonPage = () => {
    return (
        <>
            <div className={style.landing}>
                <section className={style.splash}>
                    <h1 style={{"fontSize": "5rem"}}>
                        <span style={{"color": "var(--primary)"}}>Empower</span> the Future, One Line of <span style={{"color": "var(--accent)"}}>Code</span> at a Time
                    </h1>
                    <Image src="/code.png" alt="Code" sizes="100%" width={0} height={0} className={style.code} />
                </section>
                <span>North Shore Hacks presents the North Shore's Leading Hackathon</span>
                <Image src="/expand.svg" alt="Expand" sizes="100%" width={0} height={0} className={style.down} />
            </div>
            <main className="container">
                <div className={style.join}>
                    <h1>Why You Should Join Our <span style={{"color": "var(--primary)"}}>Hackathon</span></h1> 
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
                <Image src="/sponsors.png" alt="Sponsors" sizes="100%" width={0} height={0} className={style.sponsors} />
            </main>
            <Footer></Footer>
        </>
    );
}

export default HackathonPage;
