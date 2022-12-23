import React from 'react';
import Slider from "react-slick/lib/slider";
import '../images/user1.jpg'
import '../images/user2.jpg'
import '../images/user3.jpg'
import '../images/user4.jpg'
import '../images/user5.jpg'


const TeamMembers = () => {

    const settings = {
        dots: true,
        arrows: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]};

        
      
const singleMemberBg = {
          background: "linear-gradient(181deg, rgb(251 245 255), rgb(126 139 255 / 13%))",
          color: "#000"

}
      const members = [
        {name:"John Doe", image:"user1.jpg", designation:"Quaility Checker"},
        {name:"Ron Paul", image:"user2.jpg", designation:"Stock Manager"},
        {name:"Picky Riot", image:"user3.jpg", designation:"Dealership Manager"},
        {name:"Hienen jiu", image:"user4.jpg", designation:"Business Analytics"},
        {name:"Sakibul Haque", image:"user5.jpg", designation:"Maintainance"},
    ]

  return (
    <>
      <div> 
        <Slider {...settings} className=''>
          {
                    members.map((member, index) =>
                        <div key={index} className="single-member p-5 flex flex-row justify-center items-center text-center gap-5">
                            <div style={singleMemberBg} className="p-5 rounded-3xl shadow-md shadow-purple-200">
                                <div className="text-center d-flex justify-center items-center mb-4">
                                    <img width="80px" height="80px" className="rounded-full text-center mx-auto border-[6px] shadow-md border-white" src='https://i.ibb.co/h7QYnNW/mt-5.png' alt="avatar" />
                                </div>
                                <p className="font-bold">{member.name}</p>
                                <p className="text-xs mt-2 font-bold">{member.designation}</p>
                            </div>


                        </div>
                    )
                }
        </Slider>
      </div> 
    </>
  )
}

export default TeamMembers