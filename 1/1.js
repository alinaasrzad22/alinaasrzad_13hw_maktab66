let newRow = `<tr><td><button type="button" class="btn btn-danger" id="delete">
    <i class="bi bi-trash-fill me-1"></i>Delete</button>
    <button type="button" class="btn btn-primary" id="clone"><i class="bi bi-stickies-fill me-1"></i>Clone</button></td><td><input type="number" name="number" class="mt-1"></td><td><input type="text" name="type" class="mt-1"></td><td><form class="mt-1">
    <input type="radio" id="new" name="status">
    <label for="new" class="me-2">New</label>
    <input type="radio" id="inProgress" name="status">
    <label for="inProgress" class="me-2">In progress</label>
    <input type="radio" id="confirmed" name="status">
    <label for="confirmed" class="me-2">Confirmed</label></form></td></tr>`
    
let numAll = $('.allNum').children('span').text()
let confirmedNumber = 0
let isHide = false

$(document).ready(function() {
    addRow()
    deleteRow()
    cloneRow()
    handleStatusRow()
})

function addRow() {
    $('#addRow').click(function() {
        $('.tBody').prepend(newRow)
        handleNumber('addRow')
        deleteRow()
        cloneRow()
        handleStatusRow() 
    })
}

function deleteRow() {
    $('#delete').click(function() {
        $(this).closest('tr').remove()
        handleNumber('delete', $(this))
    })
}

function cloneRow() {
    $('#clone').click(function() {
        $(this).closest('tr').after($(this).closest('tr').clone(true))
        handleNumber('clone', $(this))
    })
}

function handleStatusRow() {
    let isConfirmedClickable = true
    $('#confirmed').click(function() {
        disabled($(this), true)
        if (isConfirmedClickable) {
            $('.notConfirmedNum').children('span').text(numAll - (++confirmedNumber))
            isConfirmedClickable = false
        }
    })
    $('#new').click(function() {
        disabled($(this), false)
        isConfirmedClickable = true
    })
    $('#inProgress').click(function() {
        disabled($(this), false)
        isConfirmedClickable = true
    })
}

function disabled(thisItem, confirmed) {
    if (!confirmed && 
        thisItem.closest('tr').find('td input[name = type]').prop('disabled') == true){
            $('.notConfirmedNum').children('span').text(numAll - (--confirmedNumber))
        }
    thisItem.closest('tr').find('td input[name = type]').prop('disabled', confirmed)
    thisItem.closest('tr').find('td input[name = number]').prop('disabled', confirmed)
}

function handleNumber(status, thisItem) {
    if (status == 'addRow') {
        $('.allNum').children('span').text(++numAll)
        $('.notConfirmedNum').children('span').text(numAll - confirmedNumber)   
    }
    else {
        $('.allNum').children('span').text(status == 'delete' ? --numAll : ++numAll)
        if (thisItem.closest('tr').find('input[id = confirmed]').prop('checked') == true) {
            status == 'delete' ? confirmedNumber -- : confirmedNumber ++
        }
        else {
            $('.notConfirmedNum').children('span').text(numAll - confirmedNumber)
        }
    }
}