import React from 'react'
import Businesshead from './Businesshead'
import Buisnesscard from '../Body/cards/Buisnesscard'
import BusAcc from './BusAcc'
import Copcard from './Copcard'
import Loan from './Loan'
import Busservice from './Busservice'
import Intrade from './Intrade'
import Busicardy from './busicardy'

const Businessbody = () => {
  return (
    <div >
       <Businesshead/>
       <Buisnesscard/>
       <BusAcc/>
       <Copcard/>
       <Loan/>
       <Busservice/>
       <Intrade/>
       <Busicardy/>
    </div>
  )
}

export default Businessbody
