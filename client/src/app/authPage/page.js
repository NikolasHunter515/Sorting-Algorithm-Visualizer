import Navbar from "../../../components/server/client/navbar/Navbar";
import Auth from "../../../components/Login/Auth";
import "./auth.css";

export default function Login(){

    return(
        <div className="page">
            <Navbar homePage={false}/>

            <div className="auth-content">
                <Auth />
            </div>

            <div className="auth-footer">
                <footer>
                    I am the foot
                </footer>
            </div>
        </div>
    );
}