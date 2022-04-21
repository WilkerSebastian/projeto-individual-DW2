function deletar(id) {
    
    if (confirm(`Vcê tem certeza que deseja excluir o componente de id: ${id}` )) {
        
        window.location.href = `/deletar/${id}`;

    }

}