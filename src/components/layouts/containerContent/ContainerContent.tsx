import { ReactNode } from "react"
import clsx from "clsx"
import s from './ContainerContent.module.scss'

type Props = {
    children: ReactNode
    className?: string
}

export default function ContainerContent({children, className}: Props){
    return <div className={clsx(s.content, className)}>{children}</div>
}