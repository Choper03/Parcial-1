import BusinessCard from "./Card";
import "./Home.css"
function Home() {
    return (
      <>
        
        <div class="container mt-5">
        <div class="text-center">
            <h1>PRIMER PARCIAL</h1>
        </div>
        </div>
      <div className="hola">
        
        <div className="container">
      <BusinessCard
        imgSrc={"https://i.pinimg.com/originals/34/22/90/3422900cb9e9bd4ce803847129eb6c9f.jpg"}
        name={"Universidad Mariano Galvez de Guatemala"}
        title={"Sede Coatepeque"}
        email={"umgcoatepeque@miumg.edu.gt"}
        phone={"7775 3745"}
        />
      </div>
      <div className="container">
      <BusinessCard
        imgSrc={"https://esernet.com/wp-content/uploads/2016/03/Desarrollo-Web-peque.jpg"}
        name={"Desarrollo Web"}
        title={"Inge. Alberto Marroquin"}
        email={"amarroquing@miumg.edu.gt"}
        phone={"5555 2948"}
        />
      </div>
      <div className="container">
      <BusinessCard
        imgSrc={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzFN6Zopy6Qty6sXoDpYI-WjMh7gFMvfp5BdxjwmLruYan15_BSGMgBt-2HoyLZpG8ExE&usqp=CAU"}
        name={"Cristopher Gilberto Sutuc De León"}
        title={"Estudiante"}
        email={"csutucd@miumg.edu.gt"}
        phone={"5820 3372"}
        />
      </div>
      </div>
      </>
    );
  }

  export default Home;