function newImage (assets, left, bottom) {
    let character = document.createElement('img')
    character.src = assets
    character.style.position = 'fixed'
    character.style.left = left + 'px'
    character.style.bottom = bottom + 'px'
    document.body.append(character)
    return character
}

newImage('assets/green-character.gif', 100, 100)
newImage('assets/pine-tree.png', 450, 200)
newImage('assets/tree.png', 200, 300)
newImage('assets/pillar.png', 350, 100)
newImage('assets/crate.png', 150, 200)
newImage('assets/well.png', 500, 425)

//review/study adding newItem 

let sword = document.createElement ('img')
sword.src = 'assets/sword.png'
sword.position = 'fixed'
sword.left = '500px'
sword.bottom = '405px'.document.body.append(sword)

sword.addEventListener('click',function(){
    sword.remove()
})

function newItem(assets, left, bottom){
    let object = newImage(assets, left, bottom)

    object.addEventListener('dblclick', () => {
        object.remove()
    })
}

newItem('assets/sword.png', 500, 405)
newItem('assets/shield.png', 165, 185)
newItem('assets/staff.png', 600, 100)
