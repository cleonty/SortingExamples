function bubbleSort(a: number[]):number {
    const n = a.length;
    let totalSwapCount = 0;
    for (; ;)   {
        let swapCount = 0;
        for (let i = 0; i < n - 1; i++) {
            if (a[i] > a[i + 1]) {
                const temp = a[i];
                a[i] = a[i + 1];
                a[i + 1] = temp;
                swapCount++;
            }
        }
        totalSwapCount += swapCount;
        if (swapCount == 0) { 
            break;
        }
    }
    return totalSwapCount;
}
const a = [44, 33, 22, 11, 5, 3, 1];
const swapCount = bubbleSort(a);
document.title =  document.body.innerText = JSON.stringify(a) + swapCount;
