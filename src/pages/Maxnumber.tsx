import React from 'react'

function Maxnumber() {

    const values: number[][] = [
        [1,2,3,4,5],
        [3,4,5,6,7],
        [6,7,8,9,10]
    ];
    
    const calculateMinMax = (values: number[][]) => {
        let maxNumber: number = Number.MIN_SAFE_INTEGER;
        let minNumber: number = Number.MAX_SAFE_INTEGER;

        for(let i=0; i<values.length; i++){
            let value = values[i];
            for(let j=0; j<value.length; j++){
                if(values[i][j] > maxNumber){
                    maxNumber = values[i][j];
                }
            }
            if(maxNumber < minNumber){
                minNumber = maxNumber;
            }
            maxNumber = Number.MIN_SAFE_INTEGER;
        }
        return minNumber;
    }

    const answer: number = calculateMinMax(values);

  return (
    <div className="flex flex-col align-center mt-10 gap-y-1">
      <div className="flex justify-center"><h3>Find Min Number in Max Number from nested array</h3></div>
      <div className="flex justify-center mb-4">[1,2,3,4,5],<br />
        [3,4,5,6,7],<br />
        [6,7,8,9,10]</div>
      <div className="flex justify-center"><h3>Min Number: <span className="font-bold">{answer}</span></h3></div>
    </div>
  )
}

export default Maxnumber
