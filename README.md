# My_Notes_App
My first GitHub rep... JS Notes App

# My Notes App

My Notes is a simple web application that allows you to create and manage your notes. With this app, you can easily jot down your thoughts, ideas, or any important information. It provides a user-friendly interface to create, view, and delete notes.

## Live Preview

You can try out the live version of the My Notes app by clicking on the following link: [My Notes Live Preview](https://zoirethl.github.io/My_Notes_App/)

## Screenshots
The app is in spanish... oops!
![My Notes Screenshot](Nov-07-2023%2015-34-31.gif)

## How to Use

1. **Create a New Note:**

   - Enter your note text in the input field.
   - Click the "Create Note" button to add a new note.

2. **View Notes:**

   - Your notes will be displayed in a list.
   - Each note includes the note text, creation date, and a "Delete" button.

3. **Delete a Note:**

   - To remove a note, click the "Delete" button associated with that note.

## Technologies Used

- HTML
- CSS
- JavaScript

## How to Run Locally

1. Clone this repository to your local machine.

2. Open the `index.html` file in a web browser.

## Features

- Create and save notes with text and a creation date.
- Easily delete notes with a single click.
- User-friendly and responsive design.

## Planned Features

- Change notes color.
- Save notes in local storage.

## Sample Code

Here's a brief sample of the JavaScript code that powers the My Notes app:

```javascript
// Array to store notes
let notas = [];

// Function to create a new note
function crearNota() {
    // Retrieve note text from the input field
    const noteText = document.getElementById("noteText").value;

    if (noteText.trim() !== "") {
        // Create a new note object
        const nuevaNota = {
            texto: noteText,
            date: new Date().toLocalDateString(),
            id: Date.now()
        };

        // Add the note to the array
        notas.push(nuevaNota);

        // Clear the input field
        document.getElementById("noteText").value = "";

        // Update the list of notes
        actualizarListaNotas();
    }
}

// Function to delete a note
function borrarNota(id) {
    // Filter notes to exclude the one with the provided ID
    notas = notas.filter(nota => nota.id !== id);

    // Update the list of notes
    actualizarListaNotas();
}

// Function to update the list of notes in the interface
function actualizarListaNotas() {
    const noteList = document.getElementById("noteList");
    // Rest of the code to update the list...
}
```

Feel free to use and customize this app for your note-taking needs. If you have any questions or need further assistance, please don't hesitate to ask.