import React from 'react'

    function getPrevNextFromArray(array, id) {
        const index = array.findIndex(item => item.id === id);
      
        if (index === -1) {
          return { previous: null, next: null };
        }
      
        const previousIndex = (index - 1 + array.length) % array.length
        const nextIndex = (index + 1) % array.length
      
        return {
          previous: array[previousIndex],
          next: array[nextIndex],
        };
      }


export default getPrevNextFromArray
