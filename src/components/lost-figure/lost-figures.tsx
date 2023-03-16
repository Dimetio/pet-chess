import { Figure } from "../../models/figures/Figure";
import styles from "./lost-figure.module.css";

interface LostFiguresProps {
  title: string;
  figures: Figure[];
}

const LostFigures = ({ title, figures }: LostFiguresProps) => {
  return (
    <div className={styles.lost}>
      <h3 className={styles.title}>{title}</h3>

      <div className={styles.container}>
        {figures.map((figure) => (
          <div key={figure.id}>
            {figure.logo && (
              <img width={20} height={20} src={figure.logo} alt="" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LostFigures;
