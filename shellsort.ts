let logText: string[] = [];
let temp: number = null;

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

function shiftRight(a: number[], index: number, distance: number) {
    console.log(`${JSON.stringify(a)} сдвиг вправо на расстояниие ${distance} элемента с индексом ${index} равного ${a[index]}`);
    a[index + distance] = a[index];
    a[index] = null;
    console.log(`${JSON.stringify(a)} после сдвига вправо на расстояниие ${distance} элемента с индексом ${index} равного ${a[index]}`);
    log(a);
}

function insertionSort(a: number[], start: number = 0, distance: number = 1) {
    console.log(`insertionSort start=${start} distance=${distance}`);
    const n = a.length;
    for (let i = start + distance; i < n; i += distance) {
        const element = a[i];
        let shifted = false;
        let j = i;
        while (a[j-distance] > element && j > 0) {
                if (!shifted) {
                    shifted = true;
                    save(a, i);
                }
                shiftRight(a, j-distance, distance);
            j -= distance;
        }
        if (shifted) {
            restore(a, j);
        }
    }
}

function shellSort(a: number[]) {
    const n = a.length;
    for (let distance = n / 2; distance > 0; distance = Math.floor(distance/2)) {
        for (let start = 0; start < distance; start++) {
            insertionSort(a, start, distance);
        }
    }
}

const a = [5, 3, 4, 1, 2, 6];
shellSort(a);
document.title = JSON.stringify(a);
document.body.innerText = logText.join('\n');
