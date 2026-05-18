import Navbar from "../../../components/server/client/navbar/Navbar";
import Auth from "../../../components/Login/Auth";
import "./auth.css";
import Foot from "../../../components/footer/Foot";

export default function Login(){

    return(
        <div className="page">
            <Navbar homePage={false}/>

            <div className="auth-content">
                <Auth />
            </div>

            <div className="auth-footer">
                <footer>
                    <Foot />
                </footer>
            </div>
        </div>
    );
}