const logStrings: string[] = [];

function rotate(a: number[], start, end: number) {
    if (start < end - 1) {
        const temp = a[end];
        a[end] = a[start];
        a[start] = a[end - 1];
        a[end - 1] = temp;
        return end - 1;
    } else if (start == end - 1) {
        const temp = a[end];
        a[end] = a[start];
        a[start] = temp;
        return end - 1;
    } else if (start == end) {
        return start;
    } else {
        throw new Error(`rotate invalid indexes start=${start} end=${end}`);
    }
}

function partition(a: number[], lo: number, hi: number): number {
    const pivot: number = a[hi - 1];
    let i = lo, j = hi - 1;
    while (i < j) {
        while (a[i] < pivot) {
            i++;
        }
        j = rotate(a, i, j);
    }
    logStrings.push(`pivot=${pivot} ${JSON.stringify(a.slice(lo, hi))}`);
    return j;
}

function quickSort(a: number[], lo: number = 0, hi: number = a.length) {
    if (hi-lo > 0)  {
        const wall = partition(a, lo, hi);
        quickSort(a, lo, wall);
        quickSort(a, wall + 1, hi);
        logStrings.push(JSON.stringify(a.slice(lo, hi)));
    }
}

let a = [5, 3, 4, 1, 2, 6, 7, 0];
quickSort(a);
document.title = JSON.stringify(a);
document.body.innerText = logStrings.join("\n");
