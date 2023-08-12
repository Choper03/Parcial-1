import BusinessCard from "./Card";

function Cliente() {
    return (
      <>
      
      <h1 className="my-4">Clientes</h1>
      <div className="container">
      <BusinessCard
        imgSrc={"https://img.freepik.com/vector-premium/perfil-hombre-dibujos-animados_18591-58482.jpg"}
        name={"Luis Anthony Méndez"}
        title={"Hola Me llamo Luis y soy Ingeniero en Sistemas"}
        email={"luismendez@gmail.com"}
        phone={"58203372"}
      />
    </div>
    <div className="container">
        <BusinessCard
        imgSrc={"https://img.freepik.com/vector-premium/dibujos-animados-perfil-mujer_18591-58475.jpg?w=2000"}
        name={"Maria Elizabeth Paz"}
        title={"Hola Me llamo Maria y soy Licenciada en Administracion de Empresas"}
        email={"elizabeth03@gmail.com"}
        phone={"58203372"}
        />
    </div>
      </>
    );
  }

  export default Cliente;