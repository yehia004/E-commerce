import Hero from '../assets/Hero.png'


const HeroSection = () => {
  return (
    <div>
      <img src={Hero} alt="Hero"  style={{ width: '100%', height: '85vh' }}/>
            <div className="card" 
             style={{ position: 'absolute', top: '50%', left: '71%', transform: 'translate(-50%, -50%)', backgroundColor: '#FFF3E3'
                    , padding: '20px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', width: '590px'
                    , height: '400px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start',  
             }}>
                <h6>New Arrival</h6>
                <h1 style={{ fontSize: '2.7rem', fontWeight: 'bold',color:'#B88E2F',width:'60%' }}>Discover Our New Collection</h1>
                <p style={{ fontSize: '1rem',color:'black',marginBlock: '20px',fontWeight: '500' }}>Explore our latest collections and get more than your expectations,dont waste your time any more let's do it now</p>
                <button style={{ backgroundColor: '#B88E2F', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer',marginTop:'50px' }}>Shop Now</button>
            </div>
      </div>
  )
}

export default HeroSection;