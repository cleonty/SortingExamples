const logStrings: string[] = [];

function merge(a, b: number[]): number[] {
    const aLen = a.length, bLen = b.length;
    let aIndex = 0, bIndex = 0;
    const result = [];
    while (true) {
        if (aIndex < aLen && bIndex < bLen) {
            if (a[aIndex] < b[bIndex]) {
                result.push(a[aIndex]);
                aIndex++;
            } else {
                result.push(b[bIndex]);
                bIndex++;
            }
        } else if (aIndex < aLen) {
            result.push(a[aIndex]);
            aIndex++;
        } else if (bIndex < bLen) {
            result.push(b[bIndex]);
            bIndex++;
        } else {
            break;
        }
    }
    logStrings.push(`merge(${JSON.stringify(a)}, ${JSON.stringify(b)}) = ${JSON.stringify(result)}`);
    return result;    
}

function mergeSort(a: number[]): number[] {
    const n = a.length;
    if (n == 1) {
        return a;
    } else {
        const middle = Math.floor(n / 2);
        const x = a.slice(0, middle);
        const y = a.slice(middle);
        logStrings.push(`${JSON.stringify(a)} = ${JSON.stringify(x)} + ${JSON.stringify(y)}`);
        return merge(mergeSort(x), mergeSort(y)); 
    }
}

let a = [5, 3, 4, 1, 2, 6, 7];
a = mergeSort(a);
document.title = JSON.stringify(a);
document.body.innerText = logStrings.join("\n");
