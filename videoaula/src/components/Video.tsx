import { CaretRight, DiscordLogo, FileArrowDown, Lightning } from "phosphor-react";
import '@vime/core/themes/default.css';
import { DefaultUi, Player, Youtube } from "@vime/react";

export function Video() {
    return (
        <div className="flex-1 ">

            <div className="bg-black flex justify-center ">
                <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video ">
                    <Player>
                        <Youtube videoId={"_UaRAQL43Vc"} />
                        <DefaultUi />
                    </Player>

                </div>
            </div>

            <div className="p-8 max-w-[1100px] mx-auto ">

                <div className="flex items-start gap-16">
                    <div className="flex-1">
                        <h1 className="text-2xl p-2 font-bold">Aula 01 - Abertura do evento</h1>
                        <p className="mt-4 p-2 text-gray-300 leading-relaxed">Nessa aula vamos dar início ao projeto criando a estrutura
                            base da aplicação utilizando ReactJS, Vite e TailwindCSS.
                            Vamos também realizar o setup do nosso projeto no
                            GraphCMS criando as entidades da aplicação e
                            integrando a API GraphQL gerada pela plataforma no
                            nosso front-end utilizando Apollo Client.
                        </p>
                        <div className="flex items-center gap-4 mt-6">
                            <img className="h-24 w-24 rounded-full border-2 border-blue-500"
                                src="https://avatars.githubusercontent.com/u/97312611?s=400&u=9b2a43a8f46465fb05f5855177d48289112cdcd9&v=4"
                                alt=""
                            />
                            <div className="leading-relaxed">
                                <strong className="font-bold text-2xl block">Gil San</strong>
                                <span className="text-gray-300 text-sm block" >Estudant</span>
                            </div>

                        </div>
                    </div>

                    <div className="flex flex-col gap-4 p-2">
                        <a href="" className="p-4 text-sm bg-green-500 flex items-center rounded font-bold uppercase gap-3 justify-center hover:bg-green-800 ">
                            <DiscordLogo size={24} />
                            comunidade do discord
                        </a>

                        <a href="" className="p-4 text-sm border border-red-700 flex items-center rounded font-bold uppercase gap-6 justify-center hover:bg-red-600 hover:text-black">
                            <Lightning size={24} />
                            acesse o desafio
                        </a>

                    </div>

                </div>

                <div className="gap-8 mt-20 grid grid-cols-2">
                    <a href="" className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-5 hover:bg-gray-600 transition-colors">
                        <div className="bg-green-700 h=full p-6 flex items-center">
                            <FileArrowDown size={40} />
                        </div>
                        <div className="py-6 leading-relaxed">
                            <strong className="text-2xl">Material Complementar</strong>
                            <p className="text-sm text-gray-300 mt-2">
                                Acesse o material complementar para acelerar o seu desenvolvimento
                            </p>
                        </div>
                        <div className="h-full p-6 flex items-center">
                            <CaretRight size={24} />
                        </div>
                    </a>

                    <a href="" className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-5 hover:bg-gray-600 transition-colors">
                        <div className="bg-green-700 h=full p-6 flex items-center">
                            <FileArrowDown size={40} />
                        </div>
                        <div className="py-6 leading-relaxed">
                            <strong className="text-2xl">Wallpapers Exclusivo</strong>
                            <p className="text-sm text-gray-300 mt-2">
                                Baixe wallpapers exclusivos do Ignite Lab
                            </p>
                        </div>
                        <div className="h-full p-6 flex items-center">
                            <CaretRight size={24} />
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}