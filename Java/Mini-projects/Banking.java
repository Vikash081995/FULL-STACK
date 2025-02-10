import java.util.Scanner;

public class Banking {
    static Scanner scanner = new Scanner(System.in);

    public static void main(String[] args) {

        System.out.println("Welcome to the banking program!");
        double balance = 0;
        boolean isRunning = true;
        int choice;

        while (isRunning) {
            System.out.println("1.Show balance");
            System.out.println("2.Deposit");
            System.out.println("3.Withdraw");
            System.out.println("4.Exit");
            System.out.println("Enter your choice");
            choice = scanner.nextInt();

            switch (choice) {
                case 1 -> showBalance(balance);
                case 2 -> balance += deposit(balance);
                case 3 -> balance -= withdrawal(balance);
                case 4 -> isRunning = false;
                default -> System.out.println("Invalid choice");
            }

        }
        scanner.close();
    }

    static void showBalance(double balance) {
        System.out.println("Your balance is: $%.2f\n " + balance);
    }

    static double deposit(double balance) {
        System.out.println("Enter the amount to deposit");
        double amount = scanner.nextDouble();
        if (amount <= 0) {
            System.out.println("Invalid amount");
            return 0;
        } else {
            return amount;
        }
    }

    static double withdrawal(double balance) {
        System.out.println("Enter the amount to withdraw");
        double amount = scanner.nextDouble();
        if (amount > balance) {
            System.out.println("Insufficient funds");
            return 0;
        } else if (amount <= 0) {
            System.out.println("Invalid amount");
            return 0;
        } else {
            return amount;
        }
    }
}