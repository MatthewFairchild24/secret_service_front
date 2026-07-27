import Container from '../../layouts/container/Container'
import ContainerContent from '../../layouts/containerContent/ContainerContent'
import { FenceIcon, Paintbrush, HummerIcon, WrenchIcon } from '../../layouts/ui/icons'
import ServiceCard, { ServiceCardProps } from './card/ServiceCard'

import s from './Services.module.scss'


const cards: ServiceCardProps [] = [
    {
        icon: <FenceIcon />,
        title: 'Fence',
        description: 'Fence description'
    },      
    {
        icon: <Paintbrush/>,
        title: 'Paintbrush',
        description: 'Paintbrush description а теперь давай представим, что это одно полноценное предложение которое вытянули из описания и оно тут висит и не знает что делать с концом'
    },
    {
        icon: <HummerIcon/>,
        title: 'Hummer',
        description: 'Hummer descripiton'
    },
    {
        icon: <WrenchIcon/>,
        title: 'Wrench',
        description: 'Wrench description'
    }
]


export default function Services(){
    return(<>
        <Container>
            <ContainerContent>
                <div className={s.containerService}>
                    {cards.map((card, i) => (
                        <ServiceCard
                            key = {i}
                            icon = {card.icon}
                            title={card.title}
                            description={card.description}
                        />
                    ))}
                    
                    
                </div>
            </ContainerContent>
        </Container>


    </>)
}