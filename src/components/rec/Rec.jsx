import './Rec.scss';
import data from '../../data/data';
import Product from '../product/Product';

const Rec = () => {
  return (
    <div>
      {/* <!-- recommended items --> */}
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
    </div>
  )
}

export default Rec
