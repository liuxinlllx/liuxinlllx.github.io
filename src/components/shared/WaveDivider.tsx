import styles from "./WaveDivider.module.css";

interface WaveDividerProps {
  color1?: string;
  color2?: string;
  color3?: string;
}

export function WaveDivider({
  color1 = "#e8e6e1",
  color2 = "#d5d3cf",
  color3 = "#c2c0bd",
}: WaveDividerProps) {
  return (
    <div className={styles.wrap}>
      <svg
        viewBox="0 0 1200 48"
        fill="none"
        className={styles.svg}
      >
        <path
          d="M0 24 Q60 8,150 22 T350 18 T500 28 T700 16 T900 26 T1100 20 T1200 24"
          stroke={color1}
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          opacity="0.25"
        />
        <path
          d="M0 28 Q80 38,200 22 T450 30 T650 20 T850 32 T1050 18 T1200 26"
          stroke={color2}
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
          opacity="0.2"
        />
        <path
          d="M0 20 Q100 12,250 26 T550 16 T800 28 T1000 14 T1200 22"
          stroke={color3}
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          opacity="0.2"
        />
      </svg>
    </div>
  );
}
