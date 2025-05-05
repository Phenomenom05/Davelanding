// Replace with your Firebase project config
const firebaseConfig = {
  apiKey: "AIzaSyAvuCWhQ1nt0E_Tl2sS0PM8zsj0kodAi3A",
  authDomain: "landing-35a20.firebaseapp.com",
  projectId: "landing-35a20",
  storageBucket: "landing-35a20.firebasestorage.app",
  messagingSenderId: "660686785983",
  appId: "1:660686785983:web:f18de96e9a28349307250a",
  measurementId: "G-Q97JWR2S00"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

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
    alert("Error saving your info. Try again.");
  }
};
