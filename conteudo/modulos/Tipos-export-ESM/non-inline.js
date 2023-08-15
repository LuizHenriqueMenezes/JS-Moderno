function group(){
    console.log('Export nomeado não-inline (agrupado)')
}

function exportDefault(){
    console.log('Export nomeado não-inline')
}

export {group}

export default exportDefault