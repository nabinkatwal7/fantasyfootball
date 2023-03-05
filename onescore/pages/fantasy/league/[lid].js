import React from 'react'
import { useRouter } from "next/router";


function LeagueID() {
    const router = useRouter();
  const { lid } = router.query;
  return (
    <div className='team-container'>{lid}</div>
  )
}

export default LeagueID