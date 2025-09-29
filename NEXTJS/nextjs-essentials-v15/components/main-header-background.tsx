
import classes from "./main-header.module.css";

export default function MainHeaderBackground() {
  return (
    <div className={classes["header-background"]}>
<svg
      width="100%"
      height="100%"
      viewBox="0 0 1440 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 0,
        pointerEvents: "none",
      }}
    >
      <path
        fill="#38bdf8"
        fillOpacity="0.3"
        d="M0,160L60,154.7C120,149,240,139,360,154.7C480,171,600,213,720,218.7C840,224,960,192,1080,186.7C1200,181,1320,203,1380,213.3L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
      />
    </svg>
    </div>
  );
}