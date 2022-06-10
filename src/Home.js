import React from "react";
import "./Home.css";
import Product from "./Product";
import ActualProduct from "./ActualProduct";
import BootSlider from "./BootSlider";
import Footer from "./Footer";

function Home() {
  return (
    <>
      <div className="home">
        <div className="home__container">
          <div className="home__category">
            <img src="https://www.linkpicture.com/q/topOffers.png" alt="" />
            <p> Top Offers </p>{" "}
          </div>{" "}
          <div className="home__category">
            <img src="https://www.linkpicture.com/q/detergetnt.png" alt="" />
            <p> Grocery </p>{" "}
          </div>{" "}
          <div className="home__category">
            <img src="https://www.linkpicture.com/q/mobile_18.png" alt="" />
            <p> Mobiles </p>{" "}
          </div>{" "}
          <div className="home__category">
            <img src="https://www.linkpicture.com/q/fashion_3.png" alt="" />
            <p> Fashion </p>{" "}
          </div>{" "}
          <div className="home__category">
            <img src="https://www.linkpicture.com/q/electronics_2.png" alt="" />
            <p> Electronics </p>{" "}
          </div>{" "}
          <div className="home__category">
            <img src="https://www.linkpicture.com/q/home_18.png" alt="" />
            <p> Home </p>{" "}
          </div>{" "}
          <div className="home__category">
            <img src="https://www.linkpicture.com/q/appliances_1.png" alt="" />
            <p> Appliances </p>{" "}
          </div>{" "}
          <div className="home__category">
            <img src="https://www.linkpicture.com/q/travel_2.png" alt="" />
            <p> Travel </p>{" "}
          </div>{" "}
          <div className="home__category">
            <img src="https://www.linkpicture.com/q/beauty_2.png" alt="" />
            <p> Beauty, Toys and more </p>{" "}
          </div>{" "}
        </div>{" "}
        <BootSlider />
        <div className="home__rowData">
          <div className="home__row">
            <div className="home__rowLeftContainer">
              <div className="home_rowLeftContainerTitle">
                {" "}
                Deals Of The Day{" "}
              </div>{" "}
              <div className="homerowLeftContainerProducts">
                <Product
                  image="https://rukminim1.flixcart.com/image/150/150/l1xwqkw0/toy-tricycle/e/r/0/-original-imagdehwqvgdkang.jpeg?q=70"
                  title="Best Deals On Toys"
                  price={199}
                />{" "}
                <Product
                  image="https://rukminim1.flixcart.com/image/150/150/jyhl1u80/emergency-light/a/n/e/led-prime-inverter-light-9w-b22-cw-pk1-m-halonix-original-imafggq3chddqtzw.jpeg?q=70"
                  title="Bulbs,Emergency Lights"
                  price={25}
                />{" "}
                <Product
                  image="https://rukminim1.flixcart.com/image/150/150/kubk70w0/accessories-combo/z/g/d/beteiuy-yrjs3-sun-shopping-original-imag7gwqncvtzxmn.jpeg?q=70"
                  title="Wallets And Belts"
                  price={40}
                />{" "}
                <Product
                  image="https://rukminim1.flixcart.com/image/150/150/l27wtjk0/office-set/q/i/7/-original-imagdhxdfgyazmhg.jpeg?q=70"
                  title="Notebooks, Pens, Games And More"
                  price={15}
                />{" "}
                <Product
                  image="https://rukminim1.flixcart.com/image/150/150/l3es13k0/kids-top/o/u/c/12-13-years-top1-trackflip-original-imagegqqgvc9qgw4.jpeg?q=70"
                  title="Kid's T-shirt And More"
                  price={45}
                />{" "}
              </div>{" "}
            </div>{" "}
            <div className="home__rowRightContainer">
              <Product
                image="https://rukminim1.flixcart.com/image/280/200/ky90scw0/mobile/s/5/d/-original-imagagnfgh6ed7tp.jpeg?q=70"
                title="Realme 9i(Prism Blue)"
                price={`${13},${500}`}
              />{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
        <div className="home__actualProducts">
          <div className="home__actualProductsHeading">
            {" "}
            {/* <h5>You May Like...</h5> */} <p> Shop Monthly Essentials </p>{" "}
          </div>{" "}
          <div className="home__actualProductsContents">
            <ActualProduct
              image="https://rukminim1.flixcart.com/image/200/200/kx6fwcw0/shirt/f/v/z/40-pmsx16113-r6-park-avenue-original-imag9zz4angxw5pa.jpeg?q=70"
              title="Peter England Shirt"
              price={` ₹${899} `}
              id={100}
            />{" "}
            <ActualProduct
              image="https://rukminim1.flixcart.com/image/200/200/kvpklu80/track-pant/7/u/9/xxl-14703528-hrx-by-hrithik-roshan-original-imag8jmda5sjhswg.jpeg?q=70"
              title="Flying Machine Tshirt"
              price={` ₹${249} `}
              id={101}
            />{" "}
            <ActualProduct
              image="https://rukminim1.flixcart.com/image/200/200/l432ikw0/shoe/u/h/d/-original-imagf255zdyjbvju.jpeg?q=70"
              title="Reebok Shoes"
              price={` ₹${2500} `}
              id={103}
            />{" "}
            <ActualProduct
              image="https://rukminim1.flixcart.com/image/200/200/kf8kvbk0/suitcase/h/k/m/56-armour-strolly-80-360cherry-red-armour80mcd-check-in-luggage-original-imafvqt98zxwzgxa.jpeg?q=70"
              title="Wildcraft Red Suitcase"
              price={` ₹${999} `}
              id={104}
            />{" "}
            <ActualProduct
              image="https://rukminim1.flixcart.com/image/200/200/jm9hfgw0/sunglass/q/8/h/3002-blk-blk-3002-sil-blk-m-gansta-original-imaf97myeerytqqh.jpeg?q=70"
              title="Black And Blue Sunglasses"
              price={` ₹${490} `}
              id={105}
            />{" "}
            <ActualProduct
              image="https://rukminim1.flixcart.com/image/200/200/l432ikw0/shoe/x/s/5/-original-imagf254euctwnnp.jpeg?q=70"
              title="Bata Shoes"
              price={` ₹${1999} `}
              id={106}
            />{" "}
            <ActualProduct
              image="https://rukminim1.flixcart.com/image/200/200/kxrvi4w0/jean/y/y/l/32-maw21elppjn584-metronaut-original-imaga5zbpzzr8fhb.jpeg?q=70"
              title="Flying Machine Jeans"
              price={` ₹${499} `}
              id={107}
            />{" "}
          </div>{" "}
        </div>{" "}
        <div className="home__actualProducts">
          <div className="home__actualProductsHeading">
            {" "}
            {/* <h5>You May Like...</h5> */} <p> Trending Offers </p>{" "}
          </div>{" "}
          <div className="home__actualProductsContents">
            <ActualProduct
              image="https://rukminim1.flixcart.com/image/150/150/kxtaxzk0/chopper/f/4/9/2022-new-black-gopi-original-imaga6gt884zefcv.jpeg?q=70"
              title="Inalsa Chopper"
              price={` ₹${599} `}
              id={108}
            />{" "}
            <ActualProduct
              image="https://rukminim1.flixcart.com/image/150/150/l09w8sw0/t-shirt/v/l/f/xl-bmrgyrn-z12-blive-original-imagc3pjxhbqwgh5.jpeg?q=70"
              title="Casual T-shirt For Men"
              price={` ₹${200} `}
              id={109}
            />{" "}
            <ActualProduct
              image="https://rukminim1.flixcart.com/image/150/150/kx6fwcw0/top/8/d/r/l-168-black-aahwan-original-imag9zvbhhuguf59.jpeg?q=70"
              title="Womens Black Top"
              price={` ₹${299} `}
              id={110}
            />{" "}
            <ActualProduct
              image="https://rukminim1.flixcart.com/image/150/150/kt7jv680/screen-guard/edge-to-edge-screen-guard/m/n/c/ml-ismart-dz09-scmartwatch-vprime-original-imag6hkpafncfa2b.jpeg?q=70"
              title="Smart Watches"
              price={` ₹${399} `}
              id={111}
            />{" "}
            <ActualProduct
              image="https://rukminim1.flixcart.com/image/150/150/kmwcuq80/shoe/w/u/s/7-444-gry-org-bruton-orange-original-imagfp7fzz5ftzfc.jpeg?q=70"
              title="White Casual Shoes"
              price={` ₹${340}`}
              id={112}
            />{" "}
            <ActualProduct
              image="https://rukminim1.flixcart.com/image/150/150/kn3i1zk0/band/g/e/y/13-resistance-bands-tube-1-48-acjin-enterprise-original-imagfujsbvd9nduz.jpeg?q=70"
              title="Resistant Tubes set"
              price={` ₹${399} `}
              id={113}
            />{" "}
            <ActualProduct
              image="https://rukminim1.flixcart.com/image/150/150/kqo3onk0/key-holder/m/9/z/poc-kh-allah2box01-pockester-original-imag4nf2app87nzz.jpeg?q=70"
              title="Key Holders set"
              price={` ₹${240} `}
              id={114}
            />{" "}
          </div>{" "}
        </div>{" "}
        <Footer />
      </div>{" "}
    </>
  );
}

export default Home;
