import styles from "./DotWorldMap.module.scss";

export default function DotWorldMap() {
  return (
    <svg
      className={styles.map}
      viewBox="0 0 800 400"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* North America */}
      <circle cx="150" cy="120" r="2.5" />
      <circle cx="165" cy="110" r="2.5" />
      <circle cx="180" cy="105" r="2.5" />
      <circle cx="195" cy="108" r="2.5" />
      <circle cx="140" cy="135" r="2.5" />
      <circle cx="155" cy="140" r="2.5" />
      <circle cx="170" cy="130" r="2.5" />
      <circle cx="185" cy="125" r="2.5" />
      <circle cx="200" cy="120" r="2.5" />
      <circle cx="160" cy="155" r="2.5" />
      <circle cx="175" cy="150" r="2.5" />
      <circle cx="190" cy="145" r="2.5" />
      <circle cx="205" cy="140" r="2.5" />
      <circle cx="175" cy="165" r="2.5" />
      <circle cx="190" cy="160" r="2.5" />
      <circle cx="205" cy="155" r="2.5" />
      <circle cx="215" cy="150" r="2.5" />

      {/* South America */}
      <circle cx="220" cy="230" r="2.5" />
      <circle cx="235" cy="225" r="2.5" />
      <circle cx="230" cy="245" r="2.5" />
      <circle cx="245" cy="240" r="2.5" />
      <circle cx="235" cy="260" r="2.5" />
      <circle cx="250" cy="255" r="2.5" />
      <circle cx="240" cy="275" r="2.5" />
      <circle cx="235" cy="290" r="2.5" />
      <circle cx="228" cy="305" r="2.5" />
      <circle cx="225" cy="320" r="2.5" />

      {/* Europe */}
      <circle cx="380" cy="100" r="2.5" />
      <circle cx="395" cy="95" r="2.5" />
      <circle cx="410" cy="92" r="2.5" />
      <circle cx="385" cy="115" r="2.5" />
      <circle cx="400" cy="110" r="2.5" />
      <circle cx="415" cy="108" r="2.5" />
      <circle cx="430" cy="105" r="2.5" />
      <circle cx="390" cy="130" r="2.5" />
      <circle cx="405" cy="125" r="2.5" />
      <circle cx="420" cy="120" r="2.5" />
      <circle cx="435" cy="118" r="2.5" />

      {/* Africa */}
      <circle cx="400" cy="175" r="2.5" />
      <circle cx="415" cy="170" r="2.5" />
      <circle cx="430" cy="175" r="2.5" />
      <circle cx="405" cy="195" r="2.5" />
      <circle cx="420" cy="190" r="2.5" />
      <circle cx="435" cy="195" r="2.5" />
      <circle cx="410" cy="215" r="2.5" />
      <circle cx="425" cy="210" r="2.5" />
      <circle cx="420" cy="230" r="2.5" />
      <circle cx="415" cy="250" r="2.5" />
      <circle cx="425" cy="265" r="2.5" />

      {/* Middle East / Dubai — highlighted */}
      <circle cx="470" cy="155" r="4" className={styles.dubai} />
      <circle cx="460" cy="145" r="2.5" />
      <circle cx="475" cy="140" r="2.5" />
      <circle cx="485" cy="150" r="2.5" />
      <circle cx="455" cy="160" r="2.5" />

      {/* Asia */}
      <circle cx="520" cy="110" r="2.5" />
      <circle cx="535" cy="105" r="2.5" />
      <circle cx="550" cy="100" r="2.5" />
      <circle cx="565" cy="105" r="2.5" />
      <circle cx="530" cy="125" r="2.5" />
      <circle cx="545" cy="120" r="2.5" />
      <circle cx="560" cy="118" r="2.5" />
      <circle cx="575" cy="115" r="2.5" />
      <circle cx="590" cy="110" r="2.5" />
      <circle cx="540" cy="140" r="2.5" />
      <circle cx="555" cy="135" r="2.5" />
      <circle cx="570" cy="130" r="2.5" />
      <circle cx="585" cy="128" r="2.5" />
      <circle cx="600" cy="125" r="2.5" />
      <circle cx="555" cy="155" r="2.5" />
      <circle cx="570" cy="150" r="2.5" />
      <circle cx="585" cy="148" r="2.5" />
      <circle cx="600" cy="145" r="2.5" />
      <circle cx="615" cy="140" r="2.5" />

      {/* Southeast Asia */}
      <circle cx="590" cy="170" r="2.5" />
      <circle cx="605" cy="165" r="2.5" />
      <circle cx="620" cy="175" r="2.5" />
      <circle cx="610" cy="185" r="2.5" />
      <circle cx="625" cy="190" r="2.5" />

      {/* Australia */}
      <circle cx="620" cy="280" r="2.5" />
      <circle cx="635" cy="275" r="2.5" />
      <circle cx="650" cy="280" r="2.5" />
      <circle cx="625" cy="295" r="2.5" />
      <circle cx="640" cy="290" r="2.5" />
      <circle cx="655" cy="295" r="2.5" />
      <circle cx="635" cy="310" r="2.5" />
      <circle cx="650" cy="305" r="2.5" />

      {/* Connection lines from Dubai */}
      <line x1="470" y1="155" x2="200" y2="140" className={styles.line} />
      <line x1="470" y1="155" x2="400" y2="115" className={styles.line} />
      <line x1="470" y1="155" x2="570" y2="130" className={styles.line} />
      <line x1="470" y1="155" x2="640" y2="290" className={styles.line} />
      <line x1="470" y1="155" x2="420" y2="210" className={styles.line} />
    </svg>
  );
}
