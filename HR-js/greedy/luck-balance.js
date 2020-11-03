function maximize_luck_balance(k, contests) {
    contests.sort((a, b) => a[0] - b[0]);
    const imp_contests = contests.filter((contest) => contest[1] === 1);
    const win_contest = imp_contests.length - k;
    let lost_luck_bal = 0;
    let won_luck_bal = 0;
    let i = 0;
    let win_counter = 0;
    while (i < contests.length) {
        if (contests[i][1] === 1 && win_counter < win_contest) {
            lost_luck_bal += contests[i][0];
            win_counter++;
        } else {
            won_luck_bal += contests[i][0];
        }
        i++;
    }
    return won_luck_bal - lost_luck_bal;
    // console.log(won_luck_bal - lost_luck_bal);
    // console.log(imp_contests.length);
    // console.log(sorted_contests);
}

function main(ip) {
    const ip_arr = ip.split('\n');
    const [n, k] = ip_arr[0].split(' ');
    const contests = []; // luck balance, importance

    for (let i = 1; i <= n; i++) {
        contests.push(ip_arr[i].split(' ').map(Number));
    }

    const res = maximize_luck_balance(k, contests);
    console.log(res);
}

main("6 3\n5 1\n2 1\n1 1\n8 1\n10 0\n5 0");