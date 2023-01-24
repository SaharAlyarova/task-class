import { Collapse } from 'antd';


const FourSection = () => {
    const {Panel } = Collapse;
    return (
        <div className='foursection' style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
          <div  style={{margin:"2%"}}><img src="https://preview.colorlib.com/theme/notary/images/atty_2.jpg" alt="" /></div>
          <div>
            <h1>We Have Legal Solutions</h1>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam reprehenderit perspiciatis iste culpa consequuntur consequatur eum, voluptatum, quod deserunt maiores?

Modi perferendis ipsa ducimus consequuntur excepturi autem, numquam facere aperiam iste nam molestias provident consectetur molestiae voluptatibus ipsum. Fugiat, quas.
            </p>
            <div>
            <i class="fa-solid fa-check"></i>
            <p>Aperiam iste nam molestias</p>
            </div>
            <div>
            <i class="fa-solid fa-check"></i>
            <p>Modi perferendis ipsa</p>
            </div>
            <div>
            <i class="fa-solid fa-check"></i>
            <p>Perspic iste culpa</p>
            </div>
          </div>
          <div style={{marginRight:"10%"}}>
          <Collapse defaultActiveKey={['1']} >
      <Panel header="How To Download And Registr?" key="1">
        <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.</p>
      </Panel>
      <Panel header="How To Create your paypal account?" key="2">
        <p>
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
        </p>
      </Panel>
      <Panel header="How To Ypor Link Paypal And Banc Account?" key="3">
        <p>
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
        </p>
      </Panel>
    </Collapse>
          </div>
        </div>
    )
}

export default FourSection