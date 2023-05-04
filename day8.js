// Lấy các phần tử HTML cần sử dụng
const form = document.querySelector('form');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('Confirm password');

// Xử lý sự kiện khi gửi form
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Ngăn chặn form gửi đi

  // Kiểm tra các điều kiện nhập liệu
  if (emailInput.value.trim() === '') {
    showError(emailInput, 'Email is required');
  } else if (!isValidEmail(emailInput.value)) {
    showError(emailInput, 'Invalid email format');
  } else {
    showSuccess(emailInput);
  }

  if (passwordInput.value.trim() === '') {
    showError(passwordInput, 'Password is required');
  } else {
    showSuccess(passwordInput);
  }

  if (confirmPasswordInput.value.trim() === '') {
    showError(confirmPasswordInput, 'Confirm Password is required');
  } else if (passwordInput.value !== confirmPasswordInput.value) {
    showError(confirmPasswordInput, 'Passwords do not match');
  } else {
    showSuccess(confirmPasswordInput);
  }

  // Kiểm tra các điều kiện khác (nếu cần)

  // Nếu không có lỗi, có thể gửi form
  if (form.querySelectorAll('.error').length === 0) {
    form.submit();
  }
});

// Hàm hiển thị thông báo lỗi
function showError(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');
  small.innerText = message;
  formControl.className = 'inputbox error';
}

// Hàm hiển thị thông báo thành công
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = 'inputbox success';
}

// Hàm kiểm tra định dạng email
function isValidEmail(email) {
  // Đây chỉ là một ví dụ đơn giản, không phải là kiểm tra email chính xác nhất
  const emailRegex = /\S+@\S+\.\S+/;
  return emailRegex.test(email);
}
