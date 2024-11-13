import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import data from "../../data/data";
import Product from "../../components/product/Product";

const Shop = () => {
  return (
    <div>
      <Navbar />
      {/* // <!-- first section --> */}
      <section className="recitems" id="mostSelled">
    <div className="bg_container"></div>

    <div className="text2 center">
        <h1>Recommended items</h1>

        <p>Most selled items</p>
    </div>

    <div className="items_container ">
            {/* <!-- items here --> */}
        <div className="items center" id="items">

            {/* <!-- first item --> */}
              {data.map((item, i) =>{
                return (
                  <Product key={i} item={item} name={item.name} price={item.price} image={item.image} des={item.des}/>

                )
              })}
            </div>    
    </div>
      </section>
      
      <Footer />
    </div>
  )
}

export default Shop
