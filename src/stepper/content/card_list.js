import React from 'react';
import CheckCard from './check_card';

export default function CardList ({items, setItem}) {

  return Object.values(items).map(item =>         
    <CheckCard key={item.name} {...item} 
      handleClick={() => setItem({type: item.checked? 'uncheck' : 'check', id:item.id})}
    />
  )
}
