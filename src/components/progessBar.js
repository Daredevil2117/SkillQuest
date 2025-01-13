import React from 'react'

function ProgessBar() {
  return (
   <div className='df'>
     <div className='left-panel' style={{width:"200px"}}>
      <div>
        SkillQuest
      </div>

     </div>
     <div className='data-panel' style={{backgroundColor:"#dadfe1", width:"100%"}}> 
      <div style={{boxShadow:"0 1px 1px rgba(0,0,0,0.12), 0 2px 2px rgba(0,0,0,0.12);", padding:"15px 0", background:"#fff", textAlign:"center"}}>
         Welcome User
      </div>
      
      <div className='mid-section-p'>
        <div className='df'>
          <div style={{flex:"2"}}>
            <div className='progress' style={{background:"white", margin:"15px", height:"150px", padding:"10px", borderRadius:"10px"}}>
              <div>
                Course Progress
              </div>

            </div>
            <div className='due-progess' style={{background:"white", margin:"15px", height:"150px", padding:"10px", borderRadius:"10px"}}>
              <div>
                What's Due
              </div>

            </div>

          </div>
          <div className='right-panel-1' style={{flex:"1", background:"white", margin:"15px", marginLeft:"0", padding:"10px", borderRadius:"10px"}}>
            Right Panel 01

          </div>

        </div>

      </div>

     </div>
   </div>
    
  )
}

export default ProgessBar
