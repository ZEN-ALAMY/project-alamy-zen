const fs = require("fs");
// const DUMMY = [
//   {
//     id: "1",
//     title: "onam",
//     date: "08/09/2022",
//     flag: "important",
//   },
// ];

const loadNotes = function () {
  try {
    const getnote = fs.readFileSync("notes.json");
    //console.log(getnote);
    const dataBuffer = getnote.toString();
    //console.log(dataBuffer);
    const noteBuffer = JSON.parse(dataBuffer);
    //console.log(noteBuffer);
    return noteBuffer;
  } catch (e) {
    return [];
  }
};

const saveNotes = function (loadNote) {
  const dataJSON = JSON.stringify(loadNote);
  fs.writeFileSync("notes.json", dataJSON);
};

const getNotes = function (req, res, next) {
  const loadNote = loadNotes();
  if (!loadNote) {
    res.status(404).json({ message: "No notes are avaliable" });
  } else {
    //console.log(JSON.stringify(loadNote));
    //console.log(b);
    res.json(loadNote);
  }
};

const addNotes = function (req, res, next) {
  console.log("reached");
  const { title, date, relevance } = req.body;
  console.log(title, date, relevance);
  const newNote = {
    title,
    date,
    relevance,
  };
  const loadNote = loadNotes();
  const duplicateNote = loadNote.filter(function (note) {
    return note.title === title;
  });
  if (duplicateNote.length === 0) {
    loadNote.push({
      title,
      date,
      relevance,
    });
    saveNotes(loadNote);
  }
};

const removeNotes = function (req, res, next) {
  console.log("reached");
  const { title } = req.body;
  console.log(title);

  const loadNote = loadNotes();
  const index = loadNote.findIndex((element) => {
    return element.title === title;
  });
  console.log(index);
  loadNote.splice(index, 1);
  saveNotes(loadNote);
};

module.exports = { getNotes, addNotes, removeNotes };
