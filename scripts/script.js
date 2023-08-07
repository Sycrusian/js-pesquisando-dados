function procuraSobremesa(valorDoInput) {
    /* Desenvolva sua lógica a partir aqui */
    const searchResult = listaDeSobremesas.filter(sobremesa => sobremesa.nome.toLowerCase().includes(valorDoInput.toLowerCase()));
    return searchResult; /* É necessário retornar uma lista de produtos */
}