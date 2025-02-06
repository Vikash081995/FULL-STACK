import java.util.Scanner;

public class ForLoopExample1 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Enter how many time you want to print Hello World");
        int max = scanner.nextInt();

        for (int i = 0; i < max; i++) {

            System.out.println("Hello World");

        }
        scanner.close();
    }
}
