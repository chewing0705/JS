// let isPrime =  true;
// for (let dividend =2; dividend<=10;dividend++){
//     for (let divisor = 2 ;divisor<dividend;divisor++){
//         if (dividend % divisor ==0){
//             isPrime = false;
//         }
//     }


//     if (isPrime !=  true ){
//     console.log(`${dividend} not 質數 `);
//     isPrime =  true;
//     // 要改繼續相信他為ture 繼續監測
//     }
//     else{
//     console.log(`${dividend} is 質數 `);
//     }
// }


//改版第2版 

// for (let dividend =2; dividend<=10;dividend++){
//     isPrime = true;

//     for (let divisor = 2 ;divisor < dividend; divisor++){
//         if (dividend % divisor == 0){
//                         isPrime = false;
//                     }
//     }
//     if (isPrime ==  false){
//     console.log(`${dividend} not 質數 `);
//     }
//     else{
//             console.log(`${dividend} is 質數 `);
//      }
// }

//第3版 


for (let i= 2;i <= 4;i++){
    isPrime = true;
    for (let j=2 ;j<i; j++){
        if (i % j ==0){
            isPrime = false;
        }
    }
        if (isPrime ==  false){
    console.log(`${i} not 質數 `);
    }
    else{
            console.log(`${i} is 質數 `);
     }
}


// divisor < dividend
// j<i
// 小於分子用意 不然 10%10 4%4 為0