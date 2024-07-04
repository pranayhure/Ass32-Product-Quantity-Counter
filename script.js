function ChangeNumber(action) {
    const no = document.getElementById("numberTxt")
    let num = parseInt(no.innerText)



    if (num == 1 && action == "Dec") {
        alert(`You Reach Mininum Product Quantity ${num}`)
        return
    }
    else if (num == 5 && action == "Add") {
        alert(`You Reach Maximum Product Quantity ${num}`)
        return
    }

    no.innerText = action=="Add" ? ++num:--num
}