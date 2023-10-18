import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import {Metadata} from "next";
import style from "./team.module.scss";

export const generateMetadata = (): Metadata => {
    return {
        "title": "Our Team - WVSS Programming Club",
        "description": "Learn about the team behind the WVSS Programming Club."
    }
}

const TeamPage = () => {
    return (
        <>
            <Header></Header>
            <main className="container">
                <h1 style={{
                    "textAlign": "center",
                }}>Our Team</h1>

                <section className={style.department}>
                    <h2>Founders</h2>
                    <div className={style.members}>
                        <div className={style.member}>
                            <h3>Andy Ze Yu Guo</h3>
                            <span>Awaitng bio.</span>
                        </div>
                        <div className={style.member}>
                            <h3>Parham Khoshsiar</h3>
                            <span>Awaitng bio.</span>
                        </div>
                    </div>
                </section>

                <section className={style.department}>
                    <h2>Lead Programmer</h2>
                    <div className={style.members}>
                        <div className={style.member}>
                            <h3>Cameron Armstrong</h3>
                            <p>
                                Hello! My name is Cameron and I have been programming since 2020.
                                I initially started with game development but slowly switched over to
                                web developement and have stuck to that till this day. My favourite
                                programming languages are TypeScript, Rust and Java.
                            </p>
                        </div>
                    </div>
                </section>

                <section className={style.department}>
                    <h2>Marketing Team</h2>
                    <div className={style.members}>
                        <div className={style.member}>
                            <h3>Danny Watts</h3>
                            <span>Awaitng bio.</span>
                        </div>
                        <div className={style.member}>
                            <h3>Pran Tito</h3>
                            <span>Awaitng bio.</span>
                        </div>
                    </div>
                </section>
            </main>
            <Footer></Footer>
        </>
    );
}

export default TeamPage;
