function FilterIntegerValueToReal(valor: number) {
    return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

export default FilterIntegerValueToReal