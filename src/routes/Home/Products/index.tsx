import { Outlet } from "react-router-dom";
import Content from "../../../components/Content";

export default function Products(){

    return(       
        <main>
            <section>
                <div className="container">
                    <div className="mt30 mb30">
                        <Content />
                    </div>
                    <Outlet />                                 
                </div>
            </section>
        </main>
    );
}