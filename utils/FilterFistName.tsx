export function FilterFistName(frase: string | undefined) {
    if (frase) {
        const partes = frase.split(' ', 1);
        return partes[0];
    }
}