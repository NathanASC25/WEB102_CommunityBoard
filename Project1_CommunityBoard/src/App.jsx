import './App.css';
import Caps from './components/Caps.jsx';
import SmallerCaps from './components/SmallerCaps.jsx';
import Card from './components/Card.jsx';

function App() {
  return (
    <>
      <Caps className="Caps" instance="War Thunder"/>
      <SmallerCaps className="smallerCaps" instance="Ammunition Types"/>
      <div id="Card-Container">
        <Card Styling="CardStyle" ImgSource="./src/images/apcbc.png" ShellType="APCBC" FullName="(Armor Piercing Capped Ballistic Capped)"/>
        <Card Styling="CardStyle" ImgSource="./src/images/apcr.png" ShellType="APCR" FullName="(Armor Piercing Composite Rigid)"/>
        <Card Styling="CardStyle" ImgSource="./src/images/apds.png" ShellType="APDS" FullName="(Armor Piercing Discarding Sabot)"/>
        <Card Styling="CardStyle" ImgSource="./src/images/apfsds.png" ShellType="APFSDS" FullName="(Armor Piercing Fin Stabilized Discarding Sabot)"/>
        <Card Styling="CardStyle" ImgSource="./src/images/atgm.png" ShellType="ATGM" FullName="(Anti Tank Guided Missile)"/>
      </div>
      <div id="Card-Container">
        <Card Styling="CardStyle" ImgSource="./src/images/he.png" ShellType="HE" FullName="(High Explosive)"/>
        <Card Styling="CardStyle" ImgSource="./src/images/heatfs.png" ShellType="HEAT-FS" FullName="(High Explosive Anti Tank Fin Stabilized)"/>
        <Card Styling="CardStyle" ImgSource="./src/images/hesh.png" ShellType="HESH" FullName="(High Explosive Squash Head)"/>
        <Card Styling="CardStyle" ImgSource="./src/images/smoke.png" ShellType="SMOKE" FullName="(Smoke)"/>
      </div>
    </>
  )
}

export default App;