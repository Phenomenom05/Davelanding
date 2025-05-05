// scripts/firebase.js

// Firebase config (replace with your own if needed)
const firebaseConfig = {
  apiKey: "AIzaSyAvuCWhQ1nt0E_Tl2sS0PM8zsj0kodAi3A",
  authDomain: "landing-35a20.firebaseapp.com",
  projectId: "landing-35a20",
  storageBucket: "landing-35a20.appspot.com",  // Fixed typo here
  messagingSenderId: "660686785983",
  appId: "1:660686785983:web:f18de96e9a28349307250a",
  measurementId: "G-Q97JWR2S00"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Firestore
const db = firebase.firestore();

// Attach function to global window so HTML can access it
window.submitEmail = async function () {
  const email = document.getElementById("email").value;
  const genre = document.getElementById("genre").value;
  const mood = document.getElementById("mood").value;

  if (!email || !genre || !mood) {
    alert("Please fill in all fields");
    return;
  }

  try {
    await db.collection("waitlist").add({
      email,
      genre,
      mood,
      timestamp: new Date()
    });
    alert("You're on the list! 🚀");
    document.getElementById("email").value = "";
  } catch (error) {
    console.error("Error saving email:", error);
    alert("Something went wrong. Please try again.");
  }
};
