export function formatDateFromString(str: string): string {
    const buf = str.slice(0, 19).split('T');
    buf[0] = buf[0].split('-').reverse().join('.');
    return `${buf[0]} ${buf[1]}`;
}
