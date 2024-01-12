

function invalid(n, r) {
    if (parseInt(n) < 0 || isNaN(parseInt(n))) {
        document.getElementById("n").focus();
        return true;
    } else if (parseInt(r) < 0 || isNaN(parseInt(r))) {
        document.getElementById("r").focus();
        return true;
    }
    return false;
}

function Factorial(n) {
    let fact = 1;
    for (let i = 2; i <= n; i++) {
        fact *= i;
    }
    return fact;
}

function Perm(n, r) {
    let perm = n;
    for (let i = n - 1; i > n - r; i--) {
        perm *= i;
    }
    return perm;
}

function Comb(n, r) {
    return Perm(n, r) / Factorial(r);
}

// Added functions 
function Catalan(n) {
    var res = 1;
    for (let i = 0; i < n; i++) {
        res = res * 2 * (2 * i + 1) / (i + 2);
    }
    return res;
}

function Triangular(n) {
    let a = 0;
    for (let i = 1; i <= n; i++) {
        a += i;
    }
    return a;
}

function Harmonic(n) {
    let harmonic = 1.00;

    for (let i = 2; i <= n; i++) {
        harmonic += parseFloat(1) / i;
    }

    return harmonic;
}

function Fibonacci(n) {
    if (n === 1) {
        return [0, 1];
    }
    else {
        var s = Fibonacci(n - 1);
        s.push(s[s.length - 1] + s[s.length - 2]);
        return s;
    }
}

function Lucas(n) {
    if (n >= 0) {
        if (Math.floor(n) !== n) throw new TypeError('Index cannot be a Decimal')
        let x = 2
        let y = 1
        for (let i = 0; i < n; i++) {
            const temp = x + y
            x = y
            y = temp
        }
        return x
    }
}

function Eulerian(n, r) {
    if (r < 0 || r > n - 1)
        return 0;

    let sum = 0;

    for (let j = 0; j <= r; j++) {
        sum += Math.pow(-1, j) * Comb(n + 1, j) * Math.pow((r - j), n);
    }

    return sum;
}


function StirlingNumber(n, r) {
    if (r === 0 || n === 0 || r > n) {
        return 0;
    } else if (r === n) {
        return 1;
    }
    return r * StirlingNumber(n - 1, r) + StirlingNumber(n - 1, r - 1);
}

function nCr(n, r) {
    if (r > n)
        return -1;

    if (n == r)
        return 1;

    if (r == 0)
        return 1;

    return nCr(n - 1, r - 1) + nCr(n - 1, r);
}

function computeAll() {
    document.getElementById("resPermutation").innerHTML = "";
    document.getElementById("resCombination").innerHTML = "";
    document.getElementById("resArrangement").innerHTML = "";
    document.getElementById("resSelectrofn").innerHTML = "";
    document.getElementById("resCatalan").innerHTML = "";
    document.getElementById("resTriangular").innerHTML = "";
    document.getElementById("resHarmonic").innerHTML = "";
    document.getElementById("resFibonacci").innerHTML = "";
    document.getElementById("resLucas").innerHTML = "";
    document.getElementById("resEulerian").innerHTML = "";
    document.getElementById("resStirlingNumber").innerHTML = "";
    const n = document.getElementById("n").value;
    const r = document.getElementById("r").value;
    if (invalid(n, r)) return;
    clickPerm();
    clickComb();
    clickArra();
    clickSele();
    clickCatalan();
    clickTriangular();
    clickHarmonic();
    clickFibonacci();
    clickLucas();
    clickEulerian();
    clickStirlingNumber();
}


function clickPerm() {
    document.getElementById("resPermutation").innerHTML = "";
    const n = document.getElementById("n").value;
    const r = document.getElementById("r").value;
    if (invalid(n, r)) return;
    document.getElementById("resPermutation").innerHTML = Perm(n, r);
    // document.getElementById("orderRelevant").innerHTML = "yes";
    // document.getElementById("repetition").innerHTML = "no";
    // document.getElementById("memoPermutation").innerHTML = "# Permutations of size <i>r</i> from <i>n</i> distinct objects";
}

