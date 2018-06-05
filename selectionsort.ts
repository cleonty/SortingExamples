function selectionSort(a: any[]): any[] {
    const n = a.length;
    for (let i = 0; i < n-1; i++) {
        let small = i;
        for (let j = i+1; j < n; j++) {
            if (a[j] < a[small]) {
                small = j;
            }
        }
        const temp = a[small];
        a[small] = a[i];
        a[i] = temp;
    }
    return a;
}

const a = [5, 3, 4, 1, 2];
document.body.innerText = JSON.stringify(selectionSort(a));
