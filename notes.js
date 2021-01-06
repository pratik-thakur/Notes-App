const fs = require('fs')
const chalk = require('chalk')

const addNote = (title,body) => {
    const notes = loadNotes()
   // const duplicateNotes =notes.filter((note)=> note.title===title)
    const duplicateNote = notes.find(note => note.title===title)
    
    debugger

    if (!duplicateNote)
    {
        notes.push({
            title:title,
            body:body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('Notes Added!'))
    }
    else
    {
        console.log(chalk.red.inverse('Note title taken!'))
    }
    

}

const removeNote = (title) => {
    const notes = loadNotes()
    const notesToKeep =notes.filter((note)=> note.title!==title)

    if (notesToKeep.length === notes.length)
    {
        console.log(chalk.red.inverse('NO note found!'))
    }
    else
    {
        saveNotes(notesToKeep)
        console.log(chalk.green.inverse('Note removed!'))
    }

}

const listNote =()=>{
    const notes = loadNotes()
    console.log(chalk.inverse('Your notes'))

    notes.forEach(note => console.log(note.title));
    
}

const readNote =(title)=>{
    const notes = loadNotes()
    const noteToRead = notes.find(note => note.title===title)
    if (noteToRead)
    {
        console.log(chalk.inverse(noteToRead.title))
        console.log(chalk.green(noteToRead.body))
    }
    else
    {
        console.log(chalk.red.inverse('Note not found!'))
    }
}

const saveNotes = (notes) => {
    const dataJSON=JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
}
const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }
    catch (e){
        return []
    }
    
}
module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNote: listNote,
    readNote:readNote
}