function clickComb() {
    document.getElementById("resCombination").innerHTML = "";
    const n = document.getElementById("n").value;
    const r = document.getElementById("r").value;
    if (invalid(n, r)) return;
    document.getElementById("resCombination").innerHTML = Comb(n, r);
    // document.getElementById("orderRelevantComb").innerHTML = "no";
    // document.getElementById("repetitionComb").innerHTML = "no";
    // document.getElementById("memoCombination").innerHTML = "# Selections/Combinations of size <i>r</i> from <i>n</i> distinct objects";
}

function clickArra() {
    document.getElementById("resArrangement").innerHTML = "";
    const n = document.getElementById("n").value;
    const r = document.getElementById("r").value;
    if (invalid(n, r)) return;
    document.getElementById("resArrangement").innerHTML = Math.pow(n, r);
    // document.getElementById("orderRelevantArra").innerHTML = "yes";
    // document.getElementById("repetitionArra").innerHTML = "yes";
    // document.getElementById("memoArrangement").innerHTML = "# Arrangements with repetition of size <i>r</i> from <i>n</i> distinct objects";
}

function clickSele() {
    document.getElementById("resSelectrofn").innerHTML = "";
    const n = parseInt(document.getElementById("n").value);
    const r = parseInt(document.getElementById("r").value);
    if (invalid(n, r)) return;
    document.getElementById("resSelectrofn").innerHTML = Comb(n + r - 1, r);
    // document.getElementById("orderRelevantSele").innerHTML = "no";
    // document.getElementById("repetitionSele").innerHTML = "yes";
    // document.getElementById("memoSelection").innerHTML = "# Selections with repetition of size <i>r</i> from <i>n</i> distinct objects";
}

function clickCatalan() {
    document.getElementById("resCatalan").innerHTML = "";
    const n = parseInt(document.getElementById("n").value);
    const r = parseInt(document.getElementById("r").value);
    if (invalid(n, r)) return;
    document.getElementById("resCatalan").innerHTML = Catalan(n);
}

function clickTriangular() {
    document.getElementById("resTriangular").innerHTML = "";
    const n = parseInt(document.getElementById("n").value);
    const r = parseInt(document.getElementById("r").value);
    if (invalid(n, r)) return;
    document.getElementById("resTriangular").innerHTML = Triangular(n);
}

function clickHarmonic() {
    document.getElementById("resHarmonic").innerHTML = "";
    n = parseInt(document.getElementById("n").value);
    r = parseInt(document.getElementById("r").value);
    if (invalid(n, r)) return;
    document.getElementById("resHarmonic").innerHTML = Harmonic(n);
}

function clickFibonacci() {
    document.getElementById("resFibonacci").innerHTML = "";
    n = parseInt(document.getElementById("n").value);
    r = parseInt(document.getElementById("r").value);
    if (invalid(n, r)) return;
    document.getElementById("resFibonacci").innerHTML = Fibonacci(n);
}

function clickLucas() {
    document.getElementById("resLucas").innerHTML = "";
    n = parseInt(document.getElementById("n").value);
    r = parseInt(document.getElementById("r").value);
    if (invalid(n, r)) return;
    document.getElementById("resLucas").innerHTML = Lucas(n);
}
function clickEulerian() {
    document.getElementById("resEulerian").innerHTML = "";
    n = parseInt(document.getElementById("n").value);
    r = parseInt(document.getElementById("r").value);
    if (invalid(n, r)) return;
    document.getElementById("resEulerian").innerHTML = Eulerian(n, r);
}
function clickStirlingNumber() {
    document.getElementById("resStirlingNumber").innerHTML = "";
    n = parseInt(document.getElementById("n").value);
    r = parseInt(document.getElementById("r").value);
    if (invalid(n, r)) return;
    document.getElementById("resStirlingNumber").innerHTML = StirlingNumber(n, r);
}

