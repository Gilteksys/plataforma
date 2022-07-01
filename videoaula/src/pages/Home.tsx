import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";


export function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex flex-1">
                <div className="flex-1 ">
                    <div className="m-8">
                        <img src="src\imagens\Group 7769.png" alt="" />
                        <p className="text-center text-2xl text-green-400">Click nas aulas ao lado</p>
                        <img src="src\imagens\ReactJS icon.svg" alt="" />                                
                    </div>                    
                </div>
                <Sidebar />
            </main>
        </div>
    )
}