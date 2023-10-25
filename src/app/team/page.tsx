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
                            <span>My name is Andy Guo. My family moved here from Canada when I was just 5 years old. Throughout my life, I have had a passion for technology and the vast possibilities that they facilitate. Using this club I will try to inspire and arm others for the current revolutionary era of technology - all while maintaining a diverse, collaborative and accepting environment. I hope my members enjoy their time at the programming club, and accomplish their goals.</span>
                        </div>
                        <div className={style.member}>
                            <h3>Parham Khoshsiar</h3>
                            <span>I am Parham Khoshsiar, born in Tehran, Iran in 2006. When I was just 7 years old, my family embarked on a life-changing journey, relocating to the nation of Canada. Today, I am deeply passionate about both sports and academics, and trying to make my family proud. My interest in coding was ignited during my 8th-grade year, where I was introduced to the fundamentals of Python and made a small, but impactful, coding project. Over the years, I have been on a steady path of growth and refinement in my programming skills. Although I am by no means an expert in the field, I am steadily progressing and working toward my ultimate goal of securing a career in software development.</span>
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
                            <span>I enjoy spending my down time on my computer and chatting with friends. I have a passion for computer science and programming. Marketing being one of my specialties allows for me to support the club outside of just programming and leadership.  LCFC FOR LIFE!.</span>
                        </div>
                        <div className={style.member}>
                            <h3>Pran Tito</h3>
                            <span>Awaiting bio.</span>
                        </div>
                    </div>
                </section>
            </main>
            <Footer></Footer>
        </>
    );
}

export default TeamPage;
