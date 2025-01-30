import java.util.Scanner;

public class DoWhile {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int number = 0;
        do {
            System.out.println("Enter a number between 1 and 10:");
            number = sc.nextInt();
        } while (number < 1 || number > 10);
        System.out.println("You have entered: " + number);
        sc.close();
    }

}
