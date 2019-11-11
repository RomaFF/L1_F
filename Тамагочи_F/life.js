var arr, name;

function btn1(arr){
    arr[0]+=10;
    arr[1]+=10;
    arr[2]+=10;
    arr[3]-=10;
    arr[4]-=10;
    const result = arr.filter(value => value >= 0 && value <= 110);
    if(arr[0] <= 0 || arr[0] >100 || arr[1] <= 0 || arr[1] >100 || arr[2] <= 0 || arr[2] >100 || arr[3] <= 0 || arr[3] >100 || arr[4] <= 0 || arr[4] >100)
    arr[0] = 'Твой питомец умер(';
    //if(result != arr) arr[1] = 'Твой питомец умер(';
    return arr;
    }

function btn2(arr){
    arr[0]+=10;
    arr[1]+=10;
    arr[2]+=10;
    arr[3]+=10;
    arr[4]-=0;
    const result = arr.filter(value => value >= 0 && value <= 110);
    if(arr[0] <= 0 || arr[0] >100 || arr[1] <= 0 || arr[1] >100 || arr[2] <= 0 || arr[2] >100 || arr[3] <= 0 || arr[3] >100 || arr[4] <= 0 || arr[4] >100)
    arr[0] = 'Твой питомец умер(';
    //if(result != arr) arr[1] = "Твой питомец умер(";
    return arr;
    }
        
function btn3(arr){
    arr[0]-=10;
    arr[1]+=10;
    arr[2]+=10;
    arr[3]+=10;
    arr[4]+=10;
    const result = arr.filter(value => value >= 0 && value <= 110);
    if(arr[0] <= 0 || arr[0] >100 || arr[1] <= 0 || arr[1] >100 || arr[2] <= 0 || arr[2] >100 || arr[3] <= 0 || arr[3] >100 || arr[4] <= 0 || arr[4] >100)
    arr[0] = 'Твой питомец умер(';
    //if(result != arr) arr[1] = "Твой питомец умер(";
    return arr;
    }

function btn4(arr){
    arr[0]=50;
    arr[1]=50;
    arr[2]=10;
    arr[3]=20;
    arr[4]=80;
    const result = arr.filter(value => value >= 0 && value <= 110);
    if(arr[0] <= 0 || arr[0] >100 || arr[1] <= 0 || arr[1] >100 || arr[2] <= 0 || arr[2] >100 || arr[3] <= 0 || arr[3] >100 || arr[4] <= 0 || arr[4] >100)
    arr[0] = 'Твой питомец умер(';
    //if(result != arr) arr[1] = "Твой питомец умер(";
    return arr;
    }


function btn5(arr){
    arr[0]=100;
    arr[1]=0;
    arr[2]=100;
    arr[3]-=10;
    arr[4]=100;
    const result = arr.filter(value => value > 0 && value <=100);
    if(arr[0] <= 0 || arr[0] >100 || arr[1] <= 0 || arr[1] >100 || arr[2] <= 0 || arr[2] >100 || arr[3] <= 0 || arr[3] >100 || arr[4] <= 0 || arr[4] >100)
    arr[0] = 'Твой питомец умер(';
    //if(result != arr) arr[1] = "Твой питомец умер(";
    return arr;
    }

function mass(arr){
    arr[0]=100;
    arr[1]=0;
    arr[2]=100;
    arr[3]-=10;
    arr[4]=100;
    const result = arr.filter(value => value > 0 && value <=100);
    if(arr[0] <= 0 || arr[0] >100 || arr[1] <= 0 || arr[1] >100 || arr[2] <= 0 || arr[2] >100 || arr[3] <= 0 || arr[3] >100 || arr[4] <= 0 || arr[4] >100)
    arr[0] = 'Твой питомец умер(';
    if(result != arr) arr[1] = "Твой питомец умер(";
    return arr;
    }

function writte(arr){
    if(arr[0]!="Твой питомец умер(")
    alert('Ваш питомец ' + name + ' имеет:\n' + 'Здоровье: ' + arr[0] + ' \nРадость: ' + arr[1] + '\nУсталость: ' + arr[2] + '\nАгрессия: ' + arr[3] + '\nГолод: ' + arr[4]);
    else alert('Твой питомец умер(\nВведи новое имя и создай нового героя:)');
    return arr;
    }