// bonus 
function invalid2(n, r) {
    if (parseInt(n) < 0 || isNaN(parseInt(n))) {
        document.getElementById("m2").focus();
        return true;
    }
    else if (parseInt(r) < 0 || isNaN(parseInt(r))) {
        document.getElementById("n2").focus();
        return true;
    }
    return false;
}
function clickNm() {
    document.getElementById("resNm").innerHTML = "";
     n = document.getElementById("n2").value;
     r = document.getElementById("m2").value;
    if (invalid2(n, r)) return;
    document.getElementById("resNm").innerHTML = Math.pow(n, r);
}



function S1(m, n) {
    if (n === 0 || m === 0 || n > m) {
        return 0;
    } else if (n === m) {
        return 1;
    }
    return Factorial(n) * (n * StirlingNumber(m - 1, n) + StirlingNumber(m - 1, n - 1));
}
function S2(m, n) {
    result = 0;
    for (i = 1; i < n + 1; i++) {
        result += StirlingNumber(m, i);
    }
    return result;
}
function partitionCount(m, n) {
    if (m === 0 && n === 0) {
        return 1;
    } else if (m <= 0 || n <= 0) {
        return 0;
    }
    return partitionCount(m - 1, n - 1) + partitionCount(m - n, n);
}
function partitionSum(m, n) {
    let result = 0;
    for (let i = 1; i <= n; i++) {
        result += partitionCount(m, i);
    }
    return result;
}

function clickS1() {
    document.getElementById("resS1").innerHTML = "";
    const m = document.getElementById("m2").value;
    const n = document.getElementById("n2").value;
    if (invalid(n, m)) return;
    document.getElementById("resS1").innerHTML = S1(m, n);
}

function clickS2() {
    document.getElementById("resS2").innerHTML = "";
    const m = document.getElementById("m2").value;
    const n = document.getElementById("n2").value;
    if (invalid(n, m)) return;
    document.getElementById("resS2").innerHTML = S2(m, n);
}

function clickS3() {
    document.getElementById("resS3").innerHTML = "";
    const m = document.getElementById("m2").value;
    const n = document.getElementById("n2").value;
    if (invalid(n, m)) return;
    document.getElementById("resS3").innerHTML = StirlingNumber(m, n);
}
function clickMetrix() {
    document.getElementById("resMetrix").innerHTML = "";

    const m = document.getElementById("m2").value;
    const n = document.getElementById("n2").value;

    if (isNaN(parseInt(m)) || isNaN(parseInt(n))) {
        return;
    }
    document.getElementById("resMetrix").innerHTML = result;
}
function clickMetrix2() {
    document.getElementById("resMetrix2").innerHTML = "";
    const m = document.getElementById("m2").value;
    const n = document.getElementById("n2").value;
    if (invalid(m, n)) return;
    document.getElementById("resMetrix2").innerHTML = Comb(m - 1, m - n);
}

function clickParmn() {
    document.getElementById("resParmn").innerHTML = "";
    const m = document.getElementById("m2").value;
    const n = document.getElementById("n2").value;
    if (invalid(n, m)) return;
    document.getElementById("resParmn").innerHTML = partitionSum(m, n);
}
function clickPar() {
    document.getElementById("resPar").innerHTML = "";
    const m = document.getElementById("m2").value;
    const n = document.getElementById("n2").value;
    if (invalid(n, m)) return;
    document.getElementById("resPar").innerHTML = partitionCount(m, n);
}

function computeAll2() {
    document.getElementById("resNm").innerHTML = "";

    document.getElementById("resS1").innerHTML = "";

    document.getElementById("resS2").innerHTML = "";

    document.getElementById("resS3").innerHTML = "";

    document.getElementById("resMetrix").innerHTML = "";

    document.getElementById("resMetrix2").innerHTML = "";

    document.getElementById("resParmn").innerHTML = "";

    document.getElementById("resPar").innerHTML = "";

    // Add more statements to clear other result elements if needed

    const m = document.getElementById("m2").value;
    const n = document.getElementById("n2").value;    

    if (isNaN(parseInt(m)) || isNaN(parseInt(n))) {
        // Handle invalid input
        return;
    }

    clickNm();
    clickS1();
    clickS2();
    clickS3();
    clickMetrix();
    clickMetrix2();
    clickParmn();
    clickPar();
}

