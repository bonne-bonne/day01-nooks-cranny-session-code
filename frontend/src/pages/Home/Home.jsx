// ========== Imports ========== //
import styles from './Home.module.css';

// Component imports
import Navbar from '../../common/Navbar/Navbar.jsx';
import Footer from '../../common/Footer/Footer.jsx';
import Card from './components/Card.jsx';

export default function Home() {

  // ======== ARRAYS FOR CHECKBOXES ========= //
  // These are the arrays that will be mapped over to create the checkboxes
  // The checkboxes could also be hard coded
  const materialsArray = ["natural", "metal", "mixed"];
  const typesArray = ["decoration", "furniture"];



  ///////////////////////////////////////////////////////////////////////
  // ========================= JSX BELOW ============================= //
  ///////////////////////////////////////////////////////////////////////
  return (
    <div className={styles.outerContainer}>
      <Navbar />

        <main>
          {/* ========================================== */}
          {/*               FILTER SECTION               */}
          {/* ========================================== */}
          {/* This filter section and the below gallery section could be components */}
          {/* But that would mean more lifting state or passing props, so we will leave it for this exercise */}
          <section className={styles.filterSection}>

            {/* =========== Type Filters ========== */}
            <h3>Filter by Type:</h3>
            {typesArray.map((type, index) => {
              return (
                <div key={index} className={styles.filterCheckboxes}>
                  <input type="checkbox" id={type}/>
                  <label htmlFor={type}>{type}</label>
                </div>
              )
            })}

            {/* =========== Material Filters ========== */}
            <h3>Filter by Material:</h3>
            {materialsArray.map((material, index) => {
              return (
                <div key={index} className={styles.filterCheckboxes}>
                  <input type="checkbox" id={material}/>
                  <label htmlFor={material}>{material}</label>
                </div>
              )
            })}

          </section>

          {/* ========================================== */}
          {/*           PRODUCT GALLERY SECTION          */}
          {/* ========================================== */}
          <section className={styles.gridContainer}>
            <Card />
          </section>
        </main>

      <Footer />

    </div>
  )
}