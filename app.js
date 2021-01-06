
const yargs = require('yargs')
const notes = require('./notes')

//create add command
yargs.command({
    command:'add',
    describe:'Add a new note',
    builder:{
        title:{
            describe:'Note Title',
            demandOption:true,
            type:'string'
        },
        body:{
            describe:'Note Body',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        notes.addNote(argv.title,argv.body)
    }

})

//create remove command
yargs.command({
    command:'remove',
    describe:'Remove a note',
    builder:{
        title:{
            describe:'Note Title',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title)
    }
})

//create a list command
yargs.command({
    command:'list',
    describe:'List all the notes',
    handler(){
        notes.listNote()
    }
})

//create a read command
yargs.command({
    command:'read',
    describe:'Read a note',
    builder:{
        title:{
            describe:'Note Title',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        notes.readNote(argv.title)
    }
})

yargs.parse()
//console.log(process.argv)
//console.log(yargs.argv)
