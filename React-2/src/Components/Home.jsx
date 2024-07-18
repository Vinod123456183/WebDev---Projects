import React from 'react'
import vg from "../assets/react.svg";
import {AiFillGoogleCircle , AiFillYoutube , AiFillAmazonCircle , AiFillInstagram} from 'react-icons/ai'

function Home() {
  return (

    <>
    
    <div className='home' id='home' >
        <main>
            <h1>TechStar</h1>
            <p>Solution To Your Problems</p>
        </main>
    </div>



    <div className='home2' >

        <img src={vg} alt = "Graphics" />

        <div>

            <p>
                Lorem, ipsum. Lorem ipsum dolor sit amet consectetur
                adipisicing elit.
                Lorem, ipsum. Lorem ipsum dolor sit amet consectetur
                adipisicing elit.
                Lorem, ipsum. Lorem ipsum dolor sit amet consectetur
                adipisicing elit.
                Eius, quia? Lorem ipsum dolor sit amet 
                adipisicing elit.
                consectetur adipisicing elit. Quod, in!

            </p>

        </div>

    </div>



    <div className='home3' id='about'>

        <div>
            <h1>Who We Are ? </h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium culpa, laudantium maiores fugiat cupiditate provident eveniet odio quis quo iure perspiciatis dolores eaque laboriosam aliquid fuga aspernatur obcaecati debitis! Eligendi.
                Expedita eos consequuntur perspiciatis illum alias accusamus, ad voluptate enim hic officiis omnis voluptas quasi facere quo molestias soluta veritatis, inventore, recusandae aspernatur mollitia deleniti cupiditate aliquid rem exercitationem? Officia?
                Repudiandae, consequatur laudantium vel ullam perspiciatis dolor aut dicta voluptate officiis, est eligendi accusantium non quae in ratione maxime. Rem magni ullam nobis accusamus nam aut eaque alias eligendi blanditiis!
                Nam dolore aperiam cupiditate distinctio eveniet iste. Modi ipsam optio at in porro necessitatibus mollitia nihil alias iste natus, quisquam reiciendis non atque aliquid quia enim assumenda doloribus dolore saepe.
                Voluptates animi rerum nostrum quis suscipit explicabo aperiam cumque sit inventore ab adipisci mollitia tempore sed itaque est voluptatum nesciunt sint temporibus, quos eveniet, laboriosam illo aliquid? Odit, aut minima.
            </p>
        </div>

    </div>


    <div className="home4" id='brands'>

        <div>
            <h1>Brands</h1>

            <article>


                <div style={{
                    animationDelay : '0.3s',
                }}>
                    <AiFillGoogleCircle/>
                    <p>Google</p>
                </div>



                <div style={{
                    animationDelay : '0.6s',
                }}>
                    <AiFillYoutube/>
                    <p>YouTube</p>
                </div>



                <div style={{
                    animationDelay : '0.9s',
                }}>
                    <AiFillInstagram/>
                    <p>Instagram</p>
                </div>


                <div style={{
                    animationDelay : '1.1s',
                }}>
                    <AiFillAmazonCircle/>
                    <p>Amazon</p>
                </div>


            </article>
        </div>

    </div>

    </>

  )
}

export default Home