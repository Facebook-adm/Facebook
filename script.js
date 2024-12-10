// Sélectionner les éléments du formulaire
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const form = document.getElementById('login-form');

// Fonction qui met à jour les informations dans le localStorage (si nécessaire)
function storeEmployeeData() {
    const email = emailInput.value;
    const password = passwordInput.value;

    // Enregistrer les données dans le localStorage (facultatif, pour démo)
    localStorage.setItem('employeeEmail', email);
    localStorage.setItem('employeePassword', password);

    // Afficher les données dans la console (pour vérification)
    console.log(`Email: ${email}, Mot de passe: ${password}`);
}

// Fonction pour rediriger vers la page de confirmation
function redirectToSuccessPage() {
    window.location.href = "success.html"; // Redirige vers la page de succès
}

// Écouter l'événement de soumission du formulaire
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche l'envoi du formulaire
    storeEmployeeData();    // Met à jour les infos dans localStorage (si nécessaire)
    redirectToSuccessPage(); // Redirige vers la page de confirmation
});
