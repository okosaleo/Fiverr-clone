import Slider from "react-slick";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black", borderRadius: "50%" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black", borderRadius: "50%" }}
      onClick={onClick}
    />
  );
}

export default function Gig() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  return (
    <div className=" flex justify-center">
      <div className=" w-[1200px] py-[30px] px-0 gap-12 flex">
        <div className="flex-[2] flex flex-col gap-5">
          <span className=" text-sm font-light font-Mont">FIVERR &gt; GRAPHICS & DESIGN &gt;</span>
          <h1>I build websites for you.</h1>

          <div className="flex items-center gap-[10px]">
            <img src="/Images/leo.jfif" alt="" className="w-[32px] h-8 rounded-full " />
            <span className=" font-Mont font-medium text-sm">Okosa Leonard</span>
          <div className=" flex items-center gap-[5px]">
          <img src="/Images/star.png" alt="" className=" w-[14px] h-[14px]"/>
              <img src="/Images/star.png" alt="" className=" w-[14px] h-[14px]"/>
              <img src="/Images/star.png" alt="" className=" w-[14px] h-[14px]"/>
              <img src="/Images/star.png" alt="" className=" w-[14px] h-[14px]"/>
              <img src="/Images/star.png" alt="" className=" w-[14px] h-[14px]"/>
              <span className=" text-sm font-Mont font-bold">5</span>
            </div>
          </div>
          <Slider {...settings} className="w-[700px]">
            <img src="/Images/13.jpg" alt="" />
            <img src="/Images/12.jpg" alt="" />
            <img src="/Images/14.jpg" alt="" />
          </Slider>
          <h2 className=" font-Mont font-normal">About This Gig</h2>
          <p className=" text-[#555] leading-[25px]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum eos nisi culpa dignissimos deleniti recusandae explicabo tempore omnis nulla rem.
             Labore nostrum alias maiores cumque, aperiam eum inventore iusto ut. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque iusto, deleniti illo architecto a labore pariatur cupiditate voluptas sequi sunt assumenda consequatur ut, totam saepe laboriosam et porro debitis eaque!
             </p>
             <div className=" mt-[50px]flex flex-col gap-[20px]">
          <h2 className=" font-Mont mb-[15px]">About The Seller</h2>
          <div className=" flex items-center gap-[20px]">
            <img src="/Images/leo.jfif" alt="" className=" w-[100px] h-[100px] rounded-full object-cover " />
            <div className="flex flex-col gap-[10px]">
              <span className=" font-Mont">Okosa Leonard</span>
              <div className=" flex items-center gap-[5px]">
              <img src="/Images/star.png" alt="" className=" w-[14px] h-[14px]" />
              <img src="/Images/star.png" alt="" className=" w-[14px] h-[14px]" />
              <img src="/Images/star.png" alt="" className=" w-[14px] h-[14px]" />
              <img src="/Images/star.png" alt="" className=" w-[14px] h-[14px]" />
              <img src="/Images/star.png" alt="" className=" w-[14px] h-[14px]" />
              <span className=" text-sm font-Mont font-bold">5</span>
              </div>
              <button className="bg-white rounded border border-[gray] p-[10px]">Contact me</button>
            </div>
            </div>
            <div className="border border-[lightgray] rounded-md p-[20px] mt-5">
              <div className=" flex flex-wrap justify-between ">
                <div className=" w-[300px] flex flex-col gap-[10px] mb-5">
                <span className=" font-Mont">From </span>
                <span>Nigeria</span>
                </div>
                <div className="w-[300px] flex flex-col gap-[10px] mb-5">
                <span className=" font-Mont">Member since</span>
                <span>Aug 2022</span>
              </div>
              <div className="w-[300px] flex flex-col gap-[10px] mb-5">
                <span className=" font-Mont">Avg. response time </span>
                <span>4 Hours</span>
              </div>
              <div className=" w-[300px] flex flex-col gap-[10px] mb-5">
                <span className=" font-Mont">Last delivery </span>
                <span>1 day</span>
              </div>
              <div className="w-[300px] flex flex-col gap-[10px] mb-5">
                <span className=" font-Mont">Languages </span>
                <span>English</span>
              </div>
              </div>
              <hr className="h-[0px] border border-[lightgray] mb-5"/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium rerum dolorum consequatur libero. Rem vitae temporibus natus iusto dicta, nisi dolor debitis quis quaerat quod ipsa voluptate iure alias impedit.</p>
            </div>
          </div>
          <div className=" mt-[50px] ">
          <h2 className="font-Mont">Reviews</h2>
          <div className=" flex flex-col gap-5 m-5">
            <div className=" flex items-center">
              <img src="/Images/leo.jfif" alt=""  className=" h-[50px] w-[50px] rounded-full mr-2"/>
              <div className="info">
                <span>Okosa Leonard</span>
                <div className=" flex items-center gap-[10px] text-[gray]">
                  <img src="/Images/naija.png" alt="" className=" w-5"/>
                  <span>Nigeria</span>
                </div>
              </div>
            </div>
            <div className="flex gap-[5px]">
              <img src="/Images/star.png" alt="" className="h-[14px] w-[14px]"/>
              <img src="/Images/star.png" alt=""  className="h-[14px] w-[14px]"/>
              <img src="/Images/star.png" alt=""  className="h-[14px] w-[14px]"/>
              <img src="/Images/star.png" alt=""  className="h-[14px] w-[14px]"/>
              <img src="/Images/star.png" alt=""  className="h-[14px] w-[14px]"/>
              <span className=" font-Mont text-[#ffc100]">5</span>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus in necessitatibus vitae molestias incidunt ducimus corrupti. Officiis obcaecati quis in, dolorum cupiditate dignissimos, debitis consequuntur, iusto officia voluptatibus quia sunt!</p>
            <div className=" flex items-center gap-[10px]">
                <span>Helpful?</span>
                <img src="/Images/like.png" alt="" className="w-[14px]" />
                <span>Yes</span>
                <img src="/Images/dislike.png" alt=""  className=" w-[14px]"/>
                <span>No</span> 
              </div>
          </div>
          <hr className=" h-[0px] border-[.5px] border-[lightgray] my-[50px]"/>
          <div className=" flex flex-col gap-5 m-5">
            <div className=" flex items-center">
              <img src="/Images/leo.jfif" alt="" className=" h-[50px] w-[50px] rounded-full mr-2"/>
              <div className="info">
                <span>Okosa Leonard</span>
                <div className=" flex items-center gap-[10px] text-[gray]">
                  <img src="/Images/naija.png" alt="" className=" w-5"/>
                  <span>Nigeria</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-[5px]">
              <img src="/Images/star.png" alt=""  className="h-[14px] w-[14px]"/>
              <img src="/Images/star.png" alt=""  className="h-[14px] w-[14px]"/>
              <img src="/Images/star.png" alt=""  className="h-[14px] w-[14px]"/>
              <img src="/Images/star.png" alt=""  className="h-[14px] w-[14px]"/>
              <img src="/Images/star.png" alt=""  className="h-[14px] w-[14px]"/>
              <span className=" font-Mont text-[#ffc100]">5</span>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus in necessitatibus vitae molestias incidunt ducimus corrupti. Officiis obcaecati quis in, dolorum cupiditate dignissimos, debitis consequuntur, iusto officia voluptatibus quia sunt!</p>
            <div className=" flex items-center gap-[10px]">
                <span>Helpful?</span>
                <img src="/Images/like.png" alt=""  className=" w-[14px]" />
                <span>Yes</span>
                <img src="/Images/dislike.png" alt=""  className=" w-[14px]" />
                <span>No</span> 
              </div>
          </div>
          <hr className=" h-[0px] border-[.5px] border-[lightgray] my-[50px]" />
          <div className=" flex flex-col gap-5 m-5">
            <div className=" flex items-center">
              <img src="/Images/leo.jfif" alt="" className=" h-[50px] w-[50px] rounded-full mr-2" />
              <div className="info">
                <span>Okosa Leonard</span>
                <div className="flex items-center gap-[10px] text-[gray]">
                  <img src="/Images/naija.png" alt="" className=" w-5"/>
                  <span>Nigeria</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-[5px]">
              <img src="/Images/star.png" alt=""  className="h-[14px] w-[14px]"/>
              <img src="/Images/star.png" alt=""  className="h-[14px] w-[14px]"/>
              <img src="/Images/star.png" alt=""  className="h-[14px] w-[14px]"/>
              <img src="/Images/star.png" alt=""  className="h-[14px] w-[14px]"/>
              <img src="/Images/star.png" alt=""  className="h-[14px] w-[14px]"/>
              <span className=" font-Mont text-[#ffc100]">5</span>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus in necessitatibus vitae molestias incidunt ducimus corrupti. Officiis obcaecati quis in, dolorum cupiditate dignissimos, debitis consequuntur, iusto officia voluptatibus quia sunt!</p>
            <div className="flex items-center gap-[10px]">
                <span>Helpful?</span>
                <img src="/Images/like.png" alt="" className=" w-[14px]" />
                <span>Yes</span>
                <img src="/Images/dislike.png" alt="" className=" w-[14px]"/>
                <span>No</span> 
              </div>
          </div>
          <hr />
          </div>
        </div>
          <div className="right flex-[1] border border-[lightgray] p-[20px] rounded-md flex flex-col gap-[20px] top-[150px] max-h-[500px] h-max">
            <div className=" flex items-center justify-between">
              <h2 className=" font-light font-Mont">1 Website Creation</h2>
              <h3 className=" font-Mont font-medium">$800</h3>
            </div>
            <p className=" text-[gray] my-[10px] mx-[0px]">I create websites for a living. Give me ea ddetailed descriptionb of what you want let's work together</p>
            <div className="flex items-center justify-between text-sm">
              <div className=" flex items-center gap-[10px]">
              <img src="/Images/clock.png" alt="" className=" w-[10px] " />
              <span>2 weeks delivery</span>
            </div>
            <div className=" flex items-center gap-[10px]">
              <img src="/Images/recycle.png" alt=""  className=" w-[10px] " />
              <span>3 Revisions</span>
            </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-[10px] font-light text-[gray]">
                <img src="/Images/greencheck.png" alt="" className=" w-[14px]" />
                <span>Fast build with MERN stack</span>
              </div>
              <div className="flex items-center gap-[10px] font-light text-[gray]">
                <img src="/Images/greencheck.png" alt="" className=" w-[14px]" />
                <span>Fast build with MERN stack</span>
              </div>
              <div className=" flex items-center gap-[10px] font-light text-[gray]">
                <img src="/Images/greencheck.png" alt="" className=" w-[14px]" />
                <span>Fast build with MERN stack</span>
              </div>
              <div className=" flex items-center gap-[10px] font-light text-[gray]">
                <img src="/Images/greencheck.png" alt="" className=" w-[14px]"/>
                <span>Fast build with MERN stack</span>
              </div>
            </div>
            <button className="bg-[#1dbf73] p-[10px] text-[white] border-none font-medium text-lg">Continue</button>
          </div>
      </div>
    </div>
 )
} 
          