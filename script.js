document.getElementById('expenseForm').addEventListener('submit', function(e) {
    e.preventDefault();
    var expenseType = document.getElementById('expenseType').value;
    var expenseAmount = document.getElementById('expenseAmount').value;

    if (expenseType && expenseAmount) {
        var expenseList = document.getElementById('expenseList');
        var expenseItem = document.createElement('div');
        expenseItem.className = 'expense-item';
        expenseItem.innerHTML = '<strong>' + expenseType + ':</strong> ₹' + expenseAmount;
        expenseList.appendChild(expenseItem);

        document.getElementById('expenseType').value = '';
        document.getElementById('expenseAmount').value = '';
    }
});
