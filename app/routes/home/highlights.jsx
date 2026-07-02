import styles from './highlights.module.css';

const items = [
  { value: '530 k€', label: 'CA total généré' },
  { value: 'ASUS Business', label: 'Agent commercial & événementiel' },
  { value: 'Havas & Pringles', label: 'Partenariats & sponsoring' },
  { value: 'Expert PNL', label: 'Vente & communication' },
];

export const Highlights = ({ id }) => (
  <section className={styles.highlights} id={id}>
    <div className={styles.inner}>
      <div className={styles.tag}>En quelques chiffres</div>
      <div className={styles.grid}>
        {items.map((item, index) => (
          <div className={styles.card} key={index}>
            <div className={styles.value}>{item.value}</div>
            <div className={styles.label}>{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
