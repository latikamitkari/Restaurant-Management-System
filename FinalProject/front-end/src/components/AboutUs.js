import React from 'react';
import './AboutUs.css';


// const serviceData = [
//     {
//         icon:"fas fa-hotel",
//         title: "Afforadable Hotel",
//         description: " Experience wallet-friendly Meals with our affordable hotels service, ensuring comfort without breaking the bank."
//     },
//     {
//         icon:"fas fa-compass",
//         title: "Real-Time Availability",
//         description: "DelightfulPlates showcases real-time table availability, allowing customers to instantly identify open time slot."
//     },
//     {
//         icon:"fas fa-utensils",
//         title: "Food And Drinks",
//         description: "Pull up a chair. Take a taste. Come join us. Life is so endlessly  and lots of adventures! For Food And Drinks join us!"
//     },
//     {
//         icon:"fas fa-shield-alt",
//         title: "Safety Guide",
//         description: "Explore with confidence through our tourism agency's comprehensive safety guide service, ensuring a secure and worry-free experience."
//     },
//     {
//         icon:"fas fa-bus",
//         title: "Fastest travel",
//         description: "Experience the speed of Delivary with our fastest delivery  service, ensuring your food reach your destination in record time."
//     },
   
//     {
//         icon:'fas fa-gopuram',
//         title: "Cultural Heritage",
//         description: "Maharashtra is a treasure trove of cultural heritage, boasting diverse tradition with food explore with us. "
//     },
   
