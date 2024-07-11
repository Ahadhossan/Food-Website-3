import React from 'react'
import recipeImg1 from "../assets/recipe1-S5gfcgix.png";
import recipeImg2 from "../assets/recipe2-RJ_Tb9Qg.png";
import recipeImg3 from "../assets/recipe3-GbSPFAxO.png";

const Recipes = () => {
  return (
    <>
      <div className="container-fluid Recipes py-5 my-2">
        <div className="container">
          <div className="row pb-5 pb-md-0 align-items-center">
            <div className="col-lg-10 col-6">
              <h1 className="main_heading">
                <span>Trending</span> Recipes
              </h1>
            </div>
            <div className="col-lg-2 col-6 text-end">
              <button className="btn1 btn_0 fs-lg-5 fs-6">
                See All <i className="fa-solid fa-arrow-right ps-2"></i>
              </button>
            </div>
          </div>
          <div className="row gx-0 mt-lg-5 align-items-center">
            <div className="col-lg-4 py-3 py-lg-0">
              <img src={recipeImg1} alt="" className="img-fluid" />
              <div className="Recipes_col1">
                <h4>$40</h4>
                <h5>Vegan Sweet &amp; Chickpea Curry</h5>
                <div className="recipe_mid py-2">
                  <div className="row align-items-center">
                    <div className="col-12 col-lg-5">
                      <div className="stars">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                      </div>
                    </div>
                    <div className="col-12 col-lg-7 py-3 py-lg-0">
                      {" "}
                      <button className="border-0">
                        Add To Cart{" "}
                        <i className="fa-solid fa-cart-shopping"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 py-3 py-lg-0">
              <img src={recipeImg2} alt="" className="img-fluid" />
              <div className="Recipes_col1">
                <h4>$35</h4>
                <h5>Pepper Steak</h5>
                <div className="recipe_mid py-2">
                  <div className="row align-items-center">
                    <div className="col-12 col-lg-5">
                      <div className="stars">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                      </div>
                    </div>
                    <div className="col-12 col-lg-7 py-3 py-lg-0">
                      {" "}
                      <button className="border-0">
                        Add To Cart{" "}
                        <i className="fa-solid fa-cart-shopping"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 py-3 py-lg-0">
              <img src={recipeImg3} alt="" className="img-fluid" />
              <div className="Recipes_col1">
                <h4>$39.9</h4>
                <h5>Penne Pasta In Tomato Sauce</h5>
                <div className="recipe_mid py-2">
                  <div className="row align-items-center">
                    <div className="col-12 col-lg-5">
                      <div className="stars">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                      </div>
                    </div>
                    <div className="col-12 col-lg-7 py-3 py-lg-0">
                      {" "}
                      <button className="border-0">
                        Add To Cart{" "}
                        <i className="fa-solid fa-cart-shopping"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Recipes
