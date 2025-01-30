import java.util.Scanner;

public class LogicalScanner {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String username;

        System.out.println("Enter your username: ");
        username = scanner.nextLine();

        if (username.length() < 4 || username.length() > 10) {
            System.out.println("Username must be between 4 and 10 characters");
        } else if (username.contains("") || username.contains("_")) {
            System.out.println("Username cannot contain spaces");
        } else {
            System.out.println("Username is valid");
        }
        scanner.close();
    }

}
