import styles from '@/styles/ServiceBlock.module.css'

export default function ServiceBlock(props) {
    return (
        <>
            <div className={styles.service_blocks_wrapper}>
                <div className={styles.service_blocks_top}>
                    <span className={styles.serviceIcon}>{<props.data.icon />}</span>
                    <h3>{props.data.heading}</h3>
                </div>
                <p>{props.data.text}</p>
            </div >
        </>
    )
}