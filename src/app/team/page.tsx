import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";

const TeamPage = () => {
    return (
        <>
            <Header></Header>
            <main className="container">
                <h1 style={{
                    "textAlign": "center",
                    "fontSize": "5rem"
                }}>Our Team</h1>

                <h1>Founders</h1>
                <span>Andy G., Parham K.</span>

                <h1>Programming Specialist</h1>
                <span>Cameron A.</span>

                <h1>Chief Executive Marketing Director</h1>
                <span>Danny W.</span>
            </main>
            <Footer></Footer>
        </>
    );
}

export default TeamPage;
