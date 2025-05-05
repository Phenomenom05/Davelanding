// scripts/firebase.js

// Firebase config (replace with your own if needed)
const firebaseConfig = {
  apiKey: "AIzaSyAvuCWhQ1nt0E_Tl2sS0PM8zsj0kodAi3A",
  authDomain: "landing-35a20.firebaseapp.com",
  projectId: "landing-35a20",
  storageBucket: "landing-35a20.appspot.com",
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
  const emailInput = document.getElementById("email");
  const genre = document.getElementById("genre").value;
  const mood = document.getElementById("mood").value;
  const formMessage = document.getElementById("formMessage");
  const submitBtn = document.getElementById("submitBtn");

  const email = emailInput.value.trim();

  if (!email || !genre || !mood) {
    formMessage.textContent = "❌ Please fill in all fields.";
    formMessage.className = "text-red-500 mt-4";
    return;
  }

  submitBtn.disabled = true;
  submitBtn.textContent = "Submitting...";

  try {
    await db.collection("waitlist").add({
      email,
      genre,
      mood,
      timestamp: new Date()
    });

    formMessage.textContent = "✅ You're on the list! 🚀";
    formMessage.className = "text-green-500 mt-4";
    emailInput.value = "";
    document.getElementById("genre").value = "";
    document.getElementById("mood").value = "";
  } catch (error) {
    console.error("Error saving email:", error);
    formMessage.textContent = "⚠️ Something went wrong. Please try again.";
    formMessage.className = "text-yellow-500 mt-4";
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = "🎟️ Join the Waitlist";
  }
};
