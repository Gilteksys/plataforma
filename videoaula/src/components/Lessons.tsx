import { CheckCircle, Lock } from 'phosphor-react'
import { isPast, format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { Link } from 'react-router-dom';

interface LessonProps {
    title: string;
    slug: string;
    availableAt: Date;
    type: 'live' | 'class';
}

export function Lessons(props: LessonProps) {
    const LessonAvaliable = isPast(props.availableAt)
    const DataFormatada = format(props.availableAt, "EEEE' - 'd' de 'MMMM' - 'k'h'mm",{
        locale:ptBR

    })

    return (
        <Link to={`/event/lessons/${props.slug}`} className='group'>
            <span className="text-gray-300">
                {DataFormatada}
            </span>

            <div className="rounded border border-gray-400 p-4 mt-2 group-hover:border-green-500">
                <header className="flex intems-center justify-between">
                    {LessonAvaliable ? (

                        <span className="text-sm text-blue-500 font-medium flex  gap-2">
                            <CheckCircle p-4 size={20} />
                            Conteudo liberado
                        </span>

                    ) : (

                       <span className="text-sm text-orange-500 font-medium flex  gap-2">
                           <Lock  size={20} />
                            Em breve
                       </span>

                    )}



                    <span className="text-xs rounded py[2px] px-2 text-white border border-green-600 font-bold" > {props.type === 'live' ? 'Ao Vivo' : 'Aula Pratica'} </span>

                </header>

                <strong className="text-gray-300 mt-3 block ">{props.title}</strong>

            </div>
        </Link>
    )

}