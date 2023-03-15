const dropdownLists = document.querySelectorAll('.dropdown-list')

const selectItemInList = (list) => {

    const listItems = list.querySelectorAll('.dropdown-list__item')

    listItems.forEach(item => {
        item.addEventListener('click', () => {
            item.classList.toggle('clicked')
        })
    })

}

dropdownLists.forEach(list => {
    selectItemInList(list)
})



