import React, { useState } from 'react';
import CreateArea from './components/CreateArea';
import Footer from './components/Footer';
import Header from './components/Header';
import Note from './components/Note';

const App = () => {
  const [notes, setNotes] = useState([]);

  const addNote = (newNote) => {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    })
  }
  const deleteNote = (id) => {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      })
    })
  }
  return (
    <>
      <Header />
      <CreateArea onAdd={addNote} />
      {
        notes.map((noteItem, index) => {
          return (
            <Note
              key={index}
              id={index}
              title={noteItem.title}
              content={noteItem.content}
              onDelete={deleteNote}
            />
          )
        })
      }
      <Footer />
    </>
  )
}

export default App;