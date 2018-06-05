let logText: string[] = [];
var temp: number = null;

function log(a: number[]):void {
    logText.push(`${JSON.stringify(a)} ${temp}`);
}


function save(a: number[], index: number) {
    temp = a[index];
    a[index] = null;
    log(a);
}

function restore(a: number[], index: number) {
    console.log(`${JSON.stringify(a)} собираюсь воостановить элемент с индексом ${index} в ${temp}`);
    a[index] = temp;
    temp = null;
    console.log(`${JSON.stringify(a)} после восстановления элемента с индексом ${index}`);
    log(a);
}

function shiftRight(a: number[], index: number) {
    console.log(`${JSON.stringify(a)} сдвиг вправо элемента с индексом ${index} равного ${a[index]}`);
    a[index + 1] = a[index];
    a[index] = null;
    console.log(`${JSON.stringify(a)} после сдвига вправо элемента с индексом ${index} равного ${a[index]}`);
    log(a);
}

function insertionSort(a: number[]) {
    const n = a.length;
    for (let i = 1; i < n; i++) {
        const element = a[i];
        let shifted = false;
        let j = i;
        while (a[j-1] > element && j > 0) {
                if (!shifted) {
                    shifted = true;
                    save(a, i);
                }
                shiftRight(a, j-1);
            j--;
        }
        if (shifted) {
            restore(a, j);
        }
    }
}

const a = [5, 3, 4, 1, 2];
insertionSort(a);
document.title = JSON.stringify(a);
document.body.innerText = logText.join('\n');
