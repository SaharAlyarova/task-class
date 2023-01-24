const SectionOne = () => {
    return (
        <div className='sectionone' style={{textAlign:"center"}}>
          <h1>Practice Areas</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
         <div  >
         <div style={{display:"flex",alignItems:"center", justifyContent:"center", columnGap:"3%", padding:"3%" }}>
            <div className="div1" style={{padding:"3%"}}>
            <i class="fa-solid fa-building-columns"></i>
            <h3>
Bankruptcy Law
</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, laboriosam!</p>
            </div>
            <div className="div1" style={{padding:"3%"}}>
            <i class="fa-solid fa-xmark"></i>
            <h3>

            Business Law
</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, laboriosam!</p>
            </div>
            <div className="div1" style={{padding:"3%"}}>
            <i class="fa-solid fa-hand-holding-dollar"></i>
            <h3>

            Civil Rights Law
</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, laboriosam!</p>
            </div>
          </div >
          <div style={{display:"flex", alignItems:"center", justifyContent:"center", columnGap:"3%", padding:"3%"}}>
          <div className="div1" style={{padding:"3%"}} >
          <i class="fa-solid fa-hammer"></i>
            <h3>

            Criminal Law
</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, laboriosam!</p>
            </div>
            <div className="div1" style={{padding:"3%"}}>
            <i class="fa-solid fa-suitcase"></i>
            <h3>

            Immigration Law
</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, laboriosam!</p>
            </div>
            <div className="div1" style={{padding:"3%"}}>
            <i class="fa-solid fa-house-chimney-heart"></i>
            <h3>

            Family Law
</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, laboriosam!</p>
            </div>
          </div>
         </div>
        </div>
    )
}

export default SectionOne
