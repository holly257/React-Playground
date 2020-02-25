import React from 'react'
import GreatGrandChild from './GrandGrandChild/GrandGrandChild'

export default function GrandChild() {
  return (
    <div className='GrandChild'>
      <GreatGrandChild />
    </div>
  );
}