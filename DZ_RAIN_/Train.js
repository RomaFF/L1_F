function Pain(arr){
    var max = arr[0], maxnum=0, min = arr[0];
      for (var q = 1; q < arr.length; q++) {
          if (arr[q] >= max) {
              max = arr[q];
              maxnum = q;
          }
          if (arr[q] <= min) {
            min = arr[q];
        }
      }
    var sum = 0, el = arr[0], el2 = 0, elnum2 = 0, elnum = 0;
    
    for(var i=0; i < arr.length;i++) {
        if(i-elnum==1 && arr[i]>el)
        {
            el = arr[i];
            elnum = i;
        }
        if(i-elnum>1 && maxnum != elnum && arr[i] >= el)
        {
            for(var j=elnum; j < i;j++)
            {
                sum += el - arr[j];
            }
            el = arr[i];
            elnum = i;
        }

        if(maxnum == elnum){
            if(el2==0 && elnum2 == 0) {
                el2 = arr[i];
                elnum2 = i;
            }

            var max2 = min;
            for(j=elnum2+1; j < arr.length;j++)
            {               
                if (arr[j] > max2) {
                    max2 = arr[j];
                    maxnum2 = j;
                } 
            }
            if(i-elnum2>1 && arr[i] == max2){
                for(var j1=elnum2+1; j1 < i;j1++)
            {
                sum += arr[i] - arr[j1];
            }
                el2 = arr[i];
                elnum2 = i;
            }
            }
    }
    return sum;
    }