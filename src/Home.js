import React from "react";
import "./Home.css";
import Product from "./Product";
import ActualProduct from "./ActualProduct";
import BootSlider from "./BootSlider";
function Home() {
  return (
    <>
      <div className="home">
        <div className="home__container">
          <div className="home__category">
            <img src="https://www.linkpicture.com/q/topOffers.png" alt="" />
            <p>Top Offers</p>
          </div>
          <div className="home__category">
            <img src="https://www.linkpicture.com/q/detergetnt.png" alt="" />
            <p>Grocery</p>
          </div>
          <div className="home__category">
            <img src="https://www.linkpicture.com/q/mobile_18.png" alt="" />
            <p>Mobiles</p>
          </div>
          <div className="home__category">
            <img src="https://www.linkpicture.com/q/fashion_3.png" alt="" />
            <p>Fashion</p>
          </div>
          <div className="home__category">
            <img src="https://www.linkpicture.com/q/electronics_2.png" alt="" />
            <p>Electronics</p>
          </div>
          <div className="home__category">
            <img src="https://www.linkpicture.com/q/home_18.png" alt="" />
            <p>Home</p>
          </div>
          <div className="home__category">
            <img src="https://www.linkpicture.com/q/appliances_1.png" alt="" />
            <p>Appliances</p>
          </div>
          <div className="home__category">
            <img src="https://www.linkpicture.com/q/travel_2.png" alt="" />
            <p>Travel</p>
          </div>
          <div className="home__category">
            <img src="https://www.linkpicture.com/q/beauty_2.png" alt="" />
            <p>Beauty,Toys and more</p>
          </div>
        </div>
        <BootSlider />
        <div className="home__rowData">
          <div className="home__row">
            <div className="home__rowLeftContainer">
              <div className="home_rowLeftContainerTitle">Deals Of The Day</div>
              <div className="homerowLeftContainerProducts">
                <Product
                  image="https://rukminim1.flixcart.com/image/150/150/l1xwqkw0/toy-tricycle/e/r/0/-original-imagdehwqvgdkang.jpeg?q=70"
                  title="Best Deals On Toys"
                  price={199}
                />
                <Product
                  image="https://rukminim1.flixcart.com/image/150/150/jyhl1u80/emergency-light/a/n/e/led-prime-inverter-light-9w-b22-cw-pk1-m-halonix-original-imafggq3chddqtzw.jpeg?q=70"
                  title="Bulbs,Emergency Lights"
                  price={25}
                />
                <Product
                  image="https://rukminim1.flixcart.com/image/150/150/kubk70w0/accessories-combo/z/g/d/beteiuy-yrjs3-sun-shopping-original-imag7gwqncvtzxmn.jpeg?q=70"
                  title="Wallets And Belts"
                  price={40}
                />
                <Product
                  image="https://rukminim1.flixcart.com/image/150/150/l27wtjk0/office-set/q/i/7/-original-imagdhxdfgyazmhg.jpeg?q=70"
                  title="Notebooks, Pens, Games And More"
                  price={15}
                />
                <Product
                  image="https://rukminim1.flixcart.com/image/150/150/l3es13k0/kids-top/o/u/c/12-13-years-top1-trackflip-original-imagegqqgvc9qgw4.jpeg?q=70"
                  title="Kid's T-shirt And More"
                  price={45}
                />
              </div>
            </div>
            <div className="home__rowRightContainer">
              <Product
                image="https://rukminim1.flixcart.com/image/280/200/ky90scw0/mobile/s/5/d/-original-imagagnfgh6ed7tp.jpeg?q=70"
                title="Realme 9i(Prism Blue)"
                price={`${13},${500}`}
              />
            </div>
          </div>
        </div>
        <div className="home__actualProducts">
          <div className="home__actualProductsHeading">
            {/* <h5>You May Like...</h5> */}
            <p>Shop Monthly Essentials</p>
          </div>
          <div className="home__actualProductsContents">
            <ActualProduct
              image="https://rukminim1.flixcart.com/image/150/150/kctf0cw0pkrrdj/personal-care/s/t/p/100-scent-impressio-fogg-original-imafty3b5fnh5fkg.jpeg?q=70"
              title="Fragrances"
              discount={` ${30}% `}
            />
            <ActualProduct
              image="https://rukminim1.flixcart.com/image/150/150/l37mtu80/nut-dry-fruit/f/z/j/500-foods-roasted-and-salted-jumbo-size-1-plastic-bottle-original-imageduvpuweynrm.jpeg?q=70"
              title="Food And Products"
              discount={` ${20}% `}
            />
            <ActualProduct
              image="https://rukminim1.flixcart.com/image/150/150/kza68i80/chopper/o/g/h/gg-500-gopi-original-imagbbgntg89yj6w.jpeg?q=70"
              title="Kitchen And Cookwears"
              discount={` ${25}% `}
            />
            <ActualProduct
              image="https://rukminim1.flixcart.com/image/150/150/kt39jm80/napkin/2/8/d/hanging-towel-4-morado-original-imag6gcycbzbyc9c.jpeg?q=70"
              title="Home Furnishing"
              discount={` ${40}% `}
            />
            <ActualProduct
              image="https://rukminim1.flixcart.com/image/150/150/kv6zvrk0/hair-oil/5/l/d/100-pure-coconut-oil-bajaj-original-imag85gv6fbskv7u.jpeg?q=70"
              title="Hair Care And Accessory"
              discount={` ${20}% `}
            />
            <ActualProduct
              image="https://rukminim1.flixcart.com/image/150/150/kzx1a4w0/scrub/f/s/0/-original-imagbtrnc3u7yvkh.jpeg?q=70"
              title="Body And Face Care"
              discount={` ${25}% `}
            />
            <ActualProduct
              image="https://rukminim1.flixcart.com/image/150/150/ku2zjww0/diaper/p/f/g/pant-style-diaper-m-cuddles-super-pants-original-imag7agyfhhbsksk.jpeg?q=70"
              title="Baby Diapers"
              discount={` ${50}% `}
            />
          </div>
        </div>
        <div className="home__actualProducts">
          <div className="home__actualProductsHeading">
            {/* <h5>You May Like...</h5> */}
            <p>Trending Offers</p>
          </div>
          <div className="home__actualProductsContents">
            <ActualProduct
              image="https://rukminim1.flixcart.com/image/150/150/kxtaxzk0/chopper/f/4/9/2022-new-black-gopi-original-imaga6gt884zefcv.jpeg?q=70"
              title="Choppers And Slicers"
              discount={` ${20}% `}
            />
            <ActualProduct
              image="https://rukminim1.flixcart.com/image/150/150/l09w8sw0/t-shirt/v/l/f/xl-bmrgyrn-z12-blive-original-imagc3pjxhbqwgh5.jpeg?q=70"
              title="T-shirt For Men"
              discount={` ${30}% `}
            />
            <ActualProduct
              image="https://rukminim1.flixcart.com/image/150/150/kx6fwcw0/top/8/d/r/l-168-black-aahwan-original-imag9zvbhhuguf59.jpeg?q=70"
              title="Womens Top"
              discount={` ${45}% `}
            />
            <ActualProduct
              image="https://rukminim1.flixcart.com/image/150/150/kt7jv680/screen-guard/edge-to-edge-screen-guard/m/n/c/ml-ismart-dz09-scmartwatch-vprime-original-imag6hkpafncfa2b.jpeg?q=70"
              title="Smart Watches"
              discount={` ${20}% `}
            />
            <ActualProduct
              image="https://rukminim1.flixcart.com/image/150/150/kmwcuq80/shoe/w/u/s/7-444-gry-org-bruton-orange-original-imagfp7fzz5ftzfc.jpeg?q=70"
              title="Casual Shoes"
              discount={` ${33}% `}
            />
            <ActualProduct
              image="https://rukminim1.flixcart.com/image/150/150/kn3i1zk0/band/g/e/y/13-resistance-bands-tube-1-48-acjin-enterprise-original-imagfujsbvd9nduz.jpeg?q=70"
              title="Resistant Tubes"
              discount={` ${55}% `}
            />
            <ActualProduct
              image="https://rukminim1.flixcart.com/image/150/150/kqo3onk0/key-holder/m/9/z/poc-kh-allah2box01-pockester-original-imag4nf2app87nzz.jpeg?q=70"
              title="Key Holders"
              discount={` ${40}% `}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
