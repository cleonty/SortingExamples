const logStrings: string[] = [];

function swap(a: number[], i, j: number) {
    const temp = a[i];
    a[i] = a[j];
    a[j] = temp;
}

function bubbleUp(a: number[], i: number) {
    const parentI = Math.floor((i - 1) / 2);
    if (i > 0 && a[i] > a[parentI]) {
        swap(a, i, parentI);
        bubbleUp(a, parentI);
    }
}

function bubbleDown(a: number[], i: number, len: number = a.length) {
    let child = 2 * i + 1;
    if (child < len - 1 && a[child + 1] > a[child]) {
        child++;
    }
    if (child <= len - 1 && a[child] > a[i]) {
        swap(a, i, child);
        bubbleDown(a, child, len);
    }
}

function insert(a: number[], x: number) {
    a.push(x);
    bubbleUp(a, a.length - 1);
}

function deleteMax(a: number[], len: number): number {
    const max = a[0];
    swap(a, 0, len - 1);
    len--;
    bubbleDown(a, 0, len);
    return len;
}

function heapify(a: number[]) {
    const n = a.length;
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        bubbleDown(a, i);
    }
}

function heapSort(a: number[]) {
    heapify(a);
    logStrings.push(JSON.stringify(a));
    let i = a.length;
    while (i > 0) {
        i = deleteMax(a, i);
        logStrings.push(JSON.stringify(a));
    }
}

let a = [5, 3, 4, 1, 2, 6, 7, 0, 1];
heapSort(a);
document.title = JSON.stringify(a);
document.body.innerText = logStrings.join("\n");