// ]
const AboutUs = () => {
    return (
        <div>
            <section className="about" id="about">
                <div  className="container">
                    <div style={{textAlign:"center",fontWeight:"600"}} className="main-txt" >
                        <h1>Welcome To    <span style={{color:"#ffa500"}}>Delightful<span style={{ color: 'black' }}>Plates</span> </span></h1>
                    </div>

                    <div className="row" style={{ marginTop: "50px" }}>
                        <div className="col-md-6 py-3 py-md-0">
                            <div className="card">
                                <img src="https://media.iceportal.com/43634/photos/65355143_XXL.jpg" alt="" />
                            </div>
                        </div>

                        <div className="col-md-6 py-3 py-md-0">
                            <h2>Know More about DelightfulPlates</h2>
                            <p className=" text-align: center;">
"DelightfulPlates" is a restaurant reservation system designed to create a seamless and enjoyable booking experience for customers. Through an intuitive online portal and app, customers can easily explore available reservation slots, choose their preferred date and time, and specify the size of their party. The system offers real-time availability updates, enabling customers to make informed decisions. It also allows customers to customize their dining experience by selecting their preferred seating area or table. Once a reservation is made, customers receive immediate confirmations and timely reminders, reducing no-shows. The system's integration with the restaurant's POS system streamlines operations, and customers can modify or cancel reservations as needed. Overall, "DelightfulPlates" focuses on enhancing customer satisfaction and efficiency in the dining reservation process.                            </p>
<a href="https://en.wikipedia.org/wiki/Indian_cuisine">
    <button id="about-btn">Read More...</button>
</a>

                        </div>
                    </div>
                </div>
            </section>
{/* 
            <section className="services" id="services">
                <div className="container">
                    <div className="main-text">
                        <h1><span>Services</span></h1>
                    </div>

                    <div className="row mt-3">
                        {serviceData.map((val) => {
                            return (
                                <div className="col-md-4 py-3 py-md-0 mt-3">
                                    <div className="card" style={{  }}>
                                        <i className={val.icon}></i>
                                        <div className="card-body">
                                            <h3>{val.title}</h3>
                                            <p>{val.description}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section> */}
        
        
        <div>
            <div style={{backgroundColor: " #f9f9f9"}}>
        {/* <div id="aboutus">
    <div style={{textAlign: 'justify', paddingTop: '6%', backgroundColor: 'lightblue', fontSize: 'larger', fontWeight: 500}} className="row justify-content-center">
      <h2 style={{textAlign: 'center', marginBottom: '3%', fontSize: 30, fontFamily: 'initial', fontWeight: 'bold'}}>
        ABOUT US
      </h2>
      <div style={{paddingRight: '2%'}} className="col-sm-12 col-md-5">
        <p>
          Interviews are crucial moments in oneâ€™s career. Theoretical
          knowledge of interview questions isn't enough when you actually face
          an interview. Too often fear takes over our performance in job
          interviews.
        </p>
      </div>
      <div style={{paddingLeft: '2%'}} className="col-sm-12 col-md-5">
        <p>
          As the adage goes â€“ practice makes perfect! Mock interviews by
          InterviewInsight give you the platform to prepare, practice and
          experience firsthand how a real-life job interview feels.
          Familiarizing yourself with the interview environment beforehand in
          a relaxed and stress-free environment gives you an edge over your
          peers.
        </p>
      </div>
    </div>
    {/* <div style={{textAlign: 'justify', backgroundColor: 'lightblue', fontSize: 'larger', fontWeight: 500, paddingTop: '1%'}} className="row justify-content-center">
      <div style={{paddingRight: '2%'}} className="col-sm-12 col-md-5">
        <p>
          InterviewInsight is built on the premise that practice &amp; preparation
          are crucial to get over your anxieties when attending an interview.
        </p>
      </div>
      <div style={{paddingLeft: '2%'}} className="col-sm-12 col-md-5">
        <p>
          Our mock interviews are conducted by handpicked industry experts
          with an average experience of 9+ years in the interviewing game. So
          youâ€™re sure to improve your chances of getting hired!
        </p>
      </div>
    </div> */}
  {/* </div> */}

  <div style={{paddingTop: '8%'}} className="container">
    <h2 style={{textAlign: 'center', fontSize: 30, fontFamily: 'initial', fontWeight: 'bold'}}>
      OUR TEAM
    </h2>
    <div className="row display-flex justify-content:center" style={{paddingTop: '4%'}}>
      <div className="col-md-4 col-sm-12" style={{textAlign: 'center'}}>
        <img className="rounded-circle" src="tejas.jpg" width={160} height={160} style={{marginBottom: 25}} />
        <h3>Tejas Badgujar</h3>
        <p>CDAC-Mumbai</p>
        <p><b>Email-</b>tejasbadgujar70@gmail.com</p>
        {/*<p style="text-align: justify">
      Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod.
      Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo
      risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo
      cursus magna.
    </p>*/}
      </div>
      <div className="col-md-4 col-sm-12" style={{textAlign: 'center'}}>
        <img className="rounded-circle" src="suruchi.jpg" width={160} height={160} style={{marginBottom: 25}} />
        <h3>Suruchi Sonone</h3>
        <p>CDAC-Mumbai</p>
        <p><b>Email-</b>suruchisonone6@gmail.com</p>
        {/*<p style="text-align: justify">
      Duis mollis, est non commodo luctus, nisi erat porttitor ligula,
      eget lacinia odio sem nec elit. Cras mattis consectetur purus sit
      amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor
      mauris condimentum nibh.
    </p>*/}
      </div>
      <div className="col-md-4 col-sm-12" style={{textAlign: 'center'}}>
        <img className="rounded-circle" src="shivam.jpg" width={160} height={160} style={{marginBottom: 25}} />
        <h3>Shivam Gaur</h3>
        <p>CDAC-Mumbai</p>
        <p><b>Email-</b>shivamgaur8527@gmail.com</p>
        {/*<p style="text-align: justify">
      Donec sed odio dui. Cras justo odio, dapibus ac facilisis in,
      egestas eget quam. Vestibulum id ligula porta felis euismod semper.
      Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum
      nibh, ut fermentum massa justo sit amet risus.
    </p>*/}
      </div>

    </div>


  
   
    <div className="row display-flex justify-content:center" style={{paddingTop: '4%'}}>

      <div className="col-md-4 col-sm-12" style={{textAlign: 'center'}}>
        <img className="rounded-circle" src="ghanshyam.jpg" width={160} height={160} style={{marginBottom: 25}} />
        <h3>Ghanshyam Mali</h3>
        <p>CDAC-Mumbai</p>
        <p><b>Email-</b>ghanshyams.mali@gmail.com</p>
        {/*<p style="text-align: justify">
      Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod.
      Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo
      risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo
      cursus magna.
    </p>*/}
      </div>
      <div className="col-md-4 col-sm-12" style={{textAlign: 'center'}}>
        <img className="rounded-circle" src="saurabh.jpg" width={160} height={160} style={{marginBottom: 25}} />
        <h3>Saurabh Ladi</h3>
        <p>CDAC-Mumbai</p>
        <p><b>Email-</b>saurabhladii@gmail.com</p>
        {/*<p style="text-align: justify">
      Duis mollis, est non commodo luctus, nisi erat porttitor ligula,
      eget lacinia odio sem nec elit. Cras mattis consectetur purus sit
      amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor
      mauris condimentum nibh.
    </p>*/}
      </div>
      <div className="col-md-4 col-sm-12" style={{textAlign: 'center'}}>
        <img className="rounded-circle" src="latika.jpg" width={160} height={160} style={{marginBottom: 25}} />
        <h3>Latika Mitkari</h3>
        <p>CDAC-Mumbai</p>
        <p><b>Email-</b>latikamitkar@gmail.com</p>
        {/*<p style="text-align: justify">
      Donec sed odio dui. Cras justo odio, dapibus ac facilisis in,
      egestas eget quam. Vestibulum id ligula porta felis euismod semper.
      Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum
      nibh, ut fermentum massa justo sit amet risus.
    </p>*/}
      </div>
</div>
    </div>
  


  </div>
</div>
        </div>
    )
}

export default AboutUs;