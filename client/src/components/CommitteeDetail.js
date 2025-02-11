import React from 'react'
import './CommitteeDetail.css'

const CommitteeDetail = ({MemberPost, MemberName, MemberPostCollege}) => {
  return (
    <div className='parentDivCommitte'>
      <div className ='committeeDetail'>
        <div className='committeTitle'>
          <h3>{MemberPost}</h3>
        </div>
      </div>
      <div className="card committeCard">
        <div className='committeCardDetail'>
          <h3 className='cardTitle'>{MemberName}</h3>
          <h6 class="card-subtitle mb-3 text-muted">{MemberPostCollege}</h6>
        </div>
      </div>
    </div>
  )
}

export default CommitteeDetail
