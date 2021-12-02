function factorial(n) {
    // Write your code here
    if (n == 1) return 1;
    return factorial(n-1) * n;
}