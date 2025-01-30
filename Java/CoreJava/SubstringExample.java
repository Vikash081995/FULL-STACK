import java.util.Scanner;

public class SubstringExample {
    public static void main(String[] args) {
        // .Substring() method is used to extract a substring from a string.

        Scanner scanner = new Scanner(System.in);

        System.out.println("Enter a string:");
        String email;
        String username;
        String domain;

        email = scanner.nextLine();

        if (email.contains("@")) {
            username = email.substring(0, email.indexOf('@'));
            domain = email.substring(email.indexOf('@') + 1);
            System.out.println("Username: " + username);
            System.out.println("Domain: " + domain);

        } else {
            System.out.println("Invalid email address.");
        }
        scanner.close();
    }
}