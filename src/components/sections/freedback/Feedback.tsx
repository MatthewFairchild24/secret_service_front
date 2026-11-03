import s from "./Feedback.module.scss"

export default function Feedback(){
    return(
    <>
        <div className={s.containerFeedback}>
            <div className={s.contInfo}>
                <div className={s.somethingInfo}>
                    <h2 className={s.infoTitle}>Просто оставьте контакты</h2>
                    <p className={s.infoText}>Ваши каракули меня не ебут, мне лишь бы проверить дизайн и логику</p>
                </div>
                <div className={s.contRowContent}>
                    <div className={s.contText}> +7(900)000-00-00</div>
                </div>
                <div className={s.contRowContent}>
                    <div className={s.contText}>ул. хуйсоси, 123</div>
                </div>
                <div className={s.contRowContent}>
                    <div className={s.contText}> testmatherfuker@gmail.com</div>
                </div>
                <div className={s.contRowSocial}>
                    <a className={s.socialItem}href="">VK</a>
                    <a className={s.socialItem} href="">TG</a>
                    <a className={s.socialItem} href="">Insta</a>
                    <a className={s.socialItem} href="">Yoututbe</a>
                </div>
            </div>
            <div className={s.contContent}>
                <input className={s.input } placeholder='Введи номер уебище'></input>
                <input className={s.input } placeholder='Введи адрес уебище'></input>
                <input className={s.input } placeholder='Введи почту уебище'></input>
                <button className={s.btnInput}>Нажми на кнопку уебище</button>
            </div>
        </div>
    </>)
}