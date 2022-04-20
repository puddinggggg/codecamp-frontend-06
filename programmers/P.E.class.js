function solution(n, lost, reserve) {
    const losted = [...lost]; // lost 데이터가 filter 되기 이전의 데이터를 저장한다.
    lost = lost.filter( student => !reserve.includes( student ) )
               .sort( (a, b) => a - b ); // 오름차순으로 정렬
    reserve = reserve.filter( student => !losted.includes( student ) )
                     .sort( (a, b) => a - b ); // 오름차순으로 정렬
    
    let answer = n - lost.length;
    return lost.reduce( (acc, cur) => {
        // 앞에 있는 학생이 여벌 체육복을 가지고 있는지
        const prev = reserve.indexOf( cur - 1 );
        // 뒤에 있는 학생이 여벌 체육복을 가지고 있는지
        const next = reserve.indexOf( cur + 1 );
        
        if( prev !== -1 ) {
            // 앞에 있는 학생이 여벌 체육복을 가지고 있는 경우 reverse목록에서 해당 학생 제외하고 결과값에 1 추가
            reserve.splice( prev, 1 );
            acc++;
            
        } else if( next !== -1 ) {
            // 뒤에 있는 학생이 여벌 체육복을 가지고 있는 경우 reverse목록에서 해당 학생 제외하고 결과값에 1 추가
            reserve.splice( next, 1 );
            acc++;
        }
        return acc;
    }, answer)
}