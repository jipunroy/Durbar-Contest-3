// Classify Password Strength

function classifyPasswordStrength(password) {
  const length = password.length;
  const hasLowercase = /[a-z]/.test(password);
  const hasUppercase = /[A-Z]/.test(password);
  const hasNumbers = /\d/.test(password);
  const hasSpecialChars = /[!@#$%^&*()-+]/.test(password);

  let score = 0;

  if (length >= 8) score++;
  if (hasLowercase) score++;
  if (hasUppercase) score++;
  if (hasNumbers) score++;
  if (hasSpecialChars) score++;

  if (score === 5) {
    return "Very Strong";
  } else if (score >= 3) {
    return "Strong";
  } else if (score >= 2) {
    return "Medium";
  } else {
    return "Weak";
  }
